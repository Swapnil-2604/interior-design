import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Process, Pricing & Warranty",
  description:
    "Explore answers to common questions regarding interior design process, payment milestones, 10-year warranties, and turnaround times at Lumière Interiors.",
};

export default function FAQPage() {
  return <FAQClient />;
}
