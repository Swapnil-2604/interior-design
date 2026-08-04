/* Browser verification for the interior-design scroll site.
   Run: node verify.mjs  (dev server must be running on :3000)
   Exits non-zero if any critical check fails. Saves screenshots to ./shots */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const BASE = process.env.BASE_URL || "http://localhost:3000";
const SHOTS = path.resolve("shots");
fs.mkdirSync(SHOTS, { recursive: true });

let failures = 0;
let passes = 0;
const results = [];
const check = (name, ok, detail = "") => {
  results.push({ name, ok, detail });
  if (ok) passes++;
  else failures++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail ? ` — ${detail}` : ""}`);
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 834, height: 1112 },
  { name: "mobile", width: 390, height: 844 },
];

const browser = await chromium.launch();

for (const vp of viewports) {
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  const consoleErrors = [];
  const pageErrors = [];
  page.on("console", (m) => {
    if (m.type() === "error") consoleErrors.push(m.text());
  });
  page.on("pageerror", (e) => pageErrors.push(String(e)));

  await page.goto(BASE, { waitUntil: "load" });
  // let fonts + video metadata + reveals settle
  await page.waitForTimeout(1800);

  console.log(`\n=== ${vp.name} (${vp.width}x${vp.height}) ===`);

  // no horizontal overflow
  const overflow = await page.evaluate(() => {
    const de = document.documentElement;
    return { sw: de.scrollWidth, cw: de.clientWidth };
  });
  check(
    `[${vp.name}] no horizontal overflow`,
    overflow.sw <= overflow.cw + 1,
    `scrollWidth=${overflow.sw} clientWidth=${overflow.cw}`,
  );

  // video present + correct attributes
  const vid = await page.evaluate(() => {
    const v = document.querySelector("video");
    if (!v) return null;
    return {
      muted: v.muted,
      playsInline: v.hasAttribute("playsinline"),
      controls: v.hasAttribute("controls"),
      preload: v.getAttribute("preload"),
      src: v.getAttribute("src"),
      tabIndex: v.tabIndex,
    };
  });
  check(`[${vp.name}] video exists`, !!vid);
  if (vid) {
    check(`[${vp.name}] video muted`, vid.muted === true);
    check(`[${vp.name}] video playsInline`, vid.playsInline);
    check(`[${vp.name}] video has NO controls`, vid.controls === false);
    check(`[${vp.name}] video preload=auto`, vid.preload === "auto");
    check(`[${vp.name}] video uses /video.mp4`, vid.src.includes("/video.mp4"));
  }

  // scroll scrub: forward then reverse, desktop only (mobile runway differs)
  if (vp.name === "desktop") {
    const t0 = await page.evaluate(() => {
      const v = document.querySelector("video");
      return v ? v.currentTime : -1;
    });
    // runway is 400vh tall at desktop => ~4 * innerHeight
    const runwayH = await page.evaluate(() => {
      const r = document.querySelector(".hero-runway");
      return r ? r.getBoundingClientRect().height : 0;
    });
    const scrollTo = async (y) => {
      await page.evaluate((y) => window.scrollTo(0, y), y);
      await page.waitForTimeout(450);
      return page.evaluate(() => {
        const v = document.querySelector("video");
        return v ? v.currentTime : -1;
      });
    };
    const tFwd = await scrollTo(Math.floor(runwayH * 0.4));
    const tFwd2 = await scrollTo(Math.floor(runwayH * 0.7));
    const tBack = await scrollTo(60);

    check(`[${vp.name}] scrub advances with scroll`, tFwd > t0 + 0.3, `t0=${t0.toFixed(2)} t@40%=${tFwd.toFixed(2)}`);
    check(`[${vp.name}] scrub continues forward`, tFwd2 > tFwd + 0.3, `t@40%=${tFwd.toFixed(2)} t@70%=${tFwd2.toFixed(2)}`);
    check(`[${vp.name}] scrub reverses when scrolling up`, tBack < tFwd2 - 0.3, `t@70%=${tFwd2.toFixed(2)} t@top=${tBack.toFixed(2)}`);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(400);
  }

  // screenshots
  await page.screenshot({ path: path.join(SHOTS, `${vp.name}-hero.png`) });
  // scroll to services for a mid-page shot
  await page.evaluate(() => document.getElementById("services")?.scrollIntoView());
  await page.waitForTimeout(900);
  await page.screenshot({ path: path.join(SHOTS, `${vp.name}-services.png`) });

  // console errors
  check(`[${vp.name}] no console errors`, consoleErrors.length === 0, consoleErrors.slice(0, 3).join(" | ") || "clean");
  check(`[${vp.name}] no page errors`, pageErrors.length === 0, pageErrors.slice(0, 3).join(" | ") || "clean");

  await context.close();
}

/* ---- reduced-motion behavior ---- */
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
  const page = await context.newPage();
  const errors = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.goto(BASE, { waitUntil: "load" });
  await page.waitForTimeout(1800);

  const runwayH = await page.evaluate(() => {
    const r = document.querySelector(".hero-runway");
    return r ? r.getBoundingClientRect().height : 0;
  });
  const vh = await page.evaluate(() => window.innerHeight);
  check("[reduced-motion] runway collapses to one viewport", Math.abs(runwayH - vh) < 4, `runway=${runwayH} vh=${vh}`);

  const t = await page.evaluate(() => {
    const v = document.querySelector("video");
    return v ? v.currentTime : -1;
  });
  check("[reduced-motion] video parked at a static mid-frame", t > 0.5 && t < 9.5, `currentTime=${t.toFixed(2)}`);

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1);
  check("[reduced-motion] no horizontal overflow", overflow);
  check("[reduced-motion] no console errors", errors.length === 0, errors.slice(0, 3).join(" | ") || "clean");
  await page.screenshot({ path: path.join(SHOTS, "reduced-motion-hero.png") });
  await context.close();
}

/* ---- mobile menu + smooth-scroll nav ---- */
{
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const page = await context.newPage();
  const errors = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.goto(BASE, { waitUntil: "load" });
  await page.waitForTimeout(1200);

  const menuBtn = page.locator('button[aria-label="Open menu"]');
  check("[mobile] menu button visible", await menuBtn.isVisible());
  await menuBtn.click();
  await page.waitForTimeout(700);
  const overlayVisible = await page.evaluate(() => {
    const m = document.querySelectorAll("nav a");
    // overlay links are the big serif ones; check body overflow locked instead
    return getComputedStyle(document.body).overflow === "hidden";
  });
  check("[mobile] menu overlay opens + body scroll locked", overlayVisible);
  await page.screenshot({ path: path.join(SHOTS, "mobile-menu.png") });

  // click a menu link -> closes overlay and smooth-scrolls
  await page.locator("nav a:visible").filter({ hasText: "Philosophy" }).first().click();
  await page.waitForTimeout(1200);
  const moved = await page.evaluate(() => {
    const el = document.getElementById("philosophy");
    return el ? el.getBoundingClientRect().top : -999;
  });
  check("[mobile] menu link smooth-scrolls to section", Math.abs(moved) < 60, `philosophy.top=${moved}`);
  check("[mobile] no console errors", errors.length === 0, errors.slice(0, 3).join(" | ") || "clean");
  await context.close();
}

await browser.close();

console.log(`\n==== ${passes} passed, ${failures} failed ====`);
process.exit(failures > 0 ? 1 : 0);
