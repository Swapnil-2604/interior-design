import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Contact",
  description: "Start a conversation with Lumière Interiors about your project.",
};

export default function ContactPage() {
  return (
    <main className="bg-paper text-ink">
      <CTA />
      <Testimonials />
    </main>
  );
}
