import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import Reveal from "./Reveal"

const programs = [
  {
    image: "/UTME-Screening-is-now-open-scaled.avif",
    title: "School of Preliminary Studies",
    description:
      "Become equipped for success in A-level exams and unlock a pathway to 200-level direct entry admission.",
    to: "/sps",
  },
  {
    image: "/students-group.webp",
    imagePosition: "center 15%",
    title: "Undergraduate",
    description:
      "Join our lively community of undergraduate students and choose from more than 50 degree options.",
    to: "/undergraduate",
  },
  {
    image: "/kdqcmr9vp8hfuf.jpg",
    title: "Postgraduate",
    description:
      "Advance your academic and professional journey through specialized postgraduate programmes.",
    to: "/postgraduate",
  },
  {
    image: "/exec-education.webp",
    title: "Executive Education",
    description:
      "Executive and specialised business education for professionals and entrepreneurs, blending industry practice with academic rigour.",
    to: "https://online.nileuniversity.edu.ng/nile-business-school/",
  },
]

const accentColors = ["#e1ad02", "#1b4e9e", "#75b947", "#ed2777"]

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

function Programs() {
  const trackRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef(0)

  const applyDepth = () => {
    const track = trackRef.current
    if (!track) return
    const t = track.getBoundingClientRect()
    track.querySelectorAll<HTMLElement>("[data-card]").forEach((card) => {
      const c = card.getBoundingClientRect()
      const visible = Math.max(0, Math.min(c.right, t.right) - Math.max(c.left, t.left))
      const fraction = Math.min(1, visible / c.width)
      card.style.opacity = String(0.35 + 0.65 * fraction)
      card.style.scale = String(0.94 + 0.06 * fraction)
    })
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    applyDepth()
    window.addEventListener("resize", applyDepth)
    return () => {
      window.removeEventListener("resize", applyDepth)
      cancelAnimationFrame(frameRef.current)
    }
  }, [])

  const slide = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[0] as HTMLElement | undefined
    const gap = 32
    const step = card ? card.getBoundingClientRect().width + gap : track.clientWidth
    const max = track.scrollWidth - track.clientWidth
    const from = track.scrollLeft
    const to = Math.min(Math.max(from + direction * step, 0), max)

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      track.scrollTo({ left: to })
      return
    }

    cancelAnimationFrame(frameRef.current)
    track.style.scrollSnapType = "none"
    const duration = 750
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      track.scrollLeft = from + (to - from) * easeInOutCubic(progress)
      applyDepth()
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick)
      } else {
        track.style.scrollSnapType = ""
      }
    }
    frameRef.current = requestAnimationFrame(tick)
  }

  return (
    <section className="px-6 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-[48px] font-semibold not-italic leading-[48px] text-navy">
              Academic Pathways
            </h2>
            <div className="hidden shrink-0 gap-3 sm:flex">
              <button
                onClick={() => slide(-1)}
                aria-label="Previous programmes"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-navy bg-white text-navy transition-colors hover:bg-navy hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path
                    d="M15 5l-7 7 7 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={() => slide(1)}
                aria-label="Next programmes"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-navy transition-colors hover:border-gold hover:bg-gold hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>
        <div
          ref={trackRef}
          onScroll={applyDepth}
          className="flex snap-x snap-mandatory gap-8 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {programs.map((program, i) => (
            <Reveal
              key={program.title}
              delay={i * 100}
              className="w-full shrink-0 snap-start sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
            >
              <div
                data-card
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    style={{ objectPosition: program.imagePosition }}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="mb-3 text-[27px] font-semibold not-italic leading-[32.4px] text-navy">
                    {program.title}
                  </h3>
                  <p className="mb-6 flex-1 text-[19px] leading-[30px] text-gray-500">
                    {program.description}
                  </p>
                  {program.to?.startsWith("http") ? (
                    <a
                      href={program.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1.5 self-start text-base font-bold text-navy transition-colors hover:text-gold"
                    >
                      Explore
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" strokeWidth={2.25} />
                    </a>
                  ) : program.to ? (
                    <Link
                      to={program.to}
                      className="group/link inline-flex items-center gap-1.5 self-start text-base font-bold text-navy transition-colors hover:text-gold"
                    >
                      Explore
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" strokeWidth={2.25} />
                    </Link>
                  ) : (
                    <a
                      href="#"
                      className="group/link inline-flex items-center gap-1.5 self-start text-base font-bold text-navy transition-colors hover:text-gold"
                    >
                      Explore
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" strokeWidth={2.25} />
                    </a>
                  )}
                </div>
                <div
                  className="h-1 w-full"
                  style={{ backgroundColor: accentColors[i % accentColors.length] }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
