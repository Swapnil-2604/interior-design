/* Capture each section for visual verification, per page route. */
import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on("pageerror", (e) => console.log("[pageerror]", String(e).slice(0, 300)));
page.on("console", (m) => m.type() === "error" && console.log("[console.error]", m.text().slice(0, 300)));

/* Each route and the sections to capture on it (in page order). */
const pages = [
  ["/", ["01-hero", "#top"], ["02-story", "#story"], ["h1-signature", "#signature-works"], ["h2-rooms", "#rooms-we-craft"], ["h3-journey", "#journey"], ["h4-field-notes", "#field-notes"], ["h5-press", "#press"], ["h6-begin", "#begin-project"]],
  ["/services", ["03-services", "#services"], ["04-process", "#process"], ["05-philosophy", "#philosophy"]],
  ["/work", ["06-styles", "#styles"], ["07-work", "#work"], ["08-why", "#why"], ["09-beforeafter", "#before-after"], ["10-materials", "#materials"]],
  ["/calculator", ["11-calculator", "#calculator"]],
  ["/about", ["12-about", "#about"], ["13-team", "#team"], ["15-locations", "#locations"]],
  ["/contact", ["14-testimonials", "#testimonials"], ["17-contact", "#contact"]],
  ["/journal", ["16-journal", "#journal"]],
];

for (const [route, ...targets] of pages) {
  await page.goto(`http://localhost:3000${route}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1800);

  for (const [name, sel] of targets) {
    const el = await page.$(sel);
    if (!el) { console.log("MISSING", sel); continue; }
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(450);
    await page.screenshot({ path: `shots/${name}.png` });
    console.log("captured", name);
  }
}

await browser.close();
