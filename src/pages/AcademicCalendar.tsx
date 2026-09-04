import { useState } from "react"
import Reveal from "../components/Reveal"
import {
  academicCalendar,
  type CalendarEvent,
  type CalendarTag,
} from "../data/academicCalendar"

const tagStyles: Record<CalendarTag, string> = {
  Registration: "bg-gold/10 text-gold border-gold/30",
  Lectures: "bg-navy/10 text-navy border-navy/30",
  Exams: "bg-red-50 text-red-700 border-red-200",
  Holiday: "bg-amber-50 text-amber-700 border-amber-200",
  Milestone: "bg-purple-50 text-purple-700 border-purple-200",
  Admin: "bg-gray-100 text-gray-600 border-gray-200",
}

function EventRow({ event }: { event: CalendarEvent }) {
  return (
    <div className="flex flex-col gap-2 border-b border-gray-100 py-4 last:border-0 sm:flex-row sm:items-center sm:gap-4">
      <div className="w-full flex-shrink-0 text-sm font-bold text-navy sm:w-28">
        {event.date}
      </div>
      <p className="flex-1 text-[15px] leading-relaxed text-gray-700">
        {event.label}
      </p>
      <span
        className={`inline-flex w-fit flex-shrink-0 items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${tagStyles[event.tag]}`}
      >
        {event.tag}
      </span>
    </div>
  )
}

function AcademicCalendar() {
  const [activeSemester, setActiveSemester] = useState(0)
  const semester = academicCalendar[activeSemester]

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
              Academic Calendar
            </h1>
            <p className="mt-3 text-[17px] leading-[30px] text-gray-100">
              Undergraduate and Graduate Studies Academic Calendar (2025 – 2026)
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12 md:px-10 md:py-16">
        <Reveal>
          <div className="flex overflow-hidden rounded-lg border border-gray-200">
            {academicCalendar.map((s, i) => (
              <button
                key={s.heading}
                onClick={() => setActiveSemester(i)}
                className={`flex-1 px-4 py-4 text-center text-sm font-bold transition-colors sm:text-base ${
                  i === activeSemester
                    ? "bg-navy text-white"
                    : "bg-white text-gray-500 hover:text-navy"
                }`}
              >
                {s.heading}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10">
          {semester.months.map((month, mi) => (
            <Reveal key={`${semester.heading}-${month.month}`} delay={mi * 40}>
              <div className="mb-10">
                <h2 className="mb-3 text-lg font-bold text-navy">{month.month}</h2>
                <div className="overflow-hidden rounded-lg border border-gray-200 bg-white px-5">
                  {month.events.map((event) => (
                    <EventRow key={event.date + event.label} event={event} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-4 text-sm italic text-gray-500">
          * The academic calendar may be modified without notice subject to the
          approval of the Senate.
        </p>
      </div>
    </div>
  )
}

export default AcademicCalendar
