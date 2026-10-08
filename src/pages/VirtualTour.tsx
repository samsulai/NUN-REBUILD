import { useState } from "react"
import { Play } from "lucide-react"
import Reveal from "../components/Reveal"

function VirtualTour() {
  const [started, setStarted] = useState(false)

  return (
    <div>
      <Reveal>
        <div className="relative h-[85vh] w-full bg-navy">
          {started ? (
            <iframe
              title="Nile University virtual campus tour"
              src="https://tours.dobiison.com/CampusVisit/NileUniversity/index.html"
              className="h-full w-full border-0"
              allow="accelerometer; gyroscope; xr-spatial-tracking"
              allowFullScreen
            />
          ) : (
            <>
              <img
                src="/campus-aerial.webp"
                alt="Aerial view of the Nile University campus"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
              <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-6 md:px-10">
                <div className="max-w-xl text-white">
                  <h1 className="mb-4 text-[40px] font-extrabold leading-[44px] md:text-[55px] md:leading-[60px]">
                    Take a virtual tour of our campus
                  </h1>
                  <p className="mb-8 text-[19px] leading-[30px] text-gray-100">
                    Explore our facilities, faculties and campus life from anywhere in the world,
                    before you visit in person.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStarted(true)}
                    className="inline-flex items-center gap-3 border-l-[6px] border-gold bg-white px-6 py-3 text-base font-semibold text-navy transition-colors hover:bg-sand"
                  >
                    <Play className="h-4 w-4 fill-current" />
                    Start virtual tour
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </Reveal>
    </div>
  )
}

export default VirtualTour
