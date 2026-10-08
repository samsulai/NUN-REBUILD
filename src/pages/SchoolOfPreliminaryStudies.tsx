import { useEffect, useState } from "react"
import { ArrowRight, Info } from "lucide-react"
import Accordion from "../components/Accordion"

const whoCanApply = [
  "Candidates that possess a minimum of five (5) credits in English, Mathematics, and three (3) other relevant subjects in WAEC/NECO/NABTEB/IGCSE or their equivalent at a maximum of two (2) sittings.",
  "Candidates that do not have JAMB but wish to gain admission to the university through direct entry.",
]

const applyInstructions = [
  "Before applying, make sure to read the Programme Structure below. This will provide information about the subjects you'll need for your intended programme. The subject combination requirements are outlined there.",
  "To be eligible, you must have an O'level CREDIT in any subject combination you choose.",
  "The names on all uploaded documents must tally with the name on the application.",
  "Candidates with Commerce or Marketing in their O'Level qualifications may select subject combinations that include Business Studies.",
]

const faculties = [
  "College of Health Sciences",
  "Faculty of Arts & Social Sciences",
  "Faculty of Management Sciences",
  "Faculty of Engineering",
  "Faculty of Environmental Science",
  "Faculty of Science",
  "Faculty of Computing Studies",
  "Faculty of Law",
]

const slides = [
  {
    image: "/UTME-Screening-is-now-open-scaled.avif",
    title: "Applications for the Nile University School of Preliminary Studies are now open",
    description:
      "A foundation year bridging secondary school and university, preparing students academically and personally.",
  },
  {
    image: "/ug2.jpeg",
    title: "Welcome to the Nile University School of Preliminary Studies (SPS).",
    description:
      "A blend of Nigerian and Foreign A'Level courses, giving qualified students direct entry into their chosen degree programme.",
  },
]

function SchoolOfPreliminaryStudies() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setActive((i) => (i + 1) % slides.length)
  const slide = slides[active]

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [active])

  return (
    <div>
      <section className="relative flex h-[480px] items-center overflow-hidden bg-navy px-8 md:h-[560px] md:px-16">
        <img
          key={slide.image}
          src={slide.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-navy/80 text-white transition-all hover:scale-105 hover:bg-gold md:left-8 md:h-12 md:w-12"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 md:h-6 md:w-6">
            <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-navy/80 text-white transition-all hover:scale-105 hover:bg-gold md:right-8 md:h-12 md:w-12"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 md:h-6 md:w-6">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div
          key={slide.title}
          className="relative z-10 max-w-3xl pl-12 text-left text-white animate-fade-in-up md:pl-10"
        >
          <h1 className="mb-4 text-3xl font-bold leading-tight md:text-[42px] md:leading-[50.4px]">
            {slide.title}
          </h1>
          <p className="max-w-2xl text-[19px] leading-[30px] text-gray-200">
            {slide.description}
          </p>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-3 py-2 shadow-lg">
          {slides.map((s, i) => (
            <button
              key={s.image}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => setActive(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === active ? "bg-navy" : "bg-gold"
              }`}
            />
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <h2 className="mb-4 text-[40px] font-black not-italic leading-[60px] text-navy">
          About The Programme
        </h2>
        <span className="mb-6 block h-1 w-14 bg-gold" />
        <div className="space-y-4 text-[18px] font-normal not-italic leading-[35px] text-[#333435]">
          <p>
            This is an intensive 12 months programme designed for students seeking admission
            through direct entry into any university. During the programme, students are
            exposed to a wide range of skills and knowledge of subjects related to the
            programme they wish to study in the university.
          </p>
          <p>
            The programme contains a blend of Nigerian and Foreign A &lsquo;Level courses,
            enabling students who have met the requirements to gain direct entry into 200-level
            of their chosen degree programme.
          </p>
          <p>
            The tuition fee for this programme is <strong className="font-bold text-navy">₦2,750,000</strong>.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:items-center">
          <img
            src="/ugnew.jpeg"
            alt="School of Preliminary Studies students on campus"
            className="h-80 w-full object-cover"
          />
          <div>
            <h2 className="mb-5 text-[28px] font-semibold not-italic leading-[34px] text-navy">
              Who can apply?
            </h2>
            <ul className="space-y-5">
              {whoCanApply.map((item) => (
                <li key={item.slice(0, 30)} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold text-white">
                    <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <p className="text-[16px] leading-[25px] text-[#333435]">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#eef2fb] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="bg-navy px-6 py-8 text-white md:px-10">
            <h2 className="mb-4 flex items-center gap-2 text-[22px] font-bold">
              <Info className="h-5 w-5 flex-shrink-0" />
              Instructions Before Applying
            </h2>
            <p className="mb-4 text-[16px] text-gray-200">Dear Prospective Applicants,</p>
            <ol className="list-decimal space-y-3 pl-5 text-[16px] leading-[25px] text-gray-100">
              {applyInstructions.map((item) => (
                <li key={item.slice(0, 30)}>{item}</li>
              ))}
            </ol>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-[32px] font-bold leading-[38px] text-navy md:text-[40px] md:leading-[46px]">
              Programme Structure
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-[25px] text-gray-600">
              In addition to some compulsory courses which they would be exposed to, students
              are required to choose three subjects relevant to their intended degree programme.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {faculties.map((faculty) => (
              <Accordion key={faculty} title={faculty}>
                <p className="px-6 py-6 text-[16px] leading-[25px] text-gray-500">
                  Subject combination requirements for {faculty} will be published here soon.
                </p>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchoolOfPreliminaryStudies
