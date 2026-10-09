#!/usr/bin/env node
// Lee los repos listados en proyectos.yaml y genera:
//   src/data/proyectos.json   → lo que muestra el sitio (/proyectos y la home)
//   public/proyectos/<slug>/  → logo e imágenes optimizadas (webp)
//   public/promo-feed.json    → ideas de contenido para Promo Studio (un caso de éxito por proyecto)
//
// Uso: npm run proyectos            (todos)
//      npm run proyectos -- consultorio mi-tenis   (solo esos slugs)
// Repos de GitHub privados: exportar GITHUB_TOKEN.

import { existsSync, readFileSync } from "node:fs";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { parse } from "yaml";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_JSON = path.join(ROOT, "src/data/proyectos.json");
const OUT_FEED = path.join(ROOT, "public/promo-feed.json");
const OUT_IMG = path.join(ROOT, "public/proyectos");
const MAX_IMAGENES = 6;

const CAPAS = ["marca", "presencia", "procesos", "gestion", "datos", "ia"];
const PALETA_DEFAULT = ["#c2410c", "#221a15"];

const LOGOS = [
  "public/brand/logo.png",
  "public/brand/logo.svg",
  "public/brand/logo-dark.png",
  "public/logo.svg",
  "public/logo.png",
  "src/assets/brand/logo.png",
  "src/assets/brand/logo.svg",
  "public/favicon.svg",
  "public/icon.svg",
  "app/public/favicon.svg",
  "apps/web/public/icon.svg",
  "web/public/logo.png",
];
const PACKAGES = ["package.json", "app/package.json", "web/package.json", "apps/web/package.json", "apps/api/package.json"];
const CSS = ["src/app/globals.css", "src/styles/global.css", "src/styles/globals.css", "app/src/styles.css", "src/index.css"];

/** Dependencia → nombre visible del stack. */
const STACK = [
  [/^next$/, "Next.js"],
  [/^astro$/, "Astro"],
  [/^react$/, "React"],
  [/^vue$/, "Vue"],
  [/^svelte$/, "Svelte"],
  [/^vite$/, "Vite"],
  [/^hono$|^express$|^fastify$/, "API Node.js"],
  [/^drizzle-orm$|^pg$|^postgres$|^@neondatabase/, "PostgreSQL"],
  [/^@electric-sql\/pglite$/, "PGlite"],
  [/^@supabase\/supabase-js$/, "Supabase"],
  [/^tailwindcss$/, "Tailwind CSS"],
  [/^three$|^@react-three\/fiber$/, "3D (Three.js)"],
  [/^recharts$|^chart\.js$/, "Gráficos"],
  [/^openai$|^@anthropic-ai\/sdk$|^@openrouter/, "IA"],
  [/^vite-plugin-pwa$|^workbox/, "PWA"],
];

// ---------- fuentes ----------

function fuente(entry) {
  if (entry.path) {
    const base = path.resolve(ROOT, entry.path);
    if (!existsSync(base)) throw new Error(`no existe la carpeta ${base}`);
    return {
      id: entry.path,
      async leer(rel) {
        const f = path.join(base, rel);
        return existsSync(f) ? readFile(f) : null;
      },
    };
  }
  if (entry.repo) {
    const rama = entry.rama ?? "HEAD";
    const headers = process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {};
    return {
      id: entry.repo,
      async leer(rel) {
        const res = await fetch(`https://raw.githubusercontent.com/${entry.repo}/${rama}/${rel}`, { headers });
        return res.ok ? Buffer.from(await res.arrayBuffer()) : null;
      },
    };
  }
  throw new Error("cada proyecto necesita `path` o `repo`");
}

async function leerTexto(src, rel) {
  const b = await src.leer(rel);
  return b ? b.toString("utf8") : null;
}

async function primero(src, rutas) {
  for (const rel of rutas) {
    const b = await src.leer(rel);
    if (b) return { rel, b };
  }
  return null;
}

// ---------- README ----------

