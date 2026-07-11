import Image from "next/image";

const activityMarkers = [
  {
    name: "Meditation",
    asset: "/hero/meditation.svg",
    x: 96,
    y: 0,
    width: 41,
    height: 49,
    pinX: 12,
    pinY: 37,
  },
  {
    name: "Cricket",
    asset: "/hero/cricket.svg",
    x: 0,
    y: 181,
    width: 51,
    height: 82,
    pinX: 18,
    pinY: 60,
  },
  {
    name: "Pool",
    asset: "/hero/8pool.svg",
    x: 185,
    y: 312,
    width: 55,
    height: 55,
    pinX: 19,
    pinY: 39,
  },
  {
    name: "Dance",
    asset: "/hero/dance.svg",
    x: 408,
    y: 237,
    width: 60,
    height: 60,
    pinX: 20,
    pinY: 46,
  },
  {
    name: "Cricket",
    asset: "/hero/cricket.svg",
    x: 666,
    y: 343,
    width: 50,
    height: 76,
    pinX: 15,
    pinY: 60,
  },
  {
    name: "Video games",
    asset: "/hero/videogames.svg",
    x: 756,
    y: 158,
    width: 65,
    height: 40,
    pinX: 21,
    pinY: 22,
  },
];

const mobileActivityMarkers = [
  {
    name: "Meditation",
    asset: "/hero/meditation.svg",
    top: "51%",
    left: "17%",
    width: 56,
    height: 67,
    pinX: 18,
    pinY: 55,
  },
  {
    name: "Video games",
    asset: "/hero/videogames.svg",
    top: "50%",
    left: "76%",
    width: 56,
    height: 34,
    pinX: 19,
    pinY: 21,
  },
  {
    name: "Dance",
    asset: "/hero/dance.svg",
    top: "68%",
    left: "53%",
    width: 56,
    height: 56,
    pinX: 18,
    pinY: 43,
  },
  {
    name: "Pool",
    asset: "/hero/8pool.svg",
    top: "78%",
    left: "15%",
    width: 56,
    height: 56,
    pinX: 21,
    pinY: 44,
  },
  {
    name: "Cricket",
    asset: "/hero/cricket.svg",
    top: "83%",
    left: "78%",
    width: 56,
    height: 90,
    pinX: 22,
    pinY: 72,
  },
  {
    name: "Cricket",
    asset: "/hero/cricket.svg",
    top: "88%",
    left: "41%",
    width: 56,
    height: 90,
    pinX: 22,
    pinY: 72,
  },
];

const markerFrame = {
  width: 821,
  height: 425,
};

