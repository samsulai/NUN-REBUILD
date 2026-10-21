import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import Accordion from "@/components/Accordion"
import Reveal from "@/components/Reveal"
import { getAllCourses, getCourseBySlug, stripHtml } from "@/lib/wordpress"

const proseClasses =
  "space-y-3 [&_p]:m-0 font-normal text-[20px] leading-[32px] text-[#7A7A7A] [&_h1]:mb-3 [&_h1]:mt-8 [&_h1]:text-xl [&_h1]:font-semibold [&_h1]:text-navy [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-navy [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-navy [&_a]:text-navy [&_a]:underline [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-6 [&_strong]:font-semibold [&_strong]:text-navy"

export async function generateStaticParams() {
  const courses = await getAllCourses()
  return courses.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const course = await getCourseBySlug(slug)
  if (!course) return {}
  return {
    title: course.title,
    description: `Explore ${course.title} at Nile University of Nigeria: programme details, fees, duration, and career outcomes.`,
    alternates: { canonical: `/courses/${slug}` },
  }
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const course = await getCourseBySlug(slug)
  if (!course) notFound()

  const listPath = course.level === "undergraduate" ? "/undergraduate" : "/postgraduate"

  const sections = [
    { heading: "Programme Educational Objectives", html: course.educationalObjectives },
    { heading: "Programme Learning Objectives", html: course.learningObjectives },
    { heading: "Entry Requirements", html: course.entryRequirements },
    { heading: "How Will I Be Taught?", html: course.howTaught },
    { heading: "Further Study", html: course.furtherStudy },
    { heading: "Career Support & Opportunities", html: course.careerSupport },
  ].filter((s) => stripHtml(s.html).length > 0)

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: `${course.title} at Nile University of Nigeria.`,
    provider: {
      "@type": "EducationalOrganization",
      name: "Nile University of Nigeria",
      url: "https://nileuniversity.edu.ng",
    },
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <div className="relative flex min-h-[380px] items-center overflow-hidden bg-navy py-14 md:min-h-[440px]">
        <Image src="/DSC08719-1.avif" alt="" fill sizes="100vw" priority className="object-cover" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="mb-3 text-sm text-gray-300">
              <Link href="/" className="hover:text-gold-light">
                Home
              </Link>{" "}
              <span className="mx-1">›</span>{" "}
              <Link href={listPath} className="hover:text-gold-light">
                {course.level === "undergraduate" ? "Undergraduate courses" : "Postgraduate courses"}
              </Link>{" "}
              <span className="mx-1">›</span> {course.title}
            </p>
            <h1 className="text-[40px] not-italic font-extrabold leading-[48px] text-white md:text-[55px] md:leading-[60px]">
              {course.title}
            </h1>
            {course.facultyName && (
              <p className="mt-3 text-[17px] text-gray-200">{course.facultyName}</p>
            )}
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <Reveal>
            <h2 className="mb-4 text-xl font-semibold text-navy underline decoration-2 underline-offset-4">
              Programme Description
            </h2>
            {stripHtml(course.missionVision).length > 0 ? (
              <div className={proseClasses} dangerouslySetInnerHTML={{ __html: course.missionVision }} />
            ) : (
              <p className="text-[19px] leading-[30px] text-[#333435]">
                The {course.title} programme is built to give students a strong theoretical
                foundation paired with practical, real-world relevance
                {course.facultyName ? `, delivered by the ${course.facultyName}` : ""} at Nile
                University of Nigeria. Our faculty combine academic rigour with industry
                insight to prepare graduates who are ready to lead, innovate, and make an
                impact from day one.
              </p>
            )}
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-lg bg-gray-50 p-6">
              <h2 className="mb-4 text-lg font-semibold text-navy underline decoration-2 underline-offset-4">
                Programme Details
              </h2>
              <dl className="mb-6 space-y-4 text-base">
                {course.duration && (
                  <div>
                    <dt className="font-semibold text-gray-800">Programme Duration</dt>
                    <dd className="text-gray-600">{course.duration}</dd>
                  </div>
                )}
                {course.fees && (
                  <div>
                    <dt className="font-semibold text-gray-800">Fees per session</dt>
                    <dd className="text-gray-600">{course.fees}</dd>
                  </div>
                )}
                {course.startDate && (
                  <div>
                    <dt className="font-semibold text-gray-800">Start date</dt>
                    <dd className="text-gray-600">{course.startDate}</dd>
                  </div>
                )}
                {course.facultyName && (
                  <div>
                    <dt className="font-semibold text-gray-800">Faculty</dt>
                    <dd className="text-gray-600">{course.facultyName}</dd>
                  </div>
                )}
              </dl>
              <a
                href="#"
                className="block rounded bg-navy px-6 py-3 text-center text-base font-medium text-white transition-all hover:scale-105 hover:bg-navy-light"
              >
                Apply Now
              </a>
            </div>
          </Reveal>
        </div>

        {sections.length > 0 && (
          <div className="mt-16 space-y-4">
            {sections.map((section, i) => (
              <Reveal key={section.heading}>
                <Accordion title={section.heading} defaultOpen={i === 0}>
                  <div
                    className={`${proseClasses} px-6 py-6`}
                    dangerouslySetInnerHTML={{ __html: section.html }}
                  />
                </Accordion>
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-14 flex flex-wrap justify-center gap-4 border-t border-gray-200 pt-10">
          <a
            href="#"
            className="rounded bg-navy px-6 py-3 text-base font-medium text-white transition-all hover:scale-105 hover:bg-navy-light"
          >
            Apply for this course →
          </a>
          <Link
            href={listPath}
            className="rounded border border-navy px-6 py-3 text-base font-medium text-navy transition-colors hover:bg-navy hover:text-white"
          >
            See more courses
          </Link>
        </div>
      </div>
    </div>
  )
}
