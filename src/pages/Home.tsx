import Hero from "../components/Hero"
import Stats from "../components/Stats"
import Programs from "../components/Programs"
import Testimonials from "../components/Testimonials"
// import Usp from "../components/Usp"
// import News from "../components/News"
import AdmissionsCta from "../components/AdmissionsCta"

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
