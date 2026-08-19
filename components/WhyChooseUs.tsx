"use client";

import Reveal from "./Reveal";
import TextReveal from "./TextReveal";
import { whyChooseUs } from "@/lib/site";

/** The case for commissioning one studio end-to-end. A hairline grid of
 *  numbered cells — a spec sheet, not marketing cards. */
export default function WhyChooseUs() {
  return (
    <section id="why" className="relative bg-ink py-32 text-paper md:py-44">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal as="div" y={0} duration={1}>
          <div className="flex items-center gap-5">
            <span className="font-mono text-[11px] text-stone">08</span>
            <span className="text-[11px] uppercase tracking-luxe text-stone">
              Why Lumière
            </span>
            <span className="h-px flex-1 bg-line-light" />
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20">
          <Reveal as="div" y={50} duration={1.3} start="top 88%">
            <TextReveal
              as="h2"
              className="max-w-[18ch] font-sans text-[clamp(1.8rem,4.4vw,4.2rem)] font-light uppercase leading-[1.05] tracking-[0.02em]"
              speed={1.2}
              stagger={0.06}
              delay={0.15}
            >
              <span className="block" data-line>The reasons a client stays</span>
              <span className="block" data-line>with one studio.</span>
            </TextReveal>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px bg-line-light md:mt-24 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((w, i) => (
            <Reveal
              key={w.n}
              as="div"
              y={30}
              duration={1}
              delay={(i % 3) * 0.06}
              start="top 92%"
            >
              <div className="group flex h-full flex-col bg-ink p-8 transition-colors duration-500 hover:bg-ink-2 md:p-10">
                <span className="font-mono text-[11px] text-brass">{w.n}</span>
                <h3 className="mt-6 font-serif text-[1.4rem] font-light italic leading-snug text-paper/90 md:text-2xl">
                  {w.title}
                </h3>
                <p className="mt-4 text-[13px] leading-[1.8] text-stone">
                  {w.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
