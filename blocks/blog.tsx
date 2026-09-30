'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { blogs, getArticlesByCategory } from '@/lib/blogs'


export default function Blog() {
  const [selectedBlog] = useState('legal')
  const currentBlog = blogs.find((blog) => blog.slug === selectedBlog)
  const categoryArticles = getArticlesByCategory(selectedBlog)
  const featuredArticle = categoryArticles[0]
  const otherArticles = categoryArticles.slice(1,4)

  return (
    <main id='resources' className="bg-white min-h-screen mt-20">

      <div className="flex flex-col items-center gap-1 mb-2">

          {/* Gold divider + title + gold divider */}
          <div className="flex items-center gap-6 w-full justify-center mb-1">
            <div className="h-0.5 w-12 md:w-24 bg-[#9c0101] rounded" />
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#9c0101] font-normal tracking-normal text-center px-2 whitespace-nowrap" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                RESOURCES    
            </h2>
            <div className="h-0.5 w-12 md:w-24 bg-[#9c0101] rounded" />
          </div>
          <div className="uppercase text-[14px] tracking-[0.25em] text-[#9c0101] font-semibold mb-2 text-center mt-2" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
            Read Our Latest Insights
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
          <div className="flex justify-center mt-8">
            <Link
              href={`/resources`}
              className="px-6 py-3 uppercase font-medium font-['Times_New_Roman'] border border-[#9c0101] text-[#9c0101] bg-white transition-all hover:bg-[#9c0101] hover:text-white"
            >
              Read More
            </Link>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!featuredArticle && (
        <div className="px-6 md:px-8 lg:px-12 py-16 text-center">
          <p className="text-gray-500 text-lg">No articles found in this category yet.</p>
        </div>
      )}
      </main>
  )
}
