'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getArticleBySlug, getBlogBySlug, getArticlesByCategory } from '@/lib/blogs';
import { useParams } from 'next/navigation';

export default function ArticlePage() {
  const params = useParams()
  const category = params.category as string
  const slug = params.slug as string

  const blog = getBlogBySlug(category)
  const article = getArticleBySlug(slug)

  if (category === 'legal') {
    return (
      <main className="bg-white min-h-screen py-20 px-6 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-[#fdfbf9] border border-[#9c0101]/30 p-8 sm:p-12 text-center shadow-md relative">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#9c0101]" />
          <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs uppercase tracking-[0.25em] text-[#9c0101] border border-[#9c0101]/30 bg-[#9c0101]/5 font-serif font-semibold mb-6">
            Articles & Publications
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#111f2d] mb-4" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
            COMING SOON
          </h1>
          <p className="text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
            This publication is currently in editorial preparation and will be available shortly.
          </p>
          <Link
            href="/resources"
            className="inline-block px-7 py-3 uppercase text-xs font-semibold tracking-widest border border-[#9c0101] text-white bg-[#9c0101] hover:bg-[#7e0000] transition-colors"
          >
            Back to Resources
          </Link>
        </div>
      </main>
    );
  }

  if (!article || !blog) {
    return (
      <main className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article not found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    
    <main className="bg-white min-h-screen">
      
      {/* Header */}
      <header className="sticky top-0 bg-white z-10 md:mt-10 border-b border-gray-100">
        <div className="max-w-4xl mx-auto md:ml-[7%] px-4 md:px-8 py-3">
          <Link
            href="/resources"
            className="text-sm text-gray-600 hover:text-gray-900 mb-4 inline-block"
          >
            ← Back to {blog.name}
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800 mb-3 md:mb-4 leading-snug">
            {article.title}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs sm:text-sm text-gray-600">
            <span>
              POSTED ON <span className="font-bold">{article.date.toUpperCase()}</span>
            </span>
            <span>
              BY  <span className="font-bold">{article.author.toUpperCase()}</span>
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6 md:gap-8">
        <div>
          
          {/* Hero Image */}
          <div className="relative h-56 sm:h-72 md:h-[500px] overflow-hidden mb-6 md:mb-8">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Article Content */}
          <article className="max-w-4xl px-0 md:px-0 pb-16">
            <div className="prose prose-base sm:prose-lg max-w-none text-gray-700 leading-relaxed">
              <div className="whitespace-pre-line">{article.content}</div>
            </div>
          </article>
        </div>

        <aside className="space-y-4 mt-8 lg:mt-0">
          <h3 className="text-lg font-semibold text-gray-900 border-b border-[#9c0101] pb-2">
            Next Reads
          </h3>

          {getArticlesByCategory(category)
            .filter(a => a.slug !== slug)
            .slice(0, 4)
            .map(article => (
              <Link
                key={article.id}
                href={`/blog/${category}/article/${article.slug}`}
                className="flex gap-3 border border-[#9c0101] p-2 sm:p-3 hover:bg-gray-50 transition"
              >
                <div className="relative w-20 h-16 shrink-0">
                  <Image
                    src={article.image || '/placeholder.svg'}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-gray-900 leading-snug line-clamp-3">
                  {article.title}
                </p>
              </Link>
            ))}
        </aside>
      </div>
    </main>

  );
}
