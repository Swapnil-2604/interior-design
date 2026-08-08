"use client";

import Reveal from "./Reveal";
import { team } from "@/lib/site";

/** The people behind the spaces. Without a commissioned portrait library we
 *  show a quiet monogram plate — architectural, never a stock photo. */
export default function Team() {
  return (
    <section id="team" className="relative bg-paper py-32 text-ink md:py-44">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal as="div" y={0} duration={1}>
          <div className="flex items-center gap-5">
            <span className="font-mono text-[11px] text-taupe">13</span>
            <span className="text-[11px] uppercase tracking-luxe text-taupe">
              The Team
            </span>
            <span className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20">
          <Reveal as="div" y={50} duration={1.3} start="top 88%">
            <h2 className="max-w-[18ch] font-serif text-[clamp(1.9rem,4vw,3.8rem)] font-light leading-[1.1] text-ink">
              A small team, carrying the whole of each project.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 md:mt-24 lg:grid-cols-4 lg:gap-8">
          {team.map((t, i) => (
            <Reveal
              key={t.name}
              as="div"
              y={40}
              duration={1.1}
              delay={(i % 4) * 0.08}
              start="top 92%"
            >
              <div className="group">
                <div className="flex aspect-[4/5] items-end justify-start border border-line bg-paper-2 p-6 transition-colors duration-500 group-hover:border-brass/60">
                  <span className="font-serif text-[6rem] font-light italic leading-none text-ink/15 transition-colors duration-500 group-hover:text-brass/40">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-xl font-light italic text-ink">
                  {t.name}
                </h3>
                <p className="mt-1 text-[10px] uppercase tracking-luxe text-brass">
                  {t.role}
                </p>
                <p className="mt-3 text-[13px] leading-[1.7] text-taupe">
                  {t.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
