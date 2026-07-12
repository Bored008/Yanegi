import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/sections/About").then(mod => mod.About));
const HowItWorks = dynamic(() => import("@/components/sections/how-it-works").then(mod => mod.HowItWorks));
const Manifesto = dynamic(() => import("@/components/sections/Manifesto").then(mod => mod.Manifesto));
const Faq = dynamic(() => import("@/components/sections/FAQ").then(mod => mod.Faq));
const Footer = dynamic(() => import("@/components/navigation/Footer").then(mod => mod.Footer));

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
