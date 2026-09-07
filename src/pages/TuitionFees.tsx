import { useMemo, useState } from "react"
import { ChevronDown, Search } from "lucide-react"
import { Link } from "react-router-dom"
import Reveal from "../components/Reveal"
import { tuitionFees, tuitionNotes, type TuitionCourse } from "../data/tuitionFees"

const body = "font-normal text-[17px] leading-[25.5px] text-[#333435]"

function CourseRow({ course }: { course: TuitionCourse }) {
  return (
    <div className="grid grid-cols-1 gap-1 border-b border-gray-100 py-4 last:border-0 sm:grid-cols-[1.6fr_1fr_1fr_1fr] sm:items-center sm:gap-4">
      <p className="font-semibold text-navy sm:font-normal sm:text-[16px] sm:text-gray-800">
        {course.course}
      </p>
      <p className="text-sm text-gray-500 sm:text-[15px]">
        <span className="sm:hidden">Duration: </span>
        {course.duration}
      </p>
      <p className="text-sm text-gray-700 sm:text-right sm:text-[15px]">
        <span className="sm:hidden">Per semester: </span>
        <span className="font-semibold text-navy sm:font-normal">{course.perSemester}</span>
      </p>
      <p className="text-sm text-gray-700 sm:text-right sm:text-[15px]">
        <span className="sm:hidden">Per session: </span>
        <span className="font-bold text-navy">{course.perSession}</span>
      </p>
    </div>
  )
}

function LevelAccordion({
  level,
  open,
  onToggle,
}: {
  level: (typeof tuitionFees)[number]
  open: boolean
  onToggle: () => void
}) {
  const [query, setQuery] = useState("")
  const [faculty, setFaculty] = useState("All faculties")

  const facultyNames = ["All faculties", ...level.faculties.map((f) => f.faculty)]

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return level.faculties
      .filter((f) => faculty === "All faculties" || f.faculty === faculty)
      .map((f) => ({
        ...f,
        courses: f.courses.filter((c) => !q || c.course.toLowerCase().includes(q)),
      }))
      .filter((f) => f.courses.length > 0)
  }, [level.faculties, query, faculty])

  return (
    <div className="border-b border-navy/20">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between bg-[#eef2fb] px-6 py-5 text-left text-xl font-bold text-navy"
      >
        {level.level}
        <ChevronDown
          className={`h-5 w-5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && level.faculties.length === 0 && (
        <div className="px-6 py-8">
          <p className={body}>
            Postgraduate tuition fees for the 2026/2027 session will be published
            here shortly. In the meantime,{" "}
            <Link to="/contact" className="font-semibold text-navy underline">
              contact admissions
            </Link>{" "}
            for a current fee schedule.
          </p>
        </div>
      )}

      {open && level.faculties.length > 0 && (
        <div className="px-2 py-6 sm:px-6">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row">
            <div className="flex items-center gap-2 rounded border border-gray-300 px-3 py-2 sm:flex-1">
              <Search className="h-4 w-4 flex-shrink-0 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a course…"
                className="w-full text-sm text-gray-700 outline-none placeholder:text-gray-400"
              />
            </div>
            <select
              value={faculty}
              onChange={(e) => setFaculty(e.target.value)}
              className="rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 outline-none"
            >
              {facultyNames.map((name) => (
                <option key={name}>{name}</option>
              ))}
            </select>
          </div>

          <div className="hidden grid-cols-[1.6fr_1fr_1fr_1fr] gap-4 border-b-2 border-navy pb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:grid">
            <span>Course</span>
            <span>Duration</span>
            <span className="text-right">Fee per semester</span>
            <span className="text-right">Fee per session</span>
          </div>

          {filtered.length === 0 ? (
            <p className="py-6 text-sm text-gray-500">No courses match your search.</p>
          ) : (
            filtered.map((f) => (
              <div key={f.faculty} className="mt-6 first:mt-4">
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-navy">
                  {f.faculty}
                </h3>
                <div className="rounded-lg border border-gray-200 px-4 sm:border-0 sm:px-0">
                  {f.courses.map((c) => (
                    <CourseRow key={c.course} course={c} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}

function TuitionFees() {
  const [openLevel, setOpenLevel] = useState(-1)

  return (
    <div>
      <div className="relative flex h-[300px] items-center overflow-hidden bg-navy md:h-[340px]">
        <img
          src="/Rising%20Sun.avif"
          alt=""
          className="pointer-events-none absolute inset-y-0 right-0 h-full w-auto max-w-none opacity-30"
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          <Reveal>
            <h1 className="font-extrabold text-[40px] leading-[44px] text-white md:text-[55px] md:leading-[60px]">
              Tuition Fees
            </h1>
            <p className="mt-3 font-normal text-[17px] leading-[25.5px] text-gray-100">
              Our tuition fees for the 2026/2027 academic session.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-16">
        <Reveal>
          <div className="border border-navy/20">
            {tuitionFees.map((level, i) => (
              <LevelAccordion
                key={level.level}
                level={level}
                open={openLevel === i}
                onToggle={() => setOpenLevel(openLevel === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 rounded-lg bg-[#eef2fb] p-6">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-navy">
              Please note
            </h2>
            <ul className="space-y-2">
              {tuitionNotes.map((note) => (
                <li key={note.slice(0, 20)} className={`flex gap-3 ${body}`}>
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-navy" />
                  {note}
                </li>
              ))}
              <li className={`flex gap-3 ${body}`}>
                <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-navy" />
                Scholarships and discounts may reduce these fees —{" "}
                <Link to="/scholarships-discounts" className="font-semibold text-navy underline">
                  see what you may qualify for
                </Link>
                .
              </li>
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="bg-navy px-6 py-16 text-center md:px-10 md:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Questions about fees or payment?
            </h2>
            <p className="mt-4 font-normal text-[17px] leading-[25.5px] text-gray-200">
              Our admissions team can walk you through fees, instalment options,
              and the scholarships you may be eligible for.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block border-l-[6px] border-gold bg-white px-6 py-3 text-base font-semibold text-navy transition-colors hover:bg-sand"
            >
              Contact Admissions
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default TuitionFees
