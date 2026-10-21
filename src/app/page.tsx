import type { Metadata } from "next"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import Programs from "@/components/Programs"
import Testimonials from "@/components/Testimonials"
// import Usp from "@/components/Usp"
// import News from "@/components/News"
import AdmissionsCta from "@/components/AdmissionsCta"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: { absolute: "Nile University of Nigeria" },
  description:
    "Nile University of Nigeria is a leading centre of academic excellence, research and innovation in Abuja, and a member institution of the Honoris United Universities network.",
}

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Programs />
      <Testimonials />
      {/* <Usp /> */}
      {/* <News /> */}
      <AdmissionsCta />
    </>
  )
}

export default Home