const limpiarMd = (s) =>
  s
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/&mdash;/g, "—")
    .replace(/&[a-z]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

function leerReadme(md) {
  if (!md) return {};
  const lineas = md.split("\n");
  const titulo = lineas.find((l) => /^#\s/.test(l))?.replace(/^#\s+/, "").trim();

  let parrafo = "";
  let enCodigo = false;
  for (const l of lineas) {
    if (l.startsWith("```")) enCodigo = !enCodigo;
    if (enCodigo || !l.trim() || /^(#|```|-|\*|\||!|>|<|\d+\.)/.test(l.trim())) {
      if (parrafo) break;
      continue;
    }
    parrafo += ` ${l.trim()}`;
  }

  // Viñetas de la primera sección que hable de funciones.
  const funciones = [];
  let enSeccion = false;
  for (const l of lineas) {
    if (/^##\s/.test(l)) {
      if (enSeccion && funciones.length) break;
      enSeccion = /secciones|funciones|caracter|features|qué hace|módulos/i.test(l);
      continue;
    }
    if (enSeccion && /^[-*]\s/.test(l)) {
      const item = limpiarMd(l.replace(/^[-*]\s+/, ""));
      // "Obras: tipo Opción 1 (...)" → nos quedamos con la primera oración.
      funciones.push(item.split(/(?<=\.)\s/)[0].replace(/\.$/, "").slice(0, 160));
    }
  }
  return { titulo, parrafo: limpiarMd(parrafo), funciones: funciones.slice(0, 8) };
}

// ---------- package.json / CSS ----------

async function leerStack(src) {
  const deps = new Set();
  let descripcion;
  for (const rel of PACKAGES) {
    const t = await leerTexto(src, rel);
    if (!t) continue;
    try {
      const pkg = JSON.parse(t);
      descripcion ??= pkg.description;
      for (const d of Object.keys({ ...pkg.dependencies, ...pkg.devDependencies })) deps.add(d);
    } catch {}
  }
  const stack = [];
  for (const [re, nombre] of STACK) if ([...deps].some((d) => re.test(d)) && !stack.includes(nombre)) stack.push(nombre);
  return { stack, descripcion };
}

async function leerColores(src) {
  for (const rel of CSS) {
    const t = await leerTexto(src, rel);
    if (!t) continue;
    const hex = [...t.matchAll(/--(?:color-)?(?:primary|brand|accent|marca)\s*:\s*(#[0-9a-f]{6})\b/gi)].map((m) => m[1].toLowerCase());
    if (hex.length) return [...new Set(hex)].slice(0, 3);
  }
  return null;
}

// ---------- imágenes ----------

async function guardarImagen(buf, destino, ancho) {
  await sharp(buf).resize({ width: ancho, withoutEnlargement: true }).webp({ quality: 80 }).toFile(destino);
}

async function procesarImagenes(src, slug, rutas, logoRel) {
  const dir = path.join(OUT_IMG, slug);
  await rm(dir, { recursive: true, force: true });
  await mkdir(dir, { recursive: true });

  let logo = null;
  const l = logoRel ? { rel: logoRel, b: await src.leer(logoRel) } : await primero(src, LOGOS);
  if (l?.b) {
    if (l.rel.endsWith(".svg")) {
      await writeFile(path.join(dir, "logo.svg"), l.b);
      logo = `/proyectos/${slug}/logo.svg`;
    } else {
      await guardarImagen(l.b, path.join(dir, "logo.webp"), 320);
      logo = `/proyectos/${slug}/logo.webp`;
    }
  }

  const imagenes = [];
  for (const rel of rutas.slice(0, MAX_IMAGENES)) {
    const b = /^https?:/.test(rel) ? await fetch(rel).then((r) => (r.ok ? r.arrayBuffer().then(Buffer.from) : null)) : await src.leer(rel);
    if (!b) {
      console.warn(`    ! no se encontró la imagen ${rel}`);
      continue;
    }
    const nombre = `${imagenes.length + 1}.webp`;
    const meta = await sharp(b).metadata();
    await guardarImagen(b, path.join(dir, nombre), 900);
    const w = Math.min(meta.width ?? 900, 900);
    imagenes.push({ src: `/proyectos/${slug}/${nombre}`, ancho: w, alto: Math.round((w * (meta.height ?? 900)) / (meta.width ?? 900)), vertical: (meta.height ?? 0) > (meta.width ?? 1) });
  }
  return { logo, imagenes };
}

// ---------- armado ----------

const slugify = (s) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** En YAML, "texto: más texto" sin comillas se lee como objeto: lo avisamos y lo recuperamos. */
function textos(lista, campo) {
  return lista.map((x) => {
    if (typeof x === "string") return x;
    const [[k, v]] = Object.entries(x);
    console.warn(`    ! ${campo}: poné entre comillas "${k}: ${v}" en proyectos.yaml`);
    return `${k}: ${v}`;
  });
}

async function procesar(entry) {
  const src = fuente(entry);
  const promoTxt = await leerTexto(src, "promo.yaml");
  const promo = promoTxt ? parse(promoTxt) : {};
  const readme = leerReadme(await leerTexto(src, "README.md"));
  const { stack, descripcion: pkgDesc } = await leerStack(src);

  const nombre = entry.nombre ?? promo.name ?? readme.titulo ?? path.basename(entry.path ?? entry.repo);
  const slug = entry.slug ?? slugify(nombre);
  const descripcion = entry.descripcion ?? promo.description ?? readme.parrafo ?? pkgDesc ?? "";
  const tagline = entry.tagline ?? promo.tagline ?? pkgDesc ?? descripcion.split(/(?<=\.)\s/)[0];
  const funciones = textos(entry.funciones ?? promo.features ?? readme.funciones ?? [], "funciones");
  const colores = entry.colores ?? promo.brand?.colors ?? (await leerColores(src)) ?? PALETA_DEFAULT;
  const capas = (entry.capas ?? ["gestion"]).filter((c) => {
    if (CAPAS.includes(c)) return true;
    console.warn(`    ! capa desconocida "${c}" (válidas: ${CAPAS.join(", ")})`);
    return false;
  });

  const { logo, imagenes } = await procesarImagenes(src, slug, entry.imagenes ?? promo.screenshots ?? [], entry.logo ?? promo.brand?.logo);

  const faltan = [!entry.desafio && "desafio", !entry.solucion && "solucion", !entry.mejoras && "mejoras", !imagenes.length && "imagenes"].filter(Boolean);
  if (faltan.length) console.warn(`    · sugerido completar en proyectos.yaml: ${faltan.join(", ")}`);

  return {
    slug,
    nombre,
    url: entry.publicarUrl === false ? null : (entry.url ?? promo.url ?? null),
    tagline,
    descripcion,
    rubro: entry.rubro ?? promo.category ?? "",
    tipo: entry.tipo ?? "",
    capas,
    desafio: entry.desafio ?? "",
    solucion: entry.solucion ?? "",
    funciones,
    mejoras: textos(entry.mejoras ?? [], "mejoras"),
    beneficios: entry.beneficios ?? [],
    stack: entry.stack ?? stack,
    colores,
    logo,
    imagenes,
    orden: entry.orden ?? 99,
    destacado: entry.destacado ?? false,
  };
}

function urlDelSitio() {
  const site = existsSync(path.join(ROOT, "src/site.ts")) ? readFileSync(path.join(ROOT, "src/site.ts"), "utf8") : "";
  return site.match(/url:\s*"([^"]+)"/)?.[1] ?? "";
}

async function main() {
  const filtro = process.argv.slice(2);
  const config = parse(await readFile(path.join(ROOT, "proyectos.yaml"), "utf8"));
  const anteriores = existsSync(OUT_JSON) ? JSON.parse(await readFile(OUT_JSON, "utf8")) : [];

  const resultado = new Map(anteriores.map((p) => [p.slug, p]));
  const slugsConfig = [];
  let errores = 0;

  for (const entry of config.proyectos ?? []) {
    const id = entry.slug ?? entry.path ?? entry.repo;
    if (filtro.length && !filtro.includes(entry.slug)) {
      slugsConfig.push(entry.slug);
      continue;
    }
    console.log(`→ ${id}`);
    try {
      const p = await procesar(entry);
      resultado.set(p.slug, p);
      slugsConfig.push(p.slug);
      console.log(`    ok: ${p.funciones.length} funciones, ${p.imagenes.length} imágenes${p.logo ? ", logo" : ""}`);
    } catch (e) {
      errores++;
      console.error(`    ✗ ${e.message}`);
      if (resultado.has(entry.slug)) slugsConfig.push(entry.slug);
    }
  }

  // Solo quedan los proyectos que siguen en proyectos.yaml.
  const proyectos = [...resultado.values()].filter((p) => slugsConfig.includes(p.slug)).sort((a, b) => a.orden - b.orden);
  await mkdir(path.dirname(OUT_JSON), { recursive: true });
  await writeFile(OUT_JSON, `${JSON.stringify(proyectos, null, 2)}\n`);

  const site = urlDelSitio();
  const feed = {
    items: proyectos.map((p) => ({
      id: `caso-${p.slug}`,
      title: `${p.nombre}: ${p.tagline}`,
      body: [p.desafio, p.solucion].filter(Boolean).join(" "),
      bullets: (p.mejoras.length ? p.mejoras : p.funciones).slice(0, 5),
      pillar: "casos reales",
      url: `${site}/proyectos/${p.slug}`,
      ...(p.imagenes[0] ? { image: `${site}${p.imagenes[0].src}` } : {}),
    })),
  };
  await writeFile(OUT_FEED, `${JSON.stringify(feed, null, 2)}\n`);

  console.log(`\n${proyectos.length} proyectos → src/data/proyectos.json y public/promo-feed.json`);
  if (errores) process.exitCode = 1;
}

main();
