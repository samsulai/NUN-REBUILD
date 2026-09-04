import Reveal from "../components/Reveal"

function VirtualTour() {
  return (
    <div>
      <Reveal>
        <div className="h-[85vh] w-full">
          <iframe
            title="Nile University virtual campus tour"
            src="https://tours.dobiison.com/CampusVisit/NileUniversity/index.html"
            className="h-full w-full border-0"
            allow="accelerometer; gyroscope; xr-spatial-tracking"
            allowFullScreen
          />
        </div>
      </Reveal>
    </div>
  )
}

export default VirtualTour
