"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import TextReveal from "./TextReveal";
import { PlatePlan } from "./plates";
import { begin } from "@/lib/site";

export default function BeginProject() {
  return (
    <section
      id="begin-project"
      className="relative overflow-hidden scroll-mt-24 border-t border-line-light bg-ink py-24 text-paper md:py-32"
    >
      {/* faint plan study tucked behind the right edge */}
      <Reveal
        as="div"
        className="pointer-events-none absolute -bottom-32 -right-24 hidden text-paper/5 lg:block"
        y={0}
        start="top 90%"
        duration={1.8}
      >
        <PlatePlan className="h-[480px] w-auto" />
      </Reveal>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal as="div" y={0} duration={1}>
          <div className="flex items-center gap-5">
            <span className="font-mono text-[11px] text-stone">VI</span>
            <span className="text-[11px] uppercase tracking-luxe text-stone">
              Begin a Project
            </span>
            <span className="h-px flex-1 bg-line-light" />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:items-end md:gap-8">
          <div className="md:col-span-8">
            <Reveal as="div" y={50} duration={1.4} start="top 90%">
              <TextReveal
                as="h2"
                className="max-w-[14ch] font-serif text-[clamp(2rem,4.6vw,4.2rem)] font-light leading-[1.08] text-paper"
                speed={1.2}
                stagger={0.06}
                delay={0.15}
              >
                <span className="block" data-line>The next room is yours. Let&apos;s</span>
                <span className="block" data-line>
                  <em className="italic text-brass">begin</em> it properly.
                </span>
              </TextReveal>
            </Reveal>
            <Reveal as="div" y={30} duration={1.1} delay={0.15} start="top 94%">
              <p className="mt-6 max-w-md text-[14px] leading-[1.8] text-stone">
                {begin.sub}
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-4 md:text-right">
            <Reveal as="div" y={30} duration={1.1} delay={0.2} start="top 94%">
              <p className="font-mono text-[10px] uppercase tracking-luxe text-stone">
                Currently accepting: two projects, 2026
              </p>
              <Link
                href="/contact"
                className="group btn-fill mt-8 inline-flex items-center gap-4 px-10 py-5 text-[11px] uppercase tracking-luxe transition-colors duration-500"
              >
                {begin.cta}
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  &#8594;
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
