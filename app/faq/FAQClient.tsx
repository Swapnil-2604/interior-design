"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TextReveal from "@/components/TextReveal";
import { faqs, type FAQItem, contact } from "@/lib/site";

const categories = [
  "All",
  "Process & Workflow",
  "Pricing & Commercial",
  "Timelines & Delivery",
  "Warranty & Quality",
  "Locations",
] as const;

export default function FAQClient() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ "faq-1": true, "faq-3": true });

  const toggle = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filtered = faqs.filter((item) => {
    const matchesCat = activeCategory === "All" || item.category === activeCategory;
    const matchesQuery =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="relative border-b border-line bg-ink py-32 text-paper md:py-44">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-5">
              <span className="font-mono text-[11px] text-stone">01</span>
              <span className="text-[11px] uppercase tracking-luxe text-stone">
                Client Questions &amp; Guidance
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
                <span className="block" data-line>Frequently Asked Questions —</span>
                <span className="block" data-line>
                  <em className="italic text-brass">clarity before commitment</em>.
                </span>
              </TextReveal>
            </Reveal>

            <Reveal as="div" y={30} duration={1.1} delay={0.15} start="top 90%">
              <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-stone font-sans">
                Everything you need to know about our design methodology, payment milestones, 10-year warranties, and turnaround schedules.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="relative py-24 md:py-36">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          {/* Search bar & Category pills */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-line pb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActiveCategory(c)}
                  className={`px-4 py-2 font-mono text-[10px] uppercase tracking-luxe transition-all duration-300 ${
                    activeCategory === c
                      ? "bg-ink text-paper"
                      : "border border-line text-taupe hover:border-ink hover:text-ink"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="relative min-w-[280px]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics (e.g. warranty, timeline)..."
                className="w-full rounded-xs border border-line bg-paper-2 py-2.5 pl-4 pr-10 text-[12px] text-ink placeholder-taupe focus:border-ink focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2.5 font-mono text-xs text-taupe hover:text-ink"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Accordion Items */}
          <div className="mt-12 divide-y divide-line">
            {filtered.length === 0 ? (
              <div className="py-16 text-center">
                <p className="font-serif text-2xl italic text-taupe">No matching questions found.</p>
                <p className="mt-2 text-[13px] text-taupe">Try a different search query or contact our studio directly.</p>
              </div>
            ) : (
              filtered.map((item) => {
                const isOpen = !!openIds[item.id];
                return (
                  <div key={item.id} className="py-6 transition-colors">
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      className="flex w-full items-start justify-between gap-6 text-left focus:outline-none"
                    >
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-luxe text-brass block">
                          {item.category}
                        </span>
                        <h3 className="mt-1 font-serif text-xl font-normal text-ink md:text-2xl">
                          {item.question}
                        </h3>
                      </div>
                      <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line font-mono text-xs text-ink transition-transform duration-300">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-4 max-w-3xl animate-in fade-in duration-300">
                        <p className="text-[14px] leading-[1.85] text-ink/80 font-sans">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Direct Studio Escalation */}
          <div className="mt-20 rounded-xs border border-line bg-paper-2 p-8 text-center md:p-12">
            <h3 className="font-serif text-2xl text-ink md:text-3xl">
              Have a specific question about your site or brief?
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-[13px] text-taupe">
              Our principal architects are available for a 30-minute discovery call to evaluate drawings, layouts, and budgets.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-fill px-8 py-3.5 text-[11px] uppercase tracking-luxe">
                Schedule a Consultation →
              </Link>
              <a
                href={`mailto:${contact.email}`}
                className="rounded-xs border border-line px-8 py-3.5 font-mono text-[11px] uppercase tracking-luxe text-ink hover:border-ink"
              >
                Email Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
