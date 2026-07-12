"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Discover",
    heading: "Open the map. See what's live.",
    desc: "Pickup games, open mics, rooftop hangouts — every pin is happening right now. No feed. No algorithm.",
    video: "/how it works/discover.mp4",
  },
  {
    num: "02",
    title: "Join or host",
    heading: "Drop in or start your own.",
    desc: "Tap a pin and join instantly. Or spin up a hangout in under a minute — set the time, place, and vibe.",
    video: "/how it works/create-event.mp4",
  },
  {
    num: "03",
    title: "Connect",
    heading: "Meet people. Make it a plan.",
    desc: "Chat with the group, check verified profiles, and show up knowing who you're meeting. Then go again tomorrow.",
    video: "/how it works/chat.mp4",
  },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(0);
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
        end: "top 20%",
        scrub: 1,
      }
    });

    // Left side (Title and Paragraph)
    tl.from(".hiw-left-anim", {
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    }, 0);

    // Vertical line
    tl.from(".hiw-line-anim", {
      scaleY: 0,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      transformOrigin: "top"
    }, 0.2);

    // Dots
    tl.from(".hiw-dot-anim", {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      stagger: 0.3,
      ease: "back.out(2)"
    }, 0.5);

    // Right side content
    tl.from(".hiw-right-anim", {
      x: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger:{
        markers:false,
        trigger:".hiw-line-anim",
        start:()=>window.innerWidth<768?"top 95%":"top 70%",
        end:()=>window.innerWidth<768?"bottom 60%":"bottom 30%",
        scrub:2
      }
    }, 0.6);
  }, { scope: container });

  return (
    <section ref={container} id="how-it-works" className="bg-white scroll-mt-28 px-4 sm:px-6 lg:px-[90px]">
      <div className="mx-auto max-w-[1224px] grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24">
        
        {/* Left Column */}
        <div className="flex flex-col">
          <h2 className="hiw-left-anim font-[family-name:var(--font-oswald)] text-[64px] font-bold leading-none text-[#060606] sm:text-[82px] lg:text-[96px]">
            How It <br className="hidden lg:block" />
            <span className="text-[#c8f021]">Works?</span>
          </h2>
          <p className="hiw-left-anim mt-6 text-[#969595] font-[family-name:var(--font-poppins)] text-[15px] sm:text-[16px]">
            Everything on the map is happening right now.<br className="hidden lg:block" />
            Here's how you get there.
          </p>
        </div>

        {/* Right Column (Stepper) */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hiw-line-anim absolute left-[9px] top-[24px] bottom-12 w-[2px] bg-[#e5e5e5]" />
          
          {steps.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <div 
                key={index} 
                className="relative mb-12 last:mb-0 cursor-pointer pl-8 sm:pl-12" 
                onClick={() => setActiveStep(isActive ? null : index)}
              >
                {/* Dot */}
                <div 
                  className={`hiw-dot-anim absolute left-[1px] top-[14px] size-[18px] rounded-full border-[3px] border-white transition-colors duration-300 z-10 ${
                    isActive ? 'bg-[#c8f021]' : 'bg-[#e5e5e5]'
                  }`} 
                />
                
                <div className="hiw-right-anim">
                  <div className="flex items-center gap-3">
                  <span className="font-[family-name:var(--font-poppins)] font-bold text-[28px] sm:text-[32px] text-[#c8f021]">
                    {step.num}
                  </span>
                  <h3 className="font-[family-name:var(--font-poppins)] font-bold text-[28px] sm:text-[32px] text-[#c8f021]">
                    {step.title}
                  </h3>
                </div>
                
                <h4 className="mt-2 font-[family-name:var(--font-poppins)] font-bold text-[18px] sm:text-[20px] text-[#1e1e1e]">
                  {step.heading}
                </h4>
                <p className="mt-2 text-[#969595] font-[family-name:var(--font-poppins)] text-[14px] max-w-[500px]">
                  {step.desc}
                </p>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pb-2">
                        <video 
                          src={step.video} 
                          autoPlay 
                          loop 
                          muted 
                          playsInline 
                          className="w-full h-[220px] sm:h-[260px] lg:h-[320px] rounded-[22px] shadow-lg border border-gray-100 object-cover"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