function StoreAvailability() {
  return (
    <div className="relative mt-7 w-full max-w-[620px] pt-[14px] font-[family-name:var(--font-poppins)]">
      <Image
        src="/hero/Heroline.svg"
        alt=""
        width={620}
        height={1}
        className="absolute top-0 left-0 h-px w-full"
      />
      <div className="flex w-full flex-col items-center sm:flex-row sm:justify-center sm:gap-3">
        <p className="text-center text-[14px] font-semibold text-[#1e1e1e] sm:w-[131px]">
          Also available on :
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-3 sm:mt-0">
          <a
            href="#playstore"
            className="flex shrink-0 items-center gap-2 rounded-[34px] bg-white/90 py-[10px] pr-4 pl-[14px] text-[14px] text-black"
          >
            <Image src="/hero/playstore.svg" alt="" width={23} height={23} />
            <span>PlayStore</span>
          </a>
          <a
            href="#apple-store"
            className="flex shrink-0 items-center gap-2 rounded-[61px] bg-white/90 py-[10px] pr-4 pl-[14px] text-[14px] text-black"
          >
            <Image src="/hero/applestore.svg" alt="" width={23} height={23} />
            <span>Apple Store(coming soon)</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      aria-label="Yanegi hero"
      className="relative h-[calc(100svh-96px)] min-h-[420px] overflow-hidden bg-cover bg-bottom bg-no-repeat sm:h-[calc(100svh-96px)] lg:h-[calc(100svh-83px)] lg:min-h-[560px]"
      style={{ backgroundImage: "url('/hero/herobg.png')" }}
    >
      <div className="relative z-[1] mx-auto flex w-full max-w-[821px] flex-col items-center px-4 pt-[68px] text-center sm:pt-16 lg:pt-[56px]">
        <div className="flex flex-col items-center">
          <h1 className="flex flex-col items-center" aria-label="Find Your HANGOUT">
            <Image
              src="/hero/Find Your.svg"
              alt=""
              width={311}
              height={63}
              priority
              className="h-auto w-[min(70vw,311px)]"
            />
            <Image
              src="/hero/HANGOUT.svg"
              alt=""
              width={522}
              height={106}
              priority
              className="mt-1 h-auto w-[min(92vw,522px)]"
            />
          </h1>
          <p className="mt-2 max-w-[522px] font-[family-name:var(--font-poppins)] text-[14px] font-semibold leading-normal text-[#969595]">
            Yanegi maps what&apos;s happening around you - pickup{" "}
            <span className="text-[#515151]">games</span>, open{" "}
            <span className="text-[#515151]">mics</span>, rooftop plans - and
            the people making it happen.{" "}
            <span className="text-[#515151]">Live</span>.
          </p>
        </div>

        <div className="mt-4 flex w-full max-w-[300px] items-center justify-between gap-3 font-[family-name:var(--font-lato)] text-[14px] leading-none">
          <a
            href="#near-me"
            className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#1e1e1e] py-[10px] pr-[14px] pl-4 text-white"
          >
            <span>See what&apos;s near me</span>
            <Image
              src="/uprightarrow.svg"
              alt=""
              width={10}
              height={10}
              className="size-[10px] shrink-0"
            />
          </a>
          <a
            href="#how-it-works"
            className="flex shrink-0 items-center justify-center rounded-[46px] border border-[#1e1e1e] bg-white/70 px-[18px] py-[10px] text-[#1e1e1e]"
          >
            How it works
          </a>
        </div>

        <StoreAvailability />
      </div>

      <div className="absolute inset-0 sm:hidden">
        {mobileActivityMarkers.map((marker) => (
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            key={`mobile-${marker.name}-${marker.top}-${marker.left}`}
            style={{
              height: `${marker.height}px`,
              left: marker.left,
              top: marker.top,
              width: `${marker.width}px`,
            }}
          >
            <Image
              src={marker.asset}
              alt=""
              fill
              sizes="90px"
              className="object-contain"
            />
            <Image
              src="/hero/location.svg"
              alt=""
              width={18}
              height={22}
              className="absolute h-auto w-[18px]"
              style={{
                left: `${(marker.pinX / marker.width) * 100}%`,
                top: `${(marker.pinY / marker.height) * 100}%`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-[6%] left-1/2 hidden aspect-[821/425] w-[92vw] max-w-[821px] -translate-x-1/2 sm:block">
        {activityMarkers.map((marker) => (
          <div
            className="absolute"
            key={`${marker.name}-${marker.x}-${marker.y}`}
            style={{
              height: `${(marker.height / markerFrame.height) * 100}%`,
              left: `${(marker.x / markerFrame.width) * 100}%`,
              top: `${(marker.y / markerFrame.height) * 100}%`,
              width: `${(marker.width / markerFrame.width) * 100}%`,
            }}
          >
            <Image
              src={marker.asset}
              alt=""
              fill
              sizes="80px"
              className="object-contain"
            />
            <Image
              src="/hero/location.svg"
              alt=""
              width={18}
              height={22}
              className="absolute h-auto w-[35%] max-w-[18px]"
              style={{
                left: `${(marker.pinX / marker.width) * 100}%`,
                top: `${(marker.pinY / marker.height) * 100}%`,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
