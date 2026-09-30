'use client';

import { useState, useEffect, useRef } from 'react';
import PeopleHero from '@/components/team-sections/people-hero';
import FoundingPartners from '@/components/team-sections/founder-counsel';
import LegalCounsel from '@/components/team-sections/legal-counsel';
import LegalAssociates from '@/components/team-sections/legal-associate';
import ManagementTeam from '@/components/team-sections/management-team';
import AdvisoryBoard from '@/components/team-sections/advisory-board';


export default function PeoplePage() {

  const [activeCategory, setActiveCategory] = useState<'advisory' | 'core' | 'management'>('core');
  const [isSticky, setIsSticky] = useState(false);
  const switcherRef = useRef<HTMLDivElement | null>(null);
  const initialOffsetRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!switcherRef.current) return;

      if (window.scrollY >= initialOffsetRef.current) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    if (switcherRef.current) {
      initialOffsetRef.current = switcherRef.current.offsetTop;
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (

    <div id='our-team' className="min-h-screen text-foreground">
      <PeopleHero />

      {/* Category Switcher */}
      <>
        {isSticky && <div className="h-16" />}
        <div
          ref={switcherRef}
          className={`w-full py-4 md:py-6 px-4 md:px-0 bg-white border-b border-[#9c0101] z-50 transition-all ${
            isSticky ? 'fixed top-0 left-0 shadow-sm' : 'relative'
          }`}
        >

          {/* Mobile Dropdown */}
          <div className="md:hidden w-full">
            <select
              value={activeCategory}
              onChange={(e) =>
                setActiveCategory(e.target.value as 'advisory' | 'core' | 'management')
              }
              className="w-full border border-[#9c0101] px-4 py-2 text-sm font-semibold font-['Times_New_Roman'] bg-white text-[#001021] focus:outline-none"
            >
              <option value="core">Core Team</option>
              <option value="advisory">Advisory Board</option>
              <option value="management">Management</option>
            </select>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex justify-center gap-4">
            <button
              onClick={() => setActiveCategory('core')}
              className={`px-6 py-2 border text-base font-semibold font-['Times_New_Roman'] transition ${
                activeCategory === 'core'
                  ? 'bg-[#9c0101] text-white border-[#9c0101]'
                  : 'bg-white text-[#001021] border-[#9c0101] hover:bg-[#9c0101] hover:text-white'
              }`}
            >
              Core Team
            </button>

            <button
              onClick={() => setActiveCategory('management')}
              className={`px-6 py-2 border text-base font-semibold font-['Times_New_Roman'] transition ${
                activeCategory === 'management'
                  ? 'bg-[#9c0101] text-white border-[#9c0101]'
                  : 'bg-white text-[#001021] border-[#9c0101] hover:bg-[#9c0101] hover:text-white'
              }`}
            >
              Management
            </button>

            <button
              onClick={() => setActiveCategory('advisory')}
              className={`px-6 py-2 border text-base font-semibold font-['Times_New_Roman'] transition ${
                activeCategory === 'advisory'
                  ? 'bg-[#9c0101] text-white border-[#9c0101]'
                  : 'bg-white text-[#001021] border-[#9c0101] hover:bg-[#9c0101] hover:text-white'
              }`}
            >
              Advisory Board
            </button>
          </div>
        </div>
      </>

      <div
        className="relative bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/bg-team-member.png')" }}
      >

        {/* Scrolling content */}
        <div className="relative z-10">
          {activeCategory === 'advisory' && (
            <>
              <AdvisoryBoard />
            </>
          )}

          {activeCategory === 'core' && (
            <>
              <FoundingPartners />
              <LegalCounsel />
              <LegalAssociates />
            </>
          )}

          {activeCategory === 'management' && (
            <>
              <ManagementTeam />
            </>
          )}

        </div>
      </div>

    </div>
  );
}
