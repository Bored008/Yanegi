import { SiteNavbar } from "@/components/navigation/site-navbar";
import { AboutSection } from "@/components/sections/about-section";
import { HeroSection } from "@/components/sections/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1e1e1e]">
      <SiteNavbar />
      <HeroSection />
      <AboutSection />
    </main>
  );
}
