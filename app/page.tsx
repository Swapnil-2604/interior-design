import FrameScrubber from "@/components/FrameScrubber";
import Story from "@/components/Story";
import SignatureWorks from "@/components/SignatureWorks";
import RoomsWeCraft from "@/components/RoomsWeCraft";
import TheJourney from "@/components/TheJourney";
import FieldNotes from "@/components/FieldNotes";
import PressRecognition from "@/components/PressRecognition";
import BeginProject from "@/components/BeginProject";

export default function Home() {
  return (
    <main className="bg-paper text-ink">
      <FrameScrubber />
      <Story />
      <SignatureWorks />
      <RoomsWeCraft />
      <TheJourney />
      <FieldNotes />
      <PressRecognition />
      <BeginProject />
    </main>
  );
}