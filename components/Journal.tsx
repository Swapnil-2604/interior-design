"use client";

import Reveal from "./Reveal";
import TextReveal from "./TextReveal";
import { blogPosts } from "@/lib/site";

/** Notes from the studio — practical, specific, written to be useful rather
 *  than promotional. Cards stay unlinked until the journal gains pages. */
export default function Journal() {
  return (
    <section id="journal" className="relative scroll-mt-24 bg-ink py-32 text-paper md:py-44">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal as="div" y={0} duration={1}>
          <div className="flex items-center gap-5">
            <span className="font-mono text-[11px] text-stone">16</span>
            <span className="text-[11px] uppercase tracking-luxe text-stone">
              Journal
            </span>
            <span className="h-px flex-1 bg-line-light" />
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20">
          <Reveal as="div" y={50} duration={1.3} start="top 88%">
            <TextReveal
              as="h2"
              className="max-w-[18ch] font-sans text-[clamp(1.8rem,4.4vw,4.2rem)] font-light uppercase leading-[1.05] tracking-[0.02em]"
              speed={1.2}
              stagger={0.06}
              delay={0.15}
            >
              <span className="block" data-line>Notes on proportion,</span>
              <span className="block" data-line>material &amp; light.</span>
            </TextReveal>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px border border-line-light bg-line-light md:mt-24 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((p, i) => (
            <Reveal
              key={p.title}
              as="div"
              y={36}
              duration={1}
              delay={(i % 3) * 0.07}
              start="top 92%"
            >
              <article className="group flex h-full flex-col bg-ink p-8 transition-colors duration-500 hover:bg-ink-2 md:p-9">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-far text-brass">
                    {p.category}
                  </span>
                  <span className="font-mono text-[10px] text-stone">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-[1.35rem] font-light italic leading-snug text-paper/90 transition-colors duration-500 group-hover:text-brass">
                  {p.title}
                </h3>
                <p className="mt-4 flex-1 text-[13px] leading-[1.7] text-stone">
                  {p.excerpt}
                </p>
                <span className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-luxe text-paper/70 transition-colors duration-300 group-hover:text-paper">
                  Read the note
                  <span className="text-brass transition-transform duration-500 group-hover:translate-x-1">
                    &#8594;
                  </span>
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
