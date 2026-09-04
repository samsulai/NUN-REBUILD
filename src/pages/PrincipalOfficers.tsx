import { useEffect, useState } from "react"
import { X } from "lucide-react"
import Reveal from "../components/Reveal"

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
      className="group flex flex-col text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
    >
      <div className="overflow-hidden rounded-lg shadow-md">
        <img
          src={officer.image}
          alt={officer.name}
          className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-4 font-semibold text-[22px] leading-[32px] text-navy">{officer.name}</h3>
      <p className="mt-1 font-normal text-[16px] leading-[32px] text-gray-500">{officer.title}</p>
      <span className="mt-2 text-sm font-semibold text-gold transition-colors group-hover:text-navy">
        Read profile
      </span>
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
          <img
            src={officer.image}
            alt={officer.name}
            className="h-full max-h-64 w-full object-cover object-top sm:max-h-none"
          />
          <div className="p-6 sm:py-8 sm:pr-8">
            <h2 className="text-2xl font-bold text-navy">{officer.name}</h2>
            <p className="mt-1 text-base text-gold">{officer.title}</p>
            <span className="mt-3 block h-1 w-12 rounded bg-gold" />
            <div className="mt-5 space-y-4 font-normal text-[16px] leading-[32px] text-gray-600">
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

function PrincipalOfficers() {
  const [active, setActive] = useState<Officer | null>(null)

  return (
    <div>
      <div className="relative flex min-h-[320px] items-center overflow-hidden bg-navy py-14 md:min-h-[380px]">
        <img
          src="/Rising%20Sun.avif"
          alt=""
          className="pointer-events-none absolute inset-y-0 right-0 h-full w-auto max-w-none opacity-30"
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
          <div className="mx-auto mb-16 max-w-xs text-center">
            <button
              type="button"
              onClick={() => setActive(vc)}
              className="group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={vc.image}
                  alt={vc.name}
                  className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h2 className="mt-5 font-semibold text-[22px] leading-[32px] text-navy">{vc.name}</h2>
              <p className="mt-1 font-normal text-[16px] leading-[32px] text-gray-500">{vc.title}</p>
              <span className="mx-auto mt-4 block h-1 w-12 rounded bg-gold" />
            </button>
          </div>
        </Reveal>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {officers.map((officer, i) => (
            <Reveal key={officer.name} delay={i * 80}>
              <OfficerCard officer={officer} onOpen={setActive} />
            </Reveal>
          ))}
        </div>
      </div>

      {active && <OfficerModal officer={active} onClose={() => setActive(null)} />}
    </div>
  )
}

export default PrincipalOfficers
