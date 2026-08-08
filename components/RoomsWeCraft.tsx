"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { PLATES } from "./plates";
import { rooms } from "@/lib/site";

export default function RoomsWeCraft() {
  return (
    <section
      id="rooms-we-craft"
      className="relative scroll-mt-24 bg-paper py-32 text-ink md:py-44"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal as="div" y={0} duration={1}>
          <div className="flex items-center gap-5">
            <span className="font-mono text-[11px] text-taupe">II</span>
            <span className="text-[11px] uppercase tracking-luxe text-taupe">
              Rooms We Craft
            </span>
            <span className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        <div className="mt-14 max-w-[16ch] md:mt-20">
          <Reveal as="div" y={50} duration={1.3} start="top 88%">
            <h2 className="font-sans text-[clamp(1.8rem,4.2vw,4rem)] font-light uppercase leading-[1.05] tracking-[0.02em]">
              Every room we touch gets the same attention.
            </h2>
          </Reveal>
        </div>

        {/* hairline mosaic — 7 cells, the first spans two columns */}
        <Reveal as="div" y={44} duration={1.2} start="top 90%">
          <div className="mt-16 grid gap-px bg-line md:mt-24 md:grid-cols-2 lg:grid-cols-4">
            {rooms.map((r, i) => (
              <div
                key={r.title}
                className={`group bg-paper-2 p-6 transition-colors duration-500 hover:bg-paper md:p-8 ${
                  r.feature ? "col-span-2" : ""
                }`}
              >
                <span className="font-mono text-[10px] text-taupe">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-6 flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-xl font-light italic text-ink md:text-2xl">
                    {r.title}
                  </h3>
                  {r.feature && (
                    <span className="shrink-0 text-[9px] uppercase tracking-luxe text-brass">
                      Most requested
                    </span>
                  )}
                </div>
                <p className="mt-3 max-w-sm text-[12px] leading-[1.7] text-taupe">
                  {r.line}
                </p>
                <div
                  className={`mt-8 w-full ${
                    r.feature ? "h-40 sm:h-48" : "h-24"
                  }`}
                >
                  {(() => {
                    const Plate = PLATES[r.plate];
                    return (
                      <Plate className="h-full w-full text-ink/25 transition-colors duration-700 group-hover:text-brass/60" />
                    );
                  })()}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal as="div" y={30} duration={1} start="top 95%">
          <div className="mt-12 md:mt-16">
            <Link
              href="/services"
              className="group inline-flex items-center gap-4 text-[11px] uppercase tracking-luxe text-ink/80 transition-colors hover:text-ink"
            >
              The full scope of work
              <span className="text-brass transition-transform duration-500 group-hover:translate-x-1">
                &#8594;
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
