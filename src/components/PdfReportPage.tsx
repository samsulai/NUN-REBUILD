import { Download, ExternalLink } from "lucide-react"
import Reveal from "./Reveal"

function PdfReportPage({
  title,
  description,
  pdfSrc,
  reportLabel,
  fileSize,
}: {
  title: string
  description: string
  pdfSrc: string
  reportLabel: string
  fileSize: string
}) {
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
            <p className="mt-4 max-w-2xl text-[17px] leading-[30px] text-gray-100">
              {description}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-20">
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
        </Reveal>
      </div>
    </div>
  )
}

export default PdfReportPage
