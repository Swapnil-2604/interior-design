import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { agencyPricingTiers } from "@/lib/agency";

export const metadata: Metadata = {
  title: "Agency Pricing & Studio Packages | Automate Reality Labs",
  description:
    "Transparent, fixed-scope web development packages for interior designers and architecture practices. Studio Showcase, Signature Platform, and Flagship Bespoke tiers.",
  keywords: [
    "interior design website cost",
    "architecture studio website pricing",
    "web development packages interior design",
    "custom Next.js website pricing agency",
  ],
};

const comparisonRows = [
  { feature: "Custom Figma UI/UX Design System", showcase: true, signature: true, flagship: true },
  { feature: "Next.js App Router Architecture", showcase: true, signature: true, flagship: true },
  { feature: "Dynamic Portfolio & Case Study CMS", showcase: true, signature: true, flagship: true },
  { feature: "Mobile-First Responsive Layouts", showcase: true, signature: true, flagship: true },
  { feature: "Direct 1-Click WhatsApp Lead Widget", showcase: true, signature: true, flagship: true },
  { feature: "Interactive Cost Calculator (BHK/Sqft/Tier)", showcase: false, signature: true, flagship: true },
  { feature: "Programmatic Multi-City SEO Silos (5 Cities)", showcase: false, signature: true, flagship: true },
  { feature: "Architectural Drawing Plate Switcher", showcase: false, signature: true, flagship: true },
  { feature: "Interactive Before/After Renovation Sliders", showcase: false, signature: true, flagship: true },
  { feature: "Editorial Journal & Sourcing Engine", showcase: false, signature: true, flagship: true },
  { feature: "Curated E-Commerce Shop Module", showcase: false, signature: false, flagship: true },
  { feature: "Client Milestone Portal & Review Suite", showcase: false, signature: false, flagship: true },
  { feature: "Cinematic 60FPS 3D Scroll Canvas Engine", showcase: false, signature: false, flagship: true },
  { feature: "Quarterly Performance & SEO Retainer", showcase: false, signature: false, flagship: true },
];

export default function AgencyPricingPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Hero Header */}
      <section className="relative border-b border-line bg-paper-2 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-3">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-luxe text-brass font-semibold">
                Transparent Studio Investment
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>

          <div className="mt-8 max-w-4xl">
            <Reveal as="h1" y={25} duration={1.2}>
              <span className="font-serif text-[clamp(2.4rem,5vw,4.8rem)] font-light leading-[1.1] text-ink block">
                Fixed-Scope Web Packages for{" "}
                <em className="italic text-brass font-normal">Design Studios</em>.
              </span>
            </Reveal>

            <Reveal as="p" y={20} duration={1.2} delay={0.15}>
              <span className="mt-6 block text-[16px] md:text-[19px] leading-relaxed text-taupe font-sans max-w-3xl">
                No hourly billing ambiguity or surprise scope creep. We provide transparent, all-inclusive packages engineered to deliver high-converting digital platforms for your practice.
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-3">
            {agencyPricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between rounded-xs border p-8 md:p-10 transition-all duration-300 ${
                  tier.popular
                    ? "border-brass bg-paper shadow-2xl scale-[1.02]"
                    : "border-line bg-paper-2 hover:border-taupe"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-8 rounded-full bg-brass px-3.5 py-1 font-mono text-[10px] uppercase tracking-wider text-paper">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl md:text-3xl italic text-ink">{tier.name}</h3>
                    <span className="font-mono text-[10px] uppercase text-taupe border border-line px-2.5 py-1 rounded-xs">
                      {tier.timeline}
                    </span>
                  </div>

                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="font-serif text-3xl md:text-4xl text-ink font-normal">{tier.priceINR}</span>
                    <span className="font-mono text-[12px] text-stone">/ {tier.priceUSD}</span>
                  </div>

                  <p className="mt-4 text-[13px] text-taupe font-sans leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="mt-4 rounded-xs bg-paper border border-line p-3 font-mono text-[11px] text-taupe">
                    <strong className="text-ink font-sans">Best for:</strong> {tier.bestFor}
                  </div>

                  <div className="mt-8 space-y-3 border-t border-line pt-6">
                    <span className="font-mono text-[10px] uppercase tracking-luxe text-ink block font-semibold">
                      Included Scope:
                    </span>
                    {tier.deliverables.map((del) => (
                      <div key={del} className="flex items-start gap-2.5 text-[12px] text-taupe font-sans">
                        <span className="text-brass mt-0.5">•</span>
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-line">
                  <Link
                    href="/work-with-us/contact"
                    className={`block w-full text-center py-4 text-[11px] uppercase tracking-luxe transition-all font-medium ${
                      tier.popular
                        ? "btn-fill"
                        : "border border-line bg-paper text-ink hover:border-ink hover:bg-paper-2"
                    }`}
                  >
                    Select {tier.name} Package
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="border-t border-line bg-paper-2 py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-luxe text-taupe font-semibold">
              Detailed Scope Breakdown
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl font-light text-ink">
              Compare package deliverables.
            </h2>
          </div>

          <div className="mt-12 overflow-x-auto rounded-xs border border-line bg-paper">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-line bg-paper-2">
                  <th className="p-5 font-mono text-[11px] uppercase tracking-wider text-taupe font-semibold">
                    Feature &amp; Capability
                  </th>
                  <th className="p-5 font-mono text-[11px] uppercase tracking-wider text-center text-ink font-semibold">
                    Studio Showcase
                  </th>
                  <th className="p-5 font-mono text-[11px] uppercase tracking-wider text-center text-brass font-semibold">
                    Signature Platform
                  </th>
                  <th className="p-5 font-mono text-[11px] uppercase tracking-wider text-center text-ink font-semibold">
                    Flagship Architecture
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line text-[13px] font-sans">
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-paper-2/60 transition-colors">
                    <td className="p-5 text-ink font-medium">{row.feature}</td>
                    <td className="p-5 text-center font-mono text-xs">
                      {row.showcase ? <span className="text-emerald-600 font-bold">✔</span> : <span className="text-stone/40">—</span>}
                    </td>
                    <td className="p-5 text-center font-mono text-xs bg-brass/5">
                      {row.signature ? <span className="text-brass font-bold">✔</span> : <span className="text-stone/40">—</span>}
                    </td>
                    <td className="p-5 text-center font-mono text-xs">
                      {row.flagship ? <span className="text-emerald-600 font-bold">✔</span> : <span className="text-stone/40">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="border-t border-line bg-paper py-20">
        <div className="mx-auto w-full max-w-4xl px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-light text-ink">
            Need a custom scope or international payment terms?
          </h2>
          <p className="mt-4 text-[14px] text-taupe font-sans max-w-xl mx-auto leading-relaxed">
            We work with studios across India, North America, the UK, UAE, and Australia. We accept multi-currency invoicing via Stripe and wire transfer.
          </p>
          <div className="mt-8">
            <Link
              href="/work-with-us/contact"
              className="btn-fill px-8 py-3.5 text-[11px] uppercase tracking-luxe"
            >
              Request Custom Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
