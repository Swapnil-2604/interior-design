"use client";

import Reveal from "./Reveal";
import { PLATES } from "./plates";
import { styles } from "@/lib/site";

/** The design dialects the studio speaks. Each language is shown through
 *  one of the drafting plates, tinted brass on hover. */
export default function DesignStyles() {
  return (
    <section id="styles" className="relative bg-ink py-32 text-paper md:py-44">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal as="div" y={0} duration={1}>
          <div className="flex items-center gap-5">
            <span className="font-mono text-[11px] text-stone">06</span>
            <span className="text-[11px] uppercase tracking-luxe text-stone">
              Design Languages
            </span>
            <span className="h-px flex-1 bg-line-light" />
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20">
          <Reveal as="div" y={50} duration={1.3} start="top 88%">
            <h2 className="max-w-[18ch] font-sans text-[clamp(1.8rem,4.4vw,4.2rem)] font-light uppercase leading-[1.05] tracking-[0.02em]">
              One atelier, many dialects of light.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px border border-line-light bg-line-light md:mt-24 sm:grid-cols-2 lg:grid-cols-3">
          {styles.map((s, i) => {
            const Plate = PLATES[s.plate];
            return (
              <Reveal
                key={s.name}
                as="div"
                y={40}
                duration={1.1}
                delay={(i % 3) * 0.08}
                start="top 92%"
              >
                <div className="group flex h-full flex-col bg-ink p-8 transition-colors duration-500 hover:bg-ink-2 md:p-10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-far text-stone">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-brass opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      &#8599;
                    </span>
                  </div>
                  <Plate className="mt-6 h-40 w-full text-paper/20 transition-colors duration-700 group-hover:text-brass/70" />
                  <h3 className="mt-8 font-serif text-2xl font-light italic text-paper/90">
                    {s.name}
                  </h3>
                  <p className="mt-3 max-w-xs text-[13px] leading-[1.7] text-stone">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
