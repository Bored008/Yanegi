"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Manifesto() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
        end: "top 10%",
        scrub: 1
      }
    });

    tl.from(".man-title-anim", {
      x: -100,
      opacity: 0,
      duration: 1
    })
    .from(".man-bento-anim", {
      scale: 0.8,
      opacity: 0,
      duration: 1
    }, "-=0.5")
    .from(".man-card-anim", {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.5)"
    }, "-=0.5");
  }, { scope: container });

  return (
    <section ref={container} id="manifesto" className="bg-white scroll-mt-28 px-4 sm:px-6 lg:px-[90px]">
      <div className="mx-auto max-w-[1224px]">
        {/* Heading */}
        <h2 className="man-title-anim font-[family-name:var(--font-oswald)] text-[64px] font-bold leading-none text-[#060606] sm:text-[82px] lg:text-[96px] mb-12">
          Our{" "}
          <span className="text-[#c8f021] underline decoration-[#c8f021] decoration-[3px] underline-offset-[8px]">
            Manifesto
          </span>
        </h2>

        {/* Bento Grid Wrapper */}
        <div className="man-bento-anim rounded-[36px] border border-black/20 bg-[#f4f4f4]/25 p-4 sm:p-[24px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-[16px]">
            
            {/* Box 1 (Full Width) */}
            <div className="man-card-anim order-1 lg:order-none rounded-[24px] border border-[#e3e3e3] bg-white lg:col-span-3 py-6 px-6 sm:py-[20px] sm:px-[28px] flex flex-col lg:flex-row justify-between lg:items-end gap-6 overflow-hidden">
              <div className="flex flex-col gap-[27px]">
                <div className="text-[#c8f021] font-[family-name:var(--font-poppins)] font-medium text-[14px] leading-[1.1]">
                  What we believe
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-[32px] sm:text-[36px] leading-[1.1] text-black">
                  We build for people<br/>who'd rather be there<br/>than watch it online.
                </h3>
              </div>
              <p className="text-black/65 font-[family-name:var(--font-poppins)] text-[16px] leading-[1.1] max-w-[266px] lg:text-right">
                Five things that don't change, no matter how the product does.
              </p>
            </div>

            {/* Box 2: 01 Plans over feeds */}
            <div className="man-card-anim order-2 lg:order-none rounded-[24px] border border-[#e3e3e3] bg-white lg:col-span-2 py-6 px-6 sm:py-8 sm:px-8 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 overflow-hidden">
              <div className="flex flex-col gap-[22px]">
                <div className="flex items-center gap-2 text-[#c8f021] font-[family-name:var(--font-poppins)] font-semibold text-[16px] leading-[1.1]">
                  <span>01</span>
                  <span>Plans over feeds</span>
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-[32px] leading-[1.1] text-black">
                  Scrolling is not a hobby.
                </h3>
              </div>
              
              {/* Divider Line */}
              <div className="hidden md:block w-[2px] bg-[#e3e3e3] min-h-[156px] mx-4 lg:mx-0" />

              <div className="flex flex-col">
                <p className="text-black/55 font-[family-name:var(--font-poppins)] text-[16px] leading-[1.1]">
                  Every feature we build is designed to get you off the app and out the door. Time on screen is not a metric we optimize for.
                </p>
                <div className="flex flex-wrap gap-2 mt-[30px] sm:mt-auto">
                  <span className="rounded-[53px] bg-[#c8f021] px-[12px] py-[8px] font-[family-name:var(--font-poppins)] text-[14px] leading-[1.1] text-black flex items-center justify-center">
                    No algorithm
                  </span>
                  <span className="rounded-[53px] bg-[#c8f021] px-[12px] py-[8px] font-[family-name:var(--font-poppins)] text-[14px] leading-[1.1] text-black flex items-center justify-center">
                    No infinite scroll
                  </span>
                  <span className="rounded-[53px] bg-[#c8f021] px-[12px] py-[8px] font-[family-name:var(--font-poppins)] text-[14px] leading-[1.1] text-black flex items-center justify-center">
                    No ads
                  </span>
                </div>
              </div>
            </div>

            {/* Box 3: 04 No Fluff (Spans 1 column, 2 rows) */}
            <div className="man-card-anim order-5 lg:order-none rounded-[24px] border border-[#e3e3e3] bg-white lg:col-span-1 lg:row-span-2 p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative">
              <div className="flex items-center gap-2 text-[#c8f021] font-[family-name:var(--font-poppins)] font-semibold text-[16px] leading-[1.1] z-10">
                <span>04</span>
                <span>No Fluff</span>
              </div>
              
              <div className="flex-grow flex items-center justify-center relative my-12">
                 <div className="flex items-center gap-2">
                   <span className="text-black font-semibold leading-[1.1] text-[100px] sm:text-[125px]" style={{ fontFamily: "'Pontano Sans', sans-serif" }}>
                     &lt;
                   </span>
                   <Image 
                     src="/manefesto/1min.svg" 
                     alt="1min" 
                     width={255} 
                     height={104} 
                     className="w-full max-w-[200px] sm:max-w-[255px] object-contain"
                   />
                 </div>
              </div>

              <p className="text-black/55 font-[family-name:var(--font-poppins)] text-[16px] leading-[1.1] max-w-[321px] z-10">
                To create a hangout.<br/>Time, place, vibe. Done.
              </p>
            </div>

            {/* Box 4: 02 Live by default */}
            <div className="man-card-anim order-3 lg:order-none rounded-[24px] border border-[#e3e3e3] bg-white lg:col-span-1 p-6 sm:p-[23px] flex flex-col justify-between overflow-hidden">
              <div className="flex flex-col gap-[22px]">
                <div className="flex items-center gap-2 text-[#c8f021] font-[family-name:var(--font-poppins)] font-semibold text-[16px] leading-[1.1]">
                  <span>02</span>
                  <span>Live by default</span>
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-[24px] leading-[1.1] text-black">
                  Every pin is happening now.
                </h3>
              </div>
              <p className="text-black/55 font-[family-name:var(--font-poppins)] text-[16px] leading-[1.1] mt-[30px] max-w-[321px]">
                No dead listings. No "this event was 3 weeks ago." If it's on the map, it's live or about to be.
              </p>
            </div>

            {/* Box 5: 03 Real humans only */}
            <div className="man-card-anim order-4 lg:order-none rounded-[24px] border border-[#e3e3e3] bg-white lg:col-span-1 p-6 sm:p-[23px] flex flex-col justify-between overflow-hidden">
              <div className="flex flex-col gap-[22px]">
                <div className="flex items-center gap-2 text-[#c8f021] font-[family-name:var(--font-poppins)] font-semibold text-[16px] leading-[1.1]">
                  <span>03</span>
                  <span>Real humans only</span>
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-[24px] leading-[1.1] text-black">
                  Trust is the protocol,<br/>not a feature.
                </h3>
              </div>
              <p className="text-black/55 font-[family-name:var(--font-poppins)] text-[16px] leading-[1.1] mt-[30px] max-w-[321px]">
                Verified profiles. Group chat before you meet. You know who's showing up before you do.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
