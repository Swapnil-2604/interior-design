"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const capabilities = [
  {
    n: "01",
    title: "Editorial Portfolio & Spatial Case Studies",
    desc: "Transform static project photos into immersive digital experiences with architectural drawing plate overlays, before-and-after sliders, material narratives, and spatial walkthrough integration.",
    proofLabel: "See Villa Meridian Case Study →",
    proofHref: "/work/villa-meridian",
  },
  {
    n: "02",
    title: "Interactive Cost Calculators & Estimation Engines",
    desc: "Pre-qualify high-net-worth clients and eliminate price ambiguity with custom real-time BHK, square-footage, and finish-tier cost calculators that convert visitors into serious inquiries.",
    proofLabel: "Test the Interactive Cost Calculator →",
    proofHref: "/calculator",
  },
  {
    n: "03",
    title: "Multi-City Local SEO & Service Silos",
    desc: "Dominate search results across high-value luxury real estate markets with programmatic, crawlable city and room-specific landing pages tailored for organic lead generation.",
    proofLabel: "Explore Mumbai Living Room SEO Hub →",
    proofHref: "/locations/mumbai/living-room",
  },
  {
    n: "04",
    title: "Transparent Pricing & Scope Matrix",
    desc: "Present your design tiers (Essential, Signature, Bespoke) with clear itemized scope, deliverables breakdown, timeline expectations, and downloadable studio dossiers.",
    proofLabel: "Review Pricing & Scope Matrix →",
    proofHref: "/pricing",
  },
  {
    n: "05",
    title: "Curated Commerce & Material Catalogues",
    desc: "Monetize custom studio furniture, bespoke lighting fixtures, and imported finishes through an integrated, high-aesthetic e-commerce catalogue and sample ordering system.",
    proofLabel: "View Studio Shop Experience →",
    proofHref: "/shop",
  },
  {
    n: "06",
    title: "Lead Qualification & WhatsApp Direct Booking",
    desc: "Frictionless multi-step consultation booking flows and direct one-click WhatsApp chat triggers that immediately connect high-intent clients with your principal designers.",
    proofLabel: "Test Consultation Booking Flow →",
    proofHref: "/contact",
  },
];

const packages = [
  {
    name: "Studio Portfolio",
    tagline: "Essential digital presence for boutique interior practices",
    timeline: "3–4 Weeks",
    features: [
      "Bespoke Responsive Web Design (Tailored UI/UX)",
      "High-Performance Next.js & React Frontend",
      "Dynamic Case Study CMS with Before/After Sliders",
      "Editorial Journal & Press Highlights",
      "Mobile-Optimized Lead Capture & WhatsApp Integration",
      "Core Technical SEO & Google Search Console Setup",
    ],
  },
  {
    name: "Signature Interactive Platform",
    tagline: "Full-stack conversion engine for established design studios",
    popular: true,
    timeline: "5–7 Weeks",
    features: [
      "Everything in Studio Portfolio",
      "Custom Interactive Interior Cost Calculator",
      "Multi-City Programmatic Local SEO Architecture (5+ Cities)",
      "Room-by-Room Service Taxonomy & Silo Pages",
      "Architectural Drawing Plates & Spatial Walkthrough Cards",
      "Integrated Inquiry CRM & Automated Email Routing",
    ],
  },
  {
    name: "Bespoke Flagship Architecture",
    tagline: "Custom digital infrastructure for luxury multi-city firms",
    timeline: "8–12 Weeks",
    features: [
      "Everything in Signature Platform",
      "E-Commerce Shop Module for Studio Furniture & Decor",
      "Client Portal for Real-Time Project Milestone Tracking",
      "Interactive 3D Viewport Integrations",
      "Advanced Multi-Currency & Internationalization",
      "Dedicated Quarterly Performance & SEO Optimization",
    ],
  },
];

