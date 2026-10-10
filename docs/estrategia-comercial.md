# Estrategia comercial y posicionamiento

Documento de trabajo. Las cifras de precios son **hipótesis para validar** con los primeros 5–10 clientes.

## 1. Qué vendemos (en una frase)

> Tu socio en tecnología e identidad digital: delegás en nosotros la web, los sistemas, la marca y los datos,
> y vos y tu equipo se ocupan de lo que mejor saben hacer. Una cuota mensual fija, todo incluido.

Posicionamiento: no somos un proveedor que hace un trabajo y se va; somos un **equipo extendido** que se suma al del
cliente. **Nunca nos comparamos con contratar personas** ni sugerimos reemplazar empleados: sumamos especialistas y le
sacamos tareas repetitivas al equipo para que tenga más tiempo para los clientes.

Los beneficios que mejor funcionan en servicios administrados y equipos "fraccionales" (y los que usamos):

1. Un equipo de especialistas (desarrollo, diseño, marca, datos, IA) que se suma al tuyo.
2. Foco: el dueño y su equipo se dedican a su negocio.
3. Costo fijo y previsible, sin presupuestos sueltos.
4. Siempre funcionando: soporte, backups, mejoras y herramientas al día.
5. El conocimiento queda en el negocio: documentación, procesos claros y datos exportables.

La lista está en `src/content.ts → SOCIO_BENEFICIOS`. Si preguntan si reemplazamos a su equipo: no, nos sumamos.

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
- **Cobro por adelantado antes de producir:** 1 cuota por el relevamiento y la propuesta, más 2 cuotas al aceptar
  (el mes 2 y el último de la permanencia). Detalle en [`proceso-comercial.md`](proceso-comercial.md).
- **Salida digna:** exportación completa de datos. Baja el miedo a "quedar atado" y es un argumento de venta.

Validar con los primeros clientes: ¿la cuota de Gestión se paga sin fricción? ¿el plan Integral se vende o asusta?
Ajustar precios recién con 5 cierres.

## 4. Embudo

```
Instagram / LinkedIn / Google / boca a boca
          ↓
Sitio: caso de éxito de su rubro  →  Autodiagnóstico (2 min)
          ↓
Charla inicial sin costo de 20–30 min (WhatsApp o agenda)
          ↓
Relevamiento y propuesta pagos (1 cuota, vale como mes 1)
          ↓
Aceptación: 2 cuotas más  →  primera versión en 3–8 semanas  →  mejora mensual  →  caso de éxito nuevo  →  referidos
```

- **Imán de clientes:** el autodiagnóstico (`/diagnostico`). Sin formulario: recomienda uno de los 3 planes y el
  resultado se manda por WhatsApp ya redactado, así el lead llega con contexto y con un plan en mente.
- **Charla inicial:** ver si encajamos y explicar el proceso con `/como-trabajamos`. No se regala diagnóstico.
- **Relevamiento y propuesta:** pagos. La propuesta se presenta en vivo; si no compran, se llevan solo el informe
  escrito, no los diseños (ver [`proceso-comercial.md`](proceso-comercial.md)).

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

- [x] Dominio: fogonestudio.com.ar (fogon.com.ar está tomado). Pendiente: marca en INPI (clase 42) y usuario en redes.
- [ ] Cargar WhatsApp y agenda en `src/site.ts`.
- [ ] Pedir permiso a cada cliente para mostrar su caso (y, si es posible, una frase textual suya).
- [ ] Validar precios con los primeros 5 diagnósticos.
- [ ] Perfil de Google Business y Search Console.
