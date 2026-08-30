import type { Metadata, Viewport } from "next";
import { archivo, fraunces, geistMono } from "./fonts";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ViewTransitionWrapper from "@/components/ViewTransitionWrapper";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "LUMIÈRE INTERIORS — Interior Design Studio",
    template: "%s | LUMIÈRE INTERIORS",
  },
  description:
    "LUMIÈRE INTERIORS is an interior design and architecture studio. We don't just design spaces — we design how they feel.",
  metadataBase: new URL("https://lumiere-interiors.studio"),
  openGraph: {
    title: "LUMIÈRE INTERIORS — Architecture & Bespoke Spaces",
    description: "We don't just design spaces. We design how they feel.",
    siteName: "Lumière Interiors",
    images: [
      {
        url: "/images/projects/courtyard-house.png",
        width: 1200,
        height: 630,
        alt: "Lumière Interiors Studio Architecture",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#161412",
  colorScheme: "dark",
};

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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${fraunces.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll>
          <Navbar />
          <ViewTransitionWrapper>{children}</ViewTransitionWrapper>
          <Footer />
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
