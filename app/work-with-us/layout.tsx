import type { Metadata } from "next";
import AgencyNav from "@/components/agency/AgencyNav";
import AgencyFooter from "@/components/agency/AgencyFooter";
import { agencyInfo } from "@/lib/agency";

export const metadata: Metadata = {
  title: {
    template: "%s | Automate Reality Labs",
    default: "Websites Built for the Business of Design | Automate Reality Labs",
  },
  description:
    "We design and engineer bespoke, high-converting websites, interactive cost calculators, and programmatic local SEO infrastructure exclusively for architecture practices and interior design studios.",
  keywords: agencyInfo.serviceKeywords,
  openGraph: {
    title: "Websites Built for the Business of Design | Automate Reality Labs",
    description:
      "Bespoke web design, interactive estimation engines, and programmatic local SEO for architecture and interior design studios.",
    url: "https://automaterealitylabs.in/work-with-us",
    siteName: "Automate Reality Labs",
    locale: "en_US",
    type: "website",
  },
};

export default function AgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const agencySchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: agencyInfo.name,
    description: agencyInfo.tagline,
    founder: {
      "@type": "Person",
      name: agencyInfo.founder,
    },
    email: agencyInfo.email,
    telephone: agencyInfo.phone,
    areaServed: agencyInfo.areaServed,
    knowsAbout: [
      "Interior Design Web Design",
      "Architecture Studio Web Development",
      "Interactive Cost Calculators",
      "Programmatic Local SEO",
      "Next.js & React Web Engineering",
      "Matterport & 3D Spatial Embeds",
    ],
    offers: [
      {
        "@type": "Offer",
        name: "Studio Showcase Website Package",
        price: "145000",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        name: "Signature Interactive Platform Package",
        price: "275000",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        name: "Flagship Bespoke Web Architecture Package",
        price: "450000",
        priceCurrency: "INR",
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink selection:bg-brass selection:text-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agencySchema) }}
      />
      <AgencyNav />
      <main className="flex-1">{children}</main>
      <AgencyFooter />
    </div>
  );
}
