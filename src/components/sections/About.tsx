"use client";

import Image from "next/image";
import { AnimatedButton } from "@/components/ui/animated-button";
import { motion } from "framer-motion";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const desktopPhotos = [
  { src: "/about/about1.png", alt: "", className: "left-0 top-[40px] h-[215px] w-[132px]" },
  { src: "/about/about3.png", alt: "", className: "left-[156px] top-[16px] h-[156px] w-[132px]" },
  { src: "/about/about2.png", alt: "", className: "left-0 top-[279px] h-[215px] w-[132px]" },
  { src: "/about/about4.png", alt: "", className: "left-[156px] top-[196px] h-[156px] w-[132px]" },
  { src: "/about/about5.png", alt: "", className: "left-[156px] top-[376px] h-[156px] w-[132px]" },
  { src: "/about/about6.png", alt: "", className: "left-[312px] top-[320px] h-[275px] w-[132px]" },
  { src: "/about/about7.png", alt: "", className: "left-[468px] top-[383px] h-[275px] w-[132px]" },
  { src: "/about/about8.png", alt: "", className: "right-[468px] top-[383px] h-[275px] w-[132px]" },
  { src: "/about/about9.png", alt: "", className: "right-[312px] top-[320px] h-[275px] w-[132px]" },
  { src: "/about/about10.png", alt: "", className: "right-[156px] top-[16px] h-[156px] w-[132px]" },
  { src: "/about/about11.png", alt: "", className: "right-[156px] top-[196px] h-[156px] w-[132px]" },
  { src: "/about/about12.png", alt: "", className: "right-[156px] top-[376px] h-[156px] w-[132px]" },
  { src: "/about/about13.png", alt: "", className: "right-0 top-[40px] h-[215px] w-[132px]" },
  { src: "/about/about14.png", alt: "", className: "right-0 top-[279px] h-[215px] w-[132px]" },
];

const mobilePhotos = [
  "/about/about1.png",
  "/about/about3.png",
  "/about/about10.png",
  "/about/about13.png",
  "/about/about2.png",
  "/about/about4.png",
  "/about/about11.png",
  "/about/about14.png",
  "/about/about5.png",
  "/about/about6.png",
  "/about/about7.png",
  "/about/about8.png",
  "/about/about9.png",
  "/about/about12.png",
];