export default function WorkWithUsClient() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Hero Section */}
      <section className="relative border-b border-line bg-paper-2 pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-3">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-luxe text-brass">
                Developer &amp; Agency Attribution
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>

          <div className="mt-8 max-w-4xl">
            <Reveal as="h1" y={25} duration={1.2}>
              <span className="font-serif text-[clamp(2.4rem,5vw,4.8rem)] font-light leading-[1.1] text-ink block">
                You just experienced a concept.{" "}
                <em className="italic text-brass font-normal">Let&rsquo;s build yours.</em>
              </span>
            </Reveal>

            <Reveal as="p" y={20} duration={1.2} delay={0.15}>
              <span className="mt-6 block text-[16px] md:text-[18px] leading-relaxed text-taupe font-sans max-w-3xl">
                <strong className="text-ink font-medium">Lumière Interiors</strong> is a demonstration platform designed &amp; developed by <strong className="text-ink font-medium">Swapnil</strong> at <strong className="text-ink font-medium">Automate Reality Labs</strong> to show what is possible when modern web development, high-end editorial aesthetics, and conversion architecture are built specifically for interior design studios and architectural practices.
              </span>
            </Reveal>

            <Reveal as="div" y={20} duration={1.2} delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact-section"
                  className="btn-fill px-8 py-3.5 text-[11px] uppercase tracking-luxe"
                >
                  Start Your Studio Website
                </a>
                <Link
                  href="/"
                  className="rounded-full border border-line bg-paper px-6 py-3.5 font-mono text-[11px] uppercase tracking-wider text-taupe hover:border-ink hover:text-ink transition-colors"
                >
                  ← Return to Lumière Demo
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why This Matters for Design Studios */}
      <section className="border-b border-line bg-paper py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="font-mono text-[11px] uppercase tracking-luxe text-taupe">
                The Industry Problem
              </span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl italic text-ink font-light leading-snug">
                Most interior design websites look like generic templates that leak high-value clients.
              </h2>
              <p className="mt-6 text-[14px] leading-relaxed text-taupe font-sans">
                Interior designers curate world-class physical spaces with tactile materials, bespoke lighting, and flawless proportions. Yet their digital storefronts are often slow WordPress themes, unindexed PDF portfolios, or cookie-cutter template sites that fail to convey premium craftsmanship.
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div className="rounded-xs border border-line bg-paper-2 p-6 md:p-8">
                <h3 className="font-serif text-xl italic text-ink">
                  1. Pre-Qualify Serious HNI Clients Early
                </h3>
                <p className="mt-2 text-[13px] text-taupe leading-relaxed">
                  Transparent budget ranges, interactive cost estimation tools, and clear tier deliverables filter out mismatched inquiries before your first discovery call, saving dozens of hours of principal designer time.
                </p>
              </div>

              <div className="rounded-xs border border-line bg-paper-2 p-6 md:p-8">
                <h3 className="font-serif text-xl italic text-ink">
                  2. Win Organic High-Intent Local Search
                </h3>
                <p className="mt-2 text-[13px] text-taupe leading-relaxed">
                  Programmatic local SEO landing hubs (e.g. <em>&ldquo;Luxury 3 BHK Interior Designer in Bandra, Mumbai&rdquo;</em>) allow your practice to rank organically for high-budget residential and commercial searches without relying solely on Instagram algorithms.
                </p>
              </div>

              <div className="rounded-xs border border-line bg-paper-2 p-6 md:p-8">
                <h3 className="font-serif text-xl italic text-ink">
                  3. Elevate Perceived Value &amp; Design Authority
                </h3>
                <p className="mt-2 text-[13px] text-taupe leading-relaxed">
                  Smooth micro-animations, architectural typography, before-and-after case study reveals, and curated material guides establish immediate design authority that justifies premium fee structures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built-in Capability Proof Points */}
      <section className="border-b border-line bg-paper-2 py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-luxe text-taupe">
                Features We Build
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-5xl font-light text-ink">
                Proven capabilities engineered in this demo.
              </h2>
            </div>
            <p className="max-w-md font-mono text-[11px] text-taupe uppercase tracking-wider">
              Every system on this site is custom-coded, production-ready, and directly transferable to your studio.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div
                key={cap.n}
                className="group flex flex-col justify-between rounded-xs border border-line bg-paper p-7 transition-all duration-300 hover:border-brass hover:shadow-xl"
              >
                <div>
                  <span className="font-mono text-[11px] text-brass">{cap.n}</span>
                  <h3 className="mt-3 font-serif text-xl italic text-ink">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-[13px] text-taupe leading-relaxed font-sans">
                    {cap.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-line">
                  <Link
                    href={cap.proofHref}
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-ink group-hover:text-brass transition-colors"
                  >
                    <span>{cap.proofLabel}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Packages / Starting Points */}
      <section className="border-b border-line bg-paper py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-mono text-[11px] uppercase tracking-luxe text-taupe">
              Engagement Models
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl font-light text-ink">
              Tailored packages for every studio stage.
            </h2>
            <p className="mt-4 text-[14px] text-taupe font-sans">
              From boutique solo practices to established multi-city architecture firms, we build high-performance digital platforms with clear timelines and turnkey delivery.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col justify-between rounded-xs border p-8 transition-all duration-300 ${
                  pkg.popular
                    ? "border-brass bg-paper-2 shadow-2xl"
                    : "border-line bg-paper hover:border-taupe"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-8 rounded-full bg-brass px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-paper">
                    Recommended for Growth
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl italic text-ink">{pkg.name}</h3>
                    <span className="font-mono text-[10px] uppercase text-taupe border border-line px-2.5 py-1 rounded-xs">
                      {pkg.timeline}
                    </span>
                  </div>
                  <p className="mt-2 text-[12px] text-taupe font-sans leading-relaxed">
                    {pkg.tagline}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-line pt-6">
                    <span className="font-mono text-[10px] uppercase tracking-luxe text-ink block">
                      Included Scope:
                    </span>
                    {pkg.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-[12px] text-taupe font-sans">
                        <span className="text-brass mt-0.5">•</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-line">
                  <a
                    href="#contact-section"
                    className={`block w-full text-center py-3 text-[11px] uppercase tracking-luxe transition-all ${
                      pkg.popular
                        ? "bg-ink text-paper hover:bg-brass hover:text-paper"
                        : "border border-line bg-paper text-ink hover:border-ink"
                    }`}
                  >
                    Request Proposal
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact & Lead Form Section */}
      <section id="contact-section" className="bg-paper-2 py-20 md:py-32">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="font-mono text-[11px] uppercase tracking-luxe text-brass">
                Direct Contact
              </span>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl font-light text-ink leading-tight">
                Ready to elevate your studio&rsquo;s digital presence?
              </h2>
              <p className="mt-6 text-[14px] leading-relaxed text-taupe font-sans">
                Tell us about your practice, your current website bottlenecks, and your timeline. We will review your current site and send you a custom architectural teardown and scoped proposal within 24 hours.
              </p>

              <div className="mt-8 space-y-4 font-mono text-[12px]">
                <div className="flex items-center gap-3">
                  <span className="text-brass">Lead Developer:</span>
                  <span className="text-ink font-sans font-medium">Swapnil &middot; Automate Reality Labs</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-brass">Direct Email:</span>
                  <a
                    href="mailto:swapnil@automaterealitylabs.in?subject=Studio%20Website%20Inquiry%20-%20Automate%20Reality%20Labs"
                    className="text-ink underline hover:text-brass transition-colors"
                  >
                    swapnil@automaterealitylabs.in
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-brass">Phone / Mobile:</span>
                  <a
                    href="tel:+918605832851"
                    className="text-ink underline hover:text-brass transition-colors"
                  >
                    +91 8605832851
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-brass">WhatsApp:</span>
                  <a
                    href="https://wa.me/918605832851?text=Hi%20Swapnil,%20I%20saw%20the%20Lumiere%20Interiors%20concept%20site%20and%20would%20like%20to%20discuss%20a%20website%20for%20our%20interior%20design%20studio."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink underline hover:text-brass transition-colors"
                  >
                    Chat on WhatsApp (+91 8605832851) ↗
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-brass">Turnaround:</span>
                  <span className="text-stone">Detailed proposal within 24 business hours</span>
                </div>
              </div>
            </div>

            {/* Direct Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-xs border border-line bg-paper p-8 md:p-10 shadow-xl">
                <h3 className="font-serif text-2xl italic text-ink">
                  Inquire About a Custom Studio Website
                </h3>
                <p className="mt-1 text-[12px] text-taupe font-sans">
                  Fill out this brief form to schedule an introductory video consultation.
                </p>

                {submitted ? (
                  <div className="mt-8 rounded-xs border border-brass/40 bg-brass/10 p-6 text-center">
                    <h4 className="font-serif text-xl italic text-ink">
                      Inquiry Received
                    </h4>
                    <p className="mt-2 text-[13px] text-taupe">
                      Thank you! We have received your details and will prepare a tailored proposal and reach out within 24 business hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="mt-8 space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-wider text-taupe mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Maya Advani"
                          className="w-full border border-line bg-paper-2 px-4 py-3 text-[13px] text-ink focus:border-brass focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-wider text-taupe mb-2">
                          Studio / Practice Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Advani Architects"
                          className="w-full border border-line bg-paper-2 px-4 py-3 text-[13px] text-ink focus:border-brass focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-wider text-taupe mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="maya@advanidesign.com"
                          className="w-full border border-line bg-paper-2 px-4 py-3 text-[13px] text-ink focus:border-brass focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-wider text-taupe mb-2">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 98200 00000"
                          className="w-full border border-line bg-paper-2 px-4 py-3 text-[13px] text-ink focus:border-brass focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-wider text-taupe mb-2">
                          Current Website URL (if any)
                        </label>
                        <input
                          type="url"
                          placeholder="https://yourstudio.com"
                          className="w-full border border-line bg-paper-2 px-4 py-3 text-[13px] text-ink focus:border-brass focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-wider text-taupe mb-2">
                          Target Launch Timeline
                        </label>
                        <select className="w-full border border-line bg-paper-2 px-4 py-3 text-[13px] text-ink focus:border-brass focus:outline-none">
                          <option>Immediate (Within 4 weeks)</option>
                          <option>Next Quarter (1–3 months)</option>
                          <option>Flexible / Exploring Ideas</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-wider text-taupe mb-2">
                        Key Goals or Features Needed
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us what you want to achieve — e.g. rebrand our portfolio, add an interactive cost calculator, rank for local Mumbai luxury interior searches, or launch a shop."
                        className="w-full border border-line bg-paper-2 p-4 text-[13px] text-ink focus:border-brass focus:outline-none"
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
