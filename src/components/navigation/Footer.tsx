"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedButton } from "@/components/ui/animated-button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add({
      isDesktop:"(min-width:768px)",
      isMobile:"(max-width:768px)",
    },(context)=>{
      let { isMobile } = context.conditions as { isMobile: boolean };
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: isMobile ? "top 78%":"top 75%",
          end: isMobile ? "top 40%":"bottom 50%",
          scrub: 1
        }
      });
  
      tl.from(".footer-card-anim", {
        scale: 0.8,
        opacity: 0,
        duration:()=> window.innerWidth < 768 ? 0.5 : 1,
        ease:isMobile ? "power1.out" : "back.out(1.5)"
      }, 0)
      .from(".footer-text-anim", {
        y: 50,
        z:-10,
        opacity: 0,
        duration: 1,
        scrollTrigger:{
          markers:false,
          trigger: ".footer-text-anim",
          start: isMobile ? "top 100%":"top 100%",
          end: isMobile ? "bottom 90%":"bottom 75%",
          scrub: 1
        }
      }, 0.2);
    })
  }, { scope: container });

  return (
    <footer ref={container} className="w-full px-4 sm:px-6 lg:px-[90px] pb-0 overflow-hidden flex flex-col items-center">
      <div className="footer-card-anim relative w-full mx-auto max-w-[1260px] bg-[#c8f021] rounded-[44px] overflow-hidden pt-14 lg:pt-[56px] px-8 lg:px-[48px] flex flex-col justify-between min-h-[494px] border border-gray-300">
        
        {/* Decorative Background Circles */}
        <div 
          className="absolute pointer-events-none hidden lg:block"
          style={{ top: '-20%', right: '-20%', width: '61.4%', height: '80.57%' }}
        >
          <Image src="/footer/Ellipse 13.svg" alt="Circle" fill className="object-contain" />
        </div>
        <div 
          className="absolute pointer-events-none hidden lg:block opacity-35"
          style={{ top: '61.13%', left: '-10.2%', width: '23.83%', height: '60.53%' }}
        >
          <Image src="/footer/Ellipse 14.svg" alt="Circle" fill className="object-contain" />
        </div>

        <div className="relative z-10 w-full grid grid-cols-2 lg:flex lg:flex-row justify-between lg:justify-start gap-x-4 gap-y-12 md:gap-x-12 lg:gap-[64px] pb-16">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col gap-[28px] w-full lg:w-[180px] col-span-2 md:col-span-1 order-1 lg:order-1">
            <div className="flex flex-col gap-[11px] items-start">
              <Image src="/Yanegilogo.svg" alt="Yanegi Logo" width={86} height={80} className="object-contain" />
              <h2 className="font-[family-name:var(--font-poppins)] font-bold text-[32px] text-black tracking-tight leading-none">
                Yanegi
              </h2>
            </div>
            
            <div className="flex flex-col gap-3">
              <span className="font-[family-name:var(--font-inter)] font-medium text-white text-[16px] uppercase tracking-wider">
                Follow Us :
              </span>
              <div className="flex items-center justify-start gap-[20px]">
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/footer/ic_baseline-facebook.svg" alt="Facebook" width={34} height={34} />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/footer/ri_instagram-fill.svg" alt="Instagram" width={34} height={34} />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/footer/mdi_linkedin.svg" alt="LinkedIn" width={34} height={34} />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/footer/whatsapp.svg" alt="Whatsapp" width={34} height={34} />
                </Link>
              </div>
            </div>
          </div>

          {/* Column 2: Contacts */}
          <div className="flex flex-col gap-[31px] w-full lg:w-[197px] col-span-1 md:col-span-1 order-2 md:order-3 lg:order-2 text-white font-[family-name:var(--font-poppins)] text-[16px]">
            <h3 className="font-medium text-[20px] uppercase tracking-wide">Contacts</h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <Image src="/footer/Phone.svg" alt="Phone" width={22} height={22} className="shrink-0" />
                  <span className="font-medium text-[14px] sm:text-[16px]">123 456 789</span>
                </div>
                <div className="flex items-center gap-3">
                  <Image src="/footer/whatsapp.svg" alt="Whatsapp" width={22} height={22} className="shrink-0" />
                  <span className="font-medium text-[14px] sm:text-[16px]">Whatsapp</span>
                </div>
                <div className="flex items-center gap-3">
                  <Image src="/footer/mail.svg" alt="Email" width={22} height={22} className="shrink-0" />
                  <span className="font-medium text-[14px] sm:text-[16px] break-all">yanagi@gmail.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <Image src="/footer/time.svg" alt="Hours" width={22} height={22} className="mt-1 shrink-0" />
                  <span className="font-medium leading-tight text-[14px] sm:text-[16px]">
                    Lunes a Viernes<br/>09:00 a 20:00 horas
                  </span>
                </div>
              </div>
            </div>

          {/* Column 3: Navigations */}
          <div className="flex flex-col gap-[31px] w-full lg:w-auto col-span-1 md:col-span-1 order-3 md:order-2 lg:order-3 text-white font-[family-name:var(--font-poppins)] text-[16px]">
            <h3 className="font-medium text-[20px] uppercase tracking-wide">Navigations</h3>
              <div className="flex flex-col gap-[24px]">
                <Link href="#about" className="font-medium text-[14px] sm:text-[16px] hover:underline decoration-white underline-offset-4">About Us</Link>
                <Link href="#products" className="font-medium text-[14px] sm:text-[16px] hover:underline decoration-white underline-offset-4">Products</Link>
                <Link href="#faq" className="font-medium text-[14px] sm:text-[16px] hover:underline decoration-white underline-offset-4">FAQ</Link>
                <Link href="#contact" className="font-medium text-[14px] sm:text-[16px] hover:underline decoration-white underline-offset-4">Contact</Link>
              </div>
            </div>

          {/* Column 4: Get In Touch */}
          <div className="flex flex-col gap-[10.5px] w-full lg:w-[378.5px] col-span-2 md:col-span-1 order-4 md:order-4 lg:order-4 text-white font-[family-name:var(--font-poppins)] text-[14px]">
            <h3 className="font-medium text-[29px] leading-tight mb-2">Get In Touch!</h3>
            <div className="w-full flex flex-col gap-[10.5px]">
              <div className="h-[54px] w-full bg-transparent border-[1.6px] border-white rounded-[9.66px] px-[19.3px] py-[20.1px] flex items-center">
                <input 
                  type="text" 
                  placeholder="Enter your Name" 
                  className="w-full bg-transparent text-white placeholder-white focus:outline-none"
                />
              </div>
              <div className="h-[54px] w-full bg-transparent border-[1.6px] border-white rounded-[9.66px] px-[19.3px] py-[20.1px] flex items-center">
                <input 
                  type="email" 
                  placeholder="Enter your Email" 
                  className="w-full bg-transparent text-white placeholder-white focus:outline-none"
                />
              </div>
              <div className="h-[81.3px] w-full bg-transparent border-[1.6px] border-white rounded-[9.66px] px-[19.3px] py-[20.1px] flex items-start">
                <textarea 
                  placeholder="Enter your Message" 
                  className="w-full h-full bg-transparent text-white placeholder-white focus:outline-none resize-none"
                />
              </div>
              <AnimatedButton variant="white" className="w-full bg-white text-black font-medium text-[16px] h-[41.1px] rounded-[41px] flex items-center justify-center mt-2">
                Submit
              </AnimatedButton>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 w-full border-t border-white/70 pt-[18px] pb-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-white font-[family-name:var(--font-poppins)] text-[15px]">
          <div className="flex items-center justify-center md:justify-start gap-[8px] w-full md:w-1/3">
            <span className="text-[20px]">&copy;</span>
            <span className="text-[16px]">2026 BORED. All Rights Reserved</span>
          </div>
          
          <div className="w-full md:w-1/3 flex justify-center text-center text-[16px]">
            <span>
              Designed and built by{" "}
              <Link href="#" className="underline underline-offset-2 hover:opacity-80 transition-opacity font-semibold">
                Bored
              </Link>
            </span>
          </div>

          <div className="flex items-center gap-[18px] flex-wrap justify-center md:justify-end w-full md:w-1/3">
            <Link href="#" className="underline underline-offset-2 hover:opacity-80 transition-opacity">Privacy Policy</Link>
            <Link href="#" className="underline underline-offset-2 hover:opacity-80 transition-opacity">Terms of Service</Link>
            <Link href="#" className="underline underline-offset-2 hover:opacity-80 transition-opacity">Cookie Policy</Link>
          </div>
        </div>
      </div>
      
      {/* Faded Background Text Below Footer */}
      <div className="footer-text-anim w-full max-w-[1260px] mx-auto flex justify-center pointer-events-none mt-[16px] lg:mt-[24px]">
        <Image src="/footer/Yanegi — Faded.svg" alt="Yanegi Faded" width={1260} height={454} className="w-full h-auto object-cover" />
      </div>
    </footer>
  );
}
