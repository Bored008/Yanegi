import Image from "next/image";

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

function AboutContent() {
  return (
    <div className="mx-auto flex max-w-[620px] flex-col items-center text-center">
      <h2 className="font-[family-name:var(--font-oswald)] text-[64px] font-bold leading-none text-[#060606] sm:text-[82px] lg:text-[96px]">
        About{" "}
        <span className="text-[#c8f021] underline decoration-[#c8f021] decoration-[3px] underline-offset-[8px]">
          Us
        </span>
      </h2>
      <p className="mt-6 max-w-[538px] font-[family-name:var(--font-poppins)] text-[15px] leading-normal text-[#969595] sm:text-[16px]">
        Yanegi is a live map of everything happening around you - pickup{" "}
        <span className="text-[#515151]">games</span>, open{" "}
        <span className="text-[#515151]">mics</span>,{" "}
        <span className="text-[#515151]">rooftop plans</span>, and the people
        making it happen. <span className="text-[#515151]">No algorithm</span>.
        <span className="text-[#515151]"> No sponsored</span> content. Just{" "}
        <span className="text-[#515151]">real plans</span>, in{" "}
        <span className="text-[#515151]">real places</span>, right now.
      </p>
      <p className="mt-6 rounded-[29px] bg-[#c8f021] px-3 py-1 font-[family-name:var(--font-poppins)] text-[12px] text-[#414141]">
        Make it easier to show up than to stay home.
      </p>
      <a
        href="#join-event"
        className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#1e1e1e] py-[10px] pr-[14px] pl-4 font-[family-name:var(--font-lato)] text-[14px] leading-none text-white"
      >
        <span>Join Event Now</span>
        <Image
          src="/uprightarrow.svg"
          alt=""
          width={10}
          height={10}
          className="size-[10px] shrink-0"
        />
      </a>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="bg-white px-4 py-20 sm:px-6 lg:px-[90px] lg:py-28">
      <div className="relative mx-auto max-w-[1224px] lg:min-h-[785px]">
        <div className="relative z-[1] lg:pt-0">
          <AboutContent />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:hidden">
          {mobilePhotos.map((src) => (
            <div
              className="relative aspect-[132/180] overflow-hidden rounded-[22px]"
              key={src}
            >
              <Image src={src} alt="" fill sizes="45vw" className="object-cover" />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {desktopPhotos.map((photo) => (
            <div
              className={`absolute overflow-hidden rounded-[22px] ${photo.className}`}
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
    </section>
  );
}
