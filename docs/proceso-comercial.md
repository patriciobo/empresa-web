# Proceso comercial

Documento interno: cómo se vende, cuándo y cuánto se cobra, y cómo se protege el trabajo antes de que el cliente
pague. Lo que ve el cliente está en `/como-trabajamos` (sale de `src/content.ts`: `PROCESO`, `RECORRIDOS`,
`CONDICIONES`) y en los checklists de `docs/checklists/`.

Mensaje central: **gestionar tu negocio de forma inteligente no es solo para empresas grandes.** Planes desde
US$ 39/mes, el desarrollo se reparte en la cuota y trabajamos con cualquier rubro.

## 1. Modelo de cobro (igual para todos los recorridos)

| Paso | Qué pasa | Cobro | Qué se lleva el cliente |
|---|---|---|---|
| 1. Charla inicial | 20–30 min. Ver si encajamos, explicar el proceso con `/como-trabajamos`, elegir recorrido. | Sin costo | Nada técnico. **No se da diagnóstico ni recomendaciones concretas.** |
| 2. Relevamiento y propuesta | Entrevistas, análisis, 2 direcciones de diseño, plan y cronograma. Presentación en videollamada. | **1 cuota** del plan (Integral: monto fijo, ver abajo). Por adelantado. | Informe escrito (hallazgos y prioridades). **No** los diseños. |
| 3. Arranque | Firma del contrato y comienzo de la producción. | **2 cuotas**: el mes 2 y el último mes de la permanencia (garantía). | Acceso a lo que se va construyendo. |
| 4. Mejora continua | Cuota mensual por débito automático (Mercado Pago). Una mejora por mes (Gestión). | Cuota mensual | El sistema funcionando y evolucionando. |

- Si acepta, la cuota del relevamiento **es la del mes 1**: no paga nada extra. Así se le explica al cliente.
- Antes de producir nada ya cobraste 3 cuotas: la del relevamiento y las 2 del arranque.
- Autodiagnóstico online (`/diagnostico`): sigue siendo gratis porque lo hace el cliente solo. Recomienda uno de
  los 3 planes (`clasificar()` en `src/content.ts`) y manda el resultado por WhatsApp.

### Montos de referencia (hipótesis a validar con los primeros 5 cierres)

| Plan | Cuota | Relevamiento | Permanencia | Cobrado antes de producir |
|---|---|---|---|---|
| Presencia | desde US$ 39 | 1 cuota (US$ 39) | 6 meses | 3 cuotas = US$ 117 |
| Gestión | desde US$ 89 | 1 cuota (US$ 89) | 12 meses | 3 cuotas = US$ 267 |
| Integral | US$ 200–400 | Monto fijo US$ 300–600 según tamaño (áreas, sedes, personas) | 12 meses | Relevamiento + 2 cuotas |

Precio en dólares y cobro en pesos al tipo de cambio del día de facturación.

## 2. Cómo asegurar que el cliente se quede

1. **Permanencia mínima.** 6 meses en Presencia y 12 en Gestión e Integral. Después, mes a mes.
2. **Último mes pagado por adelantado.** Es una de las 2 cuotas del arranque. Funciona como garantía: si deja de
   pagar, ese mes ya está cubierto y queda tiempo para gestionar la deuda.
3. **Baja anticipada.** Paga el desarrollo pendiente. Regla simple para el contrato: **50 % de las cuotas que
   faltan para completar la permanencia.** Ejemplo: en Gestión, si se da de baja en el mes 5, faltan 7 cuotas y
   paga 3,5.
4. **Propiedad.**
   - Los datos son siempre del cliente y se exportan en CSV o JSON cuando quiera.
   - Archivos fuente de marca (vectores, manual) y código o sitio: se ceden por escrito al terminar la permanencia,
     o antes si paga el saldo. Mientras tanto tiene licencia de uso.
5. **Débito automático** con Mercado Pago suscripciones. Si un pago falla, se avisa a los 3 días y el servicio se
   suspende a los 15 (va en el contrato).
6. **Valor que retiene.** El resumen mensual con los números, la mejora mensual y el bot de WhatsApp funcionando
   hacen que dar de baja cueste más que quedarse. Es el argumento principal; los puntos 1 a 5 son el respaldo.

