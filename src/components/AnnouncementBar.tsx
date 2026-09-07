import { useEffect, useState } from "react"
import { X } from "lucide-react"

// Bump the version when the message changes so a dismissed bar reappears.
const ANNOUNCEMENT_VERSION = "2026-09-admissions"
const STORAGE_KEY = "announcement-dismissed"

function AnnouncementBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      setVisible(localStorage.getItem(STORAGE_KEY) !== ANNOUNCEMENT_VERSION)
    } catch {
      setVisible(true)
    }
  }, [])

  if (!visible) return null

  const dismiss = () => {
    setVisible(false)
    try {
      localStorage.setItem(STORAGE_KEY, ANNOUNCEMENT_VERSION)
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="relative bg-navy px-10 py-3 text-center text-white">
      <p className="font-semibold text-[14px] leading-[14px] tracking-wide">
        Admission for the September 2026 cohort is ongoing.{" "}
        <a
          href="#"
          className="underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-light"
        >
          Apply Now!
        </a>
      </p>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
      >
        <X className="h-4 w-4" strokeWidth={2.5} />
      </button>
    </div>
  )
}

export default AnnouncementBar
