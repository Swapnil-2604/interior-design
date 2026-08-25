"use client";

import { useCallback, useRef, useState } from "react";
import Reveal from "./Reveal";
import TextReveal from "./TextReveal";
import { PLATES } from "./plates";
import { beforeAfter } from "@/lib/site";

/** Each room is one drafting plate rendered twice: dimmed on the left
 *  ("before"), fully inked on the right ("after"). The draggable brass
 *  divider clips between the two — the same space, before and after the
 *  light. */
const ROOM_PLATES = ["plan", "section", "arch"] as const;

export default function BeforeAfter() {
  const [room, setRoom] = useState(0);
  const [pos, setPos] = useState(55);
  const frameRef = useRef<HTMLDivElement>(null);
  const drag = useRef(false);

  const Plate = PLATES[ROOM_PLATES[room]];

  const setFromX = useCallback((clientX: number) => {
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.round(Math.min(94, Math.max(6, pct))));
  }, []);

  return (
    <section id="before-after" className="relative bg-paper py-32 text-ink md:py-44">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal as="div" y={0} duration={1}>
          <div className="flex items-center gap-5">
            <span className="font-mono text-[11px] text-taupe">09</span>
            <span className="text-[11px] uppercase tracking-luxe text-taupe">
              Before / After
            </span>
            <span className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20">
          <Reveal as="div" y={50} duration={1.3} start="top 88%">
            <TextReveal
              as="h2"
              className="max-w-3xl font-serif text-[clamp(1.9rem,4vw,3.8rem)] font-light leading-[1.1] text-ink"
              speed={1.2}
              stagger={0.06}
              delay={0.15}
            >
              <span className="block" data-line>The same room, before and after the</span>
              <span className="block" data-line>
                <em className="italic text-brass">light</em>.
              </span>
            </TextReveal>
          </Reveal>
        </div>

        <Reveal as="div" y={40} duration={1.2} start="top 92%">
          <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-12 md:items-start">
            {/* room selector */}
            <div className="md:col-span-3">
              <p className="text-[10px] uppercase tracking-luxe text-taupe">
                Choose a room
              </p>
              <div className="mt-5 flex flex-col border-t border-line">
                {beforeAfter.map((b, i) => (
                  <button
                    key={b.title}
                    type="button"
                    onClick={() => {
                      setRoom(i);
                      setPos(55);
                    }}
                    className={`flex items-baseline justify-between gap-4 border-b border-line py-4 text-left transition-colors duration-300 ${
                      i === room ? "text-ink" : "text-taupe hover:text-ink"
                    }`}
                  >
                    <span className="font-serif text-lg italic leading-snug">
                      {b.title}
                    </span>
                    <span className="font-mono text-[10px]">0{i + 1}</span>
                  </button>
                ))}
              </div>

              {/* Infrastructure transformation breakdown */}
              <div className="mt-8 border-t border-line pt-5 space-y-4">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-luxe text-taupe">
                    Original Infrastructure
                  </p>
                  <p className="mt-1.5 text-[12px] leading-[1.7] text-taupe/90">
                    {beforeAfter[room].beforeNote}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-luxe text-brass">
                    Lumière Renovation
                  </p>
                  <p className="mt-1.5 text-[12px] leading-[1.7] text-ink font-medium">
                    {beforeAfter[room].afterNote}
                  </p>
                </div>
              </div>
            </div>

            {/* comparison frame */}
            <div className="md:col-span-8 md:col-start-5">
              <div
                ref={frameRef}
                onPointerDown={(e) => {
                  drag.current = true;
                  frameRef.current?.setPointerCapture?.(e.pointerId);
                  setFromX(e.clientX);
                }}
                onPointerMove={(e) => {
                  if (drag.current) setFromX(e.clientX);
                }}
                onPointerUp={() => {
                  drag.current = false;
                }}
                onPointerCancel={() => {
                  drag.current = false;
                }}
                className="relative cursor-ew-resize touch-none select-none overflow-hidden border border-line bg-paper-2 p-2 sm:p-4 md:p-5 rounded-xs"
              >
                <div className="relative h-[320px] w-full overflow-hidden rounded-xs sm:h-[400px] lg:h-[480px]">
                  {/* AFTER image (base layer - full architectural luxury) */}
                  {beforeAfter[room].afterImage ? (
                    <img
                      src={beforeAfter[room].afterImage}
                      alt={`${beforeAfter[room].title} After`}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <Plate className="h-full w-full text-ink" />
                  )}

                  {/* BEFORE image (clipped layer - un-renovated builder infrastructure & small aperture overlay) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
                  >
                    {beforeAfter[room].beforeImage ? (
                      <div className="relative h-full w-full">
                        <img
                          src={beforeAfter[room].beforeImage}
                          alt={`${beforeAfter[room].title} Before`}
                          className="absolute inset-0 h-full w-full object-cover"
                          style={{ filter: "sepia(0.28) saturate(0.7) brightness(0.82) contrast(0.92)" }}
                        />
                        {/* Architectural aperture frame overlay simulating restricted 1.2m builder window opening */}
                        <div className="pointer-events-none absolute inset-0 border-[24px] border-ink/40 sm:border-[36px]" />
                        <div className="pointer-events-none absolute bottom-4 left-4 rounded-xs bg-ink/85 px-3 py-1 font-mono text-[9px] uppercase tracking-luxe text-paper shadow-md">
                          Original Window Frame (1.2m)
                        </div>
                      </div>
                    ) : (
                      <Plate className="h-full w-full text-taupe/55" />
                    )}
                  </div>

                  {/* divider line & handle */}
                  <div
                    className="absolute inset-y-0 z-10"
                    style={{ left: `${pos}%` }}
                  >
                    <div className="h-full w-px bg-brass shadow-lg" />
                    <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brass bg-paper text-sm text-brass shadow-md">
                        &#8596;
                      </div>
                    </div>
                  </div>

                  {/* labels */}
                  <span className="absolute left-4 top-4 z-20 rounded-xs bg-paper/90 px-3 py-1.5 font-mono text-[9px] uppercase tracking-luxe text-ink backdrop-blur-xs shadow-xs">
                    Original Space
                  </span>
                  <span className="absolute right-4 top-4 z-20 rounded-xs bg-ink/90 px-3 py-1.5 font-mono text-[9px] uppercase tracking-luxe text-paper backdrop-blur-xs shadow-xs">
                    Lumière Renovation
                  </span>
                </div>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-far text-taupe">
                  {beforeAfter[room].title} / {beforeAfter[room].subtitle}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
