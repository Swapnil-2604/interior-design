"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import TextReveal from "./TextReveal";
import { PlateLight } from "./plates";
import { contact, costCalculator } from "@/lib/site";

const details = [
  { label: "New business", value: contact.email, href: `mailto:${contact.email}` },
  { label: "Studio", value: contact.phone, href: `tel:${contact.phone.replace(/[^+\d]/g, "")}` },
  { label: "Atelier", value: contact.address, href: undefined },
];

export default function CTA() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-[92svh] flex-col justify-center overflow-hidden scroll-mt-24 bg-ink py-32 text-paper md:py-40"
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
            <span className="font-mono text-[11px] text-stone">17</span>
            <span className="text-[11px] uppercase tracking-luxe text-stone">
              Contact
            </span>
            <span className="h-px flex-1 bg-line-light" />
          </div>
        </Reveal>

        <div className="mt-14 max-w-3xl md:mt-20">
          <Reveal as="div" y={60} duration={1.5} start="top 90%">
            <TextReveal
              as="h2"
              className="font-sans text-[clamp(2rem,6vw,5.4rem)] font-light uppercase leading-[1.02] tracking-[0.02em]"
              speed={1.1}
              stagger={0.07}
              delay={0.2}
            >
              <span className="block" data-line>Let&apos;s create a space</span>
              <span className="block" data-line>
                that feels like <em className="font-serif font-light italic text-brass">you</em>.
              </span>
            </TextReveal>
          </Reveal>
        </div>

        <Reveal as="div" y={40} duration={1.2} delay={0.15} start="top 95%">
          <a
            href={`mailto:${contact.email}`}
            className="group btn-fill mt-12 inline-flex items-center gap-4 px-10 py-5 text-[11px] uppercase tracking-luxe transition-colors duration-500 md:mt-16"
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

        {/* lead form */}
        <Reveal as="div" y={40} duration={1.2} delay={0.2} start="top 96%">
          <div className="mt-16 border border-line-light p-6 md:mt-24 md:p-10">
            {sent ? (
              <div className="flex min-h-[240px] flex-col justify-center">
                <p className="font-serif text-2xl italic text-paper md:text-3xl">
                  Thank you.
                </p>
                <p className="mt-4 max-w-md text-sm leading-[1.8] text-stone">
                  We have received your note and will reply within two working
                  days — usually sooner. For an immediate conversation, write
                  to{" "}
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-paper underline underline-offset-4 transition-colors hover:text-brass"
                  >
                    {contact.email}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="grid gap-x-10 gap-y-8 md:grid-cols-2"
              >
                <div>
                  <label
                    htmlFor="cta-name"
                    className="block text-[10px] uppercase tracking-luxe text-stone"
                  >
                    Your name
                  </label>
                  <input
                    id="cta-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Jane Doe"
                    className="mt-3 w-full border-b border-line-light bg-transparent py-2 text-paper outline-none transition-colors duration-300 placeholder:text-stone/50 focus:border-brass"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cta-email"
                    className="block text-[10px] uppercase tracking-luxe text-stone"
                  >
                    Email
                  </label>
                  <input
                    id="cta-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jane@example.com"
                    className="mt-3 w-full border-b border-line-light bg-transparent py-2 text-paper outline-none transition-colors duration-300 placeholder:text-stone/50 focus:border-brass"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cta-phone"
                    className="block text-[10px] uppercase tracking-luxe text-stone"
                  >
                    Phone{" "}
                    <span className="normal-case tracking-normal text-stone/60">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="cta-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+1 (555) 000-0000"
                    className="mt-3 w-full border-b border-line-light bg-transparent py-2 text-paper outline-none transition-colors duration-300 placeholder:text-stone/50 focus:border-brass"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cta-type"
                    className="block text-[10px] uppercase tracking-luxe text-stone"
                  >
                    Project type
                  </label>
                  <select
                    id="cta-type"
                    name="type"
                    defaultValue="3 BHK"
                    className="mt-3 w-full cursor-pointer border-b border-line-light bg-transparent py-2 text-paper outline-none transition-colors duration-300 focus:border-brass"
                  >
                    {costCalculator.propertyTypes.map((t) => (
                      <option key={t} value={t} className="bg-ink text-paper">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="cta-msg"
                    className="block text-[10px] uppercase tracking-luxe text-stone"
                  >
                    About the project
                  </label>
                  <textarea
                    id="cta-msg"
                    name="message"
                    rows={3}
                    placeholder="A few words about the space and what you're hoping for."
                    className="mt-3 w-full resize-none border-b border-line-light bg-transparent py-2 text-paper outline-none transition-colors duration-300 placeholder:text-stone/50 focus:border-brass"
                  />
                </div>
                <div className="flex flex-col gap-6 md:col-span-2 md:flex-row md:items-center md:justify-between">
                  <p className="max-w-xs text-[11px] leading-[1.7] text-stone">
                    No newsletters, no spam — just a reply to your note.
                  </p>
                  <button
                    type="submit"
                    className="group inline-flex shrink-0 items-center gap-4 border border-paper/25 px-10 py-5 text-[11px] uppercase tracking-luxe text-paper transition-colors duration-500 hover:bg-paper hover:text-ink"
                  >
                    Send
                    <span className="transition-transform duration-500 group-hover:translate-x-1">
                      &#8594;
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}