"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { agencyInfo } from "@/lib/agency";

export default function AgencyContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    studio: "",
    email: "",
    phone: "",
    website: "",
    location: "",
    package: "Signature Platform (₹2,75,000 / $3,450)",
    timeline: "Within 4 Weeks",
    goals: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Agency Contact Page (/work-with-us/contact)",
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.error("Submission error:", err);
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please contact Swapnil directly via WhatsApp or email.",
      );
    } finally {
      setLoading(false);
    }
  };

  const whatsappInquiryText = encodeURIComponent(
    `Hi Swapnil, I'd like to discuss a custom studio website project for ${formData.studio || "our architecture/interior practice"}.\n\nName: ${formData.name || "Client"}\nEmail: ${formData.email || "Not provided"}\nDesired Package: ${formData.package}\nTimeline: ${formData.timeline}\nNotes: ${formData.goals || "Looking for a custom platform quote."}`,
  );

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
                  <div className="mt-8 rounded-xs border border-brass/40 bg-brass/10 p-8 text-center animate-in fade-in duration-300">
                    <h3 className="font-serif text-2xl italic text-ink">
                      Inquiry Received Successfully
                    </h3>
                    <p className="mt-3 text-[14px] text-taupe leading-relaxed">
                      Thank you, <strong className="text-ink">{formData.name}</strong>! Your inquiry has been routed to Swapnil. We will review your studio requirements and reach out within 24 business hours.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                      <a
                        href={`https://wa.me/918605832851?text=${whatsappInquiryText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-fill px-6 py-2.5 text-[10px] uppercase tracking-luxe"
                      >
                        Message on WhatsApp Now ↗
                      </a>
                      <Link
                        href="/"
                        className="rounded-full border border-line bg-paper px-5 py-2.5 font-mono text-[10px] uppercase tracking-wider text-taupe hover:text-ink transition-colors"
                      >
                        Return to Lumière Demo
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    {errorMsg && (
                      <div className="rounded-xs border border-red-500/40 bg-red-500/10 p-4 text-[12px] text-red-600 font-mono">
                        {errorMsg}
                      </div>
                    )}

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-wider text-taupe mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                          value={formData.studio}
                          onChange={(e) => setFormData({ ...formData, studio: e.target.value })}
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
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
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
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
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
                        <select
                          value={formData.package}
                          onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                          className="w-full border border-line bg-paper px-4 py-3 text-[13px] text-ink focus:border-brass focus:outline-none"
                        >
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
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full border border-line bg-paper px-4 py-3 text-[13px] text-ink focus:border-brass focus:outline-none"
                        >
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
                        value={formData.goals}
                        onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                        placeholder="Tell us about the features you need — e.g. custom cost calculator, drawing plate switcher, multi-city SEO, e-commerce shop, or full studio rebrand."
                        className="w-full border border-line bg-paper p-4 text-[13px] text-ink focus:border-brass focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full btn-fill py-4 text-[11px] uppercase tracking-luxe font-medium transition-all disabled:opacity-50"
                    >
                      {loading ? "Transmitting Studio Inquiry..." : "Submit Studio Inquiry & Request Proposal"}
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
