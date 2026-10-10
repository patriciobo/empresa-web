# Fogón · sitio institucional

Sitio de la empresa (Astro, estático): servicios, proyectos como casos de éxito, planes por suscripción y
autodiagnóstico. El dominio (`fogonestudio.com.ar`) vive en `src/site.ts`, `astro.config.mjs` y `promo.yaml`.

## Comandos

```bash
npm install
npm run dev          # http://localhost:4321
npm run proyectos    # relee los repos de proyectos.yaml → src/data/proyectos.json, public/proyectos/, public/promo-feed.json
npm run build        # chequeo de tipos + build estático en dist/
npm run preview
npm run og           # regenera public/og.png
```

## Dónde editar

- `src/site.ts`: nombre, dominio, email, WhatsApp, agenda y redes. Si cambia el dominio, también en `astro.config.mjs`.
- `src/content.ts`: servicios, beneficios, proceso, **planes y precios**, preguntas frecuentes y autodiagnóstico.
- Diseño: estilo editorial (`~/.claude/skills/diseno-editorial`). Tokens en `src/styles/editorial.css`, layout en
  `src/layouts/Editorial.astro`, piezas en `src/components/`. Fotos del hero y del cierre en `public/alt/` (Unsplash).
- `proyectos.yaml`: proyectos que se muestran (ver abajo).
- `docs/estrategia-comercial.md` y `docs/estrategia-redes.md`: posicionamiento, precios, embudo y plan de contenidos.

## Sumar un proyecto

1. Agregar una entrada en `proyectos.yaml` con `path` (carpeta local) o `repo` (`owner/nombre` en GitHub;
   para repos privados exportar `GITHUB_TOKEN`).
2. `npm run proyectos` (o `npm run proyectos -- <slug>` para uno solo).

El script lee `promo.yaml`, `README.md` y `package.json` del repo: nombre, tagline, descripción, funciones,
colores, logo, capturas y tecnologías. Lo que el repo no dice (desafío, solución, mejoras de proceso, beneficios
por usuario, rubro) se escribe en `proyectos.yaml` y pisa lo leído. El script avisa qué conviene completar.

Si el repo tiene `promo.yaml` con `screenshots`, esas capturas se usan en el sitio. Para repos sin capturas, se
pueden pasar `imagenes:` en `proyectos.yaml` o generarlas en el repo con el flujo de Promo Studio.

## Promo Studio

`promo.yaml` describe la empresa para generar contenido de Instagram. Fuentes: `promo-feed.json` (un caso de éxito
por proyecto, sólo texto) y `llms.txt`.

Los posts no usan capturas del sitio de Fogón ni de los sistemas de los clientes: no se promociona la página sino
soluciones a medida. Si un post necesita mostrar una pantalla, la imagen IA dibuja una interfaz inventada e
ilustrativa (gráfico, formulario, tablero) acorde al tema (`brand.imageStyle` y `avoid`).

```bash
npm run proyectos   # regenera public/promo-feed.json
bash ~/.claude/skills/promo-yaml/validate.sh promo.yaml
```

Commitear y pushear `promo.yaml` y `public/`, publicar el sitio y "Sincronizar" en Promo Studio.

## SEO y asistentes de IA

Título, descripción, canonical y Open Graph por página; JSON-LD (`ProfessionalService`, `FAQPage`,
`CreativeWork`, `ItemList`, `BreadcrumbList`); `sitemap-index.xml`; `robots.txt` que permite a buscadores y
asistentes de IA; `llms.txt` con servicios, planes, proyectos y FAQ.

## Deploy

`dist/` es HTML/CSS estático: Vercel, Netlify, Cloudflare Pages o cualquier hosting estático
(build `npm run build`, salida `dist`).
