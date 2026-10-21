"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Phone, Menu } from "lucide-react";

const Header: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isTeamActive = pathname?.startsWith('/our-team') || pathname?.startsWith('/people');
  const isPracticeActive = pathname?.startsWith('/practice-areas');
  const isResourcesActive = pathname?.startsWith('/resources') || pathname?.startsWith('/articles') || pathname?.startsWith('/blog');
  
  return (
    <header className="w-full bg-white" style={{ fontFamily: 'Times New Roman, Times, serif' }}>

      <div className="flex flex-col">

        {/* TOP ROW: LOGO + CONTACT/SOCIAL */}
        <div className="flex flex-col md:flex-row md:items-center border-b border-[#9c0101] px-4 md:px-8">
          
          {/* LOGO COLUMN */}
          <div className="flex justify-start items-start md:items-center max-w-full ml-2 mb-2 md:mb-0">
            <a href="/" aria-label="Go to Home">
              <img
                src="/logo-w.webp"
                alt="Law Firm Logo"
                className="w-36 md:w-48 h-auto object-contain cursor-pointer"
              />
            </a>
          </div>

          {/* ROW 1 CONTENT */}
          <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 flex-1 w-full">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mt-2 md:mt-[78px] md:ml-5 text-[#9c0101]">
                <div className="flex items-center">
                  <Phone size={18} className="mr-2" />
                  <a href="tel:+911161289119" className="text-black text-base font-bold hover:underline">
                    Delhi: +91 11 6128 9119 
                  </a>
                </div>

                <div className="flex items-center">
                  <Phone size={18} className="mr-2" />
                  <a href="tel:+912268643983" className="text-black text-base font-bold hover:underline">
                    Mumbai: +91 22 6864 3983
                  </a>
                </div>

                {/* <div className="flex items-center">
                  <Phone size={18} className="mr-2" />
                  <a href="tel:+912268643983" className="text-black text-base font-bold hover:underline">
                    Raipur: +91 XXXXXXXX
                  </a>
                </div> */}
              </div>

              <div className="flex items-center text-[#25D366] mb-2 md:mt-[83px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.06L2 22l5.09-1.34A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.2-.5-4.49-1.35l-.32-.2-3.02.8.81-2.95-.21-.33A7.94 7.94 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.2-5.28c-.23-.12-1.36-.67-1.57-.75-.21-.08-.37-.12-.52.12-.16.23-.6.75-.74.9-.14.16-.27.18-.5.06-.23-.12-.98-.36-1.86-1.15-.69-.61-1.15-1.37-1.29-1.6-.14-.23-.02-.36.1-.48.11-.11.23-.27.35-.4.12-.14.16-.23.24-.39.08-.16.04-.3-.02-.42-.06-.12-.52-1.25-.71-1.71-.19-.46-.38-.39-.52-.4h-.44c-.14 0-.37.05-.56.27-.19.23-.74.73-.74 1.78s.76 2.06.87 2.2c.12.14 1.63 2.49 3.95 3.49.55.24.98.38 1.32.49.55.17 1.05.15 1.45.09.44-.07 1.36-.55 1.55-1.09.19-.54.19-1 .14-1.09-.05-.09-.21-.14-.44-.26z"/>
                </svg>
                <a href="https://wa.me/919920909031" target="_blank" rel="noopener noreferrer" className="text-black text-base font-bold hover:underline">
                  WhatsApp: +91 99209 09031
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: NAVIGATION */}
        <div className="flex items-center px-4 md:px-8 py-3 pl-4 md:pl-[205px]">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#9c0101] p-2"
            aria-label="Toggle Menu"
          >
            <Menu size={28} />
          </button>
          <div className="hidden md:flex items-center gap-2 flex-1">
            <a
              href="/#home"
              className="text-[#001021] font-semibold mr-4 text-sm relative after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-[#9c0101] after:transition-all after:duration-300 hover:after:w-full"
            >
              HOME
            </a>
            <span className="text-[#9c0101] text-md mr-4">&#9670;</span>
            <a
              href="/#about"
              className="text-[#001021] font-semibold mr-4 text-sm relative after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-[#9c0101] after:transition-all after:duration-300 hover:after:w-full"
            >
              WHO WE ARE
            </a>
            <span className="text-[#9c0101] text-md mr-4">&#9670;</span>
            <a
              href="/#expertise"
              className={`font-semibold mr-4 text-sm relative after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-[#9c0101] after:transition-all after:duration-300 hover:after:w-full ${
                isPracticeActive ? "text-[#9c0101] after:w-full" : "text-[#001021] after:w-0"
              }`}
            >
              PRACTICE AREAS
            </a>
            <span className="text-[#9c0101] text-md mr-4">&#9670;</span>
            <a
              href="/#our-team"
              className={`font-semibold mr-4 text-sm relative after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-[#9c0101] after:transition-all after:duration-300 hover:after:w-full ${
                isTeamActive ? "text-[#9c0101] after:w-full" : "text-[#001021] after:w-0"
              }`}
            >
              OUR TEAM
            </a>
            <span className="text-[#9c0101] text-md mr-4">&#9670;</span>
            <a
              href="/#our-offices"
              className="text-[#001021] font-semibold mr-4 text-sm relative after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-[#9c0101] after:transition-all after:duration-300 hover:after:w-full"
            >
              OUR OFFICES
            </a>
            <span className="text-[#9c0101] text-md mr-4">&#9670;</span>
            <a
              href="/#resources"
              className={`font-semibold mr-4 text-sm relative after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-[#9c0101] after:transition-all after:duration-300 hover:after:w-full ${
                isResourcesActive ? "text-[#9c0101] after:w-full" : "text-[#001021] after:w-0"
              }`}
            >
              RESOURCES
            </a>

            {/* LinkedIn at end of nav */}
            <div className="hidden md:flex items-center pl-2 text-blue-500">
              <a
                href="https://in.linkedin.com/company/dkladvocates"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#9c0101] transition"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3A2.5 2.5 0 1 0 5 8h.02A2.5 2.5 0 0 0 4.98 3zM3 9h4v12H3zM9 9h3.8v1.71h.05c.53-1 1.82-2.06 3.74-2.06 4 0 4.74 2.63 4.74 6v6h-4v-5.33c0-1.27 0-2.9-1.77-2.9s-2.03 1.38-2.03 2.8V21H9z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="flex flex-col bg-white border-t border-[#9c0101] px-6 py-4 space-y-3 md:hidden">
            <a
              href="/#home"
              className="text-[#001021] font-semibold text-sm relative after:absolute after:left-0 after:bottom-0.5 after:w-0 after:h-0.5 after:bg-[#9c0101] after:transition-all after:duration-300 hover:after:w-full"
            >
              HOME
            </a>

            <a
              href="/#about"
              className="text-[#001021] font-semibold text-sm relative after:absolute after:left-0 after:bottom-0.5 after:w-0 after:h-0.5 after:bg-[#9c0101] after:transition-all after:duration-300 hover:after:w-full"
            >
              WHO WE ARE
            </a>

            <a
              href="/#expertise"
              className={`font-semibold text-sm relative after:absolute after:left-0 after:bottom-0.5 after:h-0.5 after:bg-[#9c0101] after:transition-all after:duration-300 hover:after:w-full ${
                isPracticeActive ? "text-[#9c0101] after:w-full" : "text-[#001021] after:w-0"
              }`}
            >
              PRACTICE AREAS
            </a>
            
            <a
              href="/#our-team"
              className={`font-semibold text-sm relative after:absolute after:left-0 after:bottom-0.5 after:h-0.5 after:bg-[#9c0101] after:transition-all after:duration-300 hover:after:w-full ${
                isTeamActive ? "text-[#9c0101] after:w-full" : "text-[#001021] after:w-0"
              }`}
            >
              OUR TEAM
            </a>

            <a
              href="/#our-offices"
              className="text-[#001021] font-semibold text-sm relative after:absolute after:left-0 after:bottom-0.5 after:w-0 after:h-0.5 after:bg-[#9c0101] after:transition-all after:duration-300 hover:after:w-full"
            >
              OUR OFFICES
            </a>

            <a
              href="/#resources"
              className={`font-semibold text-sm relative after:absolute after:left-0 after:bottom-0.5 after:h-0.5 after:bg-[#9c0101] after:transition-all after:duration-300 hover:after:w-full ${
                isResourcesActive ? "text-[#9c0101] after:w-full" : "text-[#001021] after:w-0"
              }`}
            >
              RESOURCES
            </a>

          </div>
        )}

      </div>
    </header>
  );
};

export default Header;
