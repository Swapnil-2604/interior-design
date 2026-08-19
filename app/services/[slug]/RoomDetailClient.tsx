"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PLATES, PlateKey } from "@/components/plates";

interface RoomDetailClientProps {
  room: {
    slug: string;
    title: string;
    tagline: string;
    subtitle: string;
    heroImage: string;
    specifications: {
      type: string;
      location: string;
      area: string;
      year: string;
      style: string;
      materials: string;
      lighting: string;
      furniture: string;
      approach: string;
    };
    caseStudy: {
      type: string;
      approach: string;
      materials: string;
      lighting: string;
      furniture: string;
      concept: string;
    };
    gallery: Array<{ src: string; caption: string; alt: string }>;
    materialsPalette: Array<{ name: string; type: string; desc: string; image: string }>;
    lightingStory: {
      title: string;
      daylight: string;
      afternoon: string;
      evening: string;
    };
    detailsCraftsmanship: Array<{ title: string; desc: string; image: string }>;
    story: {
      idea: string;
      materials: string;
      light: string;
      details: string;
    };
    finalStatement: {
      quote: string;
      image: string;
    };
  };
  otherRooms: Array<{
    slug: string;
    title: string;
    line: string;
    plate: PlateKey;
    image?: string;
  }>;
}

export default function RoomDetailClient({
  room,
  otherRooms,
}: RoomDetailClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") setSelectedImageIndex(null);
      if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) =>
          prev !== null ? (prev + 1) % room.gallery.length : null
        );
      }
      if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) =>
          prev !== null
            ? (prev - 1 + room.gallery.length) % room.gallery.length
            : null
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, room.gallery.length]);

  return (
    <main className="bg-paper text-ink selection:bg-brass selection:text-ink">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden border-b border-line">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-4 text-[11px] font-mono uppercase tracking-luxe text-taupe mb-8">
              <Link href="/" className="hover:text-ink transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-ink transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-brass">{room.title}</span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <Reveal as="div" y={40} duration={1.2}>
                <span className="font-mono text-[11px] uppercase tracking-luxe text-brass block mb-3">
                  {room.tagline}
                </span>
                <h1 className="font-serif text-[clamp(2.4rem,5.5vw,5rem)] font-light leading-[1.05] text-ink uppercase tracking-[0.02em]">
                  {room.title}
                </h1>
              </Reveal>
            </div>

            <div className="lg:col-span-4">
              <Reveal as="div" y={30} duration={1} delay={0.1}>
                <p className="text-[14px] leading-[1.8] text-taupe font-sans border-l border-brass/50 pl-5">
                  {room.subtitle}
                </p>
              </Reveal>
            </div>
          </div>

          {/* Key Specifications Ribbon */}
          <Reveal as="div" y={30} duration={1} delay={0.2} className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-line border border-line text-[11px] font-mono uppercase">
              <div className="bg-paper p-4">
                <span className="text-taupe block text-[9px]">TYPE</span>
                <span className="text-ink font-serif text-sm italic">{room.specifications.type}</span>
              </div>
              <div className="bg-paper p-4">
                <span className="text-taupe block text-[9px]">LOCATION</span>
                <span className="text-ink font-serif text-sm italic">{room.specifications.location}</span>
              </div>
              <div className="bg-paper p-4">
                <span className="text-taupe block text-[9px]">AREA</span>
                <span className="text-ink font-serif text-sm italic">{room.specifications.area}</span>
              </div>
              <div className="bg-paper p-4">
                <span className="text-taupe block text-[9px]">YEAR</span>
                <span className="text-ink font-serif text-sm italic">{room.specifications.year}</span>
              </div>
              <div className="bg-paper p-4 col-span-2 md:col-span-1">
                <span className="text-taupe block text-[9px]">STYLE</span>
                <span className="text-brass font-serif text-sm italic">{room.specifications.style}</span>
              </div>
            </div>
          </Reveal>

          {/* Large Hero Photography */}
          <Reveal as="div" y={50} duration={1.3} className="mt-12 md:mt-16">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xs border border-line bg-paper-2 group shadow-2xl">
              <img
                src={room.heroImage}
                alt={room.title}
                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Design Story */}
      <section className="py-24 md:py-36 border-b border-line bg-paper-2">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-5 mb-16">
              <span className="font-mono text-[11px] text-taupe">I</span>
              <span className="text-[11px] uppercase tracking-luxe text-taupe">
                Design Story & Philosophy
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <Reveal as="div" y={40} duration={1.1}>
              <span className="font-mono text-[11px] uppercase tracking-luxe text-brass block mb-3">
                THE IDEA
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-light italic text-ink mb-6">
                Concept & Composition
              </h2>
              <p className="text-[14px] leading-[1.8] text-taupe font-sans">
                {room.story.idea}
              </p>
            </Reveal>

            <Reveal as="div" y={40} duration={1.1} delay={0.1}>
              <span className="font-mono text-[11px] uppercase tracking-luxe text-brass block mb-3">
                MATERIALS & CRAFT
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-light italic text-ink mb-6">
                Material Integrity
              </h2>
              <p className="text-[14px] leading-[1.8] text-taupe font-sans">
                {room.story.materials}
              </p>
            </Reveal>

            <Reveal as="div" y={40} duration={1.1} delay={0.15}>
              <span className="font-mono text-[11px] uppercase tracking-luxe text-brass block mb-3">
                LIGHT & SHADOWS
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-light italic text-ink mb-6">
                Atmospheric Light
              </h2>
              <p className="text-[14px] leading-[1.8] text-taupe font-sans">
                {room.story.light}
              </p>
            </Reveal>

            <Reveal as="div" y={40} duration={1.1} delay={0.2}>
              <span className="font-mono text-[11px] uppercase tracking-luxe text-brass block mb-3">
                DETAILS & MILLWORK
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-light italic text-ink mb-6">
                The Last Millimetre
              </h2>
              <p className="text-[14px] leading-[1.8] text-taupe font-sans">
                {room.story.details}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Interactive Architectural Gallery */}
      <section className="py-24 md:py-36 border-b border-line bg-paper">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center justify-between gap-5 mb-14">
              <div className="flex items-center gap-5 flex-1">
                <span className="font-mono text-[11px] text-taupe">II</span>
                <span className="text-[11px] uppercase tracking-luxe text-taupe">
                  Architectural Gallery ({room.gallery.length} Perspectives)
                </span>
                <span className="h-px flex-1 bg-line" />
              </div>
              <span className="hidden sm:block font-mono text-[10px] uppercase tracking-luxe text-brass">
                Click any image for full-screen viewer
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {room.gallery.map((img, idx) => (
              <Reveal key={idx} as="div" y={40} duration={1} delay={(idx % 3) * 0.08}>
                <div
                  onClick={() => setSelectedImageIndex(idx)}
                  className="group relative cursor-pointer overflow-hidden border border-line bg-paper-2 p-3 transition-all duration-500 hover:border-brass hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xs">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-ink/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                      <span className="bg-ink/85 text-paper font-mono text-[10px] uppercase tracking-luxe px-4 py-2 rounded-full border border-brass/50">
                        Expand View &rarr;
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <p className="text-[12px] leading-[1.6] text-taupe font-sans group-hover:text-ink transition-colors">
                      {img.caption}
                    </p>
                    <span className="font-mono text-[10px] text-brass shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute -top-12 right-0 text-paper/70 hover:text-brass text-xs uppercase tracking-luxe font-mono transition-colors"
            >
              Close (ESC) &times;
            </button>

            {/* Main Expanded Image */}
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xs border border-white/10 shadow-2xl">
              <img
                src={room.gallery[selectedImageIndex].src}
                alt={room.gallery[selectedImageIndex].alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Caption & Controls */}
            <div className="w-full mt-6 flex items-center justify-between text-paper gap-6">
              <p className="text-xs font-sans text-taupe max-w-xl">
                <span className="text-brass font-mono mr-3">
                  {String(selectedImageIndex + 1).padStart(2, "0")} / {String(room.gallery.length).padStart(2, "0")}
                </span>
                {room.gallery[selectedImageIndex].caption}
              </p>

              <div className="flex items-center gap-4 shrink-0 font-mono text-xs">
                <button
                  onClick={() =>
                    setSelectedImageIndex(
                      (selectedImageIndex - 1 + room.gallery.length) %
                        room.gallery.length
                    )
                  }
                  className="px-4 py-2 border border-white/20 hover:border-brass hover:text-brass transition-colors text-paper"
                >
                  &larr; Prev
                </button>
                <button
                  onClick={() =>
                    setSelectedImageIndex(
                      (selectedImageIndex + 1) % room.gallery.length
                    )
                  }
                  className="px-4 py-2 border border-white/20 hover:border-brass hover:text-brass transition-colors text-paper"
                >
                  Next &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Materials & Palette */}
      <section className="py-24 md:py-36 border-b border-line bg-paper-2">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-5 mb-14">
              <span className="font-mono text-[11px] text-taupe">III</span>
              <span className="text-[11px] uppercase tracking-luxe text-taupe">
                Materials & Palette Specification
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {room.materialsPalette.map((mat, idx) => (
              <Reveal key={mat.name} as="div" y={30} duration={1} delay={idx * 0.08}>
                <div className="bg-paper border border-line p-5 h-full flex flex-col justify-between group hover:border-brass transition-colors">
                  <div>
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-xs mb-4">
                      <img
                        src={mat.image}
                        alt={mat.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-luxe text-brass block mb-1">
                      {mat.type}
                    </span>
                    <h3 className="font-serif text-lg font-light text-ink mb-2">
                      {mat.name}
                    </h3>
                  </div>
                  <p className="text-[12px] leading-[1.6] text-taupe">
                    {mat.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Lighting Story */}
      <section className="py-24 md:py-36 border-b border-line bg-paper">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-5 mb-14">
              <span className="font-mono text-[11px] text-taupe">IV</span>
              <span className="text-[11px] uppercase tracking-luxe text-taupe">
                Lighting Story & Scenography
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <Reveal as="div" y={40} duration={1.2}>
                <h2 className="font-serif text-3xl md:text-4xl font-light italic text-ink mb-6">
                  {room.lightingStory.title}
                </h2>
                <div className="space-y-6 text-[13px] leading-[1.8] text-taupe">
                  <div className="border-l border-brass/60 pl-4">
                    <span className="font-mono text-[10px] uppercase tracking-luxe text-brass block mb-1">
                      01. Daylight Register
                    </span>
                    <p>{room.lightingStory.daylight}</p>
                  </div>
                  <div className="border-l border-brass/60 pl-4">
                    <span className="font-mono text-[10px] uppercase tracking-luxe text-brass block mb-1">
                      02. Afternoon Diffusion
                    </span>
                    <p>{room.lightingStory.afternoon}</p>
                  </div>
                  <div className="border-l border-brass/60 pl-4">
                    <span className="font-mono text-[10px] uppercase tracking-luxe text-brass block mb-1">
                      03. Evening Ambient Glow
                    </span>
                    <p>{room.lightingStory.evening}</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal as="div" y={50} duration={1.3} delay={0.15}>
                <div className="aspect-[16/10] w-full overflow-hidden rounded-xs border border-line">
                  <img
                    src={room.gallery[4]?.src || room.heroImage}
                    alt="Lighting scenography"
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Details & Craftsmanship */}
      <section className="py-24 md:py-36 border-b border-line bg-paper-2">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-5 mb-14">
              <span className="font-mono text-[11px] text-taupe">V</span>
              <span className="text-[11px] uppercase tracking-luxe text-taupe">
                Details & Craftsmanship
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {room.detailsCraftsmanship.map((det, idx) => (
              <Reveal key={det.title} as="div" y={30} duration={1} delay={idx * 0.1}>
                <div className="border border-line bg-paper p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-xs mb-5 border border-line">
                      <img
                        src={det.image}
                        alt={det.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="font-serif text-xl font-light italic text-ink mb-2">
                      {det.title}
                    </h3>
                  </div>
                  <p className="text-[13px] leading-[1.7] text-taupe">
                    {det.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Project Specifications */}
      <section className="py-24 md:py-36 border-b border-line bg-paper">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-5 mb-14">
              <span className="font-mono text-[11px] text-taupe">VI</span>
              <span className="text-[11px] uppercase tracking-luxe text-taupe">
                Project Specifications
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>

          <Reveal as="div" y={30} duration={1}>
            <div className="border border-line divide-y divide-line text-sm font-sans">
              <div className="grid grid-cols-1 md:grid-cols-3 p-6 bg-paper-2">
                <span className="font-mono text-[11px] uppercase tracking-luxe text-taupe">PROJECT TYPE</span>
                <span className="md:col-span-2 text-ink font-serif italic text-lg">{room.specifications.type}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 p-6">
                <span className="font-mono text-[11px] uppercase tracking-luxe text-taupe">LOCATION</span>
                <span className="md:col-span-2 text-ink font-serif italic text-lg">{room.specifications.location}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 p-6 bg-paper-2">
                <span className="font-mono text-[11px] uppercase tracking-luxe text-taupe">AREA & SCALE</span>
                <span className="md:col-span-2 text-ink font-serif italic text-lg">{room.specifications.area}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 p-6">
                <span className="font-mono text-[11px] uppercase tracking-luxe text-taupe">MATERIALS PALETTE</span>
                <span className="md:col-span-2 text-ink leading-[1.8]">{room.specifications.materials}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 p-6 bg-paper-2">
                <span className="font-mono text-[11px] uppercase tracking-luxe text-taupe">LIGHTING STRATEGY</span>
                <span className="md:col-span-2 text-ink leading-[1.8]">{room.specifications.lighting}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 p-6">
                <span className="font-mono text-[11px] uppercase tracking-luxe text-taupe">BESPOKE FURNITURE</span>
                <span className="md:col-span-2 text-ink leading-[1.8]">{room.specifications.furniture}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. Final Cinematic Image & CTA */}
      <section className="py-28 md:py-40 bg-ink text-paper relative overflow-hidden">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16 relative z-10 text-center">
          <Reveal as="div" y={40} duration={1.2}>
            <blockquote className="font-serif text-[clamp(1.8rem,4vw,3.6rem)] font-light italic leading-[1.2] text-paper max-w-4xl mx-auto mb-10">
              &ldquo;{room.finalStatement.quote}&rdquo;
            </blockquote>
          </Reveal>

          <Reveal as="div" y={30} duration={1} delay={0.15}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 bg-brass text-ink font-mono text-[11px] uppercase tracking-luxe px-8 py-4 rounded-xs hover:bg-brass-light transition-colors duration-300"
            >
              Start a Conversation &rarr;
            </Link>
          </Reveal>

          <Reveal as="div" y={50} duration={1.4} delay={0.2} className="mt-16">
            <div className="aspect-[21/9] w-full overflow-hidden rounded-xs border border-white/10">
              <img
                src={room.finalStatement.image}
                alt="Final cinematic perspective"
                className="h-full w-full object-cover opacity-85"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. Related Spaces */}
      <section className="py-24 md:py-36 bg-paper border-t border-line">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-5 mb-14">
              <span className="font-mono text-[11px] text-taupe">VII</span>
              <span className="text-[11px] uppercase tracking-luxe text-taupe">
                Explore Other Spaces
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
            {otherRooms.map((r, i) => (
              <Link
                key={r.title}
                href={`/services/${r.slug}`}
                className="group block bg-paper-2 p-8 transition-colors duration-500 hover:bg-paper"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-taupe">
                    0{i + 1}
                  </span>
                  <span className="text-[10px] uppercase tracking-luxe text-brass opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View Space &rarr;
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-xl font-light italic text-ink transition-colors duration-300 group-hover:text-brass">
                  {r.title}
                </h3>
                <p className="mt-3 text-[12px] leading-[1.7] text-taupe">
                  {r.line}
                </p>

                <div className="mt-8 h-32 w-full overflow-hidden rounded-xs">
                  {r.image ? (
                    <img
                      src={r.image}
                      alt={r.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (() => {
                    const Plate = PLATES[r.plate];
                    return (
                      <Plate className="h-full w-full text-ink/25 transition-colors duration-700 group-hover:text-brass/60" />
                    );
                  })()}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
