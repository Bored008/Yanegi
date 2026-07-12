"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    id: "Q_01",
    question: "What is Yanegi?",
    answer: "Yanegi is a free app that helps you find real hangouts happening near you — from pickup basketball games and open mics to group hikes and study sessions. Create your own event or join one in seconds."
  },
  {
    id: "Q_02",
    question: "Is Yanegi free to use?",
    answer: "Yes — Yanegi is completely free to join. Browse events, RSVP, chat with other attendees, and create your own hangouts at no cost."
  },
  {
    id: "Q_03",
    question: "How do verified profiles work?",
    answer: "Users can verify their identity through a quick in-app process. Verified badges let you know who you're meeting before you show up, so every hangout starts with trust."
  },
  {
    id: "Q_04",
    question: "Can I host my own event?",
    answer: "Absolutely. You can spin up a hangout in under a minute — set the time, location, capacity, and description. Your event goes live on the map immediately."
  },
  {
    id: "Q_05",
    question: "How do I find events near me?",
    answer: "Open the live map and see pins for active events in your area. Filter by category — sports, music, food, arts, and more — to find exactly what you're looking for."
  },
  {
    id: "Q_06",
    question: "Is there a chat feature?",
    answer: "Yes. Every event has a built-in group chat so you can message attendees, ask questions, and build the vibe before you arrive."
  }
];

export function Faq() {
  const [activeId, setActiveId] = useState<string>("Q_01");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 1
      }
    });

    tl.from(".faq-title-anim", {
      x: -100,
      opacity: 0,
      duration: 1
    }, 0)
    .from(".faq-side-anim", {
      x: 100,
      opacity: 0,
      duration: 1
    }, 0)
    .from(".faq-cards-anim", {
      x: "100vw",
      opacity: 0,
      duration: 2,
      scrollTrigger:{
        trigger: ".faq-cards-anim",
        start: "top 70%",
        end: "top 40%",
        scrub: 2
      }
    }, 0.2);
  }, { scope: sectionRef });

  const [activeArrow, setActiveArrow] = useState<'left' | 'right'>('right');

  // Drag to scroll state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftPos(scrollContainerRef.current.scrollLeft);
    setDragDistance(0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    scrollContainerRef.current.scrollLeft = scrollLeftPos - walk;
    setDragDistance(Math.abs(walk));
  };

  const handleCardClick = (id: string) => {
    if (dragDistance < 10) {
      setActiveId(id);
    }
  };

  const scrollLeft = () => {
    setActiveArrow('left');
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    setActiveArrow('right');
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const renderArrows = (className: string) => (
    <div className={`items-center gap-3 ${className}`}>
      <button 
        onClick={scrollLeft}
        className={`flex items-center justify-center w-[40px] h-[40px] rounded-full border border-black transition-colors shrink-0 ${activeArrow === 'left' ? 'bg-[#060606]' : 'bg-white hover:bg-gray-100'}`}
        aria-label="Scroll left"
      >
        <Image 
          src="/faq/lucide_arrow-right.svg" 
          alt="Previous" 
          width={16} 
          height={16} 
          className={activeArrow === 'left' ? 'invert filter' : 'opacity-70 hover:opacity-100'}
        />
      </button>
      <button 
        onClick={scrollRight}
        className={`flex items-center justify-center w-[40px] h-[40px] rounded-full border border-black transition-colors shrink-0 ${activeArrow === 'right' ? 'bg-[#060606]' : 'bg-white hover:bg-gray-100'}`}
        aria-label="Scroll right"
      >
        <Image 
          src="/faq/lucide_arrow-right.svg" 
          alt="Next" 
          width={16} 
          height={16} 
          className={`rotate-180 ${activeArrow === 'right' ? 'invert filter' : 'opacity-70 hover:opacity-100'}`}
        />
      </button>
    </div>
  );

  return (
    <section ref={sectionRef} id="faq" className="bg-white scroll-mt-28 px-4 sm:px-6 lg:px-[90px] overflow-hidden">
      <div className="mx-auto max-w-[1260px] flex flex-col gap-[40px] lg:gap-[78px]">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-20">
          <h2 className="faq-title-anim font-[family-name:var(--font-oswald)] text-[56px] sm:text-[72px] lg:text-[86px] font-bold leading-[1.1] text-[#060606]">
            Frequently <br className="hidden lg:block" />
            Asked{" "}
            <span className="text-[#c8f021] underline decoration-[#c8f021] decoration-[3px] underline-offset-[8px]">
              Questions
            </span>
          </h2>
          
          <div className="faq-side-anim flex flex-col items-start lg:w-[300px] gap-6">
            <p className="font-[family-name:var(--font-poppins)] text-[16px] text-[#969595] leading-snug">
              Find answers to common questions about our <span className="text-[#060606]">Yanagi</span>
            </p>
            
            {/* Desktop Navigation Arrows */}
            {renderArrows("hidden lg:flex mt-2")}
          </div>
        </div>

        {/* Carousel Section */}
        <div className="faq-cards-anim flex flex-col gap-8">
          <div 
            ref={scrollContainerRef}
            className={`flex gap-5 overflow-x-auto hide-scrollbar -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 ${isDragging ? 'cursor-grabbing snap-none select-none' : 'cursor-grab snap-x snap-mandatory'}`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
          {faqs.map((faq) => {
            const isActive = activeId === faq.id;
            
            return (
              <motion.div 
                layout
                transition={{ duration: 0.4, ease: "easeOut" }}
                key={faq.id}
                onClick={() => handleCardClick(faq.id)}
                className={`
                  shrink-0 snap-start rounded-[21px] flex flex-col justify-end p-8 sm:p-10 lg:p-[42px]
                  h-[380px] lg:h-[416px] cursor-pointer overflow-hidden
                  ${isActive 
                    ? "w-[280px] sm:w-[320px] lg:w-[407px] bg-[#c8f021] text-[#060606]" 
                    : "w-[260px] sm:w-[280px] lg:w-[300px] bg-[#e5e9ea] text-black/65 hover:bg-gray-200"
                  }
                `}
              >
                <motion.div 
                 layout="position"
                 className={`flex flex-col ${isActive ? "gap-[30px] lg:gap-[37px]" : "gap-0"} justify-end h-full select-none`}>
                  <motion.h3 layout="position" className={`font-[family-name:var(--font-poppins)] text-[32px] sm:text-[36px] lg:text-[42px] leading-[1.1] font-medium ${isActive ? "text-[#060606]" : "text-black/65"} mt-auto`}>
                    {faq.question}
                  </motion.h3>
                  
                  {/* Expanded Answer */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="font-[family-name:var(--font-poppins)] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.3] text-[#060606]/60 overflow-hidden"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
          </div>
          
          {/* Mobile Navigation Arrows (Bottom Right) */}
          {renderArrows("flex lg:hidden justify-end")}
        </div>

      </div>
      
      {/* CSS to hide scrollbar for webkit browsers since utility classes might not cover it */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
