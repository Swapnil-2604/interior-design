import type { Metadata, Viewport } from "next";
import { archivo, fraunces, geistMono } from "./fonts";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ATELIER FORM — Interior Design Studio",
    template: "%s | ATELIER FORM",
  },
  description:
    "ATELIER FORM is an interior design and architecture studio. We don't just design spaces — we design how they feel.",
};

export const viewport: Viewport = {
  themeColor: "#161412",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${fraunces.variable} ${geistMono.variable}`}
    >
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
