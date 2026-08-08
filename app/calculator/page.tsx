import CostCalculator from "@/components/CostCalculator";

export const metadata = {
  title: "Cost Calculator",
  description: "Get an indicative budget estimate for your interior design project.",
};

export default function CalculatorPage() {
  return (
    <main className="bg-paper text-ink">
      <CostCalculator />
    </main>
  );
}
