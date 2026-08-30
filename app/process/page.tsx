import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TextReveal from "@/components/TextReveal";
import { processMilestones, timelineContingency, trustGuarantees } from "@/lib/site";

export const metadata: Metadata = {
  title: "Process & Payment Milestones",
  description:
    "Our 5-phase architectural workflow, 10/40/40/10 payment milestone schedule, and on-time handover guarantee at Lumière Interiors.",
};

export default function ProcessPage() {
  return (
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="relative border-b border-line bg-ink py-32 text-paper md:py-44">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-5">
              <span className="font-mono text-[11px] text-stone">01</span>
              <span className="text-[11px] uppercase tracking-luxe text-stone">
                Methodology &amp; Commercial Terms
              </span>
              <span className="h-px flex-1 bg-line-light" />
            </div>
          </Reveal>

          <div className="mt-14 max-w-3xl md:mt-20">
            <Reveal as="div" y={50} duration={1.3} start="top 88%">
              <TextReveal
                as="h1"
                className="font-serif text-[clamp(2.4rem,5.5vw,5rem)] font-light leading-[1.05] text-paper"
                speed={1.2}
                stagger={0.06}
                delay={0.1}
              >
                <span className="block" data-line>A deliberate 5-phase journey —</span>
                <span className="block" data-line>
                  <em className="italic text-brass">from brief to keys</em>.
                </span>
              </TextReveal>
            </Reveal>

            <Reveal as="div" y={30} duration={1.1} delay={0.15} start="top 90%">
              <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-stone font-sans">
                Good architecture does not happen by accident; it is choreographed through disciplined stages. Our 10/40/40/10 milestone structure ties every commercial invoice directly to client-approved deliverables.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5-Phase Detailed Timeline & Milestone Schedule */}
      <section className="relative py-28 md:py-40">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-5">
              <span className="font-mono text-[11px] text-taupe">02</span>
              <span className="text-[11px] uppercase tracking-luxe text-taupe">
                The 5-Phase Milestone Schedule
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>

          <div className="mt-16 space-y-16">
            {processMilestones.map((m, idx) => (
              <Reveal
                key={m.phase}
                as="div"
                y={40}
                duration={1.2}
                delay={idx * 0.08}
                start="top 90%"
              >
                <div className="rounded-xs border border-line bg-paper-2 p-8 md:p-12 transition-all duration-500 hover:border-line-hover">
                  <div className="flex flex-col justify-between gap-6 border-b border-line pb-6 md:flex-row md:items-center">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs uppercase tracking-luxe text-brass font-bold">
                        {m.phase}
                      </span>
                      <span className="text-taupe">•</span>
                      <span className="font-mono text-xs uppercase text-taupe">
                        {m.weeks}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-brass/40 bg-paper px-4 py-1.5 font-mono text-[11px] text-brass">
                      <span>Payment Milestone:</span>
                      <span className="font-bold">{m.paymentPercentage}%</span>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-8 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                      <h3 className="font-serif text-3xl text-ink md:text-4xl">
                        {m.name}
                      </h3>
                      <p className="mt-4 font-mono text-[12px] uppercase text-taupe">
                        Commercial Condition:
                      </p>
                      <p className="mt-1 text-[13px] text-ink font-semibold">
                        {m.commercialTerm}
                      </p>
                    </div>

                    <div className="lg:col-span-7">
                      <h4 className="font-mono text-[11px] uppercase tracking-luxe text-taupe">
                        Phase Deliverables &amp; Inclusions
                      </h4>
                      <ul className="mt-4 space-y-3 font-sans text-[13px] text-ink/85">
                        {m.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="text-brass font-bold">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Contingency & Guarantee Policy */}
      <section className="relative border-t border-line bg-ink py-24 text-paper md:py-36">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <span className="font-mono text-[11px] uppercase tracking-luxe text-stone">
                Trust &amp; Accountability
              </span>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.6rem)] font-light leading-tight text-paper">
                {timelineContingency.headline}
              </h2>
              <p className="mt-6 text-[14px] leading-[1.85] text-stone font-sans">
                {timelineContingency.note}
              </p>
              <div className="mt-8 rounded-xs border border-line-light bg-ink-2 p-4 font-mono text-[11px] text-brass">
                {timelineContingency.clause}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xs border border-line-light bg-paper/5 p-8 backdrop-blur-md">
                <h3 className="font-serif text-2xl text-paper">
                  Our Triple Assurance Standard
                </h3>
                <ul className="mt-6 space-y-4 text-[13px] text-stone">
                  {trustGuarantees.slice(0, 3).map((g) => (
                    <li key={g.title} className="border-b border-line-light pb-4">
                      <span className="font-semibold text-paper block">{g.title}</span>
                      <span className="text-stone/80 text-[12px]">{g.desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="btn-fill block w-full py-3.5 text-center text-[11px] uppercase tracking-luxe"
                  >
                    Initiate Phase 01 Discovery →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
