import { useState } from "react"
import { Download, ExternalLink, Loader2 } from "lucide-react"
import Reveal from "./Reveal"
import FlipbookViewer from "./FlipbookViewer"

function EmailGate({
  reportLabel,
  leadEndpoint,
  onUnlock,
}: {
  reportLabel: string
  leadEndpoint: string
  onUnlock: () => void
}) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await fetch(leadEndpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ name, email }),
      })
    } catch (err) {
      console.error("Lead capture submission failed", err)
    } finally {
      onUnlock()
    }
  }

  return (
    <div className="mx-auto max-w-md rounded-lg border border-gray-200 bg-sand px-8 py-10 text-center">
      <h2 className="text-xl font-bold text-navy">Get instant access</h2>
      <p className="mt-2 text-[15px] leading-relaxed text-gray-600">
        Enter your details to view and download the {reportLabel}.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-3 text-left">
        <label className="block">
          <span className="sr-only">Full name</span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name*"
            className="w-full rounded border-none bg-white px-5 py-3.5 text-base text-gray-700 shadow-sm outline-none focus:ring-2 focus:ring-navy"
          />
        </label>
        <label className="block">
          <span className="sr-only">Email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email*"
            className="w-full rounded border-none bg-white px-5 py-3.5 text-base text-gray-700 shadow-sm outline-none focus:ring-2 focus:ring-navy"
          />
        </label>
        <button
          type="submit"
          disabled={submitting}
          className="flex w-full items-center justify-center gap-2 rounded bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light disabled:opacity-60"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Please wait…
            </>
          ) : (
            "Continue to download"
          )}
        </button>
      </form>
      <p className="mt-4 text-[15px] leading-relaxed text-gray-500">
        By submitting your prospectus request, please be aware that the information you have
        provided will be used to create a record within our enquiry system. You can find more
        information on how we process your personal data within our{" "}
        <a
          href="https://privacy.nileuniversity.edu.ng/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-navy underline hover:text-gold"
        >
          Privacy Policy
        </a>
        .
      </p>
    </div>
  )
}

function PdfReportPage({
  title,
  description,
  pdfSrc,
  reportLabel,
  fileSize,
  requireEmail,
  leadEndpoint,
  flipbook,
}: {
  title: string
  description: string
  pdfSrc: string
  reportLabel: string
  fileSize: string
  requireEmail?: boolean
  leadEndpoint?: string
  flipbook?: boolean
}) {
  const storageKey = `lead-unlocked:${pdfSrc}`
  const [unlocked, setUnlocked] = useState(() => {
    if (!requireEmail) return true
    try {
      return localStorage.getItem(storageKey) === "1"
    } catch {
      return false
    }
  })

  const handleUnlock = () => {
    setUnlocked(true)
    try {
      localStorage.setItem(storageKey, "1")
    } catch {
      // ignore storage errors (private browsing, etc.)
    }
  }

  return (
    <div>
      <div className="relative flex min-h-[320px] items-center overflow-hidden bg-navy py-14 md:min-h-[380px]">
        <img
          src="/Rising%20Sun.avif"
          alt=""
          className="pointer-events-none absolute inset-y-0 right-0 h-full w-auto max-w-none opacity-30"
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          <Reveal>
            <h1 className="font-extrabold text-[40px] leading-[44px] text-white md:text-[55px] md:leading-[60px]">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl font-normal text-[19px] leading-[30px] text-gray-100">
              {description}
            </p>
          </Reveal>
        </div>
      </div>

      <div
        className={`mx-auto px-6 py-14 md:px-10 md:py-20 ${flipbook ? "max-w-6xl" : "max-w-5xl"}`}
      >
        {!unlocked && requireEmail && leadEndpoint ? (
          <Reveal>
            <EmailGate reportLabel={reportLabel} leadEndpoint={leadEndpoint} onUnlock={handleUnlock} />
          </Reveal>
        ) : (
          <Reveal>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-gray-500">{reportLabel}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={pdfSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded border border-navy px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" strokeWidth={2} />
                  Open full screen
                </a>
                <a
                  href={pdfSrc}
                  download
                  className="inline-flex items-center gap-2 rounded bg-navy px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
                >
                  <Download className="h-4 w-4" strokeWidth={2} />
                  Download PDF
                </a>
              </div>
            </div>

            {flipbook ? (
              <FlipbookViewer pdfSrc={pdfSrc} reportLabel={reportLabel} />
            ) : (
              <>
                {/* Desktop / tablet: inline viewer */}
                <div className="hidden overflow-hidden rounded-lg border border-gray-200 shadow-sm sm:block">
                  <iframe
                    src={`${pdfSrc}#view=FitH`}
                    title={reportLabel}
                    className="h-[80vh] w-full"
                  />
                </div>

                {/* Mobile: viewer is unreliable, offer a clear entry point */}
                <a
                  href={pdfSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 rounded-lg border border-gray-200 bg-sand px-6 py-12 text-center sm:hidden"
                >
                  <ExternalLink className="h-8 w-8 text-navy" strokeWidth={1.75} />
                  <span className="text-base font-semibold text-navy">
                    View the {reportLabel}
                  </span>
                  <span className="text-sm text-gray-500">
                    Opens the PDF in your browser ({fileSize})
                  </span>
                </a>
              </>
            )}
          </Reveal>
        )}
      </div>
    </div>
  )
}

export default PdfReportPage
