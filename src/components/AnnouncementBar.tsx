import { useEffect, useState } from "react"

const announcements = [
  {
    text: "Admission for the September 2026 cohort is ongoing.",
    linkLabel: "Apply Now!",
    href: "#",
  },
  {
    text: "Choose from more than 90 degree programmes across 8 faculties.",
    linkLabel: "Explore Programmes",
    href: "/undergraduate",
  },
  {
    text: "Scholarships and discounts are available for qualifying students.",
    linkLabel: "Learn More",
    href: "/scholarships-discounts",
  },
]

function AnnouncementBar() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % announcements.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const announcement = announcements[active]

  return (
    <div className="bg-navy px-10 py-4 text-center text-white">
      <p
        key={active}
        className="animate-fade-in-up font-semibold text-[16px] leading-[16px] tracking-wide"
      >
        {announcement.text}{" "}
        <a
          href={announcement.href}
          className="underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-light"
        >
          {announcement.linkLabel}
        </a>
      </p>
    </div>
  )
}

export default AnnouncementBar
