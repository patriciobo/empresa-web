# Estrategia comercial y posicionamiento

Documento de trabajo. Las cifras de precios son **hipótesis para validar** con los primeros 5–10 clientes.

## 1. Qué vendemos (en una frase)

> Tecnología para que tu negocio crezca ordenado: marca, presencia online, procesos y sistemas de gestión
> en un solo equipo, por una suscripción mensual.

No vendemos "desarrollo de software". El emprendedor no compra tecnología: compra **saber cuánto gana, dejar de
perder turnos, que el equipo no dependa de él y verse profesional**. La tecnología es el medio; el copy del sitio,
los posts y las reuniones hablan de esos resultados.

## 2. Cliente ideal

**Emprendedor/a o pyme de servicios con 2 a 30 personas** que ya factura y tiene clientes recurrentes, pero gestiona
con WhatsApp, papel y planillas.

Señales de que es un buen cliente:

- Tiene un proceso que se repite todos los días (turnos, inscripciones, obras, pedidos, stock).
- Siente que "no sabe sus números" o que el negocio depende de su memoria.
- Puede pagar una cuota mensual equivalente a 1–3 servicios o ventas suyas.
- Ya invierte algo en redes o en un diseñador: valora lo profesional.

Rubros donde ya hay prueba (proyectos en uso), por orden de prioridad para salir a vender:

| Rubro | Caso que lo prueba | Por qué conviene |
|---|---|---|
| Salud independiente (odontólogos, kinesiólogos, psicólogos, nutricionistas) | Consultorio | Producto ya hecho y replicable: venta como SaaS, margen alto |
| Construcción y oficios | Obras, Hogacor | Dolor fuerte (presupuestos que se pasan), ticket más alto |
| Talleres, academias y cursos | Ciricina | Inscripciones y cupos: problema universal y fácil de mostrar |
| Deporte y bienestar (gimnasios chicos, profes, clubes) | Mi Tenis | Comunidad grande en Instagram |

Primer foco recomendado: **salud independiente + construcción**. Dos rubros con casos reales y dolores medibles.
Cada rubro nuevo entra cuando hay un caso para mostrar.

## 3. Por qué suscripción (y cómo cobrarla)

La investigación coincide en que las pymes de la región prefieren pagar por suscripción en lugar de afrontar un
costo inicial alto ([IMARC, mercado SaaS LatAm](https://www.imarcgroup.com/latin-america-software-as-a-service-market)),
y en Argentina la adopción de tecnología crece pero pocas pymes miden su impacto
([Perfil / Observatorio PyME](https://www.perfil.com/noticias/economia/cuatro-de-cada-diez-pymes-argentinas-ya-usan-ia-pero-pocas-miden-su-impacto-a40.phtml)):
ahí está el hueco para "te lo hacemos y además te ayudamos a medir".

Modelo propuesto (editable en `src/content.ts → PLANES`):

| Plan | Precio de referencia | Qué incluye | Permanencia |
|---|---|---|---|
| Presencia | desde US$ 39/mes | Sitio, dominio, hosting, SEO local, cambios mensuales | 6 meses |
| Gestión | desde US$ 89/mes | Lo anterior + sistema de gestión, usuarios, resumen mensual, soporte, 1 mejora/mes | 12 meses |
| Integral | a medida (orientativo US$ 200–400/mes) | Lo anterior + marca, procesos, tablero, automatizaciones, reunión mensual | 12 meses |

Reglas para que el modelo sea rentable:

- **El desarrollo inicial se recupera en la permanencia mínima.** Si un sistema lleva 60 h, con la cuota de Gestión
  tiene que cerrarse en ≤ 12 meses; si no, sube la cuota o se cobra un **alta** (1 a 2 cuotas, no más).
- **Productizar.** Lo que se hace para un cliente se generaliza para el rubro (como Consultorio). El segundo
  odontólogo cuesta casi cero en desarrollo: ahí está el margen.
- **Precio en dólares, cobro en pesos** al tipo de cambio del día de facturación (o en ARS con ajuste trimestral).
  Débito automático (Mercado Pago suscripciones) para bajar la morosidad.
- **Plan anual con 2 meses bonificados** para quien prefiere pagar por adelantado.
- **Salida digna:** exportación completa de datos. Baja el miedo a "quedar atado" y es un argumento de venta.

Validar con los primeros clientes: ¿la cuota de Gestión se paga sin fricción? ¿el plan Integral se vende o asusta?
Ajustar precios recién con 5 cierres.

## 4. Embudo

```
Instagram / LinkedIn / Google / boca a boca
          ↓
Sitio: caso de éxito de su rubro  →  Autodiagnóstico (2 min)
          ↓
Diagnóstico gratuito de 45 min (WhatsApp o agenda)
          ↓
Propuesta con plan mensual (en 48 h)
          ↓
Primera versión en 3–8 semanas  →  mejora mensual  →  caso de éxito nuevo  →  referidos
```

- **Imán de clientes:** el autodiagnóstico (`/diagnostico`). Sin formulario: el resultado se manda por WhatsApp
  ya redactado, así el lead llega con contexto.
- **Diagnóstico de 45 min:** relevar procesos, qué miden hoy, qué los frena. Entregar siempre un resumen escrito
  con 3 recomendaciones, aunque no compren (genera confianza y referidos).
- **Propuesta:** una página, con el problema en sus palabras, el plan, la cuota y qué van a poder hacer a las
  4 semanas.

## 5. Canales (en orden de retorno esperado)

1. **Red propia y referidos.** Cada cliente actual conoce a otros del mismo rubro. Ofrecer un mes bonificado por
   referido que contrate.
2. **Google y asistentes de IA.** El sitio ya sale con SEO, datos estructurados y `llms.txt`. Sumar páginas por
   rubro ("Sistema de gestión para constructoras", "Software para consultorios") a medida que haya casos.
   Crear el perfil de Google Business.
3. **Instagram** como vidriera y prueba social (ver `estrategia-redes.md`).
4. **LinkedIn** del fundador: para constructoras, estudios y pymes más formales; contenido de "cómo lo resolvimos".
5. **Alianzas:** contadores, estudios de diseño sin desarrollo, cámaras de comercio y colegios profesionales
   (odontólogos, arquitectos). Charla gratuita "Cómo saber si tu negocio es rentable" con autodiagnóstico en vivo.
6. **Anuncios pagos** (Meta) recién cuando haya 3+ casos y el embudo convierta orgánicamente.

## 6. Pendientes para salir

- [ ] Registrar el dominio (fogon.com.ar está tomado; propuesto fogondigital.com.ar), marca en INPI (clase 42) y usuario en redes.
- [ ] Cargar WhatsApp y agenda en `src/site.ts`.
- [ ] Pedir permiso a cada cliente para mostrar su caso (y, si es posible, una frase textual suya).
- [ ] Capturas reales de Obras y Ciricina con datos demo (`promo.yaml` + `.promo/capture.mjs` en cada repo).
- [ ] Validar precios con los primeros 5 diagnósticos.
- [ ] Perfil de Google Business y Search Console.
