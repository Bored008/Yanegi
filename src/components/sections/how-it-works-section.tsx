"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  return (
    <section id="how-it-works" className="bg-white px-4 pt-24 pb-20 sm:px-6 lg:px-[90px] lg:pt-14 lg:pb-28">
      <div className="mx-auto max-w-[1224px] grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24">
        
        {/* Left Column */}
        <div className="flex flex-col">
          <h2 className="font-[family-name:var(--font-oswald)] text-[64px] font-bold leading-none text-[#060606] sm:text-[82px] lg:text-[96px]">
            How It <br className="hidden lg:block" />
            <span className="text-[#c8f021]">Works?</span>
          </h2>
          <p className="mt-6 text-[#969595] font-[family-name:var(--font-poppins)] text-[15px] sm:text-[16px]">
            Everything on the map is happening right now.<br className="hidden lg:block" />
            Here's how you get there.
          </p>
        </div>

        {/* Right Column (Stepper) */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[9px] top-[24px] bottom-12 w-[2px] bg-[#e5e5e5]" />
          
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
                  className={`absolute left-[1px] top-[14px] size-[18px] rounded-full border-[3px] border-white transition-colors duration-300 z-10 ${
                    isActive ? 'bg-[#c8f021]' : 'bg-[#e5e5e5]'
                  }`} 
                />
                
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
            );
          })}
        </div>

      </div>
    </section>
  );
}
