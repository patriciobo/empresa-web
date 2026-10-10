// Genera public/og.png (imagen para compartir en redes) con la foto del hero. Uso: npm run og
import sharp from "sharp";

const foto = new URL("../public/alt/fuego-hero.webp", import.meta.url).pathname;
const texto = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs><linearGradient id="v" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#0c0b0a" stop-opacity=".55"/><stop offset=".45" stop-color="#0c0b0a" stop-opacity=".15"/><stop offset="1" stop-color="#0c0b0a" stop-opacity=".9"/>
  </linearGradient></defs>
  <rect width="1200" height="630" fill="url(#v)"/>
  <text x="56" y="70" font-family="Helvetica, Arial, sans-serif" font-size="34" font-weight="700" fill="#ece6dc" letter-spacing="-1">Fogón</text>
  <text x="1144" y="68" text-anchor="end" font-family="Menlo, monospace" font-size="18" fill="#ece6dc">SOFTWARE · WEB · MARCA · DATOS</text>
  <line x1="56" y1="96" x2="1144" y2="96" stroke="#ece6dc" stroke-opacity=".2"/>
  <text x="56" y="430" font-family="Helvetica, Arial, sans-serif" font-size="74" font-weight="600" fill="#ece6dc" letter-spacing="-3.5">Tu socio en tecnología</text>
  <text x="56" y="510" font-family="Helvetica, Arial, sans-serif" font-size="74" font-weight="600" fill="#ff5a1f" letter-spacing="-3.5">e identidad digital.</text>
  <line x1="56" y1="556" x2="1144" y2="556" stroke="#ece6dc" stroke-opacity=".2"/>
  <text x="56" y="592" font-family="Menlo, monospace" font-size="18" fill="#b9b2a7">SERVICIOS A MEDIDA · CUALQUIER RUBRO · CUOTA MENSUAL FIJA</text>
</svg>`;

await sharp(foto)
  .resize(1200, 630, { fit: "cover", position: "left" })
  .composite([{ input: Buffer.from(texto) }])
  .png()
  .toFile(new URL("../public/og.png", import.meta.url).pathname);
console.log("public/og.png");
