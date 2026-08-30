"use client";

import { usePathname } from "next/navigation";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://lumiere-interiors.studio/#organization",
      "name": "Lumière Interiors",
      "url": "https://lumiere-interiors.studio",
      "logo": "https://lumiere-interiors.studio/images/projects/courtyard-house.png",
      "description":
        "Lumière Interiors is an architectural interior design studio crafting bespoke residential, hospitality, and commercial spaces.",
      "telephone": "+91-22-6902-4400",
      "email": "hello@lumiere-interiors.studio",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Waterfield Road, Bandra West",
        "addressLocality": "Mumbai",
        "postalCode": "400050",
        "addressCountry": "IN",
      },
      "areaServed": ["Mumbai", "New Delhi", "Bengaluru", "Hyderabad", "Goa"],
      "priceRange": "₹₹₹₹",
    },
  ],
};

export default function LumiereJsonLd() {
  const pathname = usePathname();

  // Strictly suppress on all agency routes so zero collision occurs
  if (pathname.startsWith("/work-with-us")) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
