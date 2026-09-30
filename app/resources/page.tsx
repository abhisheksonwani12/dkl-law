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

      {/* Featured Section with Sidebar */}
      <div className="flex flex-col lg:flex-row gap-8 p-6 md:p-8 lg:p-12">

        {/* Sidebar */}
        <aside className="shrink-0 w-full lg:w-80">
          <div
            className={`bg-[#9c0101] ${currentBlog?.color} text-white w-full lg:h-full flex flex-col items-center justify-center lg:sticky lg:top-8 p-4 md:p-6 font-[marcellus] text-center`}
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-1 lg:mb-2">{currentBlog?.name}</h2>
            <p className="text-xs lg:text-sm opacity-90 leading-normal">{currentBlog?.description}</p>
          </div>
        </aside>

        {/* Featured Article */}
        {featuredArticle ? (
          <div className="flex-1">
            <Link href={`/blog/${selectedBlog}/article/${featuredArticle.slug}`} className="block">
              <div className="relative h-72 sm:h-80 md:h-[300px] border border-[#9c0101] p-2 overflow-hidden group cursor-pointer">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={featuredArticle.image || '/placeholder.svg'}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                    <p className="text-xs md:text-sm mb-2 md:mb-3 text-gray-200">{featuredArticle.date}</p>
                    <h3 className="text-lg sm:text-xl md:text-3xl leading-tight text-balance">
                      {featuredArticle.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ) : null}
      </div>

      {/* Grid of Other Articles - Full Width */}
      {otherArticles.length > 0 && (
        <div className="px-6 md:px-8 lg:px-12 pb-12 overflow-hidden">
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:pb-0">
            {otherArticles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${selectedBlog}/article/${article.slug}`}
                className="shrink-0 w-[80vw] xs:w-[280px] snap-center md:shrink md:w-auto md:snap-none"
              >
                <div className="relative h-[220px] sm:h-60 md:h-[260px] lg:h-[280px] border border-[#9c0101] p-2 overflow-hidden group cursor-pointer">
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src={article.image || '/placeholder.svg'}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

                    <div className="absolute top-2 left-2 right-2 bottom-2 flex flex-col justify-between text-white p-2">
                      <p className="text-[10px] sm:text-[11px] md:text-xs text-gray-200">{article.date}</p>
                      <h3 className="text-sm sm:text-base md:text-lg leading-tight text-balance line-clamp-3">
                        {article.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
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
