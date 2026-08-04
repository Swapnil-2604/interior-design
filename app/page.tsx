import Navbar from "@/components/Navbar";
import VideoScrubber from "@/components/VideoScrubber";
import Story from "@/components/Story";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-paper text-ink">
        <VideoScrubber />
        <Story />
        <Services />
        <Philosophy />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
