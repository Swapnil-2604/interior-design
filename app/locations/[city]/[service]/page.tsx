import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TextReveal from "@/components/TextReveal";
import MaskedReveal from "@/components/MaskedReveal";
import { locationsData, services } from "@/lib/site";

interface Props {
  params: Promise<{ city: string; service: string }>;
}

export async function generateStaticParams() {
  const params: Array<{ city: string; service: string }> = [];
  const cityKeys = Object.keys(locationsData);

  for (const city of cityKeys) {
    for (const service of services) {
      params.push({ city, service: service.slug });
    }
  }

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, service } = await params;
  const loc = locationsData[city];
  const s = services.find((srv) => srv.slug === service);

  if (!loc || !s) return { title: "Page Not Found" };

  return {
    title: `${s.title} Interior Designers in ${loc.city} — Bespoke Architecture`,
    description: `Bespoke ${s.title} interior design in ${loc.city}. ${s.desc} Starting from ${s.startingPrice} with a 10-year woodwork warranty.`,
    openGraph: {
      title: `${s.title} in ${loc.city} | LUMIÈRE INTERIORS`,
      description: s.desc,
      images: [{ url: s.image }],
    },
  };
}

export default async function CityServiceLandingPage({ params }: Props) {
  const { city, service } = await params;
  const loc = locationsData[city];
  const s = services.find((srv) => srv.slug === service);

  if (!loc || !s) {
    notFound();
  }

  return (
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="relative border-b border-line bg-ink py-32 text-paper md:py-44">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-5">
              <Link
                href={`/locations/${loc.slug}`}
                className="font-mono text-[11px] uppercase tracking-luxe text-stone hover:text-brass transition-colors"
              >
                ← {loc.city} Studio
              </Link>
              <span className="text-stone">•</span>
              <span className="font-mono text-[11px] text-stone">{s.title}</span>
              <span className="h-px flex-1 bg-line-light" />
            </div>
          </Reveal>

          <div className="mt-14 max-w-3xl md:mt-20">
            <Reveal as="div" y={50} duration={1.3} start="top 88%">
              <p className="font-mono text-[11px] uppercase tracking-luxe text-brass">
                Bespoke Room Design &middot; {loc.city} Atelier
              </p>
              <TextReveal
                as="h1"
                className="mt-4 font-serif text-[clamp(2.4rem,5.5vw,5rem)] font-light leading-[1.05] text-paper"
                speed={1.2}
                stagger={0.06}
                delay={0.1}
              >
                <span className="block" data-line>{s.title} Design</span>
                <span className="block" data-line>
                  in <em className="italic text-brass">{loc.city}</em>.
                </span>
              </TextReveal>
            </Reveal>

            <Reveal as="div" y={30} duration={1.1} delay={0.15} start="top 90%">
              <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-stone font-sans">
                {s.desc} Tailored for {loc.city}&apos;s distinctive residential architecture and micro-climates, combining ergonomic spatial planning with master joinery.
              </p>
            </Reveal>

            <Reveal as="div" y={20} duration={1} delay={0.2} start="top 90%">
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href={`/calculator?room=${s.slug}&city=${loc.slug}`}
                  className="btn-fill px-8 py-3.5 text-[11px] uppercase tracking-luxe"
                >
                  Estimate {s.title} Cost →
                </Link>
                <Link
                  href={`/contact?service=${s.slug}&city=${loc.slug}`}
                  className="rounded-xs border border-line-light px-8 py-3.5 font-mono text-[11px] uppercase tracking-luxe text-paper hover:border-paper"
                >
                  Book {loc.city} Site Visit
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Visual & Inclusions */}
      <section className="relative py-24 md:py-36">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <MaskedReveal className="overflow-hidden rounded-xs border border-line bg-paper-2">
                <img
                  src={s.image}
                  alt={`${s.title} in ${loc.city}`}
                  className="h-[380px] w-full object-cover sm:h-[460px]"
                />
              </MaskedReveal>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-luxe text-taupe block">
                  Studio Standards
                </span>
                <h3 className="mt-2 font-serif text-3xl text-ink">
                  What&apos;s included in our {s.title} package
                </h3>
              </div>

              <ul className="space-y-4 border-y border-line py-6 font-sans text-[14px] text-ink/85">
                {s.features.map((f, i) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-brass">0{i + 1}</span>
                    <span>{f} with IS:710 Marine BWP substrate and premium hardware</span>
                  </li>
                ))}
                <li className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-brass">05</span>
                  <span>10-Year Comprehensive Woodwork &amp; Carcass Warranty</span>
                </li>
              </ul>

              <div className="flex items-baseline justify-between pt-2">
                <span className="font-mono text-xs uppercase text-taupe">Starting Investment</span>
                <span className="font-serif text-2xl text-ink font-semibold">{s.startingPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City Guarantee & Back link */}
      <section className="relative border-t border-line bg-paper-2 py-16 text-center">
        <div className="mx-auto max-w-xl px-6">
          <p className="font-serif text-xl italic text-ink">
            Serving all premier residential developments across {loc.city}.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href={`/services/${s.slug}`}
              className="text-[11px] uppercase tracking-luxe text-taupe hover:text-ink underline"
            >
              View Full Room Philosophy
            </Link>
            <span className="text-taupe">•</span>
            <Link
              href={`/locations/${loc.slug}`}
              className="text-[11px] uppercase tracking-luxe text-taupe hover:text-ink underline"
            >
              All {loc.city} Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
