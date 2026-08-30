import type { Metadata } from "next";
import WorkWithUsClient from "./WorkWithUsClient";

export const metadata: Metadata = {
  title: "Websites Built for the Business of Design | Automate Reality Labs",
  description:
    "We design and engineer bespoke, high-converting digital flagships, interactive cost estimation engines, and programmatic local SEO infrastructure exclusively for luxury architecture practices and interior design studios.",
  keywords: [
    "website design for interior designers",
    "web development agency for architecture studios",
    "interior design portfolio web design",
    "custom cost calculator interior designers",
    "Automate Reality Labs",
  ],
};

export default function WorkWithUsPage() {
  return <WorkWithUsClient />;
}
