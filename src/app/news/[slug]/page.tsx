import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import Reveal from "@/components/Reveal"
import ShareButtons from "@/components/ShareButtons"
import { getPostBySlug, getPosts, WP_CATEGORY } from "@/lib/wordpress"

const proseClasses =
  "space-y-3 [&_p]:m-0 font-normal text-[20px] leading-[32px] text-[#7A7A7A] [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-navy [&_a]:text-navy [&_a]:underline [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-6 [&_img]:my-6 [&_img]:rounded-lg [&_strong]:font-bold [&_strong]:text-navy [&_blockquote]:border-l-4 [&_blockquote]:border-gold [&_blockquote]:pl-4 [&_blockquote]:italic"

export async function generateStaticParams() {
  const posts = await getPosts(WP_CATEGORY.news)
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug, WP_CATEGORY.news)
  if (!post) return {}
  return {
    title: post.title,
    description: post.seoDescription,
    alternates: { canonical: `/news/${slug}` },
    openGraph: { type: "article", images: [{ url: post.ogImage }] },
  }
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug, WP_CATEGORY.news)
  if (!post) notFound()

  return (
    <div>
      <div className="relative flex min-h-[380px] items-center overflow-hidden bg-navy py-16 md:min-h-[460px]">
        <Image src={post.image} alt="" fill sizes="100vw" priority className="object-cover" />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
          <Reveal>
            <p className="mb-3 text-sm text-gray-300">
              <Link href="/" className="hover:text-gold-light">
                Home
              </Link>{" "}
              <span className="mx-1">›</span>{" "}
              <Link href="/news" className="hover:text-gold-light">
                News & Events
              </Link>
            </p>
            <h1 className="font-extrabold text-[34px] leading-[40px] text-white md:text-[46px] md:leading-[52px]">
              {post.title}
            </h1>
            <p className="mt-4 text-base font-bold uppercase tracking-wide text-gray-200">
              {post.date}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-16">
        <Reveal>
          <ShareButtons url={`https://nileuniversity.edu.ng/news/${slug}`} title={post.title} />
          <div className={`${proseClasses} mt-8`} dangerouslySetInnerHTML={{ __html: post.content }} />
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-gray-200 pt-8">
          <Link href="/news" className="font-semibold text-navy underline hover:text-navy-light">
            ← Back to News & Events
          </Link>
          <ShareButtons url={`https://nileuniversity.edu.ng/news/${slug}`} title={post.title} />
        </div>
      </div>
    </div>
  )
}
