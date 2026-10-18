'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { blogs, getArticlesByCategory } from '@/lib/blogs';

export default function HomePage() {
  
  const [selectedBlog, setSelectedBlog] = useState('legal')
  const currentBlog = blogs.find((blog) => blog.slug === selectedBlog)
  const categoryArticles = getArticlesByCategory(selectedBlog)
  const featuredArticle = categoryArticles[0]
  const otherArticles = categoryArticles.slice(1)

  return (

    <main className="bg-gray-50 min-h-screen">
      
      <div
        className="relative bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/bg-resources.png')" }}
      >

        <div className="flex flex-col items-center gap-1 mt-12 mb-6 " style={{ fontFamily: 'Times New Roman, Times, serif' }}>
          
          {/* Gold divider + title + gold divider */}
          <div className="flex items-center gap-6 w-full justify-center mb-1">
            <div className="h-0.5 w-12 md:w-24 bg-[#9c0101] rounded" />
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#111f2d] font-normal tracking-normal text-center px-2 whitespace-nowrap">
              RESOURCES    
            </h2>
            <div className="h-0.5 w-12 md:w-24 bg-[#9c0101] rounded" />
          </div>
          <div className="uppercase text-[14px] tracking-[0.25em] text-[#9c0101] font-semibold mb-2 text-center mt-2">
              Read Our Latest Insights 
          </div>
        </div>

      {/* Blog Category Navigation */}
      <div className="px-6 md:px-8 lg:px-12 py-6 overflow-hidden">
        <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-none font-[marcellus] snap-x snap-mandatory">
          {blogs.map((blog) => (
            <button
              key={blog.id}
              onClick={() => setSelectedBlog(blog.slug)}
              className={`shrink-0 px-5 py-2.5 font-medium tracking-wide transition-all border border-[#9c0101] snap-center rounded-none text-sm md:text-base ${
                selectedBlog === blog.slug
                  ? 'bg-[#9c0101] text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {blog.name}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Coming Soon State */}
      {selectedBlog === 'legal' && (
        <div className="px-6 md:px-8 lg:px-12 py-12 md:py-20 flex justify-center">
          <div className="w-full max-w-4xl bg-white/95 backdrop-blur-sm border border-[#9c0101]/30 shadow-lg p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#9c0101]" />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-[#9c0101] border border-[#9c0101]/30 bg-[#9c0101]/5 font-serif font-semibold mb-6">
              Legal Insights & Publications
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111f2d] font-normal tracking-wide mb-4" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
              COMING SOON
            </h3>

            {/* Ornamental Divider */}
            <div className="flex items-center justify-center gap-4 my-6">
              <div className="h-[1px] w-12 sm:w-20 bg-[#9c0101]" />
              <span className="text-[#9c0101] text-xs">&#9670;</span>
              <div className="h-[1px] w-12 sm:w-20 bg-[#9c0101]" />
            </div>

            <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-4" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
              Our advocates and practice leads are curating comprehensive legal analyses, commentaries on landmark judicial decisions, and regulatory insights across our core practice areas.
            </p>

            <p className="text-xs sm:text-sm uppercase tracking-widest text-[#9c0101] font-semibold mb-10" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
              Publications will be available shortly
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/practice-areas"
                className="w-full sm:w-auto px-7 py-3 uppercase text-xs md:text-sm font-semibold tracking-widest border border-[#9c0101] text-white bg-[#9c0101] hover:bg-[#7e0000] transition-colors"
                style={{ fontFamily: 'Times New Roman, Times, serif' }}
              >
                Explore Practice Areas
              </Link>
              <Link
                href="/#our-offices"
                className="w-full sm:w-auto px-7 py-3 uppercase text-xs md:text-sm font-semibold tracking-widest border border-[#9c0101] text-[#9c0101] bg-white hover:bg-[#9c0101] hover:text-white transition-colors"
                style={{ fontFamily: 'Times New Roman, Times, serif' }}
              >
                Our Offices
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Outreach Static Gallery Section */}
      {selectedBlog === 'tech' && (
        <div className="px-6 md:px-8 lg:px-12 pb-16 overflow-hidden">
          <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-2 lg:grid-cols-3 md:pb-0">
            
            <div className="bg-white border border-[#9c0101] p-3 shrink-0 w-[80vw] xs:w-[280px] snap-center md:shrink md:w-auto md:snap-none">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=800&h=600&fit=crop"
                  alt="Conference Appearance"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-serif text-[#111f2d]">
                  Legal Conference 2025
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Our team addressing emerging corporate governance challenges at a national legal summit.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#9c0101] p-3 shrink-0 w-[80vw] xs:w-[280px] snap-center md:shrink md:w-auto md:snap-none">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&h=600&fit=crop"
                  alt="Media Interaction"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-serif text-[#111f2d]">
                  Media Interaction
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Discussing regulatory reforms and startup compliance frameworks in a televised panel discussion.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#9c0101] p-3 shrink-0 w-[80vw] xs:w-[280px] snap-center md:shrink md:w-auto md:snap-none">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop"
                  alt="Client Workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-serif text-[#111f2d]">
                  Client Workshop Session
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Conducting a strategic legal compliance workshop for founders and business leaders.
                </p>
              </div>
            </div>

          </div>
        </div>
      )}

      </div>

    </main>
  )
}
