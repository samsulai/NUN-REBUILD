import type { Metadata } from "next"
import Image from "next/image"
import Reveal from "@/components/Reveal"
import StaffDirectoryClient from "@/components/StaffDirectoryClient"

export const metadata: Metadata = {
  alternates: { canonical: "/staff" },
  title: "Faculty Staff",
  description: "Meet the faculty leadership and academic staff of Nile University of Nigeria, by faculty and department.",
}

export default function StaffDirectoryPage() {
  return (
    <div>
      <div className="relative flex min-h-[320px] items-center overflow-hidden bg-navy py-14 md:min-h-[380px]">
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
              Faculty Staff
            </h1>
            <p className="mt-4 max-w-2xl font-normal text-[19px] leading-[30px] text-gray-100">
              Meet the faculty leadership and academic staff of Nile University of Nigeria.
            </p>
          </Reveal>
        </div>
      </div>

      <StaffDirectoryClient />
    </div>
  )
}
