import DesignStyles from "@/components/DesignStyles";
import Projects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";
import BeforeAfter from "@/components/BeforeAfter";
import Materials from "@/components/Materials";

export const metadata = {
  title: "Work",
  description: "Our featured interior design projects and portfolio.",
};

export default function WorkPage() {
  return (
    <main className="bg-paper text-ink">
      <DesignStyles />
      <Projects />
      <WhyChooseUs />
      <BeforeAfter />
      <Materials />
    </main>
  );
}
