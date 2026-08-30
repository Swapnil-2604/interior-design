"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TextReveal from "@/components/TextReveal";
import MaskedReveal from "@/components/MaskedReveal";
import VirtualTourEmbed from "@/components/VirtualTourEmbed";
import BeforeAfter from "@/components/BeforeAfter";
import { PlateLight, PlatePlan, PlateSection, PlateArch } from "@/components/plates";
import { type ProjectCaseStudy, projects } from "@/lib/site";

export default function ProjectDetailClient({ project }: { project: ProjectCaseStudy }) {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  const related = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  return (
    <article className="relative bg-paper text-ink">
      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 md:p-10 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setActivePhoto(null)}
        >
          <button
            type="button"
            onClick={() => setActivePhoto(null)}
            className="absolute right-6 top-6 z-10 font-mono text-xs uppercase tracking-wider text-paper/70 hover:text-paper"
          >
            Close [✕]
          </button>
          <img
            src={activePhoto}
            alt="Project gallery high-resolution inspect"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xs border border-line-light shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-line bg-ink py-32 text-paper md:py-48">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-5">
              <Link
                href="/work"
                className="font-mono text-[11px] uppercase tracking-luxe text-stone hover:text-brass transition-colors"
              >
                ← Back to Portfolio
              </Link>
              <span className="text-stone">•</span>
              <span className="font-mono text-[11px] text-stone">Case Study {project.n}</span>
              <span className="h-px flex-1 bg-line-light" />
            </div>
          </Reveal>

          <div className="mt-12 md:mt-16">
            <Reveal as="div" y={40} duration={1.2} start="top 90%">
              <p className="font-mono text-[11px] uppercase tracking-luxe text-brass">
                {project.location} &middot; {project.year} &middot; {project.budgetTier} Tier
              </p>
              <TextReveal
                as="h1"
                className="mt-4 font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.02] text-paper"
                speed={1.2}
                stagger={0.06}
                delay={0.1}
              >
                <span className="block" data-line>{project.name}</span>
              </TextReveal>
              <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-stone font-sans">
                {project.desc}
              </p>
            </Reveal>

            {/* Project Specs Strip */}
            <Reveal as="div" y={30} duration={1.1} delay={0.15} start="top 90%">
              <div className="mt-12 grid grid-cols-2 gap-6 border-y border-line-light py-6 sm:grid-cols-4 md:mt-16">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-luxe text-stone block">Typology</span>
                  <span className="mt-1 font-serif text-lg text-paper">{project.type} ({project.bhk})</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-luxe text-stone block">Total Area</span>
                  <span className="mt-1 font-serif text-lg text-paper">{project.area}</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-luxe text-stone block">Style</span>
                  <span className="mt-1 font-serif text-lg text-paper">{project.style}</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-luxe text-stone block">Timeline</span>
                  <span className="mt-1 font-serif text-lg text-paper">{project.timeline}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Hero Full-bleed Image */}
      <section className="relative -mt-10 mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <MaskedReveal className="overflow-hidden rounded-xs border border-line bg-paper-2 shadow-2xl">
          <img
            src={project.image}
            alt={project.name}
            className="h-[400px] w-full object-cover sm:h-[520px] md:h-[680px]"
          />
        </MaskedReveal>
      </section>

      {/* 3D Walkthrough Section */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-5">
              <span className="font-mono text-[11px] text-taupe">01</span>
              <span className="text-[11px] uppercase tracking-luxe text-taupe">
                Spatial Twin
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>

          <div className="mt-10">
            <Reveal as="div" y={30} duration={1.2}>
              <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-light text-ink">
                Spatial dimensions &amp; <em className="italic text-brass">3D architectural walkthrough</em>.
              </h2>
              <p className="mt-3 max-w-xl text-[14px] text-taupe font-sans">
                Explore the room proportions, daylight choreography, and bespoke joinery detailing developed for this residence.
              </p>
            </Reveal>

            <div className="mt-8">
              <VirtualTourEmbed
                title={project.name}
                location={project.location}
                coverImage={project.gallery[1] || project.image}
                area={project.area}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Narrative & Thesis */}
      <section className="relative border-y border-line bg-paper-2 py-24 md:py-36">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal as="div" y={0} duration={1}>
                <div className="flex items-center gap-5">
                  <span className="font-mono text-[11px] text-taupe">02</span>
                  <span className="text-[11px] uppercase tracking-luxe text-taupe">
                    Design Thesis
                  </span>
                  <span className="h-px flex-1 bg-line" />
                </div>
              </Reveal>

              <Reveal as="div" y={30} duration={1.2} className="mt-8">
                <h3 className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-tight text-ink">
                  A conversation between <em className="italic text-brass">climate, craft, and human routine</em>.
                </h3>
                <blockquote className="mt-8 border-l-2 border-brass pl-5 font-serif text-lg italic text-ink/80">
                  &ldquo;{project.narrative.quote}&rdquo;
                </blockquote>
              </Reveal>
            </div>

            <div className="space-y-8 lg:col-span-7 font-sans text-[14px] leading-[1.85] text-ink/85">
              <Reveal as="div" y={30} duration={1.1}>
                <h4 className="font-mono text-[11px] uppercase tracking-luxe text-taupe">The Client Brief</h4>
                <p className="mt-2">{project.narrative.brief}</p>
              </Reveal>
              <Reveal as="div" y={30} duration={1.1} delay={0.1}>
                <h4 className="font-mono text-[11px] uppercase tracking-luxe text-taupe">The Architectural Concept</h4>
                <p className="mt-2">{project.narrative.concept}</p>
              </Reveal>
              <Reveal as="div" y={30} duration={1.1} delay={0.15}>
                <h4 className="font-mono text-[11px] uppercase tracking-luxe text-taupe">The On-Site Execution</h4>
                <p className="mt-2">{project.narrative.execution}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* High-Resolution Photo Gallery (min 6 images) */}
      <section className="relative py-28 md:py-40">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-5">
              <span className="font-mono text-[11px] text-taupe">03</span>
              <span className="text-[11px] uppercase tracking-luxe text-taupe">
                Visual Documentation (Gallery)
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>

          <div className="mt-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <Reveal as="div" y={30} duration={1.2}>
              <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3.2rem)] font-light text-ink">
                Curated angles &amp; <em className="italic text-brass">material details</em>.
              </h2>
            </Reveal>
            <span className="font-mono text-[11px] uppercase tracking-wider text-taupe">
              Click any image to inspect high-resolution
            </span>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((img, i) => (
              <Reveal
                key={img + i}
                as="div"
                y={30}
                duration={1}
                delay={i * 0.05}
                start="top 90%"
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setActivePhoto(img)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActivePhoto(img);
                    }
                  }}
                  className="group relative cursor-zoom-in overflow-hidden rounded-xs border border-line bg-paper-2 focus:outline-none focus:ring-1 focus:ring-brass"
                >
                  <img
                    src={img}
                    alt={`${project.name} photo detail ${i + 1}`}
                    className="h-[280px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[340px]"
                  />
                  <div className="absolute inset-0 bg-ink/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                    <span className="rounded-full bg-paper/90 px-3 py-1 font-mono text-[10px] uppercase text-ink">
                      Inspect 🔍
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After Section (if present) */}
      {project.beforeAfter && (
        <section className="relative border-t border-line bg-ink py-28 text-paper md:py-36">
          <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
            <Reveal as="div" y={0} duration={1}>
              <div className="flex items-center gap-5">
                <span className="font-mono text-[11px] text-stone">04</span>
                <span className="text-[11px] uppercase tracking-luxe text-stone">
                  Before &amp; After Transformation
                </span>
                <span className="h-px flex-1 bg-line-light" />
              </div>
            </Reveal>

            <div className="mt-12">
              <BeforeAfter />
            </div>
          </div>
        </section>
      )}

      {/* Scope of Work & Material Palette */}
      <section className="relative border-t border-line bg-paper py-24 md:py-36">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Scope */}
            <div className="lg:col-span-6">
              <Reveal as="div" y={0} duration={1}>
                <div className="flex items-center gap-5">
                  <span className="font-mono text-[11px] text-taupe">05</span>
                  <span className="text-[11px] uppercase tracking-luxe text-taupe">
                    Scope of Deliverables
                  </span>
                  <span className="h-px flex-1 bg-line" />
                </div>
              </Reveal>

              <Reveal as="div" y={30} duration={1.1} className="mt-8">
                <h3 className="font-serif text-2xl font-light text-ink">
                  Turnkey architectural inclusions
                </h3>
                <ul className="mt-8 space-y-4">
                  {project.scope.map((item, idx) => (
                    <li key={item} className="flex items-start gap-4 border-b border-line pb-4 text-[13px] text-ink/80 font-sans">
                      <span className="font-mono text-[11px] text-brass">0{idx + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Materials */}
            <div className="lg:col-span-6">
              <Reveal as="div" y={0} duration={1}>
                <div className="flex items-center gap-5">
                  <span className="font-mono text-[11px] text-taupe">06</span>
                  <span className="text-[11px] uppercase tracking-luxe text-taupe">
                    Material Palette
                  </span>
                  <span className="h-px flex-1 bg-line" />
                </div>
              </Reveal>

              <Reveal as="div" y={30} duration={1.1} className="mt-8">
                <h3 className="font-serif text-2xl font-light text-ink">
                  Tactile specifications
                </h3>
                <div className="mt-8 space-y-4">
                  {project.materials.map((m) => (
                    <div key={m.name} className="rounded-xs border border-line bg-paper-2 p-4 font-sans">
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-lg text-ink">{m.name}</span>
                        <span className="font-mono text-[10px] uppercase text-brass">{m.finish}</span>
                      </div>
                      <p className="mt-1 text-[12px] text-taupe">{m.role}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More & CTA */}
      <section className="relative border-t border-line bg-ink py-24 text-paper md:py-32">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="flex flex-col justify-between gap-6 border-b border-line-light pb-8 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-luxe text-stone">More Commissions</span>
              <h3 className="mt-2 font-serif text-3xl italic text-paper">Explore related work</h3>
            </div>
            <Link
              href="/contact"
              className="btn-fill self-start px-8 py-3.5 text-[11px] uppercase tracking-luxe"
            >
              Inquire About A Similar Project →
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/work/${rel.slug}`}
                className="group relative block overflow-hidden rounded-xs border border-line-light bg-ink-2 p-6 transition-all duration-500 hover:border-brass/50"
              >
                <div className="overflow-hidden rounded-xs">
                  <img
                    src={rel.image}
                    alt={rel.name}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-luxe text-stone">
                      {rel.location} &middot; {rel.year}
                    </span>
                    <h4 className="mt-1 font-serif text-2xl text-paper group-hover:text-brass transition-colors">
                      {rel.name}
                    </h4>
                  </div>
                  <span className="text-brass transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
