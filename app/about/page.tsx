import About from "@/components/About";
import Team from "@/components/Team";
import Locations from "@/components/Locations";

export const metadata = {
  title: "About",
  description: "Learn about Lumière Interiors — our story, team, and global presence.",
};

export default function AboutPage() {
  return (
    <main className="bg-paper text-ink">
      <About />
      <Team />
      <Locations />
    </main>
  );
}
