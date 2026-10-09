// Textos del sitio: servicios, proceso, planes, preguntas frecuentes y autodiagnóstico.
// Los proyectos NO se editan acá: salen de proyectos.yaml (ver README).

export type Servicio = { id: string; titulo: string; bajada: string; items: string[] };

/** La solución integral, en capas: cada una se puede contratar sola o sumarse al plan. */
export const SERVICIOS: Servicio[] = [
  {
    id: "marca",
    titulo: "Marca e identidad",
    bajada: "Que tu negocio se reconozca y transmita confianza desde el primer contacto.",
    items: ["Nombre, logo y paleta de colores", "Tono de comunicación y mensajes clave", "Plantillas para redes y documentos", "Manual de marca simple y usable"],
  },
  {
    id: "presencia",
    titulo: "Presencia online",
    bajada: "Un sitio rápido que aparece en Google y en los asistentes de IA, y que convierte visitas en consultas.",
    items: ["Sitio web o landing autoadministrable", "SEO local y perfil de Google", "Inscripciones, reservas o pedidos online", "Preparado para ChatGPT, Gemini y Claude (llms.txt y datos estructurados)"],
  },
  {
    id: "procesos",
    titulo: "Procesos ordenados",
    bajada: "Relevamos cómo trabajás hoy y lo simplificamos antes de escribir una línea de código.",
    items: ["Mapa de procesos: turnos, ventas, stock, cobros", "Detección de tareas repetidas y cuellos de botella", "Roles, permisos y responsables claros", "Automatización con WhatsApp y email"],
  },
  {
    id: "gestion",
    titulo: "Sistemas de gestión",
    bajada: "Aplicaciones a medida de tu negocio, en el celular y la PC, que reemplazan el papel y el Excel.",
    items: ["Agenda, clientes, stock, gastos y cobros", "Trazabilidad: quién hizo qué y cuándo", "Funciona sin instalar nada y como app en el celular", "Tus datos siempre exportables"],
  },
  {
    id: "datos",
    titulo: "Medición y estrategia",
    bajada: "Tableros con los números que importan para decidir con datos y planificar el próximo paso.",
    items: ["Indicadores de rentabilidad, ventas y costos", "Resumen mensual automático", "Alertas: presupuesto excedido, stock bajo, cobros vencidos", "Revisión trimestral de objetivos con vos"],
  },
  {
    id: "ia",
    titulo: "IA y automatización",
    bajada: "Inteligencia artificial donde ahorra tiempo de verdad, no como adorno.",
    items: ["Resúmenes y reportes automáticos", "Lectura de fotos y documentos", "Sensores y dispositivos conectados", "Asistentes que responden con tu información"],
  },
];

/** Lo que gana un emprendimiento con un sistema de información propio. */
export const BENEFICIOS = [
  { titulo: "Medís el progreso", texto: "Ventas, costos y rentabilidad del mes en una pantalla, comparados con el mes anterior." },
  { titulo: "Planificás con datos", texto: "Sabés qué servicio deja más, qué cliente vuelve y dónde se va la plata antes de decidir." },
  { titulo: "Ganás tiempo", texto: "Lo repetitivo se hace solo: recordatorios, descuentos de stock, resúmenes y avisos." },
  { titulo: "Delegás sin perder el control", texto: "Cada usuario con sus permisos y un registro de quién cargó o cambió cada cosa." },
  { titulo: "Atendés mejor", texto: "Turnos, inscripciones y pedidos online, con confirmación por WhatsApp." },
  { titulo: "Crecés sin desordenarte", texto: "El sistema crece con el negocio: sumás módulos cuando los necesitás." },
];

export const PROCESO = [
  { paso: "Diagnóstico", texto: "Una reunión de 45 minutos, gratis, para entender tu negocio, cómo trabajás y qué te frena." },
  { paso: "Propuesta", texto: "Te mostramos qué conviene hacer primero, con un plan mensual claro y sin letra chica." },
  { paso: "Primera versión en semanas", texto: "Arrancamos por lo que más impacto tiene y lo usás en pocas semanas, no en meses." },
  { paso: "Mejora continua", texto: "Cada mes medimos, ajustamos y sumamos lo que el negocio va pidiendo." },
];

export type Plan = {
  id: string;
  nombre: string;
  para: string;
  /** Precio mensual de referencia; null muestra "a medida". Revisar en docs/estrategia-comercial.md. */
  desde: number | null;
  moneda: "US$" | "$";
  destacado?: boolean;
  incluye: string[];
};

