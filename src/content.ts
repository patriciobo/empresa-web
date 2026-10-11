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
    items: ["Sitio web o landing a medida", "SEO local y perfil de Google", "Inscripciones, reservas o pedidos online", "Preparado para ChatGPT, Gemini y Claude (llms.txt y datos estructurados)"],
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
    bajada: "Sistemas diseñados para cómo trabaja tu negocio, que reemplazan el papel y el Excel.",
    items: ["Agenda, clientes, stock, gastos y cobros", "Trazabilidad: quién hizo qué y cuándo", "Pensado para dónde y cómo trabaja tu equipo", "Tus datos siempre exportables"],
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
    items: ["Bot de WhatsApp que responde consultas, da turnos y manda recordatorios", "Resúmenes y reportes automáticos", "Lectura de fotos y documentos", "Asistentes que responden con tu información"],
  },
];

/** Lo que gana un negocio con un sistema de información propio. */
export const BENEFICIOS = [
  { titulo: "Medís el progreso", texto: "Ventas, costos y rentabilidad del mes en una pantalla, comparados con el mes anterior." },
  { titulo: "Planificás con datos", texto: "Sabés qué servicio deja más, qué cliente vuelve y dónde se va la plata antes de decidir." },
  { titulo: "Ganás tiempo", texto: "Lo repetitivo se hace solo: recordatorios, descuentos de stock, resúmenes y avisos." },
  { titulo: "Delegás sin perder el control", texto: "Cada usuario con sus permisos y un registro de quién cargó o cambió cada cosa." },
  { titulo: "Atendés mejor", texto: "Turnos, inscripciones y pedidos online, con confirmación por WhatsApp." },
  { titulo: "Crecés sin desordenarte", texto: "Lo que hacemos crece con el negocio: sumamos lo que va necesitando." },
];

/** Cómo trabajamos: cada paso dice cuándo se paga. Detalle interno en docs/proceso-comercial.md. */
export const PROCESO = [
  {
    paso: "Charla inicial",
    cobro: "Sin costo",
    texto: "20 a 30 minutos para conocernos, ver si encajamos y contarte cómo trabajamos. Trabajamos con cualquier rubro.",
  },
  {
    paso: "Relevamiento y propuesta",
    cobro: "1 cuota",
    texto: "Relevamos cómo trabaja tu negocio y te presentamos la propuesta: plan, diseños y cronograma. Si avanzás, esa cuota vale como tu primer mes.",
  },
  {
    paso: "Arranque",
    cobro: "2 cuotas",
    texto: "Al aceptar abonás el mes 2 y el último mes de la permanencia. Arrancamos por lo que más impacto tiene y lo usás en semanas.",
  },
  {
    paso: "Mejora continua",
    cobro: "Cuota mensual",
    texto: "Cada mes medimos, ajustamos y sumamos lo que el negocio va pidiendo.",
  },
];

export type Plan = {
  id: "presencia" | "gestion" | "integral";
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
    incluye: [
      "Marca básica: logo, paleta y tipografías",
      "Sitio web o landing con tu marca",
      "Dominio, hosting y certificado incluidos",
      "SEO local y perfil de Google",
      "Botón de WhatsApp y formulario de contacto",
      "Cambios de contenido todos los meses",
      "Opcional: respuestas automáticas por WhatsApp",
    ],
  },
  {
    id: "gestion",
    nombre: "Gestión",
    para: "Para ordenar la operación y dejar el Excel.",
    desde: 89,
    moneda: "US$",
    destacado: true,
    incluye: [
      "Todo lo de Presencia",
      "Sistema de gestión a medida de tu operación",
      "Bot de WhatsApp: consultas, turnos y recordatorios",
      "Usuarios, permisos y registro de actividad",
      "Resumen mensual con tus números",
      "Soporte por WhatsApp y backups diarios",
      "Una mejora nueva por mes",
    ],
  },
  {
    id: "integral",
    nombre: "Integral",
    para: "Para crecer con estrategia, marca y datos.",
    desde: null,
    moneda: "US$",
    incluye: [
      "Todo lo de Gestión",
      "Marca e identidad completa",
      "Relevamiento y mejora de procesos",
      "Tablero de indicadores a medida",
      "Asistente con IA en WhatsApp que responde con tu información",
      "Automatizaciones e IA",
      "Reunión mensual de estrategia",
    ],
  },
];

