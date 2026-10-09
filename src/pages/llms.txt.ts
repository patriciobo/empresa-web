import type { APIRoute } from "astro";
import { FAQ, PLANES, SERVICIOS } from "../content";
import { CAPA_NOMBRE, PROYECTOS } from "../data";
import { SITE } from "../site";

// Resumen en Markdown para asistentes de IA (https://llmstxt.org).
export const GET: APIRoute = () => {
  const md = [
    `# ${SITE.nombre}`,
    "",
    `> ${SITE.bajada}. ${SITE.slogan} Marca, presencia online, procesos, sistemas de gestión, tableros de datos e IA para emprendedores y pymes de Argentina, por suscripción mensual y sin pago inicial grande.`,
    "",
    `- Sitio: ${SITE.url}`,
    `- Contacto: ${SITE.email}`,
    `- Base: ${SITE.ciudad}, ${SITE.provincia}, Argentina. ${SITE.zona}.`,
    "",
    "## Servicios",
    "",
    ...SERVICIOS.map((s) => `- **${s.titulo}**: ${s.bajada} Incluye: ${s.items.join("; ")}.`),
    "",
    "## Planes (suscripción mensual)",
    "",
    ...PLANES.map((p) => `- **${p.nombre}** (${p.desde === null ? "a medida" : `desde ${p.moneda} ${p.desde}/mes`}): ${p.para} ${p.incluye.join("; ")}.`),
    "",
    "## Proyectos",
    "",
    ...PROYECTOS.flatMap((p) => [
      `### ${p.nombre}`,
      "",
      `${p.rubro}. ${p.tagline}. Tipo: ${p.capas.map((c) => CAPA_NOMBRE[c]).join(", ")}.`,
      p.desafio ? `Desafío: ${p.desafio}` : "",
      `Solución: ${p.solucion || p.descripcion}`,
      p.mejoras.length ? `Mejoras: ${p.mejoras.join("; ")}.` : "",
      `Ficha: ${SITE.url}/proyectos/${p.slug}`,
      "",
    ].filter((l, i, a) => l || a[i - 1])),
    "## Preguntas frecuentes",
    "",
    ...FAQ.flatMap((f) => [`### ${f.p}`, "", f.r, ""]),
  ].join("\n");
  return new Response(md, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
};
