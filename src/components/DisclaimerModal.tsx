import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { X } from "lucide-react"

const altText =
  "Disclaimer. Dear members of the public, please be advised that: 1. The application process for the academic programmes and hostels at Nile University of Nigeria is completely free. We do not charge for application form or any part of our application process. Only Applicants applying for the EMBA Program will be required to pay an application fee. 2. We do not have any authorized agents to issue or sell admission forms, or to collect tuition, hostel or other payments on our behalf. All payments including admission and hostel are conducted online via the official university portals. 3. Nile University of Nigeria is not liable for any financial or other loss arising from dealings with unauthorised persons or channels. www.nileuniversity.edu.ng"

function DisclaimerModal() {
  const { pathname } = useLocation()
  const eligiblePage = pathname === "/" || pathname.startsWith("/sps")
  const [open, setOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!eligiblePage) return
    const id = setTimeout(() => setOpen(true), 500)
    return () => clearTimeout(id)
  }, [eligiblePage])

  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus({ preventScroll: true })
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close()
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[70] flex overflow-y-auto bg-black/65 p-4"
      onClick={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Disclaimer"
        className="animate-fade-in-up relative m-auto w-fit max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-xl bg-navy p-2.5 shadow-2xl md:p-3">
          <button
            ref={closeRef}
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy shadow-lg transition-transform hover:scale-105"
          >
            <X className="h-5 w-5" strokeWidth={2.5} />
          </button>
          <img
            src="/disclaimer.webp"
            alt={altText}
            width={1600}
            height={2000}
            className="block max-h-[55vh] w-auto max-w-full"
          />
        </div>
        <a
          href="/disclaimer.webp"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block text-center text-[14px] text-white/90 underline underline-offset-4 hover:text-white"
        >
          View full size
        </a>
      </div>
    </div>
  )
}

export default DisclaimerModal