/** Precio de entrada, para el mensaje de "accesible". */
export const PRECIO_DESDE = `${PLANES[0].moneda}\u00a0${PLANES[0].desde}`; // espacio duro: "US$ 39" no se parte

/**
 * Qué gana el negocio al sumarnos como socio. Sin comparar con contratar personas: el foco está en el equipo
 * extendido, el tiempo que libera, el costo previsible y que el conocimiento queda en el negocio.
 */
export const SOCIO_BENEFICIOS = [
  { titulo: "Un equipo que se suma al tuyo", texto: "Desarrollo, diseño, marca, datos e IA en un solo equipo que conoce tu negocio y trabaja con tu gente." },
  { titulo: "Más tiempo para lo importante", texto: "Vos y tu equipo se dedican a atender clientes y hacer crecer el negocio; la tecnología ya no les quita horas." },
  { titulo: "Un costo fijo y previsible", texto: `Una cuota mensual desde ${PRECIO_DESDE}, con desarrollo, soporte y mejoras incluidos. Sin sorpresas ni presupuestos sueltos.` },
  { titulo: "Siempre funcionando", texto: "Soporte, backups y mejoras todo el año, y herramientas al día en IA, buscadores y seguridad." },
  { titulo: "El conocimiento queda en tu negocio", texto: "Todo documentado, procesos claros para tu equipo y tus datos siempre exportables." },
  { titulo: "Crece con vos", texto: "Empezamos por lo que más impacto tiene y sumamos lo que el negocio va pidiendo." },
];

export const CONDICIONES = [
  "Sin pago inicial grande: el desarrollo se reparte en la cuota mensual.",
  "Charla inicial sin costo. El relevamiento y la propuesta se pagan con 1 cuota, que vale como primer mes si avanzás.",
  "Para arrancar se abonan 2 cuotas más: el mes 2 y el último mes de la permanencia.",
  "Permanencia mínima de 6 meses en Presencia y 12 en Gestión e Integral; después, mes a mes.",
  "Si das de baja antes, se abona el desarrollo pendiente según la tabla del contrato.",
  "Cada proyecto se diseña para tu negocio: lo que incluye cada plan se ajusta a lo que necesitás.",
  "Precios de referencia; el valor final depende del alcance y se fija por escrito.",
  "Los mensajes de WhatsApp Business que cobra Meta se pagan aparte, al costo.",
  "Si te vas, te llevás tus datos completos en formatos abiertos.",
];

export type Recorrido = {
  id: string;
  titulo: string;
  para: string;
  plan: string;
  /** Qué se cobra en el relevamiento y por qué. */
  cobro: string;
  hacemos: string[];
  necesitamos: string[];
  pasos: string[];
};

