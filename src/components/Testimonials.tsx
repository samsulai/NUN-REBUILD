import { useEffect, useRef, useState } from "react"
import { Play, X } from "lucide-react"
import Reveal from "./Reveal"
import { testimonials, toEmbedUrl, type Testimonial } from "../data/testimonials"

const DOT_COUNT = 3

function VideoModal({
  testimonial,
  onClose,
}: {
  testimonial: Testimonial
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  const embed = toEmbedUrl(testimonial.videoUrl)

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${testimonial.name} testimonial`}
    >
      <div
        className="animate-fade-in-up relative w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-10 right-0 text-white/80 transition-colors hover:text-white"
        >
          <X className="h-6 w-6" strokeWidth={2} />
        </button>
        <div className="aspect-video overflow-hidden rounded-lg bg-black">
          {embed ? (
            <iframe
              src={embed}
              title={`${testimonial.name} — ${testimonial.programme}`}
              className="h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-center text-white/80">
              <Play className="h-8 w-8" />
              <p className="text-sm">This testimonial video is coming soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState<Testimonial | null>(null)

  const handleScroll = () => {
    const track = trackRef.current
    if (!track) return
    const max = track.scrollWidth - track.clientWidth
    const frac = max > 0 ? track.scrollLeft / max : 0
    setActive(Math.round(frac * (DOT_COUNT - 1)))
  }

  const goTo = (i: number) => {
    const track = trackRef.current
    if (!track) return
    const max = track.scrollWidth - track.clientWidth
    track.scrollTo({ left: (max * i) / (DOT_COUNT - 1), behavior: "smooth" })
  }

  return (
    <section className="bg-[#f8f9fb] px-6 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="mb-4 text-[40px] font-semibold not-italic leading-tight text-navy md:text-[48px] md:leading-[48px]">
              Testimonials
            </h2>
            <p className="text-[16px] font-normal not-italic leading-[28.8px] text-gray-500">
              Graduates share how their years at Nile shaped the careers they are
              building today.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t) => (
              <button
                key={t.name}
                onClick={() => setPlaying(t)}
                className="group relative aspect-[4/3] w-[85%] shrink-0 snap-start overflow-hidden rounded-xl sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <img
                  src={t.poster}
                  alt={t.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-0.5 h-6 w-6 fill-current" strokeWidth={0} />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                  <p className="text-lg font-bold text-white">{t.name}</p>
                  <p className="text-sm text-white/80">{t.programme}</p>
                </div>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: DOT_COUNT }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => goTo(i)}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                i === active ? "bg-navy" : "bg-navy/25 hover:bg-navy/40"
              }`}
            />
          ))}
        </div>
      </div>

      {playing && (
        <VideoModal testimonial={playing} onClose={() => setPlaying(null)} />
      )}
    </section>
  )
}

export default Testimonials
