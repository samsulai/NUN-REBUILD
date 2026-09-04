import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import Reveal from "../components/Reveal"
import { findCourse } from "../data/courses"
import { categoryContent, getFaqs, getFeesPerSession } from "../data/courseContent"

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gray-200">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between bg-gray-50 px-5 py-4 text-left text-base text-gray-800 transition-colors hover:bg-gray-100"
      >
        {question}
        <span
          className={`text-gray-400 transition-transform duration-300 ${open ? "rotate-90" : ""}`}
        >
          ›
        </span>
      </button>
      {open && (
        <div className="animate-fade-in-up px-5 py-4 text-base leading-relaxed text-gray-600">
          {answer}
        </div>
      )}
    </div>
  )
}

function CourseDetail() {
  const { slug } = useParams<{ slug: string }>()
  const found = slug ? findCourse(slug) : undefined

  if (!found) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-24 text-center md:px-10">
        <h1 className="mb-4 text-2xl font-bold text-gray-900">Course not found</h1>
        <Link to="/undergraduate" className="text-navy underline hover:text-navy-light">
          Back to undergraduate courses
        </Link>
      </div>
    )
  }

  const { course, level } = found
  const listPath = level === "undergraduate" ? "/undergraduate" : "/postgraduate"
  const content = categoryContent[course.category]
  const faqs = getFaqs(level)
  const fees = getFeesPerSession(level, course.category)

  return (
    <div>
      <div className="relative flex min-h-[420px] items-center overflow-hidden bg-navy py-14 md:min-h-[480px]">
        <img
          src="/DSC08719-1.avif"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="mb-3 text-sm text-gray-300">
              <Link to="/" className="hover:text-gold-light">
                Home
              </Link>{" "}
              <span className="mx-1">›</span>{" "}
              <Link to={listPath} className="hover:text-gold-light">
                {level === "undergraduate" ? "Undergraduate courses" : "Postgraduate courses"}
              </Link>{" "}
              <span className="mx-1">›</span> {course.name}
            </p>
            <h1 className="text-[55px] not-italic font-extrabold leading-[60px] text-white">
              {course.name}
            </h1>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <Reveal>
            <h2 className="mb-4 text-xl font-semibold text-navy underline decoration-2 underline-offset-4">
              Programme Description
            </h2>
            <p className="text-base leading-relaxed text-gray-600">{content.description}</p>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-lg bg-gray-50 p-6">
              <h2 className="mb-4 text-lg font-semibold text-navy underline decoration-2 underline-offset-4">
                Programme Details
              </h2>
              <dl className="mb-6 space-y-4 text-base">
                <div>
                  <dt className="font-semibold text-gray-800">Programme Duration</dt>
                  <dd className="text-gray-600">{course.duration} years</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-800">Fees per session</dt>
                  <dd className="text-gray-600">₦{fees.toLocaleString()}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-800">Start date</dt>
                  <dd className="text-gray-600">September</dd>
                </div>
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

        <Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2 md:items-center">
            <div className="h-64 overflow-hidden rounded-lg">
              <img
                src="/kdqcmr9vp8hfuf.jpg"
                alt={course.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="mb-3 text-lg font-semibold text-navy">
                This programme prepares graduates for roles in:
              </h2>
              <p className="text-base leading-relaxed text-gray-600">
                Graduates of this programme go on to work across {content.careers}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
              {course.name} - FAQs
            </h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <FaqItem key={faq.question} {...faq} />
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="rounded bg-navy px-6 py-3 text-base font-medium text-white transition-all hover:scale-105 hover:bg-navy-light"
          >
            Apply for this course →
          </a>
          <Link
            to={listPath}
            className="rounded border border-navy px-6 py-3 text-base font-medium text-navy transition-colors hover:bg-navy hover:text-white"
          >
            See more courses
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail
