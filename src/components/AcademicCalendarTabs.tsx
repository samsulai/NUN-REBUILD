"use client"

import { useState } from "react"
import Reveal from "@/components/Reveal"
import { academicCalendar, type CalendarEvent } from "@/data/academicCalendar"

function EventRow({ event, month }: { event: CalendarEvent; month: string }) {
  const monthAbbr = month.split(" ")[0].slice(0, 3)

  return (
    <div className="flex items-center gap-5 border-b border-gray-100 py-4 last:border-0">
      <div
        className={`flex h-[72px] w-[76px] flex-shrink-0 flex-col items-center justify-center text-center ${
          event.tag ? "bg-navy text-white" : "bg-[#eef2fb] text-navy"
        }`}
      >
        <span
          className={`font-bold leading-[20px] ${event.date.length > 6 ? "text-[14px]" : "text-[19px]"}`}
        >
          {event.date}
        </span>
        <span className="mt-0.5 text-[12px] font-semibold uppercase tracking-widest">
          {monthAbbr}
        </span>
      </div>
      <div className="flex-1">
        <p className="font-normal text-[19px] leading-[30px] text-gray-800">{event.label}</p>
        {event.tag && (
          <p className="mt-1 text-[12px] font-semibold uppercase tracking-wide text-gray-500">
            {event.tag}
          </p>
        )}
      </div>
    </div>
  )
}

function defaultSemesterIndex() {
  const todayIso = new Date().toISOString().slice(0, 10)
  const idx = academicCalendar.findIndex((semester) => {
    const isoDates = semester.months.flatMap((m) => m.events.map((e) => e.iso))
    return isoDates.some((iso) => iso <= todayIso) && isoDates.some((iso) => iso >= todayIso)
  })
  return idx === -1 ? 0 : idx
}

function AcademicCalendarTabs() {
  const [active, setActive] = useState(defaultSemesterIndex)
  const semester = academicCalendar[active]

  return (
    <div>
      <Reveal>
        <div className="mb-10 flex flex-wrap gap-2 border-b border-gray-200">
          {academicCalendar.map((s, i) => (
            <button
              key={s.heading}
              type="button"
              onClick={() => setActive(i)}
              aria-current={i === active ? "true" : undefined}
              className={`border-b-2 px-5 py-3 text-[17px] font-semibold transition-colors ${
                i === active
                  ? "border-navy text-navy"
                  : "border-transparent text-gray-500 hover:text-navy"
              }`}
            >
              {s.heading}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal key={semester.heading}>
        <div className="space-y-10">
          {semester.months.map((month) => (
            <div key={month.month}>
              <h3 className="mb-1 text-[20px] font-semibold not-italic leading-[26px] text-navy">
                {month.month}
              </h3>
              <div className="border-t-2 border-navy">
                {month.events.map((event) => (
                  <EventRow key={event.date + event.label} event={event} month={month.month} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  )
}

export default AcademicCalendarTabs
