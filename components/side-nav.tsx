"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const [hovered, setHovered] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    if (!pathname) return;

    // Direct page / sub-route matching
    if (pathname.startsWith("/our-team") || pathname.startsWith("/people")) {
      setActiveSection("our-team");
      return;
    }

    if (pathname.startsWith("/practice-areas")) {
      setActiveSection("expertise");
      return;
    }

    if (
      pathname.startsWith("/resources") ||
      pathname.startsWith("/articles") ||
      pathname.startsWith("/blog")
    ) {
      setActiveSection("resources");
      return;
    }

    // When on the homepage, track scroll position and hash anchors
    if (pathname === "/") {
      const determineSectionFromHash = () => {
        const hash = window.location.hash.replace("#", "");
        if (hash) {
          const matched = navItems.find((item) => item.sectionId === hash);
          if (matched) {
            setActiveSection(matched.sectionId);
            return true;
          }
        }
        return false;
      };

      const handleScroll = () => {
        // If at the very bottom, activate resources
        if (
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 80
        ) {
          setActiveSection("resources");
          return;
        }

        // Focal threshold for section detection
        const threshold = window.innerHeight * 0.4;
        let matchedSection = "";

        // Document section order on homepage
        const sectionOrder = [
          "about",
          "home",
          "expertise",
          "our-team",
          "our-offices",
          "resources",
        ];

        for (const sId of sectionOrder) {
          const el = document.getElementById(sId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= threshold && rect.bottom >= threshold) {
              matchedSection = sId;
              break;
            }
          }
        }

        // If at or near top of page and no specific section captured, Who We Are is the top section
        if (!matchedSection && window.scrollY < 200) {
          matchedSection = "about";
        }

        if (matchedSection) {
          setActiveSection(matchedSection);
        }
      };

      const handleHashChange = () => {
        if (!determineSectionFromHash()) {
          handleScroll();
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("hashchange", handleHashChange);

      if (!determineSectionFromHash()) {
        handleScroll();
      }

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("hashchange", handleHashChange);
      };
    }
  }, [pathname]);

  const activeItem =
    navItems.find((item) => item.sectionId === activeSection) || navItems[0];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed right-0 top-1/3 -translate-y-1/2 bg-white w-[130px] hover:w-[220px] transition-all duration-300 z-50 overflow-hidden border border-[#9c0101] border-r-0 shadow-lg rounded-l-md hidden md:block"
      style={{ fontFamily: "Times New Roman, Times, serif" }}
    >
      {/* Collapsed State: Shows the current active section name with indicator */}
      {!hovered && (
        <Link
          href={activeItem.path}
          className="flex items-center justify-between px-3.5 py-4 text-[#9c0101] text-[1rem] font-bold whitespace-nowrap border-l-4 border-l-[#9c0101] hover:bg-[#9c0101]/5 transition-colors"
          title={`Active Page: ${activeItem.name}`}
        >
          <span className="truncate">{activeItem.name}</span>
          <span className="text-[10px] ml-1 text-[#9c0101]/60">◀</span>
        </Link>
      )}

      {/* Expanded State: Full nav with highlighted active page and hover effects */}
      {hovered &&
        navItems.map((item, index) => {
          const isActive = activeSection === item.sectionId;
          return (
            <Link
              key={index}
              href={item.path}
              onClick={() => {
                setActiveSection(item.sectionId);
              }}
              className={`flex items-center justify-between px-4 py-3.5 text-[15px] whitespace-nowrap border-b border-[#9c0101]/20 transition-all duration-200 ${
                isActive
                  ? "bg-[#9c0101] text-white font-bold pl-5 shadow-inner"
                  : "text-[#9c0101] hover:bg-[#9c0101]/10 hover:text-[#9c0101] hover:pl-5 font-medium"
              }`}
            >
              <span>{item.name}</span>
              {isActive && <span className="text-white text-xs ml-2">◆</span>}
            </Link>
          );
        })}
    </div>
  );
}