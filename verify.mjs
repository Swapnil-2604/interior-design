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

  // homepage-exclusive editorial sections all render
  const homeSections = ["signature-works", "rooms-we-craft", "journey", "field-notes", "press", "begin-project"];
  for (const id of homeSections) {
    check(`[${vp.name}] section #${id} present`, (await page.$(`#${id}`)) !== null);
  }

  // hero uses image frames, not video
  const frameImg = await page.evaluate(() => {
    const img = document.querySelector(".hero-runway img");
    if (!img) return null;
    return {
      src: img.getAttribute("src"),
      objectCover: img.classList.contains("object-cover"),
      ariaHidden: img.getAttribute("aria-hidden"),
      alt: img.getAttribute("alt"),
    };
  });
  check(`[${vp.name}] hero frame img exists`, !!frameImg);
  if (frameImg) {
    check(`[${vp.name}] img src is a frame from /frames/`, frameImg.src.includes("/frames/frame-"));
    check(`[${vp.name}] img object-cover`, frameImg.objectCover);
    check(`[${vp.name}] img aria-hidden`, frameImg.ariaHidden === "true");
    check(`[${vp.name}] img has empty alt`, frameImg.alt === "");
  }

  // scroll scrub: forward then reverse, desktop only (mobile runway differs)
  if (vp.name === "desktop") {
    const frameNum = (src) => {
      const m = src.match(/frame-(\d{4})\.png$/);
      return m ? parseInt(m[1], 10) : 0;
    };
    const runwayH = await page.evaluate(() => {
      const r = document.querySelector(".hero-runway");
      return r ? r.getBoundingClientRect().height : 0;
    });
    const scrollTo = async (y) => {
      await page.evaluate((y) => window.scrollTo(0, y), y);
      await page.waitForTimeout(450);
      return page.evaluate(() => {
        const img = document.querySelector(".hero-runway img");
        return img ? img.getAttribute("src") : "";
      });
    };
    const s0 = await page.evaluate(() => {
      const img = document.querySelector(".hero-runway img");
      return img ? img.getAttribute("src") : "";
    });
    const f0 = frameNum(s0);
    const fFwd = frameNum(await scrollTo(Math.floor(runwayH * 0.4)));
    const fFwd2 = frameNum(await scrollTo(Math.floor(runwayH * 0.7)));
    const fBack = frameNum(await scrollTo(60));

    check(`[${vp.name}] scrub advances with scroll`, fFwd > f0 + 20, `frame@0=${f0} frame@40%=${fFwd}`);
    check(`[${vp.name}] scrub continues forward`, fFwd2 > fFwd + 20, `frame@40%=${fFwd} frame@70%=${fFwd2}`);
    check(`[${vp.name}] scrub reverses when scrolling up`, fBack < fFwd2 - 20, `frame@70%=${fFwd2} frame@top=${fBack}`);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(400);
  }

  // screenshots
  await page.screenshot({ path: path.join(SHOTS, `${vp.name}-hero.png`) });
  // services now lives on its own route — navigate there for the mid-page shot
  await page.goto(`${BASE}/services`, { waitUntil: "load" });
  await page.waitForTimeout(1400);
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

  const src = await page.evaluate(() => {
    const img = document.querySelector(".hero-runway img");
    return img ? img.getAttribute("src") : "";
  });
  const midMatch = src.match(/frame-(\d{4})\.png$/);
  const mid = midMatch ? parseInt(midMatch[1], 10) : 0;
  check("[reduced-motion] image parked at a static mid-frame", mid > 60 && mid < 210, `frame=${mid}`);

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

  // click a menu link -> closes overlay and navigates to /services#process
  await page.locator("nav a:visible").filter({ hasText: "Process" }).first().click();
  await page.waitForTimeout(1600);
  const url = page.url();
  const moved = await page.evaluate(() => {
    const el = document.getElementById("process");
    return el ? el.getBoundingClientRect().top : -999;
  });
  check("[mobile] menu link navigates to services page", url.includes("/services"), url);
  check("[mobile] hash lands on process section", Math.abs(moved) < 140, `process.top=${moved}`);
  check("[mobile] no console errors", errors.length === 0, errors.slice(0, 3).join(" | ") || "clean");
  await context.close();
}

await browser.close();

console.log(`\n==== ${passes} passed, ${failures} failed ====`);
process.exit(failures > 0 ? 1 : 0);
