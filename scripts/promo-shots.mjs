// Capturas del sitio en celular para promo.yaml (screenshots). Requiere el sitio corriendo:
//   npm run build && npm run preview -- --port 4329   (en otra terminal)
//   npm run promo:shots
import { chromium } from "playwright";
import sharp from "sharp";

const BASE = process.env.PROMO_URL ?? "http://localhost:4329";
const SHOTS = [
  ["inicio", "/", 0],
  ["proyectos", "/proyectos", 0],
  ["caso-consultorio", "/proyectos/consultorio", 0],
  ["caso-obras", "/proyectos/obras-trazabilidad", 0],
  ["autodiagnostico", "/diagnostico", 0],
  ["planes", "/planes", 420],
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, colorScheme: "light" });
for (const [nombre, ruta, scroll] of SHOTS) {
  await page.goto(BASE + ruta, { waitUntil: "networkidle" });
  if (scroll) await page.evaluate((y) => window.scrollTo(0, y), scroll);
  await page.waitForTimeout(300);
  await sharp(await page.screenshot()).resize({ width: 1080 }).webp({ quality: 82 }).toFile(`.promo/shots/${nombre}.webp`);
  console.log(`.promo/shots/${nombre}.webp`);
}
await browser.close();
