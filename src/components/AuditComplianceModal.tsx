import { useEffect, useRef } from "react"
import { X } from "lucide-react"

const altText =
  "Nile University of Nigeria Ltd — NDPR Audit Compliant 2024 trustmark, issued by the Nigeria Data Protection Commission."

function AuditComplianceModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus({ preventScroll: true })
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[70] flex overflow-y-auto bg-black/65 p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Audit Compliance"
        className="animate-fade-in-up relative m-auto w-fit max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-xl bg-white p-2.5 shadow-2xl md:p-3">
          <button
            ref={closeRef}
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white shadow-lg transition-transform hover:scale-105"
          >
            <X className="h-5 w-5" strokeWidth={2.5} />
          </button>
          <img
            src="/audit-compliance-trustmark.avif"
            alt={altText}
            width={1809}
            height={2560}
            className="block max-h-[75vh] w-auto max-w-full"
          />
        </div>
        <a
          href="/audit-compliance-trustmark.avif"
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

export default AuditComplianceModal