> El contrato (cesión de derechos, baja anticipada, suspensión por falta de pago) lo tiene que revisar un abogado
> antes de usarlo.

## 3. Cómo mostrar la propuesta sin que se la lleven

- **Se presenta en vivo**, por videollamada compartiendo pantalla o en persona. No se manda por mail.
- **2 direcciones de diseño** (moodboard + home o pantalla principal), no el sitio ni el sistema completos.
- Si piden "verlo de nuevo", se comparte una **URL de prueba**:
  - con contraseña
  - con marca de agua "PROPUESTA – Fogón" sobre las imágenes
  - con `noindex`
  - que vence a los 7 días
- **Nada en vector ni en alta resolución** (logo, fuentes, archivos de diseño) hasta que paga las 2 cuotas del
  arranque.
- El informe escrito que se lleva si no avanza dice *qué* hay que resolver y en qué orden, no *cómo* queda
  diseñado.
- Logo: se muestra aplicado en mockups (cartel, tarjeta, perfil de Instagram) en baja resolución, nunca suelto
  sobre fondo transparente.

## 4. Recorridos

Cada uno tiene su checklist para compartir con el cliente en `docs/checklists/`.

| Recorrido | Para quién | Plan | Checklist |
|---|---|---|---|
| A. Marca y web | Necesita verse profesional y que lo encuentren | Presencia | `checklists/a-marca-y-web.md` |
| B. Ya tengo marca, quiero un sistema | Imagen resuelta, operación desordenada | Gestión | `checklists/b-sistema.md` |
| C. Operación compleja o todo junto | Varias áreas, sedes o más de 10 personas, o quiere marca + web + sistema + datos | Integral | `checklists/c-integral.md` |
| D. Ya tengo web o sistema | No quiere empezar de cero | El que corresponda | `checklists/d-existente.md` |

Para el autodiagnóstico, la clasificación es:
- **Integral:** más de 10 personas, o varias sedes o áreas, o Procesos y Datos por debajo del 40 %.
- **Gestión:** Procesos o Datos por debajo del 60 %.
- **Presencia:** el resto.

## 5. Bot de WhatsApp

| Plan | Qué hace |
|---|---|
| Presencia | Opcional: respuestas automáticas (horarios, precios, ubicación). |
| Gestión | Responde consultas frecuentes, da turnos y manda recordatorios conectado al sistema. |
| Integral | Asistente con IA que responde con la información del negocio y deriva a una persona. |

- La **WhatsApp Business API** de Meta cobra por conversación. Ese costo se le traslada al cliente al costo y va
  aparte de la cuota (figura en `CONDICIONES`).
- Hace falta un número dedicado o migrar el del negocio a la API (el número deja de usarse en la app común).
  Hay que avisarlo en el relevamiento.

## 6. Promesas del sitio que hay que poder cumplir

Revisar antes de cada cierre. Si alguna no se cumple, se saca del sitio (`src/content.ts`, `src/pages/planes.astro`).

- [ ] **Backups diarios.** Copia automática diaria de la base de cada cliente de Gestión e Integral, guardada
      fuera del servidor principal, con al menos una restauración probada. Ojo: los planes gratis de muchos
      proveedores de PostgreSQL no hacen backups.
- [ ] **Exportación de datos en CSV o JSON** en cada sistema.
- [ ] **Una mejora nueva por mes** (Gestión): tener horas reservadas.
- [ ] **Soporte por WhatsApp**: definir horario y tiempo de respuesta.
- [ ] **Tiempos:** sitio en 1 a 3 semanas y sistema en 3 a 8 semanas.
- [x] **"Sitio autoadministrable"**: se sacó del sitio; ahora dice "Sitio web o landing a medida" (si es editable o no depende de cada proyecto).
- [ ] **Preparado para asistentes de IA** (`llms.txt` y datos estructurados) en cada sitio entregado.
- [ ] **Revisión trimestral de objetivos** y **reunión mensual** (Integral): agendarlas desde el arranque.
- [ ] **Precios:** que la cuota de 12 meses cubra las horas de desarrollo. Si no, subir la cuota.
