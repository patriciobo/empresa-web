// Datos de la empresa: un solo lugar para editar nombre, dominio, contacto y redes.
// Todo el sitio (textos, JSON-LD, llms.txt, promo-feed.json) lee de acá.
// Si cambia el dominio: también en astro.config.mjs (site) y en promo.yaml.

export const SITE = {
  nombre: "Fogón",
  bajada: "Tu socio en tecnología e identidad digital",
  slogan: "Delegá en nosotros la tecnología y la marca, y ocupate de lo que mejor sabés hacer.",
  /** Dominio público (sin barra final). fogon.com.ar está tomado; confirmar disponibilidad en nic.ar. */
  url: "https://fogonestudio.com.ar",
  ciudad: "Córdoba",
  provincia: "Córdoba",
  pais: "AR",
  zona: "Argentina (trabajo 100 % remoto, reuniones presenciales en Córdoba)",
  /** WhatsApp en formato internacional sin "+" (para wa.me). Vacío oculta los botones de WhatsApp. */
  whatsapp: "5493517642289",
  whatsappTexto: "351 764-2289",
  email: "contacto@fogonestudio.com.ar",
  /** Agenda para la charla inicial sin costo (Cal.com, Calendly, Google Calendar). Vacío usa WhatsApp o email. */
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
export function contactoLink(texto = `Hola ${SITE.nombre}, quiero agendar una charla inicial.`): string {
  if (SITE.whatsapp) return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(texto)}`;
  return `mailto:${SITE.email}?subject=${encodeURIComponent("Charla inicial")}&body=${encodeURIComponent(texto)}`;
}

/** Link para agendar: agenda online si existe, si no el contacto principal. */
export const agendaLink = SITE.agenda || contactoLink();
