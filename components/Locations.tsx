"use client";

import Reveal from "./Reveal";
import { locations } from "@/lib/site";

/** A quiet index of where the work has landed — city names as the headline,
 *  country and project count as the measure. */
export default function Locations() {
  return (
    <section id="locations" className="relative bg-paper py-32 text-ink md:py-44">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal as="div" y={0} duration={1}>
          <div className="flex items-center gap-5">
            <span className="font-mono text-[11px] text-taupe">15</span>
            <span className="text-[11px] uppercase tracking-luxe text-taupe">
              Where we work
            </span>
            <span className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20">
          <Reveal as="div" y={50} duration={1.3} start="top 88%">
            <h2 className="max-w-[18ch] font-serif text-[clamp(1.9rem,4vw,3.8rem)] font-light leading-[1.1] text-ink">
              Six countries, and a studio that travels for a good brief.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-line md:mt-24">
          {locations.map((l, i) => (
            <Reveal
              key={l.city}
              as="div"
              y={30}
              duration={1}
              delay={i * 0.04}
              start="top 94%"
            >
              <div className="group flex items-baseline gap-6 border-b border-line py-6 md:py-7">
                <span className="font-mono text-[11px] text-taupe">
                  0{i + 1}
                </span>
                <span className="flex-1 font-serif text-[clamp(1.6rem,3.4vw,3rem)] font-light italic leading-none transition-colors duration-500 group-hover:text-brass">
                  {l.city}
                </span>
                <span className="hidden font-mono text-[10px] uppercase tracking-luxe text-taupe sm:block">
                  {l.country}
                </span>
                <span className="font-mono text-[11px] text-ink/60">
                  {l.projects} projects
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
