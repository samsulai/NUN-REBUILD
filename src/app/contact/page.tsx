import type { Metadata } from "next"
import ContactClient from "@/components/ContactClient"

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact Us",
  description: "Get in touch with Nile University of Nigeria's admissions, registry, finance, and student affairs departments.",
}

export default function Page() {
  return <ContactClient />
}
