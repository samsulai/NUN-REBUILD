"use client"

import { useEffect, useState } from "react"

const slides = [
  {
    text: "Nile University graduates are shaping industries across Nigeria and beyond.",
    linkLabel: "Read the Employability Report",
    href: "/employability-report",
  },
  {
    text: "The 2026/2027 Academic Calendar is now available.",
    linkLabel: "View Academic Calendar",
    href: "/academic-calendar",
  },
]

function AnnouncementBar() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const slide = slides[active]

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
