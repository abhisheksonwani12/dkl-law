"use client";

import { useState, useEffect, useRef } from "react";
import { banners } from "@/lib/constants";

export default function Hero() {
  const [active, setActive] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setActive((prev) => (prev + 1) % banners.length);
    }, 8000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [active]);

  const handleDotClick = (idx: number) => {
    setActive(idx);
  };
  const banner = banners[active];

  return (
    <section id="home" className="relative text-white overflow-hidden min-h-[80vh] lg:min-h-screen" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
      
      {/* Overlay columns image */}
      <div className="absolute inset-0 z-0">

        {/* Desktop Background Image */}
        <div
          className="absolute inset-0 lg:block bg-[url('/bg-home.png')] bg-cover bg-center"
        >
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 z-10">
        <div className="flex flex-col items-center justify-center text-center lg:flex-row lg:items-start lg:justify-between lg:text-left transition-all duration-700">
          
          {/* Left Content */}
          <div className="flex-1 w-full max-w-full lg:max-w-lg px-2 sm:px-4 lg:pl-2 mt-6 md:mt-30 flex flex-col items-center lg:items-start lg:text-left text-center">
            <p className="text-[#c3a678] tracking-[0.18em] font-semibold uppercase text-[13px] sm:text-[15px] mb-1">
              {banner.subtitle}
            </p>
            <h1 className="font-[marcellus] tracking-normal text-[1.3rem] sm:text-[2.2rem] lg:text-[2.5rem] font-medium leading-[1.2] mb-3 mt-4">
              {banner.title}
            </h1>
            <p className="text-gray-100 text-[12px] sm:text-sm leading-relaxed mb-4 px-1 sm:px-0">
              {banner.description}
            </p>
            
            <a href={banner.link}>
              <button className="px-4 py-2 rounded bg-[#c3a678] text-[#1a2332] text-[13px] sm:text-sm font-semibold uppercase tracking-wider shadow hover:bg-[#b19472] transition mb-6 mt-6 sm:mt-30">
                FIND OUT MORE
              </button>
            </a>

            {/* Dots navigation */}
            <div className="flex items-center gap-3 mt-6 lg:mt-0 lg:static">
              {banners.map((b, idx) => (
                <button
                  type="button"
                  key={idx}
                  aria-label={`Go to banner ${idx + 1}`}
                  onClick={() => handleDotClick(idx)}
                  className={`transition-all rounded-full border-2 border-transparent focus:outline-none ${
                    idx === active
                      ? "w-3 h-3 bg-[#c3a678]"
                      : "w-2 h-2 bg-white opacity-60"
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
