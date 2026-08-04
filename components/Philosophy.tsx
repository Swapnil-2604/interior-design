"use client";

import Reveal from "./Reveal";
import { philosophy } from "@/lib/site";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden bg-paper py-32 text-ink md:py-44"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal as="div" y={0} duration={1}>
          <div className="flex items-center gap-5">
            <span className="font-mono text-[11px] text-taupe">04</span>
            <span className="text-[11px] uppercase tracking-luxe text-taupe">
              Philosophy
            </span>
            <span className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20">
          <Reveal as="div" y={50} duration={1.3} start="top 88%">
            <h2 className="font-serif text-[clamp(1.8rem,3.6vw,3.4rem)] font-light leading-[1.1] text-ink">
              Five principles, held without exception —{" "}
              <em className="italic text-brass">the work is the argument</em>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-line md:mt-24">
          {philosophy.map((p, i) => (
            <Reveal
              key={p.n}
              as="div"
              y={40}
              duration={1.1}
              delay={i * 0.05}
              start="top 92%"
            >
              <div className="group flex flex-col gap-3 border-b border-line py-8 md:flex-row md:items-baseline md:gap-10 md:py-10">
                <span className="font-mono text-[11px] text-taupe md:w-10">
                  {p.n}
                </span>
                <span className="font-serif text-[clamp(2.2rem,6.4vw,6rem)] font-light italic leading-[1.05] transition-colors duration-500 group-hover:text-brass">
                  {p.word}
                </span>
                <p className="max-w-xs text-[13px] leading-[1.8] text-taupe md:ml-auto">
                  {p.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" y={30} duration={1} start="top 95%">
          <div className="mt-14 flex items-center gap-6 md:mt-20">
            <span className="text-[10px] uppercase tracking-luxe text-taupe">
              Atelier Form
            </span>
            <span className="font-serif text-xl italic text-ink/40 md:text-2xl">
              &mdash; an interior design practice, since 2012
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
