import { useEffect, useMemo, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Reveal from "../components/Reveal"
import { academicCalendar, type CalendarEvent } from "../data/academicCalendar"

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

type Ev = CalendarEvent & { start: number; end: number; semester: string }

const dayKey = (y: number, m: number, d: number) => y * 10000 + (m + 1) * 100 + d

const allEvents: Ev[] = academicCalendar
  .flatMap((sem) =>
    sem.months.flatMap((month) =>
      month.events.map((event) => {
        const [y, m, d] = event.iso.split("-").map(Number)
        const nums = event.date.match(/\d+/g)!.map(Number)
        const endDay = nums[nums.length - 1]
        return {
          ...event,
          start: dayKey(y, m - 1, d),
          end: dayKey(y, m - 1, endDay),
          semester: sem.heading,
        }
      })
    )
  )
  .sort((a, b) => a.start - b.start || a.label.localeCompare(b.label))

const monthIndexOf = (key: number) => Math.floor(key / 10000) * 12 + (Math.floor(key / 100) % 100) - 1
const firstIdx = monthIndexOf(allEvents[0].start)
const lastIdx = monthIndexOf(Math.max(...allEvents.map((e) => e.end)))

const shortLabel = (label: string) => label.replace(/\s*\(.*$/, "")

function EventRow({ event, month }: { event: Ev; month: string }) {
  const days = event.date.match(/\d+/g)?.join("–") ?? event.date
  const monthAbbr = month.slice(0, 3)
  const key = Boolean(event.tag)

  return (
    <div className="flex items-center gap-5 border-b border-gray-100 py-4 last:border-0">
      <div
        className={`flex h-[72px] w-[76px] flex-shrink-0 flex-col items-center justify-center ${
          key ? "bg-navy text-white" : "bg-[#eef2fb] text-navy"
        }`}
      >
        <span
          className={`font-bold leading-[26px] ${days.length > 3 ? "text-[19px]" : "text-[24px]"}`}
        >
          {days}
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

function EventDialog({ events, onClose }: { events: Ev[]; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Event details"
        className="relative max-h-[85vh] w-full max-w-md overflow-y-auto bg-white p-6 shadow-2xl md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center text-gray-500 transition-colors hover:text-navy"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="divide-y divide-gray-200">
          {events.map((e) => {
            const y = Math.floor(e.start / 10000)
            const m = Math.floor(e.start / 100) % 100 - 1
            const days = e.date.match(/\d+/g)?.join("–") ?? e.date
            return (
              <div key={e.label + e.start} className="py-5 first:pt-0 last:pb-0">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-[72px] w-[76px] flex-shrink-0 flex-col items-center justify-center ${
                      e.tag ? "bg-navy text-white" : "bg-[#eef2fb] text-navy"
                    }`}
                  >
                    <span
                      className={`font-bold leading-[26px] ${days.length > 3 ? "text-[19px]" : "text-[24px]"}`}
                    >
                      {days}
                    </span>
                    <span className="mt-0.5 text-[12px] font-semibold uppercase tracking-widest">
                      {MONTH_NAMES[m].slice(0, 3)}
                    </span>
                  </div>
                  <div className="pr-8">
                    {e.tag && (
                      <p className="mb-1 text-[12px] font-semibold uppercase tracking-wide text-gray-500">
                        {e.tag}
                      </p>
                    )}
                    <h3 className="text-[20px] font-semibold not-italic leading-[26px] text-navy">
                      {e.label}
                    </h3>
                  </div>
                </div>
                <dl className="mt-4 space-y-1 border-l-4 border-navy bg-[#f8f9fb] px-4 py-3 text-[15px] leading-[24px] text-[#333435]">
                  <div>
                    <dt className="inline font-bold">Date: </dt>
                    <dd className="inline">
                      {e.date} {MONTH_NAMES[m]} {y}
                    </dd>
                  </div>
                  <div>
                    <dt className="inline font-bold">Semester: </dt>
                    <dd className="inline">{e.semester}</dd>
                  </div>
                </dl>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function AcademicCalendar() {
  const [monthIdx, setMonthIdx] = useState(() => {
    const now = new Date()
    const idx = now.getFullYear() * 12 + now.getMonth()
    return Math.min(Math.max(idx, firstIdx), lastIdx)
  })

  const [selected, setSelected] = useState<Ev[] | null>(null)
  const openerRef = useRef<HTMLElement | null>(null)
  const openDetails = (events: Ev[]) => {
    openerRef.current = document.activeElement as HTMLElement | null
    setSelected(events)
  }
  const closeDetails = () => {
    setSelected(null)
    openerRef.current?.focus()
  }

  const year = Math.floor(monthIdx / 12)
  const month = monthIdx % 12
  const monthName = MONTH_NAMES[month]

  const monthStart = dayKey(year, month, 1)
  const monthEnd = dayKey(year, month, 31)
  const monthEvents = useMemo(
    () => allEvents.filter((e) => e.start >= monthStart && e.start <= monthEnd),
    [monthStart, monthEnd]
  )
  const semester = monthEvents[0]?.semester

  const leading = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells: (number | null)[] = [
    ...Array.from({ length: leading }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]
  while (cells.length % 7 !== 0) cells.push(null)

  const today = new Date()
  const goToday = () => {
    const idx = today.getFullYear() * 12 + today.getMonth()
    setMonthIdx(Math.min(Math.max(idx, firstIdx), lastIdx))
  }

  const navBtn =
    "flex h-10 w-10 items-center justify-center border border-navy/30 text-navy transition-colors hover:bg-navy hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-navy"

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
            <p className="mt-3 font-normal text-[19px] leading-[30px] text-gray-100">
              Undergraduate and Graduate Studies Academic Calendar (2025 – 2026)
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
        <Reveal>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-[32px] font-semibold not-italic leading-[38px] text-navy md:text-[40px] md:leading-[46px]">
                {monthName} {year}
              </h2>
              {semester && <p className="mt-1 text-[15px] text-gray-500">{semester}</p>}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goToday}
                className="h-10 border border-navy/30 px-4 text-[14px] font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                Today
              </button>
              <button
                type="button"
                aria-label="Previous month"
                disabled={monthIdx <= firstIdx}
                onClick={() => setMonthIdx((i) => i - 1)}
                className={navBtn}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next month"
                disabled={monthIdx >= lastIdx}
                onClick={() => setMonthIdx((i) => i + 1)}
                className={navBtn}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="border-l border-t border-gray-200">
            <div className="grid grid-cols-7 bg-navy text-white">
              {WEEKDAYS.map((d) => (
                <div
                  key={d}
                  className="py-2.5 text-center text-[12px] font-semibold uppercase tracking-wide md:text-[13px]"
                >
                  {d}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {cells.map((day, i) => {
                if (day === null) {
                  return (
                    <div
                      key={i}
                      className="min-h-[64px] border-b border-r border-gray-200 bg-[#f8f9fb] md:min-h-[108px]"
                    />
                  )
                }
                const key = dayKey(year, month, day)
                const dayEvents = monthEvents.filter((e) => e.start <= key && key <= e.end)
                const col = i % 7
                return (
                  <div
                    key={i}
                    className="relative min-h-[64px] border-b border-r border-gray-200 bg-white p-1.5 md:min-h-[108px]"
                  >
                    {dayEvents.length > 0 && (
                      <button
                        type="button"
                        aria-label={`${day} ${monthName}: ${dayEvents.length} event${dayEvents.length > 1 ? "s" : ""}`}
                        onClick={() => openDetails(dayEvents)}
                        className="absolute inset-0 z-20 md:hidden"
                      />
                    )}
                    <span className="inline-flex h-6 min-w-6 items-center justify-center text-[13px] font-semibold text-gray-600">
                      {day}
                    </span>

                    <div className="mt-1 hidden space-y-1 md:block">
                      {dayEvents.map((e) => {
                        const segmentStart = key === e.start || col === 0
                        if (!segmentStart) return <div key={e.label + e.start} className="h-[22px]" />
                        const span = Math.min(e.end - key, 6 - col) + 1
                        return (
                          <button
                            key={e.label + e.start}
                            type="button"
                            title={e.label}
                            onClick={() => openDetails([e])}
                            style={{ width: `calc(${span * 100}% + ${(span - 1) * 13}px)` }}
                            className={`relative z-10 block min-h-[22px] cursor-pointer break-words px-1.5 py-[3px] text-left text-[12px] font-semibold leading-[16px] transition-opacity hover:opacity-80 ${
                              e.tag ? "bg-navy text-white" : "bg-[#dfe6f5] text-navy"
                            }`}
                          >
                            {shortLabel(e.label)}
                          </button>
                        )
                      })}
                    </div>

                    {dayEvents.length > 0 && (
                      <div className="mt-1 flex gap-1 md:hidden" aria-hidden="true">
                        {dayEvents.slice(0, 3).map((e) => (
                          <span
                            key={e.label + e.start}
                            className={`h-1.5 w-1.5 rounded-full ${e.tag ? "bg-navy" : "bg-[#9db3e0]"}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>

        <div className="mt-12">
          <h3 className="mb-1 text-[24px] font-semibold not-italic leading-[30px] text-navy">
            Events in {monthName}
          </h3>
          <div className="border-t-2 border-navy">
            {monthEvents.length === 0 ? (
              <p className="py-6 text-[16px] text-gray-500">No events this month.</p>
            ) : (
              monthEvents.map((event) => (
                <EventRow key={event.date + event.label} event={event} month={monthName} />
              ))
            )}
          </div>
        </div>

        <p className="mt-6 text-sm italic text-gray-500">
          * The academic calendar may be modified without notice subject to the
          approval of the Senate.
        </p>
      </div>

      {selected && <EventDialog events={selected} onClose={closeDetails} />}
    </div>
  )
}

export default AcademicCalendar
