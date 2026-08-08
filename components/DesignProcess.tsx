"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { process } from "@/lib/site";

/** The studio's working method as an interactive accordion. Each step
 *  expands to its brief + detail. Defaults to the first step open so the
 *  section reads as a sequence even before interaction. */
export default function DesignProcess() {
  const [open, setOpen] = useState(0);

  return (
    <section id="process" className="relative scroll-mt-24 bg-paper py-32 text-ink md:py-44">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal as="div" y={0} duration={1}>
          <div className="flex items-center gap-5">
            <span className="font-mono text-[11px] text-taupe">04</span>
            <span className="text-[11px] uppercase tracking-luxe text-taupe">
              The Process
            </span>
            <span className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20">
          <Reveal as="h2" y={60} duration={1.4} start="top 88%">
            <span className="font-serif text-[clamp(1.8rem,4vw,3.8rem)] font-light leading-[1.1] text-ink">
              Five acts, from first listen to final handover —{" "}
              <em className="italic text-brass">a process without surprises</em>.
            </span>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-line md:mt-24">
          {process.map((p, i) => {
            const isOpen = open === i;
            return (
              <Reveal
                key={p.n}
                as="div"
                y={36}
                duration={1}
                delay={i * 0.05}
                start="top 92%"
              >
                <div className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-baseline gap-5 py-7 text-left md:gap-10 md:py-9"
                  >
                    <span className="w-9 shrink-0 font-mono text-[11px] text-taupe">
                      {p.n}
                    </span>
                    <h3 className="flex-1 font-sans text-xl font-light uppercase tracking-[0.04em] text-ink/85 transition-colors duration-500 group-hover:text-ink md:text-[1.6rem]">
                      {p.title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 text-xl text-brass transition-transform duration-500 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="max-w-2xl pb-8 pl-14 md:pl-20">
                        <p className="font-serif text-lg italic leading-relaxed text-brass">
                          {p.brief}
                        </p>
                        <p className="mt-3 text-[14px] leading-[1.8] text-taupe">
                          {p.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
