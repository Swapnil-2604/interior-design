import type { Metadata } from "next";
import WorkWithUsClient from "./WorkWithUsClient";

export const metadata: Metadata = {
  title: "Work With Us — Custom Web Design & Development for Interior Studios",
  description:
    "Lumière Interiors is a demonstration concept. We design and develop bespoke, high-converting websites, dynamic portfolios, and cost estimation platforms specifically for architecture and interior design studios.",
};

export default function WorkWithUsPage() {
  return <WorkWithUsClient />;
}
