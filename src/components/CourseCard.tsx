import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { CourseSummary } from "@/lib/wordpress"

/** Drops the "Faculty of "/"College of " prefix so the tag reads as a tight noun phrase. */
function shortFacultyName(name: string) {
  return name.replace(/^(Faculty of|College of)\s+/i, "")
}

function CourseCard({ course }: { course: CourseSummary }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group flex flex-col gap-6 rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy/30 hover:shadow-lg sm:flex-row sm:items-center sm:p-7"
    >
      <div className="order-2 min-w-0 flex-1 sm:order-1">
        <h3 className="[font-family:var(--font-bitter)] text-[24px] font-semibold leading-[34px] text-navy">
          {course.title}
        </h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {course.facultyName && (
            <span className="rounded-full border border-gray-200 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-navy">
              {shortFacultyName(course.facultyName)}
            </span>
          )}
          <span className="rounded-full border border-gray-200 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
            {course.level === "undergraduate" ? "Undergraduate" : "Postgraduate"}
          </span>
        </div>

        <p className="mt-4 line-clamp-3 [font-family:var(--font-inter)] text-[16px] font-normal leading-[28px] text-gray-500">
          {course.description}
        </p>

        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
          Read More
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>

      <div className="relative order-1 h-56 w-full flex-shrink-0 overflow-hidden rounded-lg sm:order-2 sm:h-48 sm:w-72">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(min-width: 640px) 288px, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </Link>
  )
}

export default CourseCard
