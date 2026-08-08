"use client";

import Reveal from "./Reveal";
import { about } from "@/lib/site";

/** The studio's own story — the conviction it was founded on, held through
 *  every project. Splits into a serif manifesto + the facts, with the
 *  approach as a closing line. */
export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 bg-ink py-32 text-paper md:py-44">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal as="div" y={0} duration={1}>
          <div className="flex items-center gap-5">
            <span className="font-mono text-[11px] text-stone">12</span>
            <span className="text-[11px] uppercase tracking-luxe text-stone">
              The Studio
            </span>
            <span className="h-px flex-1 bg-line-light" />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-14 md:mt-20 md:grid-cols-12 md:gap-8">
          {/* manifesto + facts */}
          <div className="md:col-span-5">
            <Reveal as="h2" y={60} duration={1.4} start="top 88%">
              <span className="font-serif text-[clamp(2rem,4.6vw,4.4rem)] font-light leading-[1.06] text-paper">
                Good design is an act of{" "}
                <em className="italic text-brass">attention</em>, not decoration.
              </span>
            </Reveal>

            <Reveal as="div" y={30} duration={1.1} delay={0.15} start="top 92%">
              <div className="mt-14 grid grid-cols-2 gap-8 border-t border-line-light pt-8 md:mt-20">
                {about.stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-serif text-3xl font-light italic text-paper md:text-4xl">
                      {s.value}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-luxe text-stone">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* story + mission */}
          <div className="flex flex-col justify-center gap-8 md:col-span-6 md:col-start-7">
            <Reveal as="div" y={40} duration={1.2} delay={0.05} start="top 90%">
              <p className="max-w-xl text-[15px] leading-[1.9] text-paper/80">
                {about.story}
              </p>
            </Reveal>
            <Reveal as="div" y={40} duration={1.2} delay={0.15} start="top 92%">
              <p className="max-w-xl text-[15px] leading-[1.9] text-paper/80">
                {about.philosophy}
              </p>
            </Reveal>
            <Reveal as="div" y={40} duration={1.2} delay={0.25} start="top 94%">
              <blockquote className="border-l border-brass pl-6">
                <p className="max-w-xl font-serif text-xl italic leading-relaxed text-paper/90">
                  &ldquo;{about.mission}&rdquo;
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>

        <Reveal as="div" y={30} duration={1.1} start="top 95%">
          <p className="mt-20 max-w-2xl border-t border-line-light pt-8 text-[13px] leading-[1.9] text-stone md:mt-28">
            <span className="text-[10px] uppercase tracking-luxe text-brass">
              How we work &nbsp;&mdash;&nbsp;
            </span>
            {about.approach}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
