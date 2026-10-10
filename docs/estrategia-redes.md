# Estrategia de redes

Pensada para producir con **Promo Studio** a partir de `promo.yaml` (este repo) y de los `promo.yaml` de cada
proyecto. El objetivo de las redes no es "tener seguidores": es **llevar dueños de negocio al autodiagnóstico y a la
charla inicial**.

## Regla de voz: empresa de servicios, no producto

Fogón es una empresa de servicios. Nunca se presenta como una plataforma, app o producto, ni como algo enlatado:
- Sí: "te ayudamos a ordenar los turnos", "diseñamos el sistema para cómo trabaja tu equipo", "nos sumamos a tu equipo".
- No: "así se ordena con Fogón", "Fogón te permite…", "probá Fogón", "descargá", "un módulo para tu rubro".
- Los casos son soluciones hechas para ese negocio, no productos listos para contratar.
- No prometer formatos fijos (app, sin instalar, autoadministrable): dependen de cada proyecto.
- No presentarse como empresa de Córdoba: trabajamos con todo el país (la ubicación sólo figura en el sitio).

La regla está también en `promo.yaml` (`tone` y `avoid`), así Promo Studio la respeta al generar.

## 1. Principios

- **Mostrar, no prometer.** Cada post se apoya en algo real: una pantalla de un sistema en uso, un número que el
  sistema calcula, un proceso antes/después. Nada de "transformamos tu negocio" sin prueba.
- **Hablar del negocio del cliente, no de tecnología.** "Sabé cuánto ganaste en marzo" en lugar de "dashboard con
  Next.js". El stack nunca aparece en redes.
- **Un rubro por pieza.** "Si tenés un consultorio…" convierte más que "si tenés un negocio…".
- **Cara visible.** En B2B chico, la gente le compra a una persona. Reels con el fundador explicando 1 idea
  funcionan mejor que piezas institucionales.

