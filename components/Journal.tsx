"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import TextReveal from "./TextReveal";
import { blogPosts, blogCategories } from "@/lib/site";

export default function Journal() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filtered =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === selectedCategory);

  return (
    <section id="journal" className="relative scroll-mt-24 bg-ink py-32 text-paper md:py-44">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal as="div" y={0} duration={1}>
          <div className="flex items-center gap-5">
            <span className="font-mono text-[11px] text-stone">16</span>
            <span className="text-[11px] uppercase tracking-luxe text-stone">
              Journal &amp; Field Notes
            </span>
            <span className="h-px flex-1 bg-line-light" />
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20">
          <Reveal as="div" y={50} duration={1.3} start="top 88%">
            <TextReveal
              as="h2"
              className="max-w-3xl font-sans text-[clamp(1.8rem,4.4vw,4.2rem)] font-light uppercase leading-[1.05] tracking-[0.02em]"
              speed={1.2}
              stagger={0.06}
              delay={0.15}
            >
              <span className="block" data-line>Notes on proportion,</span>
              <span className="block" data-line>material &amp; light.</span>
            </TextReveal>
          </Reveal>
        </div>

        {/* Category Filter Pills */}
        <Reveal as="div" y={20} duration={1} start="top 92%">
          <div className="mt-10 flex flex-wrap gap-2 border-b border-line-light pb-6">
            {blogCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setSelectedCategory(c)}
                className={`px-4 py-2 font-mono text-[10px] uppercase tracking-luxe transition-all duration-300 ${
                  selectedCategory === c
                    ? "bg-paper text-ink"
                    : "border border-line-light text-stone hover:border-paper hover:text-paper"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-px border border-line-light bg-line-light sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal
              key={p.slug}
              as="div"
              y={36}
              duration={1}
              delay={(i % 3) * 0.07}
              start="top 92%"
            >
              <Link
                href={`/journal/${p.slug}`}
                className="group flex h-full flex-col bg-ink p-8 transition-colors duration-500 hover:bg-ink-2 md:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-far text-brass">
                    {p.category}
                  </span>
                  <span className="font-mono text-[10px] text-stone">
                    {p.readTime}
                  </span>
                </div>
                {/* Topic-matched image thumbnail */}
                <div className="mt-5 aspect-[16/10] w-full overflow-hidden rounded-xs border border-line-light/30 bg-ink-2">
                  <img
                    src={p.heroImage}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-serif text-[1.35rem] font-light italic leading-snug text-paper/90 transition-colors duration-500 group-hover:text-brass">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-[13px] leading-[1.7] text-stone">
                  {p.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-line-light/50 pt-4 font-mono text-[10px] text-stone">
                  <span>{p.date}</span>
                  <span className="text-brass group-hover:translate-x-1 transition-transform">
                    Read Note →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
