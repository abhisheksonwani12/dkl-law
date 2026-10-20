"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { banners } from "@/lib/constants";

export default function Hero() {
  const [active, setActive] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 30,
    watchDrag: true,
  });
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const startAutoplay = useCallback(() => {
    if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    autoplayTimer.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 8000);
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
      autoplayTimer.current = null;
    }
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActive(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    emblaApi.on("pointerDown", stopAutoplay);
    emblaApi.on("pointerUp", () => {
      if (!isHovered) startAutoplay();
    });

    if (!isHovered) {
      startAutoplay();
    }

    return () => {
      stopAutoplay();
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("pointerDown", stopAutoplay);
    };
  }, [emblaApi, isHovered, onSelect, startAutoplay, stopAutoplay]);

  const handleDotClick = (idx: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(idx);
    } else {
      setActive(idx);
    }
    startAutoplay();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      emblaApi?.scrollPrev();
      startAutoplay();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      emblaApi?.scrollNext();
      startAutoplay();
    }
  };

  return (
    <section
      id="home"
      className="relative text-white overflow-hidden min-h-[80vh] lg:min-h-screen"
      style={{ fontFamily: 'Times New Roman, Times, serif' }}
      onMouseEnter={() => {
        setIsHovered(true);
        stopAutoplay();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        startAutoplay();
      }}
    >
      {/* Overlay columns image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Desktop Background Image */}
        <div className="absolute inset-0 lg:block bg-[url('/bg-home.webp')] bg-cover bg-center" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 z-10">
        <div className="flex flex-col items-center justify-center text-center lg:flex-row lg:items-start lg:justify-between lg:text-left transition-all duration-700">
          {/* Left Content / Swipeable Cards Carousel */}
          <div
            className="flex-1 w-full max-w-full lg:max-w-xl px-2 sm:px-4 lg:pl-2 mt-6 md:mt-24 flex flex-col items-center lg:items-start lg:text-left text-center"
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label="DKL Key Practice Highlights"
          >
            {/* Embla Viewport */}
            <div
              ref={emblaRef}
              data-embla-viewport
              className="w-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
            >
              <div className="flex touch-pan-y">
                {banners.map((banner, idx) => (
                  <div
                    key={idx}
                    className="flex-[0_0_100%] min-w-0 flex flex-col items-center lg:items-start lg:text-left text-center pr-2"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${idx + 1} of ${banners.length}`}
                  >
                    <p className="text-[#c3a678] tracking-[0.18em] font-semibold uppercase text-[13px] sm:text-[15px] mb-1">
                      {banner.subtitle}
                    </p>
                    <h1 className="font-[marcellus] tracking-normal text-[1.3rem] sm:text-[2.2rem] lg:text-[2.5rem] font-medium leading-[1.2] mb-3 mt-4">
                      {banner.title}
                    </h1>
                    <p className="text-gray-100 text-[12px] sm:text-sm leading-relaxed mb-4 px-1 sm:px-0 min-h-[64px] sm:min-h-[84px] lg:min-h-[96px]">
                      {banner.description}
                    </p>

                    <a href={banner.link} className="inline-block mt-4 sm:mt-12 mb-4">
                      <button className="px-4 py-2 rounded bg-[#c3a678] text-[#1a2332] text-[13px] sm:text-sm font-semibold uppercase tracking-wider shadow hover:bg-[#b19472] transition cursor-pointer">
                        FIND OUT MORE
                      </button>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots navigation */}
            <div className="flex items-center gap-3 mt-4 lg:mt-6">
              {banners.map((_, idx) => (
                <button
                  type="button"
                  key={idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => handleDotClick(idx)}
                  className={`transition-all duration-300 rounded-full border-2 border-transparent focus:outline-none cursor-pointer ${
                    idx === active
                      ? "w-3 h-3 bg-[#c3a678]"
                      : "w-2 h-2 bg-white opacity-60 hover:opacity-100"
                  }`}
                  tabIndex={0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
