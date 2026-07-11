"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedButton } from "@/components/ui/animated-button";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  ChevronDownIcon,
  DownloadIcon,
  MenuIcon,
  PersonIcon,
} from "./nav-icons";

type NavItem = {
  label: string;
  href: string;
  hasMenu?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "#about" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

function Brand() {
  return (
    <Link
      className="nav-anim flex shrink-0 items-center gap-2 lg:w-[203px] lg:justify-between"
      href="/"
      aria-label="Yanegi home"
    >
      <Image
        src="/Yanegilogo.svg"
        alt=""
        width={50}
        height={47}
        className="size-[38px] lg:h-[47px] lg:w-[50px]"
        priority
      />
      <span className="text-center text-[28px] font-bold leading-none text-black [font-feature-settings:'salt'_1,'liga'_0] lg:text-[40px] lg:leading-[24px]">
        Yanegi
      </span>
    </Link>
  );
}

function DesktopLinks({ activeSection }: { activeSection: string }) {
  return (
    <div className="hidden items-center justify-start lg:flex lg:w-[280px]">
      <div className="flex shrink-0 items-center gap-[40px] text-[14px] leading-normal">
        {navItems.map((item) => {
          const isActive = activeSection === item.href;
          return (
            <Link
              className={`nav-anim relative group flex items-center transition-colors duration-300 ${
                isActive
                  ? "font-semibold text-black"
                  : "font-normal text-black/60 hover:text-black"
              }`}
              href={item.href}
              key={item.label}
            >
              <span className="flex items-center justify-center gap-[5px]">
                {item.label}
                {item.hasMenu ? <ChevronDownIcon /> : null}
              </span>
              <span
                className={`absolute left-0 -bottom-[6px] h-[2px] w-full bg-black origin-left transition-transform duration-300 ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function InstallButton({ compact = false }: { compact?: boolean }) {
  return (
    <AnimatedButton
      variant="white"
      className="nav-anim flex h-11 shrink-0 items-center justify-center gap-2 rounded-[50px] border border-[#1e1e1e] px-3 text-black lg:h-auto lg:gap-[10px] lg:py-[10px] lg:pr-[16px] lg:pl-[12px]"
      href="https://play.google.com/store/search?q=yanegi&c=apps&hl=en_IN"
      aria-label="Install App"
    >
      <DownloadIcon />
      <span
        className={`font-[family-name:var(--font-raleway)] font-medium leading-[24px] [font-feature-settings:'salt'_1,'liga'_0] ${
          compact ? "hidden sm:inline" : "text-[16px]"
        }`}
      >
        Install App
      </span>
    </AnimatedButton>
  );
}

function SignInButton() {
  return (
    <AnimatedButton
      variant="black"
      className="nav-anim flex items-center justify-center gap-[10px] rounded-[40px] border-2 border-[#1e1e1e] bg-[#1e1e1e] py-[10px] pr-[16px] pl-[12px] text-white"
      href="#signin"
    >
      <PersonIcon />
      <span className="text-[16px] font-medium leading-[24px] [font-feature-settings:'salt'_1,'liga'_0]">
        Sign in
      </span>
    </AnimatedButton>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav-anim relative lg:hidden">
      <AnimatedButton
        variant="white"
        onClick={() => setIsOpen(!isOpen)}
        className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-[#1e1e1e] text-[#1e1e1e]"
        aria-label="Toggle navigation menu"
      >
        <MenuIcon />
      </AnimatedButton>
      <div 
        className={`absolute right-0 top-[calc(100%+10px)] z-10 w-52 rounded-lg border border-black/10 bg-white p-2 shadow-lg transition-all duration-200 ease-out origin-top-right ${
          isOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        {navItems.map((item) => (
          <Link
            className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-[#1e1e1e] hover:bg-black/[.04]"
            href={item.href}
            key={item.label}
            onClick={() => setIsOpen(false)}
          >
            <span>{item.label}</span>
            {item.hasMenu ? <ChevronDownIcon /> : null}
          </Link>
        ))}
        <AnimatedButton
          variant="black"
          className="mt-1 flex items-center justify-center gap-2 rounded-md border-2 border-[#1e1e1e] bg-[#1e1e1e] px-3 py-2 text-sm font-medium text-white"
          href="#signin"
          onClick={() => setIsOpen(false)}
        >
          <PersonIcon />
          Sign in
        </AnimatedButton>
      </div>
    </div>
  );
}

export function Navbar() {
  const [activeSection, setActiveSection] = useState("/");
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".nav-anim", {
      opacity: 0,
      y: -10,
      duration: 2,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, { scope: container });

  useEffect(() => {
    const handleScroll = () => {
      // Check which section is in view
      const sections = ["faq", "how-it-works", "about"];
      let current = "/";
      
      // If we're at the top of the page, it's Home
      if (window.scrollY < 100) {
        setActiveSection("/");
        return;
      }

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          if (rect.top <= 150) {
            current = "#" + section;
            break; // Since sections are ordered bottom-up, first match is the current one
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={container} className="sticky top-0 z-50 w-full py-2 bg-white/75 backdrop-blur-md text-[#1e1e1e]">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full items-center justify-between px-4 font-[family-name:var(--font-poppins)] sm:px-6 lg:h-[51px] lg:px-[90px]"
      >
        <DesktopLinks activeSection={activeSection} />
        <Brand />
        <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-3 lg:h-[51px] lg:w-[280px] lg:gap-[15px]">
          <InstallButton compact />
          <div className="hidden lg:block">
            <SignInButton />
          </div>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
