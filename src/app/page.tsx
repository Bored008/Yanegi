import { SiteNavbar } from "@/components/navigation/site-navbar";
import { AboutSection } from "@/components/sections/about-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { ManifestoSection } from "@/components/sections/manifesto-section";
import { FaqSection } from "@/components/sections/faq-section";
import { SiteFooter } from "@/components/navigation/site-footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1e1e1e]">
      <SiteNavbar />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <ManifestoSection />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}
