"use client"

import { useState } from "react"
import Image from "next/image"
import { GraduationCap } from "lucide-react"
import Reveal from "./Reveal"

const tabs = [
  {
    label: "Benefits",
    heading: "Why Choose Nile University?",
    image: "/B.Sc_.-Peace-Studies-and-Conflict-Resolution.avif",
    paragraphs: [
      "Our lecturers bring together deep academic research and real industry experience, so every class stays connected to how the field actually works today, not just what's written in a decade-old textbook. Small class sizes mean you get direct access to your instructors and mentorship you can actually use.",
      "Beyond the classroom, Nile University connects you with academics who track your progress and open doors to research projects, industry placements, and networks that matter long after graduation. It's an environment built for genuine one-on-one guidance, not lecture halls where you're just another face in the crowd.",
    ],
  },
  {
    label: "Modern campus facilities",
    heading: "Modern campus facilities",
    image: "/DSC08719-1.avif",
    paragraphs: [
      "From well-equipped laboratories to modern lecture halls and comfortable residence facilities, our campus is built to support serious study and a genuinely enjoyable student life. Reliable power, fast internet, and dedicated quiet study spaces mean you can always find somewhere to focus, on campus or in your hall.",
      "Nile University continues to invest in its facilities year after year, from upgraded labs and libraries to recreational spaces where students unwind between classes. Whatever your programme, you'll have access to the tools, technology, and environment needed to learn properly, not just get by until the semester ends.",
    ],
  },
  {
    label: "Career-focused curriculum",
    heading: "Career-focused curriculum",
    image: "/kdqcmr9vp8hfuf.jpg",
    paragraphs: [
      "Every programme at Nile University is built with internships, industry projects, and practical training woven directly into the coursework, not left as an afterthought for final year. You'll work on real problems alongside real organisations long before you ever apply for your first job after graduation.",
      "By the time you graduate, you'll have practical project experience, industry connections, and a curriculum built around what employers are actually looking for. Our career services team works alongside your academic advisors, so career readiness is part of your degree from day one, not something you figure out later.",
    ],
  },
]

function Usp() {
  const [active, setActive] = useState(0)
  const tab = tabs[active]

  return (
    <section className="px-6 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid overflow-hidden border border-gray-100 shadow-sm lg:grid-cols-[34%_1fr] lg:grid-rows-[auto_1fr]">
            <div className="relative min-h-[280px] lg:row-span-2 lg:aspect-[3/4] lg:h-auto">
              <Image
                key={tab.image}
                src={tab.image}
                alt={tab.label}
                fill
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="object-cover animate-fade-in-up"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg">
                  <div className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-gold" />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap border-b border-gray-100 bg-sand lg:flex-nowrap">
              {tabs.map((t, i) => (
                <button
                  key={t.label}
                  onClick={() => setActive(i)}
                  className={`flex-1 whitespace-nowrap px-6 py-5 text-[17px] not-italic font-bold leading-[28.9px] transition-colors duration-200 ${
                    i === active
                      ? "bg-white text-navy"
                      : "text-gray-500 hover:text-navy"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="relative overflow-hidden bg-white p-8 sm:p-10 lg:p-14">
              <GraduationCap
                className="pointer-events-none absolute right-6 top-1/2 h-24 w-24 -translate-y-1/2 text-sand"
                strokeWidth={1}
              />
              <div className="relative max-w-xl">
                <h3 className="mb-4 text-[22px] not-italic font-bold leading-[26.4px] text-navy">{tab.heading}</h3>
                {tab.paragraphs.map((p) => (
                  <p key={p} className="mb-4 text-[16px] not-italic font-normal leading-[27.2px] text-gray-500 last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Usp
