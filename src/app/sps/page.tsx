import type { Metadata } from "next"
import SchoolOfPreliminaryStudiesClient from "@/components/SchoolOfPreliminaryStudiesClient"

export const metadata: Metadata = {
  alternates: { canonical: "/sps" },
  title: "School of Preliminary Studies",
  description: "A foundation-year programme bridging secondary school and university at Nile University of Nigeria, with direct entry into chosen degree programmes.",
}

export default function Page() {
  return <SchoolOfPreliminaryStudiesClient />
}
