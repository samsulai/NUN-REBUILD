import type { Metadata } from "next"
import PrincipalOfficersClient from "@/components/PrincipalOfficersClient"

export const metadata: Metadata = {
  alternates: { canonical: "/principal-officers" },
  title: "Principal Officers",
  description: "Meet the Vice-Chancellor and principal officers leading Nile University of Nigeria.",
}

export default function Page() {
  return <PrincipalOfficersClient />
}
