"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import TextReveal from "./TextReveal";
import { services } from "@/lib/site";

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 bg-ink py-32 text-paper md:py-44"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal as="div" y={0} duration={1}>
          <div className="flex items-center gap-5">
            <span className="font-mono text-[11px] text-stone">03</span>
            <span className="text-[11px] uppercase tracking-luxe text-stone">
              What we do
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
              <span className="block" data-line>One studio, the full</span>
              <span className="block" data-line>craft of a room.</span>
            </TextReveal>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-line-light md:mt-24">
          {services.map((s, i) => (
            <Reveal
              key={s.n}
              as="div"
              y={36}
              duration={1}
              delay={i * 0.05}
              start="top 90%"
            >
              <Link
                href={`/services/${s.slug}`}
                className="group block border-b border-line-light transition-colors hover:bg-paper/5"
              >
                <div className="flex items-center gap-5 py-6 px-4 transition-colors duration-500 md:gap-8 md:py-7">
                  <span className="w-8 shrink-0 font-mono text-[11px] text-stone">
                    {s.n}
                  </span>

                  {/* Service photo thumbnail */}
                  {"image" in s && s.image && (
                    <div className="h-16 w-24 shrink-0 overflow-hidden rounded-xs border border-line-light/30 bg-ink-2 hidden sm:block">
                      <img
                        src={s.image as string}
                        alt={s.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    </div>
                  )}

                  <h3 className="shrink-0 font-sans text-xl font-light uppercase tracking-[0.04em] text-paper/85 transition-all duration-500 group-hover:translate-x-2 group-hover:text-brass md:text-[1.6rem]">
                    {s.title}
                  </h3>

                  <p className="hidden max-w-xs text-[13px] leading-[1.7] text-stone md:ml-auto md:block">
                    {s.desc}
                  </p>

                  <span className="ml-auto text-lg text-brass opacity-60 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100 md:ml-4">
                    &#8599;
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" y={30} duration={1} start="top 95%">
          <div className="mt-16 flex flex-col items-start justify-between gap-6 md:mt-20 md:flex-row md:items-center">
            <p className="max-w-sm text-sm leading-[1.8] text-stone">
              Scope is decided with you, never by a template. Every discipline
              below can be engaged alone or as one continuous delivery.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 text-[11px] uppercase tracking-luxe text-paper/85 transition-colors hover:text-paper"
            >
              Have a project in mind
              <span className="text-brass transition-transform duration-500 group-hover:translate-x-1">
                &#8594;
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
