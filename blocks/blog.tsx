'use client';

import Link from 'next/link';

export default function Blog() {
  return (
    <main id="resources" className="bg-white min-h-[500px] mt-20 pb-20">
      <div className="flex flex-col items-center gap-1 mb-6">
        {/* Gold divider + title + gold divider */}
        <div className="flex items-center gap-6 w-full justify-center mb-1">
          <div className="h-0.5 w-12 md:w-24 bg-[#9c0101] rounded" />
          <h2
            className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#9c0101] font-normal tracking-normal text-center px-2 whitespace-nowrap"
            style={{ fontFamily: 'Times New Roman, Times, serif' }}
          >
            RESOURCES
          </h2>
          <div className="h-0.5 w-12 md:w-24 bg-[#9c0101] rounded" />
        </div>
        <div
          className="uppercase text-[14px] tracking-[0.25em] text-[#9c0101] font-semibold mb-2 text-center mt-2"
          style={{ fontFamily: 'Times New Roman, Times, serif' }}
        >
          Read Our Latest Insights
        </div>
      </div>

      {/* Coming Soon Presentation */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-8 flex justify-center">
        <div className="w-full bg-[#fdfbf9] border border-[#9c0101]/30 shadow-md p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#9c0101]" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-[#9c0101] border border-[#9c0101]/30 bg-[#9c0101]/5 font-serif font-semibold mb-6">
            Articles and Publications
          </div>

          <h3
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111f2d] font-normal tracking-wide mb-4"
            style={{ fontFamily: 'Times New Roman, Times, serif' }}
          >
            COMING SOON
          </h3>

          {/* Ornamental Divider */}
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="h-[1px] w-12 sm:w-20 bg-[#9c0101]" />
            <span className="text-[#9c0101] text-xs">&#9670;</span>
            <div className="h-[1px] w-12 sm:w-20 bg-[#9c0101]" />
          </div>

          <p
            className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-4"
            style={{ fontFamily: 'Times New Roman, Times, serif' }}
          >
            Our advocates and practice leads are curating comprehensive legal analyses, commentaries on landmark judicial decisions, and regulatory insights across our core practice areas.
          </p>

          <p
            className="text-xs sm:text-sm uppercase tracking-widest text-[#9c0101] font-semibold mb-8"
            style={{ fontFamily: 'Times New Roman, Times, serif' }}
          >
            Thought leadership publications will be available shortly
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/resources"
              className="w-full sm:w-auto px-7 py-3 uppercase text-xs md:text-sm font-semibold tracking-widest border border-[#9c0101] text-white bg-[#9c0101] hover:bg-[#7e0000] transition-colors"
              style={{ fontFamily: 'Times New Roman, Times, serif' }}
            >
              View Resources
            </Link>
            <Link
              href="/practice-areas"
              className="w-full sm:w-auto px-7 py-3 uppercase text-xs md:text-sm font-semibold tracking-widest border border-[#9c0101] text-[#9c0101] bg-white hover:bg-[#9c0101] hover:text-white transition-colors"
              style={{ fontFamily: 'Times New Roman, Times, serif' }}
            >
              Explore Practice Areas
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
