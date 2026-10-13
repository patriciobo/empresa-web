import type { APIRoute } from "astro";
import { FAQ, PLANES, SERVICIOS } from "../content";
import { SITE } from "../site";

// Fuente para Promo Studio (promo.yaml → sources): servicios, planes y preguntas frecuentes,
// sin proyectos ni rubros. Los posts hablan de gestionar la información del negocio, no de casos puntuales.
const SIN_RUBROS = (f: { p: string }) => !/rubro/i.test(f.p);

export const GET: APIRoute = () => {
  const md = [
    `# ${SITE.nombre}`,
    "",
    `> ${SITE.bajada}. ${SITE.slogan} Desarrollamos soluciones de negocio a medida y acompañamos a emprendedores a crecer ordenando y analizando su información, por suscripción mensual y sin pago inicial grande.`,
    "",
    "## Servicios",
    "",
    ...SERVICIOS.map((s) => `- **${s.titulo}**: ${s.bajada} Incluye: ${s.items.join("; ")}.`),
    "",
    "## Planes (suscripción mensual)",
    "",
    ...PLANES.map((p) => `- **${p.nombre}** (${p.desde === null ? "a medida" : `desde ${p.moneda} ${p.desde}/mes`}): ${p.para} ${p.incluye.join("; ")}.`),
    "",
    "## Preguntas frecuentes",
    "",
    ...FAQ.filter(SIN_RUBROS).flatMap((f) => [`### ${f.p}`, "", f.r, ""]),
  ].join("\n");
  return new Response(md, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
};
