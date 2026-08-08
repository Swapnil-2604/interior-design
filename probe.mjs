/* Scroll-scrub sampler: watch video.currentTime as we scroll through the runway. */
import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on("console", (m) => m.type() === "error" && console.log("[console.error]", m.text().slice(0, 200)));
page.on("pageerror", (e) => console.log("[pageerror]", String(e).slice(0, 200)));

await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(2500);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const snap = () =>
  page.evaluate(() => {
    const v = document.querySelector("video");
    const r = document.querySelector(".hero-runway");
    if (!v) return null;
    const buf = [];
    for (let i = 0; i < v.buffered.length; i++) buf.push(`${v.buffered.start(i).toFixed(2)}-${v.buffered.end(i).toFixed(2)}`);
    return {
      t: +v.currentTime.toFixed(3),
      seeking: v.seeking,
      paused: v.paused,
      readyState: v.readyState,
      dur: +v.duration.toFixed(3),
      buf: buf.join(";"),
      heroH: r ? Math.round(r.getBoundingClientRect().height) : null,
      maxScroll: document.documentElement.scrollHeight - innerHeight,
    };
  });

console.log("initial:", await snap());

async function scrollTo(y, settle = 500) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await sleep(settle);
  return snap();
}

for (const p of [0.1, 0.25, 0.4, 0.5, 0.6, 0.75, 0.9]) {
  const s = await scrollTo(Math.floor(6300 * p));
  console.log(`p=${p.toFixed(2)} t=${s.t} seeking=${s.seeking} rs=${s.readyState} buf=${s.buf}`);
}

await browser.close();
