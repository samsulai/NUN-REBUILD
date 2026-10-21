import type { Metadata } from "next"
import Link from "next/link"
import Reveal from "@/components/Reveal"
import { courseSearchEntries, sitePages, type SearchEntry } from "@/data/siteIndex"
import { getAllCourses } from "@/lib/wordpress"
import Image from "next/image"

export const metadata: Metadata = {
  alternates: { canonical: "/sitemap" },
  title: "Sitemap",
  description: "A full overview of pages and resources available on the Nile University of Nigeria website.",
}

function LinkList({ items }: { items: SearchEntry[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => {
        const isExternal = item.to.startsWith("http")
        return (
          <li key={item.label} className="flex items-start gap-3">
            <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 bg-gold" />
            {isExternal ? (
              <a
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[19px] leading-[30px] text-[#333435] hover:text-navy hover:underline"
              >
                {item.label}
              </a>
            ) : (
              <Link
                href={item.to}
                className="text-[19px] leading-[30px] text-[#333435] hover:text-navy hover:underline"
              >
                {item.label}
              </Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}

async function Sitemap() {
  const courses = await getAllCourses()
  const courseEntries = courseSearchEntries(courses)

  return (
    <div>
      <div className="relative flex min-h-[320px] items-center overflow-hidden bg-navy py-14 md:min-h-[380px]">
        <Image
          src="/Rising Sun.avif"
          alt=""
          fill
          sizes="100vw" priority
          className="pointer-events-none object-contain object-right opacity-30"
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          <Reveal>
            <h1 className="font-extrabold text-[40px] leading-[44px] text-white md:text-[55px] md:leading-[60px]">
              Sitemap
            </h1>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
        <Reveal>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-[34px] font-bold text-navy">Academic Programmes</h2>
              <LinkList items={courseEntries} />
            </div>
            <div>
              <h2 className="mb-6 text-[34px] font-bold text-navy">Site Pages</h2>
              <LinkList items={sitePages} />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Sitemap
