import type { Metadata } from "next"
import AccommodationClient from "@/components/AccommodationClient"

export const metadata: Metadata = {
  alternates: { canonical: "/student-accommodation" },
  title: "Student Accommodation",
  description: "Air-conditioned, furnished on-campus hostel rooms at Nile University of Nigeria, with 24/7 security, Wi-Fi, and in-residence supervisors.",
}

export default function Page() {
  return <AccommodationClient />
}
