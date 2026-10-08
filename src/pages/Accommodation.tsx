import { useState } from "react"
import { Check } from "lucide-react"
import Accordion from "../components/Accordion"
import Reveal from "../components/Reveal"
import {
  accommodationFaqs,
  accommodationIntro,
  accommodationNote,
  applyGroups,
  feesCover,
  hostelVideoUrl,
  packageFees,
  roomFees,
} from "../data/accommodation"

type Basis = "semester" | "session"

const sectionHeading =
  "font-semibold not-italic text-[35px] leading-[42px] text-navy md:text-[38px] md:leading-[46px]"
const eyebrow = "mb-2 text-[13px] font-bold uppercase tracking-widest text-[#45703b]"
const body = "font-normal text-[19px] leading-[30px] text-[#333435]"

const videoId = hostelVideoUrl.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/)?.[1]
const videoEmbed = videoId ? `https://www.youtube.com/embed/${videoId}?rel=0` : null

function Toggle({ basis, onChange }: { basis: Basis; onChange: (b: Basis) => void }) {
  const options: { id: Basis; label: string }[] = [
    { id: "session", label: "Per session" },
    { id: "semester", label: "Per semester" },
  ]
  return (
    <div className="inline-flex" role="group" aria-label="Show prices per">
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          onClick={() => onChange(o.id)}
          aria-pressed={basis === o.id}
          className={`px-4 py-2 text-[14px] font-semibold transition-colors ${
            basis === o.id ? "bg-navy text-white" : "bg-[#eef2fb] text-navy hover:bg-[#dfe6f5]"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

function Accommodation() {
  const [basis, setBasis] = useState<Basis>("semester")

  const activeCell = "text-right text-[17px] font-bold text-navy"
  const mutedCell = "text-right text-[15px] text-gray-400"

  return (
    <div>
      {/* Hero */}
      <div className="relative flex h-[360px] items-center overflow-hidden bg-navy md:h-[440px]">
        <img
          src="/campus-aerial.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          <Reveal>
            <h1 className="font-extrabold text-[40px] leading-[44px] text-white md:text-[55px] md:leading-[60px]">
              Student Accommodation
            </h1>
            <p className="mt-4 max-w-2xl font-normal text-[19px] leading-[30px] text-gray-100">
              Air-conditioned, furnished on-campus rooms with 24/7 security, Wi-Fi and
              in-residence supervisors.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Intro */}
      <div className="mx-auto max-w-5xl px-6 pt-14 md:px-10 md:pt-16">
        <Reveal>
          <div className="space-y-4">
            {accommodationIntro.map((p) => (
              <p key={p.slice(0, 24)} className={body}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Rooms & prices */}
      <div className="mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-16">
        <Reveal>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className={eyebrow}>Rooms & prices</p>
              <h2 className={sectionHeading}>Pick the room that suits you</h2>
            </div>
            <Toggle basis={basis} onChange={setBasis} />
          </div>

          <div className="overflow-x-auto border border-gray-200">
            <table className="w-full min-w-[620px] text-left">
              <thead>
                <tr className="bg-[#f8f9fb] text-xs uppercase tracking-wide text-gray-500">
                  <th className="px-5 py-3 font-semibold">Room</th>
                  <th className="px-5 py-3 font-semibold">Shared by</th>
                  <th className="px-5 py-3 text-right font-semibold">Per semester</th>
                  <th className="px-5 py-3 text-right font-semibold">Per session</th>
                </tr>
              </thead>
              <tbody>
                {roomFees.map((room) => (
                  <tr key={room.roomClass} className="border-t border-gray-100">
                    <td className="px-5 py-4">
                      <p className="text-[16px] font-bold text-navy">{room.roomClass}</p>
                      {room.note && <p className="mt-0.5 text-[12px] text-gray-500">{room.note}</p>}
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-[15px] text-gray-600">
                        {room.sharedBy} students
                      </span>
                    </td>
                    <td className={`px-5 py-4 ${basis === "semester" ? activeCell : mutedCell}`}>
                      {room.perSemester}
                    </td>
                    <td className={`px-5 py-4 ${basis === "session" ? activeCell : mutedCell}`}>
                      {room.perSession}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 flex items-start gap-3 border-l-4 border-[#45703b] bg-[#eef6ea] px-5 py-4 text-[16px] leading-[25px] text-[#333435]">
            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#45703b]" strokeWidth={2.5} />
            {accommodationNote}
          </p>
        </Reveal>
      </div>

      {/* No hidden costs */}
      <div className="bg-[#eef2fb] px-6 py-14 md:px-10 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <Reveal>
            <p className={eyebrow}>Included in every room</p>
            <h2 className={sectionHeading}>No hidden costs</h2>
            <ul className="mt-6 space-y-3">
              {feesCover.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[16px] text-[#333435]">
                  <Check className="h-5 w-5 flex-shrink-0 text-navy" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <p className={eyebrow}>Optional extras</p>
            <h2 className={sectionHeading}>Add if you need them</h2>
            <div className="mt-6 space-y-4">
              {packageFees.map((pkg) => (
                <div
                  key={pkg.roomClass}
                  className="flex items-center justify-between gap-4 bg-white px-5 py-4"
                >
                  <div>
                    <p className="text-[18px] font-bold text-navy">{pkg.roomClass}</p>
                    <p className="text-[14px] text-gray-500">{pkg.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[20px] font-bold text-navy">
                      {basis === "semester" ? pkg.perSemester : pkg.perSession}
                    </p>
                    <p className="text-[13px] text-gray-500">/ {basis}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* How to apply */}
      <div className="mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-16">
        <Reveal>
          <p className={eyebrow}>How to apply</p>
          <h2 className={sectionHeading}>Three steps to secure your room</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {applyGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 100}>
              <div className="h-full border-t-4 border-navy bg-[#f8f9fb] p-6">
                <p className="mb-2 text-[40px] font-bold leading-[44px] text-navy">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-3 text-[20px] font-bold text-navy">{group.title}</h3>
                <ul className="space-y-2">
                  {group.steps.map((step) => (
                    <li key={step.slice(0, 24)} className="flex gap-3 text-[15px] leading-[23px] text-[#333435]">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-navy" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://student.nileuniversity.edu.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-l-[6px] border-gold bg-navy px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-navy-light"
            >
              Go to the student portal
            </a>
            <span className="text-[14px] text-gray-500">
              Log in with your official student email.
            </span>
          </div>
        </Reveal>
      </div>

      {/* Hostel life */}
      {videoEmbed && (
        <div className="bg-navy px-6 py-14 text-white md:px-10 md:py-16">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
            <Reveal>
              <div className="aspect-video w-full overflow-hidden bg-black">
                <iframe
                  src={videoEmbed}
                  title="Nile University hostel rules"
                  className="h-full w-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Reveal>
            <Reveal>
              <p className="mb-2 text-[13px] font-bold uppercase tracking-widest text-gold-light">
                Hostel life
              </p>
              <h2 className="font-semibold not-italic text-[35px] leading-[42px] text-white md:text-[38px] md:leading-[46px]">
                Hostel rules & life
              </h2>
              <p className="mt-4 text-[17px] leading-[27px] text-gray-100">
                Watch the hostel rules video, and once your application is complete, review
                the Hostel Policy for important guidelines and regulations.
              </p>
            </Reveal>
          </div>
        </div>
      )}

      {/* FAQ */}
      <div className="mx-auto max-w-3xl px-6 py-14 md:px-10 md:py-16">
        <Reveal>
          <h2 className={`${sectionHeading} mb-8 text-center`}>Frequently asked questions</h2>
        </Reveal>
        <div className="space-y-4">
          {accommodationFaqs.map((faq) => (
            <Reveal key={faq.question}>
              <Accordion title={faq.question}>
                <p className="px-6 py-6 text-[17px] leading-[27px] text-[#333435]">{faq.answer}</p>
              </Accordion>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Accommodation
