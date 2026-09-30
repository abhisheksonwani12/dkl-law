"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function PracticeAreaSection() {
  const router = useRouter();
  const [activeCard, setActiveCard] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!activeCard) return;

    const handleDocumentClick = () => {
      setActiveCard(null);
    };

    const timer = setTimeout(() => {
      document.addEventListener("click", handleDocumentClick);
    }, 50);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [activeCard]);

  const handleCardClick = (cardId: string, e: React.MouseEvent) => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) {
      if (activeCard !== cardId) {
        e.preventDefault();
        e.stopPropagation();
        setActiveCard(cardId);
      }
    }
  };

  const handleCardNavigation = () => {
    router.push("/practice-areas");
  };

  return (
    <section id="expertise" className="py-10 px-3 md:py-20 bg-[#f4f7fa] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/bg-practice-area.png')` }}>
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col items-center gap-1 mb-12">
          <div className="hidden md:flex items-center gap-6 w-full justify-center mb-1">
            <div className="h-0.5 w-12 md:w-24 bg-[#9c0101] rounded" />
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#9c0101] font-normal tracking-normal text-center px-2 whitespace-nowrap" >
              OUR CORE PRACTICE AREAS
            </h2>
            <div className="h-0.5 w-12 md:w-24 bg-[#9c0101] rounded" />
          </div>
          <div className="md:hidden flex items-center gap-6 w-full justify-center mb-1">
            <div className="h-0.5 w-12 md:w-24 bg-[#9c0101] rounded" />
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#9c0101] font-normal tracking-normal text-center px-2 whitespace-nowrap" >
              OUR CORE <br />PRACTICE AREAS
            </h2>
            <div className="h-0.5 w-12 md:w-24 bg-[#9c0101] rounded" />
          </div>

          {/* EXPLORE MORE CTA */}
          <div className="uppercase text-[14px] tracking-[0.25em] text-[#9c0101] font-semibold mb-1 text-center mt-2" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
            Law never stops moving forward — neither do we
          </div>

        </div>

        {/* MAIN PRACTICE AREAS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-1 md:px-0"
          style={{ fontFamily: 'Times New Roman, Times, serif' }}>

          {/* Contentious Practice */}
          <div
            onClick={(e) => {
              handleCardClick("contentious", e);
              if (!window.matchMedia("(pointer: coarse)").matches || activeCard === "contentious") {
                handleCardNavigation();
              }
            }}
            className="bg-white group cursor-pointer w-full md:w-[450px] md:ml-[28%] rounded-4xl px-4 pt-10 pb-2 shadow-[0_6px_14px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_20px_rgba(156,1,1,0.18)] transition-all duration-200 hover:-translate-y-1 border-r-4 border-[#9c0101] border-b-4"
          >
            <h3 className="text-2xl md:text-3xl font-serif text-[#9c0101] text-center font-semibold" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Contentious Practice</h3>
            <ul
              className={`text-[#9c0101] space-y-2 pl-4 ml-4 md:ml-12 font-semibold overflow-hidden transition-all duration-300 
                  ${activeCard === "contentious" ? "opacity-100 max-h-96 my-8 translate-y-0" : "opacity-0 max-h-0 my-0 md:my-8 translate-y-4"}
                  md:opacity-0 md:max-h-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:max-h-96 md:group-hover:translate-y-0`}
            >
              <li>Litigation</li>
              <li>Arbitration</li>
              <li>Mediation</li>
            </ul>
          </div>

          {/* Transactional Practice */}
          <div
            onClick={(e) => {
              handleCardClick("transactional", e);
              if (!window.matchMedia("(pointer: coarse)").matches || activeCard === "transactional") {
                handleCardNavigation();
              }
            }}
            className="bg-white group cursor-pointer w-full md:w-[450px] rounded-4xl px-4 pt-10 pb-2 shadow-[0_6px_14px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_20px_rgba(156,1,1,0.18)] transition-all duration-200 hover:-translate-y-1 border-r-4 border-[#9c0101] border-b-4"
          >
            <h3 className="text-2xl md:text-3xl font-serif text-[#9c0101] text-center font-semibold" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Corporate Practice</h3>
            <ul
              className={`text-[#9c0101] space-y-2 pl-4 ml-4 md:ml-12 font-semibold overflow-hidden transition-all duration-300 
                    ${activeCard === "transactional" ? "opacity-100 max-h-96 my-8 translate-y-0" : "opacity-0 max-h-0 my-0 md:my-8 translate-y-4"}
                    md:opacity-0 md:max-h-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:max-h-96 md:group-hover:translate-y-0`}
            >
              <li>Public Market Transactions</li>
              <li>Contral Transactions</li>
              <li>Financial Regulatory Practices</li>
              <li>Incubation Practice</li>
            </ul>
          </div>

          {/* Financial Regulatory Practice */}
          <div
            onClick={(e) => {
              handleCardClick("bespoke", e);
              if (!window.matchMedia("(pointer: coarse)").matches || activeCard === "bespoke") {
                handleCardNavigation();
              }
            }}
            className="bg-white group cursor-pointer w-full md:w-[450px] md:ml-[67%] rounded-4xl px-4 pt-10 pb-2 shadow-[0_6px_14px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_20px_rgba(156,1,1,0.18)] transition-all duration-200 hover:-translate-y-1 border-r-4 border-[#9c0101] border-b-4"
          >
            <h3 className="text-2xl md:text-3xl font-serif text-[#9c0101] text-center font-semibold" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Bespoke Corporate Advisory</h3>
            <ul
              className={`text-[#9c0101] space-y-2 pl-4 ml-4 md:ml-12 font-semibold overflow-hidden transition-all duration-300 
                    ${activeCard === "bespoke" ? "opacity-100 max-h-96 my-8 translate-y-0" : "opacity-0 max-h-0 my-0 md:my-8 translate-y-4"}
                    md:opacity-0 md:max-h-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:max-h-96 md:group-hover:translate-y-0`}
            >
              <li>Strategic Corporate Structuring</li>
              <li>Regulatory & Governance Strategy</li>
              <li>Risk, Innovation & Emerging Business Models</li>
            </ul>
          </div>

        </div>

        {/* EXPLORE MORE CTA */}
        <div className="flex justify-center mt-8">
          <a
            href="/practice-areas"
            className="inline-block px-8 py-3 bg-white text-[#9c0101] border border-[#9c0101] hover:bg-[#9c0101] hover:text-white transition rounded font-medium uppercase"
            style={{ fontFamily: 'Times New Roman, Times, serif' }}
          >
            Explore More
          </a>
        </div>

      </div>
    </section>
  );
}