Las guías de 2026 coinciden en que Instagram reparte distinto Reels, Stories y Explorar, y que en B2B rinden los
carruseles educativos y el contenido liderado por el fundador
([Tagembed](https://tagembed.com/es/blog/instagram-content-strategy/),
[Socialkit](https://socialk.it/es/blog/instagram-for-b2b)). En LinkedIn, el contenido funciona cuando está atado al
recorrido del cliente: educar, demostrar autoridad, activar
([Expreso](https://www.expreso.com.pe/economia/el-contenido-de-tu-linkedin-puede-apoyar-las-ventas-b2b-no-solo-es-buscar-visibilidad-tambien-es-disenar-oportunidades-reales-noticia/1267390/)).

## 2. Pilares (los mismos de `promo.yaml → pillars`)

| Pilar | Qué es | Formato ideal | Fuente en Promo Studio |
|---|---|---|---|
| **Casos reales** | Un proyecto: problema → solución → qué cambió | Carrusel 6–8 slides, Reel con capturas | `promo-feed.json` (sale de `proyectos.yaml`) + flujos de cada proyecto |
| **Números del negocio** | Educar a medir: margen, costo por cliente, punto de equilibrio | Carrusel educativo, Story con encuesta | Generado con el tono de `promo.yaml` |
| **Procesos y productividad** | Antes/después de un proceso: turnos, stock, sueldos | Reel corto "así se hacía / así se hace" | Flujos con capturas reales |
| **Marca y presencia online** | Errores comunes, Google, IA, consistencia de marca | Carrusel tips, imagen única | Generado |
| **Detrás de escena** | Cómo trabajamos, el diagnóstico, una reunión, un deploy | Reel con el fundador, Stories | Grabación propia |

Mezcla semanal sugerida: 40 % casos reales, 25 % números, 20 % procesos, 15 % marca/detrás de escena.

## 3. Cadencia (la de `promo.yaml → cadence`)

- **Feed:** 3 por semana (2 carruseles + 1 imagen).
- **Reels:** 2 por semana (1 de capturas generado, 1 con cara del fundador grabado a mano).
- **Stories:** 3 por semana: encuesta ("¿Sabés cuánto ganaste el mes pasado?"), link al autodiagnóstico, detrás de escena.

Calendario tipo:

| Día | Pieza | Pilar |
|---|---|---|
| Lunes | Carrusel educativo | Números del negocio |
| Martes | Reel del fundador (60 s, 1 idea) | Detrás de escena / Procesos |
| Miércoles | Carrusel caso de éxito | Casos reales |
| Jueves | Story con encuesta + link a `/diagnostico` | — |
| Viernes | Reel con capturas de un flujo | Casos reales / Procesos |
| Sábado | Imagen con tip | Marca y presencia |

## 4. Cómo se conecta con Promo Studio

1. **Este repo** (`promo.yaml`): marca, tono, `avoid`, pilares y dos fuentes:
   - `promo-feed.json`: un ítem por proyecto (desafío, solución, mejoras, imagen). Se regenera con
     `npm run proyectos` y se publica con el sitio.
   - `llms.txt`: servicios, planes y FAQ completos, para que los textos no inventen.
2. **Flujos con capturas reales** (`flows` en `promo.yaml`): autodiagnóstico, casos Consultorio y Obras, planes.
   `npm run build && npm run preview -- --port 4329` y en otra terminal `npm run promo:capture`.
3. **Repos de cada proyecto**: Consultorio, Mi Tenis y Radar Global ya tienen `promo.yaml` con flujos propios.
   Desde Promo Studio se pueden generar posts de esos flujos y publicarlos en la cuenta de la empresa como
   "caso real" (adaptando el CTA al de la empresa).
4. Commitear y pushear `promo.yaml`, `.promo/` y `public/` → "Sincronizar" en Promo Studio.

## 5. Ideas de contenido listas para producir

**Casos reales**
- "Un odontólogo registraba cada atención en papel. Ahora le lleva 30 segundos." (Consultorio, flujo registrar-atencion)
- "La obra se pasó del presupuesto y nadie se enteró hasta el final. Así lo evitamos." (Obras)
- "Inscripciones por WhatsApp, cupos pisados: cómo un taller de cerámica lo resolvió." (Ciricina)
- "Una camarita conectada que lee la temperatura del horno con IA." (Ciricina, alto potencial viral)
- "115 medios de 23 países resumidos cada mañana." (Radar Global, automatización e IA)

**Números del negocio**
- "3 números que todo emprendedor tendría que mirar cada mes."
- "Facturar más no es ganar más: margen por servicio explicado con un ejemplo."
- "¿Cuánto te cuesta realmente cada cliente?"

**Procesos**
- "Si tu negocio depende de tu memoria, no es un negocio: es un trabajo." (Reel del fundador)
- "Excel vs. sistema: cuándo conviene dar el salto."

**Marca y presencia**
- "Tu cliente le pregunta a ChatGPT por tu rubro. ¿Te recomienda?" (llms.txt y datos estructurados, diferencial real)
- "5 cosas que tu sitio tiene que tener para que te escriban."

**Detrás de escena**
- "Así es un relevamiento, de principio a fin (y por qué lo cobramos)."
- "Por qué cobramos por mes y no un pago único."

## 6. LinkedIn (perfil personal del fundador)

2 posts por semana, reutilizando los carruseles de casos reales como PDF y un post de texto con aprendizaje
("Lo que aprendí haciendo un sistema para una constructora"). Público: constructoras, estudios, profesionales de
la salud, contadores (aliados). Comentar en publicaciones de cámaras y colegios profesionales de Córdoba.

## 7. Anuncios (Meta), cuando haya 3+ casos

- **Objetivo:** mensajes de WhatsApp o tráfico a `/diagnostico`. No "me gusta".
- **Segmentación:** Argentina (empezar por Córdoba), 28–58 años, intereses de `promo.yaml → audience.interests`
  + intereses del rubro (odontología, construcción).
- **Creatividades:** los carruseles de casos reales con mejor rendimiento orgánico. Una campaña por rubro.
- **Presupuesto de prueba:** chico y fijo durante 2–3 semanas por rubro; seguir solo lo que traiga diagnósticos.
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
