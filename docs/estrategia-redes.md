# Estrategia de redes

Pensada para producir con **Promo Studio** a partir de `promo.yaml` (este repo). El objetivo de las redes no es "tener seguidores": es **llevar dueños de negocio al autodiagnóstico y a la
charla inicial**.

## Regla de voz: empresa de servicios, no producto

Fogón es una empresa de servicios. Nunca se presenta como una plataforma, app o producto, ni como algo enlatado:
- Sí: "te ayudamos a ordenar tu información", "diseñamos el sistema para cómo trabaja tu equipo", "nos sumamos a tu equipo".
- No: "así se ordena con Fogón", "Fogón te permite…", "probá Fogón", "descargá", "un módulo para tu rubro".
- No prometer formatos fijos (app, sin instalar, autoadministrable): dependen de cada solución.
- No presentarse como empresa de Córdoba: trabajamos con todo el país (la ubicación sólo figura en el sitio).

La regla está también en `promo.yaml` (`tone` y `avoid`), así Promo Studio la respeta al generar.

## Foco: gestionar la información, sin proyectos ni rubros

El mensaje es que desarrollamos soluciones de negocio y acompañamos a emprendedores a crecer ayudándolos a
gestionar su información: registrarla, organizarla y analizarla para decidir. Los posts **nunca** hablan de
proyectos, clientes ni rubros puntuales (consultorios, obras, talleres, turismo…) ni apuntan a un sector: usan
situaciones que cualquier negocio reconoce (ventas, gastos, cobros, stock, clientes, pedidos). Por eso
`promo.yaml` no tiene `screenshots` ni la fuente de casos (`promo-feed.json`), y `avoid` lo prohíbe.

## 1. Principios

- **Hablar del negocio, no de tecnología.** "Sabé cuánto ganaste en marzo" en lugar de "dashboard con
  Next.js". El stack nunca aparece en redes.
- **Beneficios concretos de tener la información ordenada:** registrar para analizar después, un solo lugar,
  historial, decisiones con números reales, alertas a tiempo, menos tiempo administrativo, delegar sin perder el
  control, datos propios, costo accesible.
- **Ningún rubro.** Ejemplos que sirvan a cualquier negocio; nada de casos ni nombres de clientes.
- **Cara visible.** La gente le compra a una persona. Reels con el fundador explicando 1 idea
  funcionan mejor que piezas institucionales.