/** Recorridos según lo que necesita cada cliente. Checklists completos en docs/checklists/. */
export const RECORRIDOS: Recorrido[] = [
  {
    id: "presencia",
    titulo: "Marca y web",
    para: "Necesitás verte profesional y que te encuentren.",
    plan: "Presencia",
    cobro: "1 cuota de Presencia: definimos tu marca básica y la estructura del sitio.",
    hacemos: ["Entrevista sobre tu negocio, tu público y tu competencia", "Dos direcciones de marca (logo, paleta y tipografías)", "Mapa del sitio y textos principales", "Presentación de la propuesta en videollamada"],
    necesitamos: ["Qué vendés, a quién y en qué zona", "Fotos reales del negocio o permiso para producirlas", "Dominio, si ya tenés uno", "Acceso al perfil de Google, si existe"],
    pasos: ["Charla inicial", "Pago de la cuota de relevamiento", "Presentación de la propuesta", "Pago de 2 cuotas y arranque", "Sitio publicado en 1 a 3 semanas"],
  },
  {
    id: "sistema",
    titulo: "Ya tengo marca, quiero un sistema",
    para: "Tu imagen está resuelta; lo que te frena es la operación.",
    plan: "Gestión",
    cobro: "1 cuota de Gestión: relevamos tu operación y definimos el sistema.",
    hacemos: ["Relevamiento de cómo trabajás hoy (turnos, pedidos, stock, cobros)", "Qué resolver primero y cómo, según tu operación", "Usuarios, permisos y qué datos migrar", "Pantallas clave y cronograma de la primera versión"],
    necesitamos: ["Tus archivos de marca (logo y colores)", "Las planillas o cuadernos que usás hoy", "Quiénes van a usar el sistema y qué hace cada uno", "Los números que querés ver cada mes"],
    pasos: ["Charla inicial", "Pago de la cuota de relevamiento", "Presentación de la propuesta", "Pago de 2 cuotas y arranque", "Primera versión en 3 a 8 semanas"],
  },
  {
    id: "integral",
    titulo: "Operación compleja o todo junto",
    para: "Varias áreas, sedes o personas; o querés marca, web, sistema y datos.",
    plan: "Integral",
    cobro: "Relevamiento profundo con monto fijo según el tamaño de la operación; se descuenta del primer mes.",
    hacemos: ["Entrevistas con cada área", "Mapa de procesos y cuellos de botella", "Indicadores para medir el negocio", "Plan por etapas: qué se hace primero y por qué"],
    necesitamos: ["Una persona responsable del proyecto de tu lado", "Tiempo de cada área para las entrevistas", "Los sistemas y planillas que usan hoy", "Objetivos para los próximos 6 a 12 meses"],
    pasos: ["Charla inicial", "Pago del relevamiento profundo", "Presentación del informe y la propuesta", "Pago de 2 cuotas y arranque por etapas", "Reunión mensual de estrategia"],
  },
  {
    id: "existente",
    titulo: "Ya tengo web o sistema",
    para: "Tenés algo funcionando y no querés empezar de cero.",
    plan: "El que corresponda",
    cobro: "1 cuota del plan: auditamos lo que tenés dentro del relevamiento.",
    hacemos: ["Revisión de tu sitio o sistema actual", "Qué conviene conservar, integrar o reemplazar", "Plan de migración sin perder datos"],
    necesitamos: ["Accesos de solo lectura a lo que usás hoy", "Qué funciona bien y qué te hace perder tiempo"],
    pasos: ["Charla inicial", "Pago de la cuota de relevamiento", "Presentación de la auditoría y la propuesta", "Pago de 2 cuotas y arranque"],
  },
];

