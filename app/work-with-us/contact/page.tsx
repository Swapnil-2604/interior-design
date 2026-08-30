import type { Metadata } from "next";
import AgencyContactClient from "./AgencyContactClient";

export const metadata: Metadata = {
  title: "Start a Project — Studio Web Design & Development | Automate Reality Labs",
  description:
    "Schedule a consultation with Automate Reality Labs. We build custom, high-converting digital flagships and interactive estimation engines for interior design and architecture firms.",
  keywords: [
    "hire interior design website developer",
    "contact architecture web agency",
    "interior design web development proposal",
  ],
};

export default function AgencyContactPage() {
  return <AgencyContactClient />;
}
