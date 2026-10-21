"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import Reveal from "@/components/Reveal"
import Image from "next/image"

type Officer = {
  image: string
  name: string
  title: string
  bio: string[]
}

const DUMMY_BIO = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. This is placeholder biography copy and will be replaced with the officer's real profile.",
  "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Responsibilities and career highlights go here.",
]

const vc: Officer = {
  image: "/Principal%20Officers/vc.avif",
  name: "Prof. Dilli Dogo, FNAMed",
  title: "Vice-Chancellor",
  bio: DUMMY_BIO,
}

const officers: Officer[] = [
  {
    image: "/Principal%20Officers/dvca.avif",
    name: "Prof. Saleh Abdullahi",
    title: "Deputy Vice-Chancellor (Academics)",
    bio: DUMMY_BIO,
  },
  {
    image: "/Principal%20Officers/dvc.avif",
    name: "Prof. A. Prema Kirubakaran",
    title: "Deputy Vice-Chancellor (Central Admin)",
    bio: DUMMY_BIO,
  },
  {
    image: "/Principal%20Officers/reg.jpg",
    name: "Dr. Modupe Fausat Aleshinloye",
    title: "Ag. Registrar",
    bio: DUMMY_BIO,
  },
  {
    image: "/Principal%20Officers/lib.avif",
    name: "Prof. Christopher Nkiko",
    title: "University Librarian",
    bio: DUMMY_BIO,
  },
]

function OfficerCard({
  officer,
  onOpen,
}: {
  officer: Officer
  onOpen: (officer: Officer) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(officer)}
      className="group flex h-full w-full flex-col rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
    >
      <div className="relative aspect-[4/5] flex-shrink-0 overflow-hidden rounded-lg">
        <Image
          src={officer.image}
          alt={officer.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center px-2 py-5">
        <h3 className="font-semibold text-[20px] leading-[28px] text-navy">{officer.name}</h3>
        <p className="mt-1 font-normal text-[15px] leading-[24px] text-gray-500">{officer.title}</p>
      </div>
    </button>
  )
}

function OfficerModal({
  officer,
  onClose,
}: {
  officer: Officer
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${officer.name} profile`}
    >
      <div
        className="animate-fade-in-up relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close profile"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-navy transition-colors hover:bg-sand"
        >
          <X className="h-5 w-5" strokeWidth={2} />
        </button>

        <div className="grid gap-6 sm:grid-cols-[240px_1fr]">
          <div className="relative h-full max-h-64 w-full sm:max-h-none">
            <Image
              src={officer.image}
              alt={officer.name}
              fill
              sizes="240px"
              className="object-cover object-top"
            />
          </div>
          <div className="p-6 sm:py-8 sm:pr-8">
            <h2 className="text-2xl font-bold text-navy">{officer.name}</h2>
            <p className="mt-1 text-base text-gold">{officer.title}</p>
            <span className="mt-3 block h-1 w-12 rounded bg-gold" />
            <div className="mt-5 space-y-4 font-normal text-[16px] leading-[32px] text-[#333435]">
              {officer.bio.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PrincipalOfficersClient() {
  const [active, setActive] = useState<Officer | null>(null)

  return (
    <div>
      <div className="relative flex min-h-[320px] items-center overflow-hidden bg-navy py-14 md:min-h-[380px]">
        <Image
          src="/Rising Sun.avif"
          alt=""
          fill
          sizes="100vw" priority
          className="pointer-events-none object-contain object-right opacity-30"
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          <Reveal>
            <h1 className="font-extrabold text-[40px] leading-[44px] text-white md:text-[55px] md:leading-[60px]">
              Principal Officers
            </h1>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <Reveal>
          <div className="mx-auto mb-16 max-w-xs">
            <button
              type="button"
              onClick={() => setActive(vc)}
              className="group flex w-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={vc.image}
                  alt={vc.name}
                  fill
                  sizes="320px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-4 py-6">
                <h2 className="font-semibold text-[20px] leading-[28px] text-navy">{vc.name}</h2>
                <p className="mt-1 font-normal text-[15px] leading-[24px] text-gray-500">{vc.title}</p>
                <span className="mx-auto mt-3 block h-1 w-12 rounded bg-gold" />
              </div>
            </button>
          </div>
        </Reveal>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {officers.map((officer, i) => (
            <Reveal key={officer.name} delay={i * 80} className="h-full">
              <OfficerCard officer={officer} onOpen={setActive} />
            </Reveal>
          ))}
        </div>
      </div>

      {active && <OfficerModal officer={active} onClose={() => setActive(null)} />}
    </div>
  )
}

export default PrincipalOfficersClient
