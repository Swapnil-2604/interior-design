"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import TextReveal from "./TextReveal";
import { costCalculator } from "@/lib/site";

const fmt = (v: number) => Math.round(v).toLocaleString("en-IN");
const lakh = (v: number) =>
  (v / 100000).toLocaleString("en-IN", { maximumFractionDigits: 1 });

function Seg({
  value,
  options,
  onChange,
}: {
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          aria-pressed={value === o}
          className={`border px-4 py-2 text-[10px] uppercase tracking-luxe transition-colors duration-300 ${
            value === o
              ? "border-ink bg-ink text-paper"
              : "border-line text-taupe hover:border-ink/40 hover:text-ink"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

/** Interactive budget guidance. Property type → design style → finish level
 *  → area, resolved against a configurable per-sqft rate table. Deliberately
 *  labelled "indicative" — never a quote. */
export default function CostCalculator() {
  const [type, setType] = useState("3 BHK");
  const [style, setStyle] = useState("Modern");
  const [budget, setBudget] = useState("Premium");
  const [area, setArea] = useState(1400);

  const [minA, maxA] = costCalculator.areaRanges[type] ?? [1100, 1700];
  const rate = costCalculator.styleRates[style]?.[budget] ?? 2800;
  const a = Math.min(Math.max(area, minA), maxA);

  const low = a * rate;
  const high = a * rate * 1.18;
  const fillPct = ((a - minA) / Math.max(maxA - minA, 1)) * 100;

  const pickType = (t: string) => {
    setType(t);
    const [lo, hi] = costCalculator.areaRanges[t] ?? [1100, 1700];
    setArea(Math.round((lo + hi) / 2));
  };

  return (
    <section id="calculator" className="relative scroll-mt-24 bg-paper py-32 text-ink md:py-44">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal as="div" y={0} duration={1}>
          <div className="flex items-center gap-5">
            <span className="font-mono text-[11px] text-taupe">11</span>
            <span className="text-[11px] uppercase tracking-luxe text-taupe">
              Cost Guidance
            </span>
            <span className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20">
          <Reveal as="div" y={50} duration={1.3} start="top 88%">
            <TextReveal
              as="h2"
              className="max-w-[18ch] font-serif text-[clamp(1.9rem,4vw,3.8rem)] font-light leading-[1.1] text-ink"
              speed={1.2}
              stagger={0.06}
              delay={0.15}
            >
              <span className="block" data-line>A first sense of budget, before the</span>
              <span className="block" data-line>
                <em className="italic text-brass">conversation</em>.
              </span>
            </TextReveal>
          </Reveal>
        </div>

        <Reveal as="div" y={40} duration={1.2} start="top 92%">
          <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-12 md:gap-8">
            {/* controls */}
            <div className="md:col-span-7">
              <div className="border-t border-line pt-6">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-luxe text-taupe">
                  Property
                </p>
                <Seg
                  value={type}
                  options={costCalculator.propertyTypes}
                  onChange={pickType}
                />
              </div>

              <div className="mt-10 border-t border-line pt-6">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-luxe text-taupe">
                  Design style
                </p>
                <Seg
                  value={style}
                  options={costCalculator.designStyles}
                  onChange={setStyle}
                />
              </div>

              <div className="mt-10 border-t border-line pt-6">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-luxe text-taupe">
                  Finish level
                </p>
                <Seg
                  value={budget}
                  options={costCalculator.budgetRanges}
                  onChange={setBudget}
                />
              </div>

              <div className="mt-10 border-t border-line pt-6">
                <div className="mb-4 flex items-baseline justify-between gap-4">
                  <p className="font-mono text-[10px] uppercase tracking-luxe text-taupe">
                    Approx. area
                  </p>
                  <p className="font-serif text-xl italic text-ink">
                    {fmt(a)}{" "}
                    <span className="font-mono text-[11px] not-italic text-taupe">
                      ft&sup2;
                    </span>
                  </p>
                </div>
                <input
                  type="range"
                  min={minA}
                  max={maxA}
                  step={10}
                  value={a}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="calc-range"
                  style={{
                    background: `linear-gradient(to right, var(--ink) 0%, var(--ink) ${fillPct}%, var(--line) ${fillPct}%, var(--line) 100%)`,
                  }}
                  aria-label="Approximate area in square feet"
                />
                <div className="mt-3 flex justify-between font-mono text-[10px] text-taupe">
                  <span>{fmt(minA)}</span>
                  <span>{fmt(maxA)} ft&sup2;</span>
                </div>
              </div>
            </div>

            {/* result */}
            <div className="md:col-span-4 md:col-start-9">
              <div className="sticky top-28 flex h-full min-h-[320px] flex-col justify-between border border-line bg-ink p-8 text-paper md:p-10">
                <div>
                  <p className="text-[10px] uppercase tracking-luxe text-stone">
                    Estimated range
                  </p>
                  <p className="mt-6 font-serif text-[clamp(1.9rem,3vw,2.5rem)] font-light italic leading-tight">
                    &#8377;{lakh(low)}L
                    <span className="mx-2 font-sans text-base not-italic text-stone">
                      &ndash;
                    </span>
                    &#8377;{lakh(high)}L
                  </p>
                  <p className="mt-5 font-mono text-[11px] leading-relaxed text-stone">
                    &#8377;{fmt(rate)} / ft&sup2; &middot; {style} &middot;{" "}
                    {budget}
                  </p>
                </div>
                <div className="mt-10 border-t border-line-light pt-6">
                  <p className="text-[11px] leading-[1.8] text-stone">
                    Indicative guidance only. A precise quotation follows a
                    site visit and a full brief — scope, structure and site
                    condition all shape the final number.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
