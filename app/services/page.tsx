import Services from "@/components/Services";
import DesignProcess from "@/components/DesignProcess";
import Philosophy from "@/components/Philosophy";

export const metadata = {
  title: "Services",
  description: "Our interior design services — from consultation to final handover.",
};

export default function ServicesPage() {
  return (
    <main className="bg-paper text-ink">
      <Services />
      <DesignProcess />
      <Philosophy />
    </main>
  );
}