export const FAQ = [
  {
    p: "¿Cuánto hace falta para empezar?",
    r: `Gestionar tu negocio de forma inteligente está a tu alcance: los planes arrancan en ${PRECIO_DESDE} por mes y el desarrollo se reparte en la cuota, así no tenés que juntar un monto alto para empezar.`,
  },
  {
    p: "¿Reemplazan a mi equipo?",
    r: "No: nos sumamos a él. Tu gente sigue haciendo lo que mejor sabe y nosotros nos ocupamos de la tecnología y la marca. Muchas veces lo que hacemos es sacarle tareas repetitivas para que tenga más tiempo para los clientes, y le dejamos procesos y herramientas claras para trabajar mejor.",
  },
  {
    p: "¿Por qué una suscripción y no un pago único?",
    r: "Porque un sistema que no se mantiene envejece rápido. Con la suscripción no tenés que juntar un monto alto al principio, y el hosting, la seguridad, los backups, el soporte y las mejoras están siempre incluidos. Pagás un valor mensual previsible y el sistema mejora con tu negocio.",
  },
  {
    p: "¿Por qué se cobra el relevamiento y la propuesta?",
    r: "Porque es trabajo real: entrevistas, análisis de cómo trabajás, diseño y un plan escrito. Cuesta una cuota del plan y, si avanzás, vale como tu primer mes, así que no pagás nada extra.",
  },
  {
    p: "¿Qué pasa si no acepto la propuesta?",
    r: "Te quedás con el informe escrito del relevamiento: lo que encontramos y las prioridades. Los diseños y el desarrollo se entregan cuando arrancamos el plan.",
  },
  {
    p: "¿Pueden automatizar las consultas por WhatsApp?",
    r: "Sí. Un bot responde preguntas frecuentes (horarios, precios, ubicación), da turnos y manda recordatorios conectado a tu sistema. En el plan Integral usa IA para responder con tu información y deriva a una persona cuando hace falta. Los mensajes que cobra Meta se pagan aparte, al costo.",
  },
  {
    p: "¿Cuánto tarda en estar funcionando?",
    r: "Un sitio web, entre 1 y 3 semanas. Una primera versión de un sistema de gestión, entre 3 y 8 semanas según el alcance. Siempre arrancamos por lo que más impacto tiene para que lo uses cuanto antes.",
  },
  {
    p: "¿Necesito saber de tecnología?",
    r: "No. Diseñamos cada pantalla para que la use cualquier persona del equipo, en el lugar y el dispositivo donde trabaja, y te acompañamos en el arranque con una capacitación corta.",
  },
  {
    p: "¿De quién son los datos?",
    r: "Tuyos. Podés exportarlos cuando quieras en formatos abiertos (CSV o JSON), y si dejás el servicio te los entregamos completos.",
  },
  {
    p: "¿Trabajan con cualquier rubro?",
    r: "Sí, con cualquier rubro. Ya trabajamos con salud, construcción, educación, turismo, deporte y medios, y los problemas de gestión se parecen más de lo que parece: turnos, pedidos, stock, cobros y saber los números del mes.",
  },
  {
    p: "¿Qué pasa si ya tengo sitio o algún sistema?",
    r: "Lo auditamos en el relevamiento. Muchas veces conviene conservar lo que funciona e integrarlo, y reemplazar solo lo que hoy te hace perder tiempo.",
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

/** Preguntas de perfil: no suman puntos, sirven para elegir el plan. */
export const PERFIL = [
  {
    id: "equipo",
    pregunta: "¿Cuántas personas trabajan en el negocio?",
    opciones: [
      { v: "solo", t: "Solo yo" },
      { v: "chico", t: "De 2 a 10" },
      { v: "grande", t: "Más de 10" },
    ],
  },
  {
    id: "areas",
    pregunta: "¿Tenés más de una sede, o áreas que se pasan trabajo entre sí (por ejemplo ventas → producción → entrega)?",
    opciones: [
      { v: "no", t: "No" },
      { v: "si", t: "Sí" },
    ],
  },
] as const;

export type Respuestas = {
  /** Porcentaje 0–100 por área del autodiagnóstico. */
  pct: Record<string, number>;
  equipo: string;
  areas: string;
};

/** Elige uno de los 3 planes a partir del autodiagnóstico. La primera regla que se cumple gana. */
export function clasificar({ pct, equipo, areas }: Respuestas): { plan: Plan; motivo: string; nota: string } {
  const plan = (id: Plan["id"]) => PLANES.find((p) => p.id === id)!;
  const procesos = pct.Procesos ?? 0;
  const datos = pct.Datos ?? 0;
  const tieneMarca = (pct.Marca ?? 0) >= 50;

  let elegido: Plan;
  let motivo: string;
  if (equipo === "grande") {
    elegido = plan("integral");
    motivo = "Con más de 10 personas, ordenar procesos y medir pide relevar toda la operación antes de construir.";
  } else if (areas === "si") {
    elegido = plan("integral");
    motivo = "Con varias sedes o áreas que se pasan trabajo, conviene relevar cómo se conectan antes de construir.";
  } else if (procesos < 40 && datos < 40) {
    elegido = plan("integral");
    motivo = "Procesos y números necesitan ordenarse a la vez: conviene un plan completo, por etapas.";
  } else if (procesos < 60 || datos < 60) {
    elegido = plan("gestion");
    motivo = "Tu operación todavía depende de WhatsApp, papel o planillas: un sistema la ordena y te da los números del mes.";
  } else {
    elegido = plan("presencia");
    motivo = "Tu operación está bastante ordenada: lo que más rinde ahora es que te encuentren y te reconozcan.";
  }

  const nota =
    elegido.id === "presencia"
      ? "Incluye tu marca básica: logo, paleta y tipografías."
      : tieneMarca
        ? "Como ya tenés marca, arrancamos directo por el sistema."
        : "Incluye la marca básica, para que el sistema y tu imagen hablen igual.";
  return { plan: elegido, motivo, nota };
}
