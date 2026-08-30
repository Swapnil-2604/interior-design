"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { agencyInfo } from "@/lib/agency";

export default function AgencyContactClient() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Header */}
      <section className="relative border-b border-line bg-paper-2 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-3">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-luxe text-brass font-semibold">
                Start a Conversation
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>

          <div className="mt-8 max-w-4xl">
            <Reveal as="h1" y={25} duration={1.2}>
              <span className="font-serif text-[clamp(2.4rem,5vw,4.8rem)] font-light leading-[1.1] text-ink block">
                Let&rsquo;s build a digital flagship for your{" "}
                <em className="italic text-brass font-normal">studio</em>.
              </span>
            </Reveal>

            <Reveal as="p" y={20} duration={1.2} delay={0.15}>
              <span className="mt-6 block text-[16px] md:text-[19px] leading-relaxed text-taupe font-sans max-w-3xl">
                Tell us about your practice, current website bottlenecks, and target goals. Swapnil will review your current digital presence and deliver a tailored proposal within 24 hours.
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Direct Details Sidebar */}
            <div className="lg:col-span-5 space-y-8">
              <div className="rounded-xs border border-line bg-paper-2 p-8">
                <span className="font-mono text-[10px] uppercase tracking-luxe text-brass font-semibold block mb-4">
                  Direct Contact Channels
                </span>

                <div className="space-y-4 font-mono text-[12px]">
                  <div>
                    <span className="text-taupe block text-[10px] uppercase">Lead Architect</span>
                    <span className="text-ink font-sans text-sm font-medium mt-0.5 block">
                      {agencyInfo.founder} &middot; {agencyInfo.name}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-line/60">
                    <span className="text-taupe block text-[10px] uppercase">Direct Email</span>
                    <a
                      href={`mailto:${agencyInfo.email}?subject=Studio%20Website%20Inquiry%20-%20Automate%20Reality%20Labs`}
                      className="text-ink underline hover:text-brass transition-colors mt-0.5 block"
                    >
                      {agencyInfo.email}
                    </a>
                  </div>

                  <div className="pt-2 border-t border-line/60">
                    <span className="text-taupe block text-[10px] uppercase">Phone / Mobile</span>
                    <a
                      href={`tel:${agencyInfo.phone.replace(/\s+/g, "")}`}
                      className="text-ink underline hover:text-brass transition-colors mt-0.5 block"
                    >
                      {agencyInfo.phone}
                    </a>
                  </div>

                  <div className="pt-2 border-t border-line/60">
                    <span className="text-taupe block text-[10px] uppercase">WhatsApp</span>
                    <a
                      href={agencyInfo.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-emerald-600 font-medium hover:text-emerald-700 mt-1"
                    >
                      <span>● Direct 1-Click WhatsApp Chat ({agencyInfo.phone}) ↗</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-xs border border-brass/40 bg-brass/10 p-8">
                <span className="font-serif text-xl italic text-ink block">
                  What Happens Next?
                </span>
                <ol className="mt-4 space-y-3 font-sans text-[13px] text-taupe leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-brass font-bold">1.</span>
                    <span>We review your current website, portfolio assets, and competitor landscape.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-brass font-bold">2.</span>
                    <span>We schedule a 30-minute discovery call to align on design aesthetic and calculation formulas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-brass font-bold">3.</span>
                    <span>You receive a fixed-scope proposal with exact delivery milestones within 24 hours.</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="rounded-xs border border-line bg-paper-2 p-8 md:p-12 shadow-xl">
                <h2 className="font-serif text-2xl md:text-3xl italic text-ink">
                  Schedule Studio Consultation
                </h2>
                <p className="mt-2 text-[13px] text-taupe font-sans">
                  Complete this brief questionnaire to request a tailored estimate.
                </p>

                {submitted ? (
                  <div className="mt-8 rounded-xs border border-brass/40 bg-brass/10 p-8 text-center">
                    <h3 className="font-serif text-2xl italic text-ink">
                      Inquiry Received
                    </h3>
                    <p className="mt-3 text-[14px] text-taupe leading-relaxed">
                      Thank you! Swapnil will review your studio details and get back to you with a comprehensive architectural proposal within 24 business hours.
                    </p>
                    <div className="mt-6">
                      <Link
                        href="/"
                        className="btn-fill px-6 py-2.5 text-[10px] uppercase tracking-luxe"
                      >
                        Return to Lumière Demo
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="mt-8 space-y-6"
                  >
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-wider text-taupe mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rohini Mehta"
                          className="w-full border border-line bg-paper px-4 py-3 text-[13px] text-ink focus:border-brass focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-wider text-taupe mb-2">
                          Studio / Practice Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Studio Mehta Architects"
                          className="w-full border border-line bg-paper px-4 py-3 text-[13px] text-ink focus:border-brass focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-wider text-taupe mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="rohini@studiomehta.com"
                          className="w-full border border-line bg-paper px-4 py-3 text-[13px] text-ink focus:border-brass focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-wider text-taupe mb-2">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 98200 00000"
                          className="w-full border border-line bg-paper px-4 py-3 text-[13px] text-ink focus:border-brass focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-wider text-taupe mb-2">
                          Current Website URL (if any)
                        </label>
                        <input
                          type="url"
                          placeholder="https://studiomehta.com"
                          className="w-full border border-line bg-paper px-4 py-3 text-[13px] text-ink focus:border-brass focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-wider text-taupe mb-2">
                          Primary Studio Location
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Mumbai / New Delhi / Bengaluru / Dubai"
                          className="w-full border border-line bg-paper px-4 py-3 text-[13px] text-ink focus:border-brass focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-wider text-taupe mb-2">
                          Target Package
                        </label>
                        <select className="w-full border border-line bg-paper px-4 py-3 text-[13px] text-ink focus:border-brass focus:outline-none">
                          <option>Signature Platform (₹2,75,000 / $3,450) — Most Popular</option>
                          <option>Studio Showcase (₹1,45,000 / $1,850)</option>
                          <option>Flagship Bespoke Architecture (₹4,50,000+ / $5,500+)</option>
                          <option>Custom Scope Consultation</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-wider text-taupe mb-2">
                          Estimated Timeline
                        </label>
                        <select className="w-full border border-line bg-paper px-4 py-3 text-[13px] text-ink focus:border-brass focus:outline-none">
                          <option>Within 4 Weeks</option>
                          <option>1–3 Months</option>
                          <option>Flexible / Planning Ahead</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-wider text-taupe mb-2">
                        Project Scope &amp; Studio Goals
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about the features you need — e.g. custom cost calculator, drawing plate switcher, multi-city SEO, e-commerce shop, or full studio rebrand."
                        className="w-full border border-line bg-paper p-4 text-[13px] text-ink focus:border-brass focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-fill py-4 text-[11px] uppercase tracking-luxe font-medium transition-all"
                    >
                      Submit Studio Inquiry &amp; Request Proposal
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
