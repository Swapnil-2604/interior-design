"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import TextReveal from "./TextReveal";
import { styles } from "@/lib/site";

/** Maps each style name to its curated editorial image */
const STYLE_IMAGES: Record<string, string> = {
  Modern: "/images/styles/modern.jpg",
  Minimal: "/images/styles/minimal.jpg",
  Contemporary: "/images/styles/contemporary.jpg",
  Luxury: "/images/styles/luxury.jpg",
  Industrial: "/images/styles/industrial.jpg",
  Traditional: "/images/styles/traditional.jpg",
  "Modern Indian": "/images/styles/modern-indian.jpg",
};

export default function DesignStyles() {
  return (
    <section id="styles" className="relative bg-ink py-32 text-paper md:py-44">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal as="div" y={0} duration={1}>
          <div className="flex items-center gap-5">
            <span className="font-mono text-[11px] text-stone">06</span>
            <span className="text-[11px] uppercase tracking-luxe text-stone">
              Design Languages
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
              <span className="block" data-line>One atelier, many</span>
              <span className="block" data-line>dialects of light.</span>
            </TextReveal>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px border border-line-light bg-line-light md:mt-24 sm:grid-cols-2 lg:grid-cols-3">
          {styles.map((s, i) => {
            const imgSrc = STYLE_IMAGES[s.name];
            return (
              <Reveal
                key={s.name}
                as="div"
                y={40}
                duration={1.1}
                delay={(i % 3) * 0.08}
                start="top 92%"
              >
                <div className="group relative flex h-full flex-col overflow-hidden bg-ink transition-colors duration-700 hover:bg-ink-2">
                  {/* Ambient full-card photo — subtly revealed on hover */}
                  {imgSrc && (
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={imgSrc}
                        alt={s.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-25"
                        quality={85}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                    </div>
                  )}

                  {/* Card content */}
                  <div className="relative z-10 flex h-full flex-col p-8 md:p-10">
                    {/* Index + arrow */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-far text-stone">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-brass opacity-0 transition-all duration-500 group-hover:opacity-100">
                        &#8599;
                      </span>
                    </div>

                    {/* Editorial photo thumbnail */}
                    <div className="mt-6 h-40 w-full overflow-hidden">
                      {imgSrc ? (
                        <div className="relative h-full w-full">
                          <Image
                            src={imgSrc}
                            alt={`${s.name} interior`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover brightness-[0.72] saturate-[0.82] transition-all duration-700 group-hover:scale-105 group-hover:brightness-[0.58] group-hover:saturate-100"
                            quality={80}
                          />
                          {/* Bottom fade */}
                          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-ink to-transparent" />
                        </div>
                      ) : (
                        <div className="h-full w-full bg-line-light/20" />
                      )}
                    </div>

                    {/* Style name */}
                    <h3 className="mt-8 font-serif text-2xl font-light italic text-paper/90 transition-colors duration-500 group-hover:text-paper">
                      {s.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 max-w-xs text-[13px] leading-[1.7] text-stone transition-colors duration-500 group-hover:text-paper/70">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

