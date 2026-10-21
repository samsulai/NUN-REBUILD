import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Reveal from "@/components/Reveal"
import { getPostsPage, NEWS_PAGE_SIZE, WP_CATEGORY } from "@/lib/wordpress"

type SearchParams = Promise<{ page?: string }>

function parsePage(raw: string | undefined) {
  const n = Number(raw)
  return Number.isInteger(n) && n >= 1 ? n : 1
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams
}): Promise<Metadata> {
  const { page } = await searchParams
  const current = Number(page) || 1
  return {
    alternates: { canonical: current > 1 ? `/news?page=${current}` : "/news" },
    title: current > 1 ? `News & Events – Page ${current}` : "News & Events",
    description: "The latest news, events, and announcements from Nile University of Nigeria.",
  }
}

async function NewsEvents({ searchParams }: { searchParams: SearchParams }) {
  const { page: rawPage } = await searchParams
  const requestedPage = parsePage(rawPage)

  let { posts, totalPages } = await getPostsPage(WP_CATEGORY.news, requestedPage, NEWS_PAGE_SIZE)
  let page = requestedPage

  // Requested page is out of range (e.g. a stale/typed-in ?page=999) — fall back to page 1.
  if (posts.length === 0 && requestedPage !== 1) {
    page = 1
    ;({ posts, totalPages } = await getPostsPage(WP_CATEGORY.news, 1, NEWS_PAGE_SIZE))
  }

  const featured = page === 1 ? posts[0] : undefined
  const rest = page === 1 ? posts.slice(1) : posts

  if (posts.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10">
        <p className="text-gray-500">No news articles available right now.</p>
      </div>
    )
  }

  return (
    <div>
      <div className="relative flex min-h-[320px] items-center overflow-hidden bg-navy py-12 md:min-h-[380px]">
        <Image src="/uni-partners.avif" alt="" fill sizes="100vw" priority className="object-cover" />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          <Reveal>
            <h1 className="font-extrabold text-[40px] leading-[44px] text-white md:text-[55px] md:leading-[60px]">
              Nile University's News and Events
            </h1>
            <p className="mt-4 max-w-3xl font-normal text-[19px] leading-[30px] text-gray-100">
              Learn about the latest happenings and the many on and off-campus
              activities that Nile's staff and students participate in.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
        {featured && (
          <Reveal>
            <article className="grid gap-8 md:grid-cols-[3fr_2fr] md:gap-12">
              <Link
                href={`/news/${featured.slug}`}
                className="group relative block h-full max-h-[520px] min-h-[320px] overflow-hidden"
              >
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-col justify-center">
                <p className="mb-3 italic font-medium text-[15px] leading-[28px] uppercase tracking-widest text-gold">
                  News
                </p>
                <h2 className="mb-5 font-bold uppercase text-[28px] leading-[36px] text-navy">
                  <Link href={`/news/${featured.slug}`} className="transition-colors hover:opacity-80">
                    {featured.title}
                  </Link>
                </h2>
                <p className="mb-8 line-clamp-4 text-[19px] leading-[30px] text-[#333435]">
                  {featured.excerpt}
                </p>
                <p className="text-base font-bold uppercase tracking-wide text-gray-900">
                  {featured.date}
                </p>
              </div>
            </article>
          </Reveal>
        )}

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 3) * 100}>
              <article className="group">
                <Link href={`/news/${item.slug}`} className="relative block aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <p className="mb-2 mt-4 italic font-medium text-[15px] leading-[28px] uppercase tracking-widest text-gold">
                  News
                </p>
                <h3 className="font-medium text-[19px] leading-[30px] text-navy">
                  <Link href={`/news/${item.slug}`} className="hover:underline">
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-2 font-bold text-[17px] leading-[32px] uppercase tracking-wide text-gray-900">
                  {item.date}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {totalPages > 1 && (
          <nav aria-label="News pagination" className="mt-16 flex flex-wrap items-center justify-center gap-2">
            <Link
              href={page > 1 ? `/news?page=${page - 1}` : "/news"}
              aria-disabled={page === 1}
              className={`rounded border px-4 py-2 text-sm transition-colors ${
                page === 1
                  ? "pointer-events-none border-gray-200 text-gray-300"
                  : "border-gray-200 text-gray-600 hover:border-navy hover:text-navy"
              }`}
            >
              ‹ Previous
            </Link>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={p === 1 ? "/news" : `/news?page=${p}`}
                className={`rounded border px-3.5 py-2 text-sm transition-colors ${
                  p === page
                    ? "border-navy font-semibold text-navy"
                    : "border-gray-200 text-gray-600 hover:border-navy hover:text-navy"
                }`}
              >
                {p}
              </Link>
            ))}
            <Link
              href={`/news?page=${page + 1}`}
              aria-disabled={page === totalPages}
              className={`rounded border px-4 py-2 text-sm transition-colors ${
                page === totalPages
                  ? "pointer-events-none border-gray-200 text-gray-300"
                  : "border-gray-200 text-gray-600 hover:border-navy hover:text-navy"
              }`}
            >
              Next ›
            </Link>
          </nav>
        )}
      </div>
    </div>
  )
}

export default NewsEvents
