#!/usr/bin/env node
// Capturas de los flujos del promo.yaml para Promo Studio.
// Levanta la app en local (con `capture.start`), entra con el usuario demo y saca una captura por paso
// en .promo/screens/<flujo>/<n>.png, sin texto encima: Promo Studio las importa al sincronizar.
//
// Uso (desde la raíz del repo):  PROMO_USER=demo@ejemplo.com PROMO_PASS=... node .promo/capture.mjs [--flow <id>] [--no-start] [--yaml ruta/promo.yaml]
// Requiere en el repo: npm i -D playwright yaml && npx playwright install chromium
// Copiado de ~/.claude/skills/promo-yaml/capture.mjs: actualizalo desde ahí.
import { execSync, spawn } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, rmSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { chromium, devices } from 'playwright'
import { parse } from 'yaml'

const args = process.argv.slice(2)
const flag = (name) => (args.includes(name) ? args[args.indexOf(name) + 1] : undefined)
const root = execSync('git rev-parse --show-toplevel').toString().trim()
const yamlPath = resolve(flag('--yaml') ?? join(root, 'promo.yaml'))
const m = parse(readFileSync(yamlPath, 'utf8'))
const cap = m.capture
if (!cap?.url) fail('falta capture.url en el promo.yaml')
const flows = (m.flows ?? []).filter((f) => !flag('--flow') || f.id === flag('--flow'))
if (!flows.length) fail(flag('--flow') ? `no hay un flujo con id ${flag('--flow')}` : 'el promo.yaml no tiene flows')

function fail(msg) {
  console.error(`✗ ${msg}`)
  process.exit(1)
}

// "$PROMO_USER" → valor de la variable de entorno (las claves nunca van en el yaml).
const env = (v) => String(v).replace(/\$([A-Z_][A-Z0-9_]*)/g, (_, k) => process.env[k] ?? fail(`falta la variable de entorno ${k}`))
const base = cap.url.replace(/\/$/, '')
const up = () => fetch(base, { signal: AbortSignal.timeout(3000) }).then(() => true, () => false)

let server
async function start() {
  if (cap.seed) {
    console.log(`→ seed: ${cap.seed}`)
    execSync(cap.seed, { cwd: root, stdio: 'inherit' })
  }
  if (await up()) return console.log(`→ ${base} ya responde, uso ese servidor`)
  if (args.includes('--no-start') || !cap.start) fail(`${base} no responde`)
  console.log(`→ levantando: ${cap.start}`)
  server = spawn(cap.start, { cwd: root, shell: true, detached: true, stdio: 'ignore' })
  for (let i = 0; i < 120; i++) {
    if (await up()) return
    await new Promise((r) => setTimeout(r, 1000))
  }
  fail(`${base} no respondió en 2 minutos`)
}
const stop = () => {
  if (!server) return
  try {
    process.kill(-server.pid) // todo el grupo: npm run dev lanza procesos hijos
  } catch {}
  server = null
}
process.on('exit', stop)
process.on('SIGINT', () => process.exit(130))

async function run(page, actions = []) {
  for (const a of actions) {
    if (a.click) await page.locator(a.click).first().click()
    else if (a.fill) await page.locator(a.fill).first().fill(env(a.value))
    else if (a.waitFor) await (a.waitFor.startsWith('/') ? page.waitForURL(`**${a.waitFor}**`) : page.locator(a.waitFor).first().waitFor())
    else if (a.scroll) await page.mouse.wheel(0, a.scroll)
  }
}

async function settle(page) {
  await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {})
  await page.evaluate(() => document.fonts.ready)
  await page.waitForTimeout(400)
}

await start()
const browser = await chromium.launch()
const device = cap.device === 'desktop' ? { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 } : devices['iPhone 13']
const lang = (m.languages?.[0] ?? 'es').startsWith('es') ? 'es-AR' : m.languages[0]
const context = await browser.newContext({ ...device, locale: lang, colorScheme: 'light', reducedMotion: 'reduce' })
const page = await context.newPage()
let failed = 0
try {
  if (cap.login) {
    console.log('→ login')
    await page.goto(base + cap.login.path)
    await run(page, cap.login.steps)
    await settle(page)
  }
  for (const flow of flows) {
    const dir = join(root, '.promo/screens', flow.id)
    if (existsSync(dir)) rmSync(dir, { recursive: true })
    mkdirSync(dir, { recursive: true })
    for (const [n, step] of flow.steps.entries()) {
      const out = join(dir, `${n + 1}.png`)
      try {
        await page.goto(base + step.path)
        await run(page, step.actions)
        await settle(page)
        await page.screenshot({ path: out, animations: 'disabled', mask: (cap.mask ?? []).map((s) => page.locator(s)), maskColor: cap.maskColor ?? '#e4e4e4' })
        console.log(`✓ ${flow.id} ${n + 1}/${flow.steps.length}: ${step.shows}`)
      } catch (e) {
        failed++
        console.error(`✗ ${flow.id} ${n + 1}/${flow.steps.length} (${step.path}): ${e.message.split('\n')[0]}`)
      }
    }
  }
} finally {
  await browser.close()
  stop()
}
console.log(failed ? `\n${failed} pasos fallaron: revisá path/actions en el promo.yaml.` : '\nListo. Commiteá .promo/screens y sincronizá en Promo Studio.')
process.exit(failed ? 1 : 0)
