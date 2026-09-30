"use client";
import TeamMemberCard from '@/components/team-member-card';
import { useRef } from "react";
import { advocatePartners } from "@/lib/team-data";

export default function TeamSection() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -carouselRef.current.clientWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: carouselRef.current.clientWidth, behavior: "smooth" });
    }
  };
  return (
    
    <section
      id='our-team'
      className="py-10 md:py-16 px-3 md:px-4 text-[#9c0101] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg-our-team.png')", }}
    >
        <div className="flex flex-col items-center gap-1 mb-12">
          <div className="flex items-center gap-6 w-full justify-center mb-1">
              <div className="h-0.5 w-12 md:w-24 bg-[#9c0101] rounded" />
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#9c0101] font-normal tracking-normal text-center px-2 whitespace-nowrap">
                OUR PEOPLE
              </h2>
              <div className="h-0.5 w-12 md:w-24 bg-[#9c0101] rounded" />
          </div>

              {/* EXPLORE MORE CTA */}
              <div className="uppercase text-[14px] tracking-[0.25em] text-[#9c0101] font-semibold mb-1 text-center mt-2" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                Excellence Driven by Our People
              </div>

            </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">

    {/* Partners - Carousel on Mobile, Grid on Desktop */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scroll-smooth pb-4 md:pb-0"
          >
            {advocatePartners.slice(0, 3).map((partner) => (
              <div
                key={partner.id}
                className="min-w-full md:min-w-0 md:w-full snap-center shrink-0 flex justify-center"
              >
                <TeamMemberCard {...partner} />
              </div>
            ))}
          </div>
          {/* Mobile Carousel Arrows */}
          <button
            onClick={scrollLeft}
            className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur border border-[#9c0101] text-[#9c0101] px-3 py-2 rounded-full shadow"
          >
            ‹
          </button>

          <button
            onClick={scrollRight}
            className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur border border-[#9c0101] text-[#9c0101] px-3 py-2 rounded-full shadow"
          >
            ›
          </button>
        </div>
      </div>

       {/* EXPLORE MORE CTA */}
        <div className="flex justify-center mt-8"
        style={{ fontFamily: 'Times New Roman, Times, serif' }}>
          <a
            href="/our-team"
            className="inline-block px-8 py-3 bg-white text-[#9c0101] border border-[#9c0101] hover:bg-[#9c0101] hover:text-white transition rounded font-medium uppercase"
          >
            Meet the whole team
          </a>
        </div>
    </section>

  );
}