function MobileMarquee({ images, reverse }: { images: string[]; reverse?: boolean }) {
  // Each item is 132px wide + 16px gap (gap-4) = 148px total per item.
  // We have 14 items in the array, so one full set is 14 * 148 = 2072px.
  return (
    <div className="flex w-max">
      <motion.div
        className="flex gap-4 pr-4"
        animate={{
          x: reverse ? [0, -2072] : [-2072, 0],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        {[...images, ...images, ...images, ...images].map((src, i) => (
          <div
            className="relative h-[180px] w-[132px] shrink-0 overflow-hidden rounded-[22px]"
            key={`${src}-${i}`}
          >
            <Image src={src} alt="" fill sizes="132px" className="object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function AboutContent() {
  return (
    <div className="mx-auto flex max-w-[620px] flex-col items-center text-center">
      <h2 className="about-anim font-[family-name:var(--font-oswald)] text-[64px] font-bold leading-none text-[#060606] sm:text-[82px] lg:text-[96px]">
        About{" "}
        <span className="text-[#c8f021] underline decoration-[#c8f021] decoration-[3px] underline-offset-[8px]">
          Us
        </span>
      </h2>
      <p className="about-anim mt-6 max-w-[538px] font-[family-name:var(--font-poppins)] text-[15px] leading-normal text-[#969595] sm:text-[16px]">
        Yanegi is a live map of everything happening around you - pickup{" "}
        <span className="text-[#515151]">games</span>, open{" "}
        <span className="text-[#515151]">mics</span>,{" "}
        <span className="text-[#515151]">rooftop plans</span>, and the people
        making it happen. <span className="text-[#515151]">No algorithm</span>.
        <span className="text-[#515151]"> No sponsored</span> content. Just{" "}
        <span className="text-[#515151]">real plans</span>, in{" "}
        <span className="text-[#515151]">real places</span>, right now.
      </p>
      <p className="about-anim mt-6 rounded-[29px] bg-[#c8f021] px-3 py-1 font-[family-name:var(--font-poppins)] text-[12px] text-[#414141]">
        Make it easier to show up than to stay home.
      </p>
      <AnimatedButton
        variant="black"
        href="https://play.google.com/store/search?q=yanegi&c=apps&hl=en_IN"
        className="about-anim mt-6 flex items-center justify-center gap-2 rounded-full border-2 border-[#1e1e1e] bg-[#1e1e1e] py-[8px] pr-[12px] pl-[14px] font-[family-name:var(--font-lato)] text-[14px] leading-none text-white"
      >
        <span>Join Event Now</span>
        <Image
          src="/uprightarrow.svg"
          alt=""
          width={10}
          height={10}
          className="size-[10px] shrink-0 transition-all duration-300 group-hover:invert"
        />
      </AnimatedButton>
    </div>
  );
}

export function About() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".about-anim", {
      scrollTrigger: {
        trigger: ".about-text-content",
        start: "top 95%",
        toggleActions: "play none reset reverse",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "back.out(1.5)" 
    });

    const flipRandomPhoto = () => {
      const photos = gsap.utils.toArray(".desktop-photo-anim");
      if (!photos.length) return;
      const randomPhoto = photos[Math.floor(Math.random() * photos.length)] as HTMLElement;
      
      gsap.to(randomPhoto, {
        keyframes: [
          { scaleY: 0, duration: 0.2, ease: "power2.in" },
          { scaleY: 1, duration: 0.2, ease: "power2.out" }
        ],
        onUpdate: function() {
          if (this.ratio >= 0.5 && randomPhoto.dataset.flipped !== "true") {
            randomPhoto.dataset.flipped = "true";
            const img = randomPhoto.querySelector("img");
            if (img) {
              const randomImage = mobilePhotos[Math.floor(Math.random() * mobilePhotos.length)];
              img.src = randomImage;
              img.srcset = "";
            }
          } else if (this.ratio < 0.5) {
            randomPhoto.dataset.flipped = "false";
          }
        },
        onComplete: () => {
          gsap.delayedCall(0.8, flipRandomPhoto);
        }
      });
    };

    gsap.delayedCall(2, flipRandomPhoto);
  }, { scope: container });

  return (
    <section ref={container} id="about" className="relative scroll-mt-28 bg-white py-8 md:py-0 px-4 sm:px-6 lg:px-[90px] overflow-hidden">
      
      {/* Mobile Top Marquee - Rotated -15 degrees, moves Right */}
      <div className="about-anim lg:hidden relative w-full h-[250px] mb-8 flex items-center justify-center">
        <div className="absolute w-[300vw] -rotate-[15deg] pointer-events-none opacity-80 flex justify-center">
          <MobileMarquee images={mobilePhotos} reverse={false} />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1224px] lg:min-h-[785px] z-[1]">
        <div className="about-text-content relative z-[1] lg:pt-0">
          <AboutContent />
        </div>

        <div className="pointer-events-none absolute inset-0 hidden lg:block z-0">
          {desktopPhotos.map((photo) => (
            <div
              className={`about-anim desktop-photo-anim absolute overflow-hidden rounded-[22px] ${photo.className}`}
              key={photo.src}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="132px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Bottom Marquee - Rotated -15 degrees, moves Left */}
      <div className="lg:hidden relative w-full h-[250px] mt-8 flex items-center justify-center">
        <div className="absolute w-[300vw] -rotate-[15deg] pointer-events-none opacity-80 flex justify-center">
          <MobileMarquee images={mobilePhotos} reverse={true} />
        </div>
      </div>

    </section>
  );
}
