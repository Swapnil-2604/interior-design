"use client";

import { useLayoutEffect, useRef, useState, useCallback } from "react";
import { gsap, ScrollTrigger, usePrefersReducedMotion } from "@/lib/animations";
import { studio } from "@/lib/site";
import TextReveal from "./TextReveal";

/* ── frame-sequence hero ────────────────────────────────────────────────
   Drop-in replacement for the video scrubber: 300 PNGs (frame-0001 …
   frame-0300) preloaded as Image objects, drawn via <img> src-swap in
   sync with GSAP ScrollTrigger.  Same visual language, same copy,
   same animations. */

const TOTAL_FRAMES = 300;
const framePath = (i: number) =>
  `/frames/frame-${String(i + 1).padStart(4, "0")}.webp`;

export default function FrameScrubber() {
  const runwayRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const [ready, setReady] = useState(false);

  /* frame cache: index → preloaded Image */
  const cacheRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const lastIdx = useRef(-1);

  /* Helper to trigger load of a single frame */
  const loadSingleFrame = useCallback((i: number): HTMLImageElement => {
    const existing = cacheRef.current.get(i);
    if (existing) return existing;

    const img = new Image();
    img.src = framePath(i);
    img.onload = () => {
      if (lastIdx.current === i && imgRef.current) {
        imgRef.current.src = img.src;
      }
    };
    cacheRef.current.set(i, img);
    return img;
  }, []);

  /* ── instant first-frame load + progressive background streaming ────── */
  useLayoutEffect(() => {
    let cancelled = false;
    const cache = cacheRef.current;

    // 1. Instantly load initial frame 0 to mark page ready without waiting
    const frame0 = new Image();
    frame0.src = framePath(0);
    const onFrame0Load = () => {
      if (cancelled) return;
      cache.set(0, frame0);
      setReady(true);
      ScrollTrigger.refresh();
    };

    if (frame0.complete) {
      onFrame0Load();
    } else {
      frame0.onload = onFrame0Load;
    }

    // 2. Build prioritized background loading queue (keyframes first, then remainder)
    const loadQueue: number[] = [];
    for (let i = 1; i < TOTAL_FRAMES; i += 5) {
      loadQueue.push(i);
    }
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      if (i % 5 !== 0) loadQueue.push(i);
    }

    let qIdx = 0;
    const BATCH = 15;
    const loadNextBatch = () => {
      if (cancelled || qIdx >= loadQueue.length) return;
      const end = Math.min(qIdx + BATCH, loadQueue.length);
      for (let i = qIdx; i < end; i++) {
        const idx = loadQueue[i];
        if (!cache.has(idx)) {
          const img = new Image();
          img.src = framePath(idx);
          img.onload = () => {
            if (!cancelled) cache.set(idx, img);
          };
          cache.set(idx, img);
        }
      }
      qIdx = end;
      if (qIdx < loadQueue.length) {
        requestAnimationFrame(loadNextBatch);
      }
    };

    requestAnimationFrame(loadNextBatch);

    return () => {
      cancelled = true;
    };
  }, []);

  /* ── draw a frame with fallback to nearest cached frame ───────────── */
  const showFrame = useCallback((index: number) => {
    const img = imgRef.current;
    if (!img) return;
    lastIdx.current = index;

    const frame = cacheRef.current.get(index);
    if (frame && frame.complete && frame.naturalWidth > 0) {
      img.src = frame.src;
      return;
    }

    // Trigger load for missing frame
    loadSingleFrame(index);

    // Fallback to nearest complete frame in cache
    let bestDist = Infinity;
    let bestFrame: HTMLImageElement | null = null;
    cacheRef.current.forEach((cachedImg, idx) => {
      if (cachedImg.complete && cachedImg.naturalWidth > 0) {
        const dist = Math.abs(idx - index);
        if (dist < bestDist) {
          bestDist = dist;
          bestFrame = cachedImg;
        }
      }
    });

    if (bestFrame) {
      img.src = (bestFrame as HTMLImageElement).src;
    } else {
      img.src = framePath(index);
    }
  }, [loadSingleFrame]);

  /* ── reduced-motion: show a single static mid-frame ───────────────── */
  useLayoutEffect(() => {
    if (!reduced || !ready) return;
    showFrame(Math.floor(TOTAL_FRAMES * 0.45));
  }, [reduced, ready, showFrame]);

  /* ── show frame 0 when first ready ─────────────────────────────────── */
  useLayoutEffect(() => {
    if (ready && !reduced) showFrame(0);
  }, [ready, reduced, showFrame]);

  /* ── main scrub + animation setup ──────────────────────────────────── */
  useLayoutEffect(() => {
    const runway = runwayRef.current;
    const img = imgRef.current;
    const copy = copyRef.current;
    if (!runway || !img || !copy || reduced || !ready) return;

    /* ── GSAP context ──────────────────────────────────────────────── */
    const ctx = gsap.context(() => {
      /* ScrollTrigger: scroll progress → frame index with ease-in-out */
      ScrollTrigger.create({
        trigger: runway,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const raw = self.progress;
          /* smooth ease-in-out: slow start, even middle, slow finish */
          const eased =
            raw < 0.5
              ? 2 * raw * raw
              : 1 - (-2 * raw + 2) ** 2 / 2;
          const index = Math.min(
            Math.floor(eased * TOTAL_FRAMES),
            TOTAL_FRAMES - 1,
          );
          if (index !== lastIdx.current) showFrame(index);
        },
      });

      /* A whisper of camera movement so the frame never feels frozen. */
      gsap.fromTo(
        img,
        { scale: 1.06 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: runway,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        },
      );

      /* Copy drifts up and away as the first scroll momentum builds. */
      gsap.to(copy, {
        autoAlpha: 0,
        yPercent: -26,
        ease: "none",
        scrollTrigger: {
          trigger: runway,
          start: "top top",
          end: "22% top",
          scrub: true,
        },
      });

      /* Entrance: rise-in with a light stagger as the veil clears. */
      gsap.from(copy.querySelectorAll<HTMLElement>("[data-hero]"), {
        autoAlpha: 0,
        y: 26,
        duration: 1.3,
        ease: "power3.out",
        stagger: 0.09,
        delay: 0.15,
        clearProps: "all",
      });
    }, runway);

    /* ── cleanup ───────────────────────────────────────────────────── */
    return () => ctx.revert();
  }, [reduced, ready, showFrame]);

  return (
    <div
      id="top"
      ref={runwayRef}
      className="hero-runway relative h-[500vh] sm:h-[700vh]"
    >
      <div className="sticky top-0 h-svh w-full overflow-hidden bg-ink">
        <img
          ref={imgRef}
          src={framePath(0)}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover will-change-transform"
        />

        {/* legibility scrims (functional, over the film frame only) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-black/30" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink/70 to-transparent" />

        {/* copy */}
        <div
          ref={copyRef}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-paper"
        >
          <p
            data-hero
            className="mb-7 text-[10px] uppercase tracking-far text-paper/70 md:mb-9 md:text-[11px]"
          >
            {studio.tagline}
          </p>
          <TextReveal
            as="h1"
            className="font-sans text-[clamp(1.9rem,6.2vw,5.4rem)] font-light uppercase leading-[1.02] tracking-[0.02em] text-paper"
            speed={1.2}
            stagger={0.06}
            delay={0.2}
          >
            <span className="block" data-line>We don&apos;t just</span>
            <span className="block" data-line>design spaces.</span>
            <span className="block mt-3 text-taupe md:mt-4" data-line>We design how</span>
            <span className="block" data-line>
              they <em className="font-serif font-light italic text-brass">feel</em>.
            </span>
          </TextReveal>
          <div
            data-hero
            className="absolute bottom-9 left-0 right-0 flex flex-col items-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-luxe text-paper/60">
              Scroll
            </span>
            <span className="scroll-indicator" aria-hidden="true" />
          </div>
        </div>

        {/* loading veil */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 z-20 bg-ink transition-opacity duration-700 ${ ready ? "opacity-0" : "opacity-100"}`}
        />
      </div>
    </div>
  );
}
