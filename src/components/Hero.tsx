"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

type OverlayLevel = "strong" | "default" | "light" | "subtle"

const overlayClasses: Record<OverlayLevel, { base: string; gradient: string }> = {
  strong: { base: "bg-black/25", gradient: "from-black/55 via-black/25" },
  default: { base: "bg-black/15", gradient: "from-black/40 via-black/15" },
  light: { base: "bg-black/8", gradient: "from-black/25 via-black/8" },
  subtle: { base: "bg-black/11", gradient: "from-black/30 via-black/11" },
}

const slides = [
  {
    image: "/kdqcmr9vp8hfuf.jpg",
    title: "Join a legacy of excellence",
    description:
      "Our graduates go on to lead and innovate across industries in Nigeria and beyond.",
    cta: { label: "Read the Employability Report", to: "/employability-report" },
  },
  {
    image: "/campus-aerial.webp",
    title: "Take a virtual tour of our campus",
    description:
      "Explore our facilities, faculties, and campus life from anywhere in the world, before you visit in person.",
    cta: { label: "Take the Virtual Tour", to: "/virtual-tour" },
    overlay: "strong" as OverlayLevel,
  },
  {
    image: "/students-group.webp",
    title: "Find the right programme for you",
    description:
      "Explore undergraduate and postgraduate degrees across engineering, business, sciences, and the humanities.",
    cta: { label: "Explore Programmes", to: "/undergraduate" },
    imagePosition: "center 20%",
    overlay: "light" as OverlayLevel,
  },
  {
    image: "/hero-campus-students.webp",
    title: "Let's help you get started",
    description:
      "Our admissions team is ready to walk you through programmes, requirements, and next steps.",
    cta: { label: "Contact Admissions", to: "/contact" },
    overlay: "subtle" as OverlayLevel,
  },
]

function Hero() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setActive((i) => (i + 1) % slides.length)
  const slide = slides[active]

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [active])

  return (
    <section className="relative flex h-[480px] items-center overflow-hidden bg-navy px-8 md:h-[560px] md:px-16">
      <Image
        key={slide.image}
        src={slide.image}
        alt=""
        fill
        sizes="100vw"
        priority
        style={{ objectPosition: slide.imagePosition }}
        className="object-cover animate-kenburns"
      />
      <div className={`absolute inset-0 ${overlayClasses[slide.overlay ?? "default"].base}`} />
      <div
        className={`absolute inset-0 bg-gradient-to-r to-transparent ${
          overlayClasses[slide.overlay ?? "default"].gradient
        }`}
      />

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 text-white transition-colors duration-200 hover:border-white hover:bg-white/10 md:left-8 md:h-12 md:w-12"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 md:h-6 md:w-6">
          <path
            d="M15 5l-7 7 7 7"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 text-white transition-colors duration-200 hover:border-white hover:bg-white/10 md:right-8 md:h-12 md:w-12"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 md:h-6 md:w-6">
          <path
            d="M9 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        key={slide.title}
        className="relative z-10 max-w-xl pl-12 text-left text-white animate-fade-in-up md:pl-10"
      >
        <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">
          {slide.title}
        </h1>
        <p className="mb-6 text-[19px] leading-[30px] text-gray-200">
          {slide.description}
        </p>
        <Link
          href={slide.cta.to}
          className="inline-block border-l-[6px] border-gold bg-white px-6 py-3 text-base font-semibold text-navy transition-colors hover:bg-[#eef2fb]"
        >
          {slide.cta.label}
        </Link>
      </div>

      <div className="absolute bottom-6 left-8 z-10 flex items-center gap-3 pl-12 md:left-16 md:pl-10">
        {slides.map((s, i) => (
          <button
            key={s.image}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === active ? "true" : undefined}
            onClick={() => setActive(i)}
            className="group relative h-4 w-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light md:w-12"
          >
            <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 bg-white/30 transition-colors duration-200 group-hover:bg-white/50" />
            {i === active && (
              <span className="animate-progress-fill absolute left-0 top-1/2 h-[3px] -translate-y-1/2 bg-gold-light" />
            )}
          </button>
        ))}
      </div>
    </section>
  )
}

export default Hero
