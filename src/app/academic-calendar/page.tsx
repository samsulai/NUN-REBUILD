import type { Metadata } from "next"
import Image from "next/image"
import Reveal from "@/components/Reveal"
import AcademicCalendarTabs from "@/components/AcademicCalendarTabs"

export const metadata: Metadata = {
  alternates: { canonical: "/academic-calendar" },
  title: "Academic Calendar",
  description: "The undergraduate and graduate studies academic calendar for Nile University of Nigeria.",
}

export default function AcademicCalendarPage() {
  return (
    <div>
      <div className="relative flex h-[300px] items-center overflow-hidden bg-navy md:h-[340px]">
        <Image
          src="/Rising Sun.avif"
          alt=""
          fill
          sizes="100vw"
          priority
          className="pointer-events-none object-contain object-right opacity-30"
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          <Reveal>
            <h1 className="font-extrabold text-[40px] leading-[44px] text-white md:text-[55px] md:leading-[60px]">
              Academic Calendar
            </h1>
            <p className="mt-3 font-normal text-[19px] leading-[30px] text-gray-100">
              Undergraduate and Graduate Studies Academic Calendar (2026 – 2027)
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
        <AcademicCalendarTabs />

        <p className="mt-10 text-[20px] font-bold not-italic leading-[32px] text-[#333435]">
          * The academic calendar may be modified without notice subject to the
          approval of the Senate.
        </p>
      </div>
    </div>
  )
}
