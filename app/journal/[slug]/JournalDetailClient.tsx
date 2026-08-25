"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import KitchenLayoutComparison from "@/components/KitchenLayoutComparison";
import { PlateKitchenL, PlateKitchenU } from "@/components/plates";
import { JournalArticle } from "@/lib/site";

interface JournalDetailClientProps {
  article: JournalArticle;
  otherArticles: JournalArticle[];
}

export default function JournalDetailClient({
  article,
  otherArticles,
}: JournalDetailClientProps) {
  const [isReadingMode, setIsReadingMode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsReadingMode(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="bg-paper text-ink selection:bg-brass selection:text-ink">
      {/* 1. Article Header & Hero */}
      <article className="relative pt-32 pb-16 md:pt-44 md:pb-24 border-b border-line">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          {/* Breadcrumbs */}
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-4 text-[11px] font-mono uppercase tracking-luxe text-taupe mb-8">
              <Link href="/" className="hover:text-ink transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/journal" className="hover:text-ink transition-colors">
                Journal
              </Link>
              <span>/</span>
              <span className="text-brass">{article.category}</span>
            </div>
          </Reveal>

          {/* Title & Metadata */}
          <div className="max-w-4xl">
            <Reveal as="div" y={40} duration={1.2}>
              <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono uppercase tracking-luxe text-brass mb-4">
                <span>{article.category}</span>
                <span>•</span>
                <span className="text-taupe">{article.date}</span>
                <span>•</span>
                <span className="text-taupe">{article.readTime}</span>
              </div>
              <h1 className="font-serif text-[clamp(2.2rem,5vw,4.5rem)] font-light leading-[1.08] text-ink mb-8">
                {article.title}
              </h1>
              <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-taupe border-l-2 border-brass pl-6">
                {article.excerpt}
              </p>
            </Reveal>
          </div>

          {/* Author bar */}
          <Reveal as="div" y={20} duration={1} delay={0.1} className="mt-8 flex items-center justify-between border-y border-line py-4">
            <div className="flex items-center gap-3">
              <span className="h-8 w-8 rounded-full bg-brass/20 flex items-center justify-center font-serif italic text-brass text-sm">
                {article.author.charAt(0)}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-luxe text-ink">
                {article.author}
              </span>
            </div>
            <button
              onClick={() => setIsReadingMode(true)}
              className="font-mono text-[10px] uppercase tracking-luxe text-brass hover:text-ink transition-colors border border-brass/40 px-4 py-2 rounded-xs"
            >
              Focus Reader Mode &rarr;
            </button>
          </Reveal>

          {/* Hero Architectural Visual */}
          <Reveal as="div" y={40} duration={1.3} className="mt-12 md:mt-16">
            {article.slug === "l-shaped-vs-u-shaped-kitchen" ? (
              <div className="relative w-full overflow-hidden rounded-xs border border-line bg-paper-2 p-6 sm:p-8 md:p-10 shadow-2xl">
                <div className="text-center mb-8">
                  <span className="font-mono text-[10px] uppercase tracking-luxe text-brass block">
                    Real Architectural Layout Comparison
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-light italic text-ink mt-1">
                    L-Shaped Kitchen Layout vs U-Shaped Kitchen Layout
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                  {/* Real L-Shaped Kitchen Photo */}
                  <div className="border border-line bg-paper p-5 rounded-xs flex flex-col justify-between shadow-xs">
                    <div>
                      <div className="flex items-center justify-between border-b border-line pb-3 mb-4">
                        <span className="font-mono text-xs uppercase tracking-luxe text-brass font-bold">
                          01. L-Shaped Kitchen Real Layout
                        </span>
                        <span className="font-mono text-[10px] text-taupe">Open Plan Flow</span>
                      </div>
                      <div className="aspect-[16/9] w-full overflow-hidden rounded-xs mb-4 border border-line bg-paper-2 shadow-sm">
                        <img
                          src="/images/kitchen-l-shaped-real.jpg"
                          alt="Real L-Shaped Kitchen Interior Photography"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-far text-taupe text-center border-t border-line pt-3">
                      2 Perpendicular Counter Runs · 90° Corner Junction
                    </p>
                  </div>

                  {/* Real U-Shaped Kitchen Photo */}
                  <div className="border border-line bg-paper p-5 rounded-xs flex flex-col justify-between shadow-xs">
                    <div>
                      <div className="flex items-center justify-between border-b border-line pb-3 mb-4">
                        <span className="font-mono text-xs uppercase tracking-luxe text-brass font-bold">
                          02. U-Shaped Kitchen Real Layout
                        </span>
                        <span className="font-mono text-[10px] text-taupe">3-Side Enclosure</span>
                      </div>
                      <div className="aspect-[16/9] w-full overflow-hidden rounded-xs mb-4 border border-line bg-paper-2 shadow-sm">
                        <img
                          src="/images/kitchen-u-shaped-real.jpg"
                          alt="Real U-Shaped Kitchen Interior Photography"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-far text-taupe text-center border-t border-line pt-3">
                      3-Wall Continuous Marble Run · Enclosed Prep Run
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xs border border-line bg-paper-2 shadow-2xl">
                <img
                  src={article.heroImage}
                  alt={article.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </Reveal>
        </div>

        {/* Article Body */}
        <div className="mx-auto w-full max-w-3xl px-6 md:px-10 mt-16 md:mt-24 space-y-12">
          {/* Introduction */}
          <Reveal as="div" y={30} duration={1.1}>
            <p className="font-serif text-xl md:text-2xl font-light leading-relaxed text-ink/90 first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-brass">
              {article.content.introduction}
            </p>
          </Reveal>

          {/* Sections */}
          {article.content.sections.map((sec, idx) => (
            <Reveal key={sec.heading} as="div" y={30} duration={1.1} delay={idx * 0.05}>
              <div className="border-t border-line pt-8">
                <h2 className="font-sans text-xl md:text-2xl font-light uppercase tracking-[0.03em] text-ink mb-4">
                  {sec.heading}
                </h2>
                <p className="font-sans text-[15px] leading-[1.85] text-taupe">
                  {sec.body}
                </p>
                {/* Embed L-Shaped vs U-Shaped architectural diagram interactive comparison */}
                {article.slug === "l-shaped-vs-u-shaped-kitchen" && idx === 1 && (
                  <KitchenLayoutComparison />
                )}
              </div>
            </Reveal>
          ))}

          {/* Architectural Pull Quote */}
          <Reveal as="blockquote" y={30} duration={1.1}>
            <div className="my-12 border-y border-brass/60 py-8 text-center bg-paper-2/50 px-8 rounded-xs">
              <p className="font-serif text-2xl md:text-3xl font-light italic leading-snug text-ink mb-3">
                &ldquo;{article.content.quote}&rdquo;
              </p>
              <cite className="font-mono text-[10px] uppercase tracking-luxe text-brass not-italic">
                — {article.author}
              </cite>
            </div>
          </Reveal>

          {/* Key Architectural Takeaways */}
          <Reveal as="div" y={30} duration={1.1}>
            <div className="border border-line bg-paper-2 p-8 rounded-xs">
              <h3 className="font-mono text-[11px] uppercase tracking-luxe text-brass mb-4">
                Key Architectural Takeaways
              </h3>
              <ul className="space-y-3 font-sans text-[14px] text-ink/85">
                {article.content.takeaways.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-mono text-brass text-xs font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </article>

      {/* Focus Reader Modal */}
      {isReadingMode && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-6 sm:p-12 overflow-y-auto backdrop-blur-md transition-opacity duration-300"
          onClick={() => setIsReadingMode(false)}
        >
          <div
            className="relative max-w-3xl w-full bg-paper p-8 sm:p-12 text-ink rounded-xs border border-brass/40 shadow-2xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsReadingMode(false)}
              className="absolute top-6 right-6 font-mono text-xs uppercase tracking-luxe text-taupe hover:text-brass transition-colors"
            >
              Close Reader &times;
            </button>

            <span className="font-mono text-[10px] uppercase tracking-luxe text-brass block mb-2">
              {article.category} • {article.readTime}
            </span>
            <h2 className="font-serif text-3xl font-light leading-snug mb-6">
              {article.title}
            </h2>

            <div className="space-y-6 font-sans text-sm leading-relaxed text-taupe max-h-[60vh] overflow-y-auto pr-4">
              <p className="font-serif text-lg text-ink italic mb-4">{article.content.introduction}</p>
              {article.content.sections.map((s) => (
                <div key={s.heading}>
                  <h4 className="font-sans font-medium text-ink mb-1">{s.heading}</h4>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. Related Journal Notes */}
      <section className="py-24 md:py-36 bg-paper-2 border-b border-line">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-5 mb-14">
              <span className="font-mono text-[11px] text-taupe">MORE NOTES</span>
              <span className="text-[11px] uppercase tracking-luxe text-taupe">
                Related Studio Publications
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
            {otherArticles.slice(0, 3).map((item, idx) => (
              <Link
                key={item.slug}
                href={`/journal/${item.slug}`}
                className="group block bg-paper p-8 transition-colors duration-500 hover:bg-paper-2"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-luxe text-brass">
                    {item.category}
                  </span>
                  <span className="font-mono text-[10px] text-taupe">
                    {item.readTime}
                  </span>
                </div>

                <div className="mb-4 aspect-[16/10] w-full overflow-hidden rounded-xs border border-line bg-paper-2">
                  <img
                    src={item.heroImage}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <h3 className="font-serif text-xl font-light italic text-ink transition-colors duration-300 group-hover:text-brass mb-3">
                  {item.title}
                </h3>
                <p className="text-[12px] leading-[1.7] text-taupe line-clamp-3">
                  {item.excerpt}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-luxe text-brass">
                  Read Note &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="py-24 bg-ink text-paper text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-light italic mb-6">
            Have a space you want to transform?
          </h2>
          <p className="text-sm leading-relaxed text-stone mb-8">
            Every room begins with a conversation about light, proportion, and lifestyle.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 bg-brass text-ink font-mono text-[11px] uppercase tracking-luxe px-8 py-4 rounded-xs hover:bg-brass-light transition-colors"
          >
            Start a Conversation &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
