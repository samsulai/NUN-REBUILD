import type { Metadata } from "next"
import VirtualTourClient from "@/components/VirtualTourClient"

export const metadata: Metadata = {
  alternates: { canonical: "/virtual-tour" },
  title: "Virtual Tour",
  description: "Take a virtual tour of the Nile University of Nigeria campus, facilities, and student life.",
}

export default function Page() {
  return <VirtualTourClient />
}
