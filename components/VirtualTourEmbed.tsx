"use client";

import Image from "next/image";
import Link from "next/link";

interface VirtualTourEmbedProps {
  title?: string;
  location?: string;
  coverImage?: string;
  area?: string;
}

export default function VirtualTourEmbed({
  title = "Residential Interior",
  location = "Private Residence",
  coverImage = "/images/projects/villa-meridian.png",
  area,
}: VirtualTourEmbedProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-xs border border-line bg-paper-2 shadow-2xl">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-line bg-paper/95 px-4 py-3 text-[11px] uppercase tracking-luxe backdrop-blur-md md:px-6">
        <div className="flex items-center gap-3">
          <span className="inline-block h-2 w-2 rounded-full bg-brass animate-pulse" />
          <span className="font-mono text-ink font-semibold">3D Spatial Walkthrough</span>
          <span className="hidden text-taupe sm:inline">•</span>
          <span className="hidden font-mono text-stone sm:inline">Status: Available on Request</span>
        </div>

        <div className="flex items-center gap-3 font-mono text-[10px] text-taupe">
          {area && <span>Scale: {area}</span>}
          <span className="hidden sm:inline">•</span>
          <span>Private Client Access</span>
        </div>
      </div>

      {/* Hero Showcase Display */}
      <div className="relative h-[420px] sm:h-[480px] md:h-[540px] w-full bg-ink-2">
        <Image
          src={coverImage}
          alt={`${title} - Architectural Spatial Walkthrough`}
          fill
          className="object-cover opacity-75 filter brightness-90 transition-transform duration-700 hover:scale-102"
          sizes="(max-width: 768px) 100vw, 1200px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/20" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-paper">
          <div className="inline-flex items-center gap-2 rounded-full border border-paper/25 bg-ink/80 px-4 py-1.5 font-mono text-[10px] uppercase tracking-far backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-brass" />
            <span>High-Resolution Digital Twin</span>
          </div>

          <h3 className="mt-4 font-serif text-2xl italic text-paper md:text-4xl">
            {title}
          </h3>

          {location && (
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-sand/80">
              {location}
            </p>
          )}

          <p className="mt-3 max-w-lg text-[13px] text-paper/80 font-sans leading-relaxed">
            Full-scale interactive 3D spatial models and BIM digital twins are compiled for private client reviews to inspect room proportions, lighting layers, and bespoke joinery detailing.
          </p>

          {/* Action CTA */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-paper px-8 py-3.5 text-[11px] font-medium uppercase tracking-luxe text-ink shadow-2xl transition-all duration-300 hover:bg-brass hover:text-paper hover:scale-105"
            >
              <span>Request 3D Walkthrough</span>
              <span className="font-mono transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-paper/30 bg-ink/60 px-6 py-3.5 text-[11px] font-medium uppercase tracking-luxe text-paper backdrop-blur-md transition-all duration-300 hover:border-paper hover:bg-ink"
            >
              <span>View Services &amp; Scope</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Info Ribbon */}
      <div className="flex flex-wrap items-center justify-between border-t border-line bg-paper/95 px-4 py-3 font-mono text-[10px] text-taupe md:px-6">
        <div className="flex items-center gap-2">
          <span className="text-ink font-semibold">Deliverable:</span>
          <span>Architectural 3D dollhouse scans, BIM walkthroughs &amp; spatial lighting studies</span>
        </div>
        <div className="mt-1 sm:mt-0">
          <span className="text-stone">Confidential client scans shared upon verified design consultation</span>
        </div>
      </div>
    </div>
  );
}