export const PLANES: Plan[] = [
  {
    id: "presencia",
    nombre: "Presencia",
    para: "Para salir a vender con una imagen profesional.",
    desde: 39,
    moneda: "US$",
    incluye: ["Sitio web o landing con tu marca", "Dominio, hosting y certificado incluidos", "SEO local y perfil de Google", "Botón de WhatsApp y formulario de contacto", "Cambios de contenido todos los meses"],
  },
  {
    id: "gestion",
    nombre: "Gestión",
    para: "Para ordenar la operación y dejar el Excel.",
    desde: 89,
    moneda: "US$",
    destacado: true,
    incluye: ["Todo lo de Presencia", "Sistema de gestión adaptado a tu rubro", "Usuarios, permisos y registro de actividad", "Resumen mensual con tus números", "Soporte por WhatsApp y backups diarios", "Una mejora nueva por mes"],
  },
  {
    id: "integral",
    nombre: "Integral",
    para: "Para crecer con estrategia, marca y datos.",
    desde: null,
    moneda: "US$",
    incluye: ["Todo lo de Gestión", "Marca e identidad completa", "Relevamiento y mejora de procesos", "Tablero de indicadores a medida", "Automatizaciones e IA", "Reunión mensual de estrategia"],
  },
];

export const CONDICIONES = [
  "Sin pago inicial grande: el desarrollo se paga dentro de la suscripción.",
  "Permanencia mínima de 12 meses en Gestión e Integral; después, mes a mes.",
  "Precios de referencia; el valor final depende del alcance y se fija por escrito.",
  "Si te vas, te llevás tus datos completos en formatos abiertos.",
];

export const FAQ = [
  {
    p: "¿Por qué una suscripción y no un pago único?",
    r: "Porque un sistema que no se mantiene envejece rápido. Con la suscripción no tenés que juntar un monto alto al principio, y el hosting, la seguridad, los backups, el soporte y las mejoras están siempre incluidos. Pagás un valor mensual previsible y el sistema mejora con tu negocio.",
  },
  {
    p: "¿Cuánto tarda en estar funcionando?",
    r: "Un sitio web, entre 1 y 3 semanas. Una primera versión de un sistema de gestión, entre 3 y 8 semanas según el alcance. Siempre arrancamos por lo que más impacto tiene para que lo uses cuanto antes.",
  },
  {
    p: "¿Necesito saber de tecnología?",
    r: "No. Diseñamos cada pantalla para que la use cualquier persona del equipo desde el celular, y te acompañamos en el arranque con una capacitación corta.",
  },
  {
    p: "¿De quién son los datos?",
    r: "Tuyos. Podés exportarlos cuando quieras en formatos abiertos (CSV o JSON), y si dejás el servicio te los entregamos completos.",
  },
  {
    p: "¿Trabajan con negocios de cualquier rubro?",
    r: "Trabajamos con emprendimientos y pymes de servicios, salud, construcción, educación, comercio y talleres. Si tu rubro no está en los proyectos, lo charlamos en el diagnóstico: los problemas de gestión se parecen más de lo que parece.",
  },
  {
    p: "¿Qué pasa si ya tengo sitio o algún sistema?",
    r: "Lo evaluamos en el diagnóstico. Muchas veces conviene conservar lo que funciona e integrarlo, y reemplazar solo lo que hoy te hace perder tiempo.",
  },
];

/** Autodiagnóstico: 8 preguntas, cada una suma a un área. Respuestas: 0 = no, 1 = a medias, 2 = sí. */
export const AUTODIAGNOSTICO = [
  { area: "Presencia", pregunta: "¿Tu negocio aparece en Google cuando alguien busca lo que ofrecés en tu zona?" },
  { area: "Presencia", pregunta: "¿Tenés un sitio propio donde un cliente pueda consultar, reservar o comprar sin escribirte?" },
  { area: "Marca", pregunta: "¿Tu logo, colores y forma de comunicar son los mismos en redes, sitio y documentos?" },
  { area: "Procesos", pregunta: "¿Turnos, pedidos o stock se registran en un solo lugar que todo el equipo consulta?" },
  { area: "Procesos", pregunta: "¿Las tareas repetitivas (recordatorios, avisos, resúmenes) se hacen solas?" },
  { area: "Datos", pregunta: "¿Sabés cuánto ganaste el mes pasado sin tener que sentarte a hacer cuentas?" },
  { area: "Datos", pregunta: "¿Sabés qué producto o servicio te deja más margen?" },
  { area: "Datos", pregunta: "¿Tenés objetivos para los próximos 6 meses y una forma de medir si los cumplís?" },
];
