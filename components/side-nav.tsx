"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", path: "/", sectionId: "home" },
  { name: "Who We Are", path: "/#about", sectionId: "about" },
  { name: "Practice Areas", path: "/#expertise", sectionId: "expertise" },
  { name: "Our Team", path: "/#our-team", sectionId: "our-team" },
  { name: "Our Offices", path: "/#our-offices", sectionId: "our-offices" },
  { name: "Resources", path: "/#resources", sectionId: "resources" },
];

export default function SideNav() {
  const [hovered, setHovered] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Default to "Home" when at or near the top of the page unless explicitly anchored to another section
      if (window.scrollY < 200 && (!window.location.hash || window.location.hash === "#" || window.location.hash === "#home")) {
        setActiveSection("home");
        return;
      }

      navItems.forEach((item) => {
        if (!item.sectionId) return;
        const el = document.getElementById(item.sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(item.sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeItem =
    navItems.find((item) => item.sectionId === activeSection) || navItems[0];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed right-0 top-1/4 -translate-y-1/3 bg-white w-[115px] hover:w-[210px] transition-all duration-300 z-55 overflow-hidden border border-[#9c0101] hidden md:block"
      style={{ fontFamily: 'Times New Roman, Times, serif' }}
    >
      {!hovered && (
        <Link
          href={activeItem.path}
          className="block px-3 py-4 text-[#9c0101] text-[1rem] font-semibold whitespace-nowrap border-b border-white/10"
        >
          {activeItem.name}
        </Link>
      )}
      {hovered &&
        navItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`block px-3 py-4 text-[#9c0101] text-xl/1.2 font-medium whitespace-nowrap border-b border-[#9c0101]/50 hover:bg-black/20 hover:pl-5 transition-all duration-200 ${
              activeSection === item.sectionId ? "bg-black/30 font-semibold" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
    </div>
  );
}