"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import PhotoHero from "@/components/PhotoHero"
import Reveal from "@/components/Reveal"
import type { Post } from "@/lib/wordpress"

const PAGE_SIZE = 9

function BlogClient({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)

  const featured = posts[0]
  const isFiltering = query.trim().length > 0

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return posts
    return posts.filter((post) => post.title.toLowerCase().includes(q))
  }, [query, posts])

  const gridPosts = isFiltering ? filtered : posts.filter((post) => post.slug !== featured?.slug)
  const totalPages = Math.max(1, Math.ceil(gridPosts.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const visiblePosts = gridPosts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  )

  function updateQuery(next: string) {
    setQuery(next)
    setPage(1)
  }

  return (
    <div>
      <PhotoHero image="/kdqcmr9vp8hfuf.jpg" title="Nile University Blog" />

      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="mb-10 flex flex-col gap-4 border-b border-gray-100 pb-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 rounded border border-gray-300 px-4 py-2.5 md:min-w-72">
            <Search className="h-4 w-4 flex-shrink-0 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => updateQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        {featured && !isFiltering && (
          <Reveal>
            <p className="mb-4 text-sm font-medium text-gray-500">Featured post</p>
            <div className="mb-12 grid overflow-hidden rounded-lg border border-gray-200 md:grid-cols-2">
              <div className="relative h-64 md:h-full">
                <Image src={featured.image} alt={featured.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col justify-center p-8">
                <h2 className="mb-3 text-2xl font-semibold leading-snug text-navy">
                  {featured.title}
                </h2>
                <p className="mb-4 text-[19px] leading-[30px] text-gray-500">
                  {featured.excerpt}
                </p>
                <p className="mb-5 text-sm text-gray-400">
                  {featured.author} &nbsp;|&nbsp; {featured.date}
                </p>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="w-fit rounded border border-navy px-5 py-2 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
                >
                  Read more
                </Link>
              </div>
            </div>
          </Reveal>
        )}

        <p className="mb-6 text-sm font-medium text-gray-500">
          {isFiltering ? "Search results" : "Latest articles"}
        </p>

        {visiblePosts.length === 0 ? (
          <p className="text-base text-gray-500">No articles match your search.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % PAGE_SIZE) * 60} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-4 line-clamp-2 text-xl font-semibold leading-snug text-gray-900">
                      {post.title}
                    </h3>
                    <p className="mt-auto border-t border-gray-100 pt-3 text-sm text-gold">
                      {post.author} &nbsp;|&nbsp; {post.date}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="rounded border border-gray-200 px-4 py-2 text-sm text-gray-600 transition-colors hover:border-navy hover:text-navy disabled:cursor-not-allowed disabled:opacity-40"
            >
              ‹ Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`rounded border px-3.5 py-2 text-sm transition-colors ${
                  p === currentPage
                    ? "border-navy font-semibold text-navy"
                    : "border-gray-200 text-gray-600 hover:border-navy hover:text-navy"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="rounded border border-gray-200 px-4 py-2 text-sm text-gray-600 transition-colors hover:border-navy hover:text-navy disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next ›
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogClient
