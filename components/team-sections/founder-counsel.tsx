import { useRef } from 'react';
import TeamMemberCard from '@/components/team-member-card';
import { advocatePartners } from '@/lib/team-data';

export default function FoundingPartners() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  return (
    <section className="py-16 px-4  text-[#9c0101]">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="mb-12">
          {/* <div className="w-12 h-1 bg-[#bda47c] mb-4"></div> */}
          <h2 className="text-3xl lg:text-4xl font-semibold font-['Times_New_Roman']">PRINCIPAL COUNSEL</h2>
          <div className="w-12 h-0.5 bg-[#9c0101] mt-4"></div>
        </div>

        {/* Mobile Carousel / Desktop Grid */}
        <div className="relative">
          
          {advocatePartners.length > 1 && (
            <>
              {/* Left Arrow - Mobile Only */}
              <button
                onClick={scrollLeft}
                className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#9c0101] text-[#9c0101] w-8 h-8 flex items-center justify-center rounded-full shadow"
              >
                ‹
              </button>

              {/* Right Arrow - Mobile Only */}
              <button
                onClick={scrollRight}
                className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#9c0101] text-[#9c0101] w-8 h-8 flex items-center justify-center rounded-full shadow"
              >
                ›
              </button>
            </>
          )}

          <div
            ref={scrollRef}
            className="flex justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {advocatePartners.slice(0, 1).map((partner) => (
              <div
                key={partner.id}
                className="flex justify-center md:ml-[-25%]"
              >
                <TeamMemberCard {...partner} />
              </div>
            ))}
          </div>
        </div>

        {advocatePartners.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#9c0101]/80">No partners available</p>
          </div>
        )}
      </div>
    </section>
  );
}
