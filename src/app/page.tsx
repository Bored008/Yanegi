import { Navbar } from "@/components/navigation/Navbar";
import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Manifesto } from "@/components/sections/Manifesto";
import { Faq } from "@/components/sections/FAQ";
import { Footer } from "@/components/navigation/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1e1e1e] flex flex-col gap-20 lg:gap-24">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Manifesto />
      <Faq />
      <Footer />
    </main>
  );
}
