import { Check } from "lucide-react"
import Reveal from "../components/Reveal"
import {
  accommodationIntro,
  accommodationNote,
  applySteps,
  feesCover,
  hostelVideoUrl,
  optionalServices,
  packageFees,
  roomFees,
  type RoomFee,
} from "../data/accommodation"

const sectionHeading =
  "font-semibold not-italic text-[35px] leading-[50px] text-navy"
const body = "font-normal text-[17px] leading-[25.5px] text-[#333435]"

const videoId = hostelVideoUrl.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/)?.[1]
const videoEmbed = videoId
  ? `https://www.youtube.com/embed/${videoId}?rel=0`
  : null

function FeeTable({ rows }: { rows: RoomFee[] }) {
  const hasNote = rows.some((r) => r.note)
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full min-w-[560px] text-left">
        <thead>
          <tr className="border-b-2 border-navy text-xs uppercase tracking-wide text-gray-500">
            <th className="py-3 pr-4 font-semibold">Room class</th>
            <th className="py-3 pr-4 font-semibold">Occupancy</th>
            <th className="py-3 pr-4 text-right font-semibold">Per semester</th>
            <th className="py-3 pr-4 text-right font-semibold">Per session</th>
            {hasNote && <th className="py-3 font-semibold">Notes</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.roomClass} className="border-b border-gray-100 last:border-0">
              <td className="py-4 pr-4 text-[16px] font-semibold text-navy">
                {row.roomClass}
              </td>
              <td className="py-4 pr-4 text-[15px] text-gray-600">{row.occupancy}</td>
              <td className="py-4 pr-4 text-right text-[15px] text-gray-700">
                {row.perSemester}
              </td>
              <td className="py-4 pr-4 text-right text-[15px] font-bold text-navy">
                {row.perSession}
              </td>
              {hasNote && (
                <td className="py-4 text-[14px] text-gray-500">{row.note ?? ""}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Accommodation() {
  return (
    <div>
      {/* Hero */}
      <div className="relative flex h-[360px] items-center overflow-hidden bg-navy md:h-[440px]">
        <img
          src="/Nile-University-Boys-Hostel.avif"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          <Reveal>
            <h1 className="font-extrabold text-[40px] leading-[44px] text-white md:text-[55px] md:leading-[60px]">
              Student Accommodation
            </h1>
            <p className="mt-4 max-w-2xl font-normal text-[17px] leading-[25.5px] text-gray-100">
              Comfortable, secure on-campus living with a supportive residence
              community.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Intro */}
      <div className="mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-16">
        <Reveal>
          <div className="space-y-4">
            {accommodationIntro.map((p) => (
              <p key={p.slice(0, 24)} className={body}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        {/* What's included */}
        <Reveal>
          <div className="mt-12">
            <h2 className={sectionHeading}>What your hostel fee covers</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {feesCover.map((item) => (
                <div key={item} className="flex items-start gap-3 border border-gray-200 p-4">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" strokeWidth={2.5} />
                  <span className="text-[16px] text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-bold uppercase tracking-wide text-navy">
              Optional add-ons
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {optionalServices.map((item) => (
                <span key={item} className="border border-gray-200 px-4 py-2 text-[15px] text-gray-600">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Video */}
        {videoEmbed && (
          <Reveal>
            <div className="mt-12">
              <h2 className={sectionHeading}>Hostel rules & life</h2>
              <div className="mt-6 aspect-video w-full overflow-hidden bg-black">
                <iframe
                  src={videoEmbed}
                  title="Nile University hostel rules"
                  className="h-full w-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
        )}
      </div>

      {/* Fees */}
      <div className="bg-[#eef2fb] px-6 py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className={sectionHeading}>Hostel fees</h2>
            <p className={`mt-3 ${body}`}>
              Accommodation pricing for the 2026/2027 academic session.
            </p>
            <FeeTable rows={roomFees} />
          </Reveal>

          <Reveal>
            <h3 className="mt-12 text-lg font-bold uppercase tracking-wide text-navy">
              Optional packages
            </h3>
            <FeeTable rows={packageFees} />
          </Reveal>

          <Reveal>
            <p className={`mt-8 border-l-4 border-gold pl-4 ${body}`}>
              {accommodationNote}
            </p>
          </Reveal>
        </div>
      </div>

      {/* How to apply */}
      <div className="mx-auto max-w-3xl px-6 py-14 md:px-10 md:py-16">
        <Reveal>
          <h2 className={sectionHeading}>How to apply</h2>
          <ol className="mt-8 space-y-5">
            {applySteps.map((step, i) => (
              <li key={step.slice(0, 24)} className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className={body}>{step}</p>
              </li>
            ))}
          </ol>
          <a
            href="https://student.nileuniversity.edu.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block border-l-[6px] border-gold bg-navy px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-navy-light"
          >
            Apply now
          </a>
        </Reveal>
      </div>
    </div>
  )
}

export default Accommodation