Las guías de 2026 coinciden en que Instagram reparte distinto Reels, Stories y Explorar, y que en B2B rinden los
carruseles educativos y el contenido liderado por el fundador
([Tagembed](https://tagembed.com/es/blog/instagram-content-strategy/),
[Socialkit](https://socialk.it/es/blog/instagram-for-b2b)). En LinkedIn, el contenido funciona cuando está atado al
recorrido del cliente: educar, demostrar autoridad, activar
([Expreso](https://www.expreso.com.pe/economia/el-contenido-de-tu-linkedin-puede-apoyar-las-ventas-b2b-no-solo-es-buscar-visibilidad-tambien-es-disenar-oportunidades-reales-noticia/1267390/)).

## 2. Pilares (los mismos de `promo.yaml → pillars`)

| Pilar | Qué es | Formato ideal |
|---|---|---|
| **Información para decidir** | Registrar, medir y decidir: resultado del mes, costos, precios, alertas | Carrusel educativo, Story con encuesta |
| **Orden y procesos** | Todo en un lugar, historial, procesos claros, delegar con trazabilidad | Reel corto "antes / después", carrusel |
| **Herramientas a medida** | Por qué una solución pensada para tu forma de trabajar, datos propios, mejora mensual | Carrusel, imagen única |
| **Crecer acompañado** | Socio en tecnología, cómo trabajamos, suscripción accesible | Reel con el fundador, Stories |
| **Marca y presencia online** | Google, asistentes de IA, consistencia de marca | Carrusel tips, imagen única |

Mezcla semanal sugerida: 35 % información para decidir, 25 % orden y procesos, 15 % herramientas a medida,
15 % crecer acompañado, 10 % marca.

## 3. Cadencia (la de `promo.yaml → cadence`)

- **Feed:** 3 por semana (2 carruseles + 1 imagen).
- **Reels:** 2 por semana (1 generado, 1 con cara del fundador grabado a mano).
- **Stories:** 3 por semana: encuesta ("¿Sabés cuánto ganaste el mes pasado?"), link al autodiagnóstico, detrás de escena.

Calendario tipo:

| Día | Pieza | Pilar |
|---|---|---|
| Lunes | Carrusel educativo | Información para decidir |
| Martes | Reel del fundador (60 s, 1 idea) | Crecer acompañado |
| Miércoles | Carrusel de beneficios | Herramientas a medida |
| Jueves | Story con encuesta + link a `/diagnostico` | — |
| Viernes | Reel antes / después | Orden y procesos |
| Sábado | Imagen con tip | Marca y presencia |

## 4. Cómo se conecta con Promo Studio

1. **Este repo** (`promo.yaml`): marca, tono, `avoid`, pilares y dos fuentes:
   - `public/promo-temas.json`: ideas de contenido por pilar, sin rubros ni casos. Se edita a mano.
   - `/promo.txt` (`src/pages/promo.txt.ts`): servicios, planes y FAQ sin proyectos, para que los textos no
     inventen. `llms.txt` sigue teniendo los proyectos para los asistentes de IA, pero Promo Studio no lo lee.
2. **Imágenes:** generadas por IA (`brand.imageStyle` / `photoStyle`): objetos de escritorio o interfaces
   inventadas (gráficos, tablas, tableros), nunca de un oficio puntual ni capturas reales.
3. Desplegar el sitio (las fuentes son URLs de fogonestudio.com.ar), pushear `promo.yaml` → "Sincronizar".

## 5. Ideas de contenido listas para producir

Están en `public/promo-temas.json`. Otras:
- "3 números que todo emprendedor tendría que mirar cada mes."
- "Facturar más no es ganar más."
- "Si tu negocio depende de tu memoria, no es un negocio: es un trabajo." (Reel del fundador)
- "Excel vs. una herramienta a medida: cuándo conviene dar el salto."
- "Tu cliente le pregunta a ChatGPT. ¿Te recomienda?"
- "Por qué cobramos por mes y no un pago único."

## 6. LinkedIn (perfil personal del fundador)

2 posts por semana reutilizando los carruseles como PDF y un post de texto con un aprendizaje sobre gestionar la
información de un negocio, sin nombrar clientes ni rubros.

## 7. Anuncios (Meta)

- **Objetivo:** mensajes de WhatsApp o tráfico a `/diagnostico`. No "me gusta".
- **Segmentación:** Argentina, 28–58 años, intereses de `promo.yaml → audience.interests`. Sin segmentar por rubro.
- **Creatividades:** los carruseles con mejor rendimiento orgánico.
- **Presupuesto de prueba:** chico y fijo durante 2–3 semanas; seguir solo lo que traiga diagnósticos.
- **Cumplir `avoid`:** nada de resultados garantizados ni testimonios inventados (además de ético, evita rechazos
  de anuncios).

## 8. Medición (mensual)

| Métrica | Para qué |
|---|---|
| Autodiagnósticos completados → mensajes recibidos | Si el embudo funciona |
| Diagnósticos agendados y realizados | El número que importa |
| Propuestas enviadas → cierres | Calidad del lead y del precio |
| Guardados y compartidos por post | Qué contenido sirve de verdad (más que los "me gusta") |
| Origen de cada cliente (red, Google, Instagram, LinkedIn, referido) | Dónde poner el tiempo |

Revisar cada mes: duplicar lo que trae diagnósticos, cortar lo que solo trae alcance.
