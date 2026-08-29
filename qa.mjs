import { chromium } from 'playwright'
import fs from 'node:fs'

const OUT = 'C:/Users/olaol/AppData/Local/Temp/opencode/qa'
fs.mkdirSync(OUT, { recursive: true })

const chromePath =
  process.env.CHROME ||
  'C:/Program Files/Google/Chrome/Application/chrome.exe'
const URL = process.env.URL || 'http://localhost:4173/'

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true,
})

const results = []

async function audit(name, viewport, reduced) {
  const page = await browser.newPage({
    viewport,
    reducedMotion: reduced || 'no-preference',
  })
  const errors = []
  page.on('console', (m) => {
    if (m.type() === 'error') errors.push(`[console] ${m.text()}`)
  })
  page.on('pageerror', (e) => errors.push(`[pageerror] ${e.message}`))
  page.on('requestfailed', (r) =>
    errors.push(`[requestfailed] ${r.url()} ${r.failure()?.errorText || ''}`),
  )

  await page.goto(URL, { waitUntil: 'load' })
  await page.waitForTimeout(2200)

  const overflow = await page.evaluate(() => ({
    scrollW: document.documentElement.scrollWidth,
    innerW: window.innerWidth,
    overflowX: document.documentElement.scrollWidth > window.innerWidth + 1,
  }))
  const h = await page.evaluate(() => document.documentElement.scrollHeight)
  errors.push(...(await scrollTest(page, [
    ['top', 0],
    ['work', '#work'],
    ['about', '#about'],
    ['toolkit', 0],
    ['experience', '#experience'],
    ['credentials', '#credentials'],
    ['contact', '#contact'],
  ])))
  results.push({ name, overflow, height: h, errors })

  // section captures via element bounds (bounded size)
  const sections = [
    ['hero', '#home'],
    ['work', '#work'],
    ['about', '#about'],
    ['toolkit', '.toolkit-root'],
    ['more', '.experience-root'],
    ['credentials', '#credentials'],
    ['contact', '#contact'],
  ]
  for (const [s, sel] of sections) {
    const el = page.locator(sel).first()
    if (await el.count()) {
      await el.scrollIntoViewIfNeeded()
      await page.waitForTimeout(700)
      await el.screenshot({ path: `${OUT}/${name}-${s}.png` })
    }
  }
  await page.close()
}

async function scrollTest(page, points) {
  const errs = []
  for (const [label, sel] of points) {
    const before = await page.evaluate(
      (s) => (s ? document.querySelector(s)?.getBoundingClientRect().top : -1),
      sel,
    )
    if (typeof before === 'number' && before >= 0 && before > 2) {
      await page.evaluate((s) => document.querySelector(s)?.scrollIntoView(), sel)
      await page.waitForTimeout(700)
    } else if (sel === 0) {
      await page.evaluate(() => window.scrollTo(0, 0))
      await page.waitForTimeout(500)
    }
  }
  return errs.length ? errs : []
}

await audit('desktop', { width: 1440, height: 900 }, 'no-preference')
await audit('tablet', { width: 820, height: 1180 }, 'no-preference')
await audit('mobile', { width: 390, height: 844 }, 'no-preference')
await audit('mobile-reduced', { width: 390, height: 844 }, 'reduce')

fs.writeFileSync(`${OUT}/results.json`, JSON.stringify(results, null, 2))
for (const r of results) {
  console.log(`\n### ${r.name}`)
  console.log(
    'overflowX:',
    r.overflow.overflowX,
    `scrollW=${r.overflow.scrollW} innerW=${r.overflow.innerW}`,
  )
  console.log('page height:', r.height)
  console.log('errors:', r.errors.length ? r.errors : 'none')
}

await browser.close()