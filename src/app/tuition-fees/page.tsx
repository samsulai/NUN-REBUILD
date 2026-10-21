import type { Metadata } from "next"
import TuitionFeesClient from "@/components/TuitionFeesClient"

export const metadata: Metadata = {
  alternates: { canonical: "/tuition-fees" },
  title: "Tuition Fees",
  description: "Tuition fees for undergraduate and postgraduate programmes at Nile University of Nigeria for the 2026/2027 academic session.",
}

export default function Page() {
  return <TuitionFeesClient />
}
