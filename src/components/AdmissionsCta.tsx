import { Link } from "react-router-dom"
import Reveal from "./Reveal"

function AdmissionsCta() {
  return (
    <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden px-6 py-24 text-center md:min-h-[600px] md:px-10">
      <img
        src="/Nile-University-Boys-Hostel.avif"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/66" />

      <Reveal className="relative z-10 mx-auto max-w-2xl">
        <Link
          to="/virtual-tour"
          aria-label="Take the video tour"
          className="group relative mx-auto mb-8 flex h-20 w-20 items-center justify-center"
        >
          <span className="animate-ripple absolute inset-0 rounded-full border border-white/60" />
          <span
            className="animate-ripple absolute inset-0 rounded-full border border-white/60"
            style={{ animationDelay: "1.25s" }}
          />
          <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white text-navy shadow-lg transition-transform duration-200 group-hover:scale-105">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-7 w-7">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </Link>

        <h2 className="mb-4 text-[38px] font-bold not-italic leading-[45.6px] text-white">
          Step Inside Nile University
        </h2>
        <p className="text-[19px] font-medium not-italic leading-[32.3px] text-gray-200">
          From historic halls to modern labs, discover what makes Nile University feel like
          home. This short video walks you through campus, one landmark at a time.
        </p>
      </Reveal>
    </section>
  )
}

export default AdmissionsCta
