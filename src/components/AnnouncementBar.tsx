import { useEffect, useState } from "react"

const APPLICATION_DEADLINE = new Date("2026-11-30T23:59:59")

const slides = [
  { type: "countdown" as const },
  {
    type: "text" as const,
    text: "Choose from more than 90 degree programmes across 8 faculties.",
    linkLabel: "Explore Programmes",
    href: "/undergraduate",
  },
  {
    type: "text" as const,
    text: "Scholarships and discounts are available for qualifying students.",
    linkLabel: "Learn More",
    href: "/scholarships-discounts",
  },
]

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now())
  const days = Math.floor(diff / 86400000)
  const hours = Math.floor((diff % 86400000) / 3600000)
  const minutes = Math.floor((diff % 3600000) / 60000)
  const seconds = Math.floor((diff % 60000) / 1000)
  return { days, hours, minutes, seconds, done: diff === 0 }
}

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

function Countdown() {
  const [time, setTime] = useState(() => getTimeLeft(APPLICATION_DEADLINE))

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(APPLICATION_DEADLINE)), 1000)
    return () => clearInterval(id)
  }, [])

  if (time.done) return null

  return (
    <span className="inline-flex items-baseline gap-[3px] font-mono text-[17px] tabular-nums text-gold-light sm:text-[20px]">
      <span className="font-bold">{time.days}</span>
      <span className="text-[11px] font-normal text-white/70">D</span>
      <span className="text-white/40">:</span>
      <span className="font-bold">{pad(time.hours)}</span>
      <span className="text-[11px] font-normal text-white/70">H</span>
      <span className="text-white/40">:</span>
      <span className="font-bold">{pad(time.minutes)}</span>
      <span className="text-[11px] font-normal text-white/70">M</span>
      <span className="text-white/40">:</span>
      <span className="font-bold">{pad(time.seconds)}</span>
      <span className="text-[11px] font-normal text-white/70">S</span>
    </span>
  )
}

function AnnouncementBar() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const slide = slides[active]

  if (slide.type === "countdown") {
    return (
      <div
        key={active}
        className="animate-fade-in-up flex items-center justify-between gap-4 bg-navy px-6 py-3.5 text-white md:px-10"
      >
        <p className="hidden shrink-0 text-[13px] font-bold uppercase tracking-wide sm:block">
          Applications close in
        </p>
        <div className="mx-auto sm:mx-0">
          <Countdown />
        </div>
        <a
          href="#"
          className="shrink-0 text-[14px] font-bold uppercase tracking-wide underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-light"
        >
          Apply Now
        </a>
      </div>
    )
  }

  return (
    <div className="bg-navy px-10 py-4 text-center text-white">
      <p
        key={active}
        className="animate-fade-in-up font-semibold text-[16px] leading-[16px] tracking-wide"
      >
        {slide.text}{" "}
        <a
          href={slide.href}
          className="underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-light"
        >
          {slide.linkLabel}
        </a>
      </p>
    </div>
  )
}

export default AnnouncementBar
