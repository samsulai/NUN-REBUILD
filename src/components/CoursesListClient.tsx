"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import CourseCard from "@/components/CourseCard"
import Reveal from "@/components/Reveal"
import type { CourseLevel, CourseSummary } from "@/lib/wordpress"

const PAGE_SIZE = 10

const copy: Record<
  CourseLevel,
  { title: string; crumb: string; label: string; description: string }
> = {
  undergraduate: {
    title: "Undergraduate Courses",
    crumb: "Study & admissions › Undergraduate courses",
    label: "undergraduate",
    description:
      "With access to Nile University's extensive collections and resources, our undergraduates have discovered new species, patented products, and co-authored original research.",
  },
  postgraduate: {
    title: "Postgraduate Courses",
    crumb: "Study & admissions › Postgraduate courses",
    label: "postgraduate",
    description:
      "Nile University's School of Postgraduate Studies offers advanced degrees for professionals and researchers looking to deepen their expertise, build on faculty-led research, and take the next step in their careers.",
  },
}

function CoursesListClient({ level, courses }: { level: CourseLevel; courses: CourseSummary[] }) {
  const [query, setQuery] = useState("")
  const [selectedFaculties, setSelectedFaculties] = useState<string[]>([])
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const { title, crumb, label, description } = copy[level]

  const faculties = useMemo(
    () =>
      Array.from(new Set(courses.map((c) => c.facultyName).filter(Boolean))).sort((a, b) =>
        a.localeCompare(b)
      ),
    [courses]
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return courses.filter((course) => {
      const matchesQuery = !q || course.title.toLowerCase().includes(q)
      const matchesFaculty =
        selectedFaculties.length === 0 || selectedFaculties.includes(course.facultyName)
      return matchesQuery && matchesFaculty
    })
  }, [courses, query, selectedFaculties])

  const isFiltering = query.trim().length > 0 || selectedFaculties.length > 0
  const visible = isFiltering ? filtered : filtered.slice(0, visibleCount)
  const hasMore = !isFiltering && visibleCount < filtered.length

  function toggleFaculty(name: string) {
    setSelectedFaculties((prev) =>
      prev.includes(name) ? prev.filter((f) => f !== name) : [...prev, name]
    )
    setVisibleCount(PAGE_SIZE)
  }

  function resetFilters() {
    setSelectedFaculties([])
    setVisibleCount(PAGE_SIZE)
  }

  return (
    <div>
      <div className="relative flex min-h-[420px] items-center overflow-hidden bg-navy py-14 md:min-h-[480px]">
        <Image
          src="/Rising Sun.avif"
          alt=""
          fill
          sizes="100vw" priority
          className="pointer-events-none object-contain object-right opacity-30"
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="mb-3 text-sm text-gray-300">
              <Link href="/" className="hover:text-gold-light">
                Home
              </Link>{" "}
              <span className="mx-1">›</span> {crumb}
            </p>
            <h1 className="mb-3 text-[55px] not-italic font-extrabold leading-[60px] text-white">
              {title}
            </h1>
            <p className="max-w-2xl text-[17px] not-italic font-normal leading-[30px] text-white">
              {description}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-gray-200 p-5">
              <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
                <h2 className="font-semibold text-navy">Filter By</h2>
                {selectedFaculties.length > 0 && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="text-sm font-medium text-gold hover:text-navy"
                  >
                    Reset
                  </button>
                )}
              </div>
              <p className="mb-3 text-sm font-semibold text-gray-700">Faculties</p>
              <div className="space-y-3">
                {faculties.map((f) => {
                  const checked = selectedFaculties.includes(f)
                  return (
                    <label
                      key={f}
                      className="flex cursor-pointer items-start gap-2.5 hover:text-navy"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleFaculty(f)}
                        className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-gray-300 text-navy focus:ring-navy"
                      />
                      <span
                        className={`[font-family:var(--font-inter)] text-[16px] font-normal leading-[22.4px] ${
                          checked ? "font-semibold text-navy" : "text-[#4C4C4C]"
                        }`}
                      >
                        {f}
                      </span>
                    </label>
                  )
                })}
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-gray-500">
                Total {filtered.length} result{filtered.length === 1 ? "" : "s"} found
              </p>
              <div className="relative w-full max-w-xs">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={`Search ${label} courses`}
                  className="w-full rounded border border-gray-300 py-2.5 pl-9 pr-4 text-sm text-gray-700 outline-none focus:border-navy"
                />
              </div>
            </div>

            {visible.length === 0 ? (
              <p className="text-base text-gray-500">No courses match your search.</p>
            ) : (
              <div className="space-y-6">
                {visible.map((course, i) => (
                  <Reveal key={course.slug} delay={(i % PAGE_SIZE) * 60}>
                    <CourseCard course={course} />
                  </Reveal>
                ))}
              </div>
            )}

            {hasMore && (
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => setVisibleCount(filtered.length)}
                  className="rounded border border-gray-300 px-6 py-2.5 text-base font-medium text-gray-700 transition-colors hover:border-navy hover:text-navy"
                >
                  Load more...
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesListClient
