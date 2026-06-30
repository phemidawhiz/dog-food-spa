
import { HeroSection } from "@/components/Hero";
import { SectionTwo, SectionThree, SectionFour } from "@/components/Sections";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </main>
  );
}