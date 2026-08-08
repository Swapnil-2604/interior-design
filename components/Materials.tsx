"use client";

import Reveal from "./Reveal";
import { materials } from "@/lib/site";

const cols = [
  { label: "Material", key: "category" as const },
  { label: "Finish", key: "finish" as const },
  { label: "Application", key: "application" as const },
  { label: "Benefit", key: "benefit" as const },
];

/** The studio's material library as a spec-sheet table — the way an
 *  architect hands a client a palette. */
export default function Materials() {
  return (
    <section id="materials" className="relative bg-ink py-32 text-paper md:py-44">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal as="div" y={0} duration={1}>
          <div className="flex items-center gap-5">
            <span className="font-mono text-[11px] text-stone">10</span>
            <span className="text-[11px] uppercase tracking-luxe text-stone">
              Material Library
            </span>
            <span className="h-px flex-1 bg-line-light" />
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20">
          <Reveal as="div" y={50} duration={1.3} start="top 88%">
            <h2 className="max-w-[18ch] font-sans text-[clamp(1.8rem,4.4vw,4.2rem)] font-light uppercase leading-[1.05] tracking-[0.02em]">
              Specified to age well, not just to photograph.
            </h2>
          </Reveal>
        </div>

        <Reveal as="div" y={40} duration={1.1} start="top 92%">
          <div className="mt-16 overflow-x-auto md:mt-24">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line-light">
                  {cols.map((c) => (
                    <th
                      key={c.key}
                      className="py-4 pr-6 text-[9px] font-normal uppercase tracking-luxe text-stone"
                    >
                      {c.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {materials.map((m) => (
                  <tr
                    key={m.category}
                    className="group border-b border-line-light/60 transition-colors duration-300 hover:bg-ink-2"
                  >
                    <td className="py-5 pr-6">
                      <span className="font-serif text-lg font-light italic text-paper/90">
                        {m.category}
                      </span>
                    </td>
                    <td className="py-5 pr-6 font-mono text-[11px] text-stone">
                      {m.finish}
                    </td>
                    <td className="py-5 pr-6 text-[12px] leading-relaxed text-stone">
                      {m.application}
                    </td>
                    <td className="py-5 text-[12px] leading-relaxed text-paper/60">
                      {m.benefit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
