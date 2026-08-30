import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { agencyServices } from "@/lib/agency";

export const metadata: Metadata = {
  title: "Services & Systems for Interior Design Studios | Automate Reality Labs",
  description:
    "Explore our specialized web development services for interior designers and architecture firms — custom Next.js platforms, interactive cost calculators, drawing plates, and programmatic local SEO.",
  keywords: [
    "interior design web design services",
    "architecture studio website development",
    "custom cost calculator development",
    "programmatic SEO for interior designers",
    "Matterport integration for architects",
  ],
};

export default function AgencyServicesPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Hero Header */}
      <section className="relative border-b border-line bg-paper-2 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-3">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-luxe text-brass font-semibold">
                Specialized Web Services
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>

          <div className="mt-8 max-w-4xl">
            <Reveal as="h1" y={25} duration={1.2}>
              <span className="font-serif text-[clamp(2.4rem,5vw,4.8rem)] font-light leading-[1.1] text-ink block">
                Systems Engineered for the{" "}
                <em className="italic text-brass font-normal">Business of Design</em>.
              </span>
            </Reveal>

            <Reveal as="p" y={20} duration={1.2} delay={0.15}>
              <span className="mt-6 block text-[16px] md:text-[19px] leading-relaxed text-taupe font-sans max-w-3xl">
                Every service we offer is tailored to the unique sales dynamics, visual sophistication, and client qualification needs of luxury interior design and architecture practices.
              </span>
            </Reveal>

            <Reveal as="div" y={20} duration={1.2} delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/work-with-us/contact"
                  className="btn-fill px-8 py-3 text-[11px] uppercase tracking-luxe"
                >
                  Book Discovery Call
                </Link>
                <Link
                  href="/work-with-us/pricing"
                  className="rounded-full border border-line bg-paper px-6 py-3 font-mono text-[11px] uppercase tracking-wider text-ink hover:border-brass hover:text-brass transition-colors"
                >
                  View Fixed Pricing Packages →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services List Breakdown */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16 space-y-20">
          {agencyServices.map((service, idx) => (
            <div
              key={service.slug}
              id={service.slug}
              className="grid gap-10 lg:grid-cols-12 lg:gap-16 border-b border-line pb-16 last:border-0"
            >
              <div className="lg:col-span-5">
                <span className="font-mono text-[11px] text-brass uppercase tracking-wider">
                  System 0{idx + 1}
                </span>
                <h2 className="mt-3 font-serif text-3xl md:text-4xl italic text-ink font-light leading-snug">
                  {service.title}
                </h2>
                <p className="mt-2 text-[12px] font-mono text-taupe uppercase tracking-wider">
                  {service.subtitle}
                </p>
                <p className="mt-6 text-[14px] text-taupe leading-relaxed font-sans">
                  {service.overview}
                </p>

                <div className="mt-8">
                  <Link
                    href={service.proofPointHref}
                    className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-ink hover:text-brass transition-colors underline"
                  >
                    <span>{service.proofPointTitle}</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="rounded-xs border border-line bg-paper-2 p-8 md:p-10 shadow-lg">
                  <span className="font-mono text-[10px] uppercase tracking-luxe text-ink block font-semibold mb-4">
                    Included Capabilities &amp; Deliverables:
                  </span>
                  <div className="space-y-3">
                    {service.deliverables.map((del) => (
                      <div key={del} className="flex items-start gap-3 text-[13px] text-taupe font-sans">
                        <span className="text-brass mt-1">✔</span>
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-line bg-paper-2 py-20">
        <div className="mx-auto w-full max-w-4xl px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-light text-ink">
            Ready to upgrade your studio&rsquo;s digital presence?
          </h2>
          <p className="mt-4 text-[14px] text-taupe font-sans max-w-xl mx-auto leading-relaxed">
            Schedule an introductory consultation with Swapnil. We will review your current website and prepare a tailored architectural proposal within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/work-with-us/contact"
              className="btn-fill px-8 py-3.5 text-[11px] uppercase tracking-luxe"
            >
              Start Your Studio Website
            </Link>
            <Link
              href="/work-with-us/portfolio/lumiere-interiors"
              className="rounded-full border border-line bg-paper px-6 py-3.5 font-mono text-[11px] uppercase tracking-wider text-ink hover:border-brass hover:text-brass transition-colors"
            >
              Review Case Study Teardown
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
