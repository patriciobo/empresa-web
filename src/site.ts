// Datos de la empresa: un solo lugar para editar nombre, dominio, contacto y redes.
// Todo el sitio (textos, JSON-LD, llms.txt, promo-feed.json) lee de acá.
// Si cambia el dominio: también en astro.config.mjs (site) y en promo.yaml.

export const SITE = {
  nombre: "Fogón",
  bajada: "Soluciones tecnológicas para emprendedores",
  slogan: "Tecnología a medida para emprendedores, cerca y sin vueltas.",
  /** Dominio público (sin barra final). fogon.com.ar está tomado; confirmar disponibilidad en nic.ar. */
  url: "https://fogondigital.com.ar",
  ciudad: "Córdoba",
  provincia: "Córdoba",
  pais: "AR",
  zona: "Argentina (trabajo 100 % remoto, reuniones presenciales en Córdoba)",
  /** WhatsApp en formato internacional sin "+" (para wa.me). Vacío oculta los botones de WhatsApp. */
  whatsapp: "5493517642289",
  whatsappTexto: "351 764-2289",
  email: "contacto@fogondigital.com.ar",
  /** Agenda para el diagnóstico gratuito (Cal.com, Calendly, Google Calendar). Vacío usa WhatsApp o email. */
  agenda: "",
  github: "https://github.com/patriciobo",
  /** Perfiles públicos; dejar vacío lo que no exista. */
  redes: {
    instagram: "",
    linkedin: "",
    facebook: "",
  },
} as const;

/** Link de contacto principal: WhatsApp si está cargado, si no email. */
export function contactoLink(texto = `Hola ${SITE.nombre}, quiero agendar un diagnóstico gratuito.`): string {
  if (SITE.whatsapp) return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(texto)}`;
  return `mailto:${SITE.email}?subject=${encodeURIComponent("Diagnóstico gratuito")}&body=${encodeURIComponent(texto)}`;
}

/** Link para agendar: agenda online si existe, si no el contacto principal. */
export const agendaLink = SITE.agenda || contactoLink();
