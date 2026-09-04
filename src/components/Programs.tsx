import { useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import Reveal from "./Reveal"

const programs = [
  {
    image: "/UTME-Screening-is-now-open-scaled.avif",
    title: "School of Preliminary Studies",
    description:
      "A foundation year bridging secondary school and university, preparing students academically and personally.",
    to: null,
  },
  {
    image: "/ug2.jpeg",
    title: "Undergraduate",
    description:
      "Full-time bachelor's degrees across engineering, business, sciences, and the humanities, built for real-world readiness.",
    to: "/undergraduate",
  },
  {
    image: "/kdqcmr9vp8hfuf.jpg",
    title: "Postgraduate",
    description:
      "Postgraduate diploma, master's, and doctoral programmes for professionals and researchers looking to deepen their expertise and impact.",
    to: "/postgraduate",
  },
  {
    image: "/nbs.jpg",
    title: "Executive Education",
    description:
      "Executive and specialised business education for professionals and entrepreneurs, blending industry practice with academic rigour.",
    to: null,
  },
]

function Programs() {
  const trackRef = useRef<HTMLDivElement>(null)

  const slide = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[0] as HTMLElement | undefined
    const gap = 32
    const step = card ? card.getBoundingClientRect().width + gap : track.clientWidth
    track.scrollBy({ left: direction * step, behavior: "smooth" })
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
          className="flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {programs.map((program, i) => (
            <Reveal
              key={program.title}
              delay={i * 100}
              className="w-full shrink-0 snap-start sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
            >
              <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-52 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="mb-3 text-2xl font-bold text-navy">
                    {program.title}
                  </h3>
                  <p className="mb-6 flex-1 text-base leading-relaxed text-gray-500">
                    {program.description}
                  </p>
                  {program.to ? (
                    <Link
                      to={program.to}
                      className="group/link inline-flex items-center gap-1.5 self-start text-base font-bold text-navy transition-colors hover:text-gold"
                    >
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" strokeWidth={2.25} />
                    </Link>
                  ) : (
                    <a
                      href="#"
                      className="group/link inline-flex items-center gap-1.5 self-start text-base font-bold text-navy transition-colors hover:text-gold"
                    >
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" strokeWidth={2.25} />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
