import Journal from "@/components/Journal";

export const metadata = {
  title: "Journal",
  description: "Notes on proportion, material & light — our interior design journal.",
};

export default function JournalPage() {
  return (
    <main className="bg-paper text-ink">
      <Journal />
    </main>
  );
}
