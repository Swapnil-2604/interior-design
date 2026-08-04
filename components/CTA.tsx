"use client";

import Reveal from "./Reveal";
import { PlateLight } from "./plates";
import { contact } from "@/lib/site";

const details = [
  { label: "New business", value: contact.email, href: `mailto:${contact.email}` },
  { label: "Studio", value: contact.phone, href: `tel:${contact.phone.replace(/[^+\d]/g, "")}` },
  { label: "Atelier", value: contact.address, href: undefined },
];

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[92svh] flex-col justify-center overflow-hidden bg-ink py-32 text-paper md:py-40"
    >
      {/* faint light-study plate as cinematic texture */}
      <Reveal
        as="div"
        className="pointer-events-none absolute -bottom-32 -left-24 hidden text-paper/5 lg:block"
        y={0}
        duration={1.8}
        start="top 90%"
      >
        <PlateLight className="h-[560px] w-auto rotate-[-6deg]" />
      </Reveal>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal as="div" y={0} duration={1}>
          <div className="flex items-center gap-5">
            <span className="font-mono text-[11px] text-stone">06</span>
            <span className="text-[11px] uppercase tracking-luxe text-stone">
              Contact
            </span>
            <span className="h-px flex-1 bg-line-light" />
          </div>
        </Reveal>

        <div className="mt-14 max-w-[16ch] md:mt-20">
          <Reveal as="div" y={60} duration={1.5} start="top 90%">
            <h2 className="font-sans text-[clamp(2rem,6vw,5.4rem)] font-light uppercase leading-[1.02] tracking-[0.02em]">
              Let&apos;s create a space
              <span className="block">
                that feels like <em className="font-serif font-light italic text-brass">you</em>.
              </span>
            </h2>
          </Reveal>
        </div>

        <Reveal as="div" y={40} duration={1.2} delay={0.15} start="top 95%">
          <a
            href={`mailto:${contact.email}`}
            className="group mt-12 inline-flex items-center gap-4 border border-paper/25 px-10 py-5 text-[11px] uppercase tracking-luxe text-paper transition-colors duration-500 hover:bg-paper hover:text-ink md:mt-16"
          >
            Start a conversation
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              &#8594;
            </span>
          </a>
        </Reveal>

        <Reveal as="div" y={34} duration={1.1} delay={0.25} start="top 96%">
          <div className="mt-16 grid gap-8 border-t border-line-light pt-8 sm:grid-cols-3 md:mt-24">
            {details.map((d) => (
              <div key={d.label}>
                <p className="text-[9px] uppercase tracking-luxe text-stone">
                  {d.label}
                </p>
                {d.href ? (
                  <a
                    href={d.href}
                    className="mt-2 inline-block font-serif text-lg italic leading-snug text-paper/85 transition-colors hover:text-brass md:text-xl"
                  >
                    {d.value}
                  </a>
                ) : (
                  <p className="mt-2 font-serif text-lg italic leading-snug whitespace-pre-line text-paper/85 md:text-xl">
                    {d.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
