"use client";

import { useState } from "react";

export default function Footer() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    quickLinks: false,
    practiceAreas: false,
    legal: false,
    followUs: false,
  });

  const toggleSection = (section: string) => {
    // Only toggle on mobile devices (width < 768px)
    if (window.innerWidth < 768) {
      setOpenSections((prev) => ({
        ...prev,
        [section]: !prev[section],
      }));
    }
  };

  return (
    <footer
      className="relative text-[#c5cfe1] pt-16 pb-8 sm:pt-[72px] sm:pb-[42px] px-0 min-h-[380px] overflow-visible bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg-footer.webp')", fontFamily: 'Times New Roman, Times, serif' }}
    >
      <div className="relative z-10">

        {/* Logo, diamond/triangle overlap */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[200%] md:-translate-y-[170%] z-30 w-[110px] sm:w-[130px] md:w-[135px]">
          <div className="bg-white w-full h-full flex items-center justify-center">
            <a href="/" aria-label="Go to homepage" className="block w-full h-full">
              <img
                src="/logo-w.webp"
                alt="DKL Advocates"
                className="object-contain w-[90%] h-auto mx-auto z-100"
              />
            </a>
          </div>
        </div>

        {/* Four columns - Accordion on mobile, grid on desktop */}
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mt-10 px-6 sm:px-10 pb-2 z-10 relative">

          {/* Quick Links */}
          <div className="border-b border-[#c5cfe1]/20 md:border-none pb-4 md:pb-0">
            <div 
              onClick={() => toggleSection('quickLinks')}
              className="flex justify-between items-center cursor-pointer md:cursor-default"
            >
              <div className="text-white text-[1rem] sm:text-[1.23rem] mb-0 md:mb-3 font-normal">Quick Links</div>
              <span className="text-white md:hidden text-lg font-bold">
                {openSections.quickLinks ? "−" : "+"}
              </span>
            </div>
            <div className={`grid gap-y-2 gap-x-4 text-[14px] sm:text-[15.3px] transition-all duration-300 overflow-hidden 
              ${openSections.quickLinks ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0 md:max-h-96 md:opacity-100 md:mt-0'}`}
            >
              <a href="/#" className="hover:text-white">Home</a>
              <a href="/#about" className="hover:text-white">Who We Are</a>
              <a href="/#practice-areas" className="hover:text-white">Practice Areas</a>
              <a href="/#our-team" className="hover:text-white">Our Team</a>
              <a href="/#our-offices" className="hover:text-white">Our Offices</a>
              <a href="/#resources" className="hover:text-white">Resources</a>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="border-b border-[#c5cfe1]/20 md:border-none pb-4 md:pb-0">
            <div 
              onClick={() => toggleSection('practiceAreas')}
              className="flex justify-between items-center cursor-pointer md:cursor-default"
            >
              <div className="text-white text-[1rem] sm:text-[1.23rem] mb-0 md:mb-3 font-normal">Practice Areas</div>
              <span className="text-white md:hidden text-lg font-bold">
                {openSections.practiceAreas ? "−" : "+"}
              </span>
            </div>
            <div className={`leading-relaxed space-y-1 text-[14px] sm:text-[15.3px] transition-all duration-300 overflow-hidden 
              ${openSections.practiceAreas ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0 md:max-h-96 md:opacity-100 md:mt-0'}`}
            >
              <a href="/practice-areas#contentious" className="hover:text-white block">Contentious Practice</a>
              <a href="/practice-areas#transactional" className="hover:text-white block">Corporate Practice</a>
              <a href="/practice-areas#financial" className="hover:text-white block">Bespoke Corporate Advisory</a>
            </div>
          </div>
          
          {/* Legal */}
          <div className="border-b border-[#c5cfe1]/20 md:border-none pb-4 md:pb-0">
            <div 
              onClick={() => toggleSection('legal')}
              className="flex justify-between items-center cursor-pointer md:cursor-default"
            >
              <div className="text-white text-[1rem] sm:text-[1.23rem] mb-0 md:mb-3 font-normal">Legal</div>
              <span className="text-white md:hidden text-lg font-bold">
                {openSections.legal ? "−" : "+"}
              </span>
            </div>
            <div className={`leading-relaxed space-y-1 text-[14px] sm:text-[15.3px] transition-all duration-300 overflow-hidden 
              ${openSections.legal ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0 md:max-h-96 md:opacity-100 md:mt-0'}`}
            >
              <a href="/privacy-policy" className="hover:text-white block">Privacy Policy</a>
              <a href="/privacy-policy" className="hover:text-white block">Terms of Use</a>
            </div>
          </div>

          {/* Follow Us */}
          <div className="pb-2 md:pb-0">
            <div 
              onClick={() => toggleSection('followUs')}
              className="flex justify-between items-center cursor-pointer md:cursor-default"
            >
              <div className="text-white text-[1rem] sm:text-[1.23rem] mb-0 md:mb-3 font-normal">Follow Us</div>
              <span className="text-white md:hidden text-lg font-bold">
                {openSections.followUs ? "−" : "+"}
              </span>
            </div>
            <div className={`leading-snug text-[#b5bed5] text-[14px] sm:text-[15.3px] transition-all duration-300 overflow-hidden 
              ${openSections.followUs ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0 md:max-h-96 md:opacity-100 md:mt-0'}`}
            >
              <a href="https://in.linkedin.com/company/dkladvocates" className="hover:text-white block">LinkedIn</a>
            </div>
          </div>

        </div>
      </div>
      <div className="text-center text-[#bda47c] text-sm py-3 border-t border-[#bda47c] md:mb-0 mt-3">
        <a href="https://dkl.law" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          Copyright © {new Date().getFullYear()} <span className="font-semibold">DKL Advocates</span>, All Rights Reserved
        </a>
      </div>
    </footer>
  );
}