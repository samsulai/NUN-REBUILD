import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import CourseCard from "../components/CourseCard"
import Reveal from "../components/Reveal"
import { undergraduatePrograms, postgraduatePrograms, type Level } from "../data/courses"

const PAGE_SIZE = 12

const copy: Record<
  Level,
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

function CoursesList({ level }: { level: Level }) {
  const [query, setQuery] = useState("")
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const programs = level === "undergraduate" ? undergraduatePrograms : postgraduatePrograms
  const { title, crumb, label, description } = copy[level]

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return programs
    return programs.filter((course) => course.name.toLowerCase().includes(q))
  }, [programs, query])

  const isSearching = query.trim().length > 0
  const visible = isSearching ? filtered : filtered.slice(0, visibleCount)
  const hasMore = !isSearching && visibleCount < filtered.length

  return (
    <div>
      <div className="relative flex min-h-[420px] items-center overflow-hidden bg-navy py-14 md:min-h-[480px]">
        <img
          src="/Rising%20Sun.avif"
          alt=""
          className="pointer-events-none absolute inset-y-0 right-0 h-full w-auto max-w-none opacity-30"
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="mb-3 text-sm text-gray-300">
              <Link to="/" className="hover:text-gold-light">
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
        <p className="mb-3 text-base text-gray-600">
          List of {label} courses available at Nile University:
        </p>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search for ${label} course`}
          className="mb-8 w-full max-w-sm rounded border border-gray-300 px-4 py-3 text-base text-gray-700 outline-none focus:border-navy md:w-80"
        />

        {visible.length === 0 ? (
          <p className="text-base text-gray-500">No courses match your search.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
  )
}

export default CoursesList
