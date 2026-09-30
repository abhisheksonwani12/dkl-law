"use client";

import { useState, useEffect } from "react";
import { TeamMemberCardProps } from "@/lib/types";
import Link from "next/link";

export default function TeamMemberCard({
  id,
  name,
  title,
  image,
  description,
}: TeamMemberCardProps) {
  const [showOverlay, setShowOverlay] = useState(false);

  const hasDescription = !!(description && (title.toLowerCase().includes("founder") || title.toLowerCase().includes("counsel")));

  useEffect(() => {
    if (!showOverlay) return;

    const handleDocumentClick = () => {
      setShowOverlay(false);
    };

    // Delay adding the listener to avoid immediate closing from the same touch event
    const timer = setTimeout(() => {
      document.addEventListener("click", handleDocumentClick);
    }, 50);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [showOverlay]);

  const handleCardClick = (e: React.MouseEvent) => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice && hasDescription) {
      if (!showOverlay) {
        // First tap: prevent navigation and show description overlay
        e.preventDefault();
        setShowOverlay(true);
      }
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className="relative group cursor-pointer w-[258px] md:px-4 md:py-4 flex flex-col items-center bg-white border-2 border-[#9c0101]"
    >
      <Link 
        href={`/people/${id}`} 
        className="flex flex-col items-center w-full"
        onClick={(e) => {
          const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
          if (isTouchDevice && hasDescription && !showOverlay) {
            e.preventDefault();
          }
        }}
      >
        {/* Decorative dot indicator */}
        <div className="absolute -left-2 top-3 w-2 h-2 rounded-full z-10 md:-left-3 md:top-4 md:w-3 md:h-3"></div>
        
        {/* Card container with overlay */}
        <div className="relative overflow-hidden w-full aspect-3/4 md:h-60 md:w-60 bg-white">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05]"
          />
          {hasDescription && (
            <div 
              className={`absolute inset-0 bg-white/90 transition-opacity duration-300 flex items-center justify-center p-6
                ${showOverlay ? "opacity-100 pointer-events-auto" : "opacity-0 group-hover:opacity-100 pointer-events-none md:pointer-events-auto"}`}
              style={{ fontFamily: 'Times New Roman, Times, serif' }}
            >
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed text-center">
                {description}
              </p>
            </div>
          )}
        </div>
        
        {/* Info section below image */}
        <div className="mt-2 md:mt-3 text-[#9c0101] bg-white md:w-[248px] text-center my-2"
        style={{ fontFamily: 'Times New Roman, Times, serif' }}>
          <h3 className="text-sm md:text-base font-semibold leading-snug">{name}</h3>
          <p className="italic text-xs mt-0.5">{title}</p>
        </div>
      </Link>
    </div>
  );
}
