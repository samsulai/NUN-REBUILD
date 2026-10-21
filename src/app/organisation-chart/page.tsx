import type { Metadata } from "next"
import Reveal from "@/components/Reveal"
import Image from "next/image"

export const metadata: Metadata = {
  alternates: { canonical: "/organisation-chart" },
  title: "Organisation Chart",
  description: "The organisational structure and leadership hierarchy of Nile University of Nigeria.",
}

const CHART_SRC = "/ORGANIZATIONAL-CHART-1.avif"

function OrganisationChart() {
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
              Organization Chart
            </h1>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
        <Reveal>
          <figure>
            <a
              href={CHART_SRC}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-lg border border-gray-200 shadow-sm"
            >
              <Image
                src={CHART_SRC}
                alt="Nile University of Nigeria organizational chart"
                width={4962}
                height={3508}
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </a>
            <figcaption className="mt-4 text-center text-sm text-gray-500">
              Tap or click the chart to open it full size.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </div>
  )
}

export default OrganisationChart
