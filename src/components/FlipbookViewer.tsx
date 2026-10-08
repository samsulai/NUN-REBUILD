import { useEffect, useRef, useState } from "react"
import HTMLFlipBook from "react-pageflip"
import { GlobalWorkerOptions, getDocument } from "pdfjs-dist"
import pdfWorkerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url"
import { Loader2 } from "lucide-react"

GlobalWorkerOptions.workerSrc = pdfWorkerSrc

function FlipbookViewer({ pdfSrc, reportLabel }: { pdfSrc: string; reportLabel: string }) {
  const [numPages, setNumPages] = useState(0)
  const [ready, setReady] = useState(false)
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([])

  useEffect(() => {
    let cancelled = false

    async function renderPdf() {
      const pdf = await getDocument({ url: pdfSrc }).promise
      if (cancelled) return
      setNumPages(pdf.numPages)

      await new Promise((resolve) => requestAnimationFrame(resolve))

      for (let i = 1; i <= pdf.numPages; i++) {
        if (cancelled) return
        const page = await pdf.getPage(i)
        const viewport = page.getViewport({ scale: 1.6 })
        const canvas = canvasRefs.current[i - 1]
        if (!canvas) continue
        canvas.width = viewport.width
        canvas.height = viewport.height
        const context = canvas.getContext("2d")
        if (!context) continue
        await page.render({ canvasContext: context, viewport, canvas }).promise
      }

      if (!cancelled) setReady(true)
    }

    renderPdf()
    return () => {
      cancelled = true
    }
  }, [pdfSrc])

  if (numPages === 0) {
    return (
      <div className="flex h-[70vh] flex-col items-center justify-center gap-3 text-gray-400">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="text-sm">Loading {reportLabel}…</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center py-6">
      {!ready && (
        <p className="mb-4 flex items-center gap-2 text-sm text-gray-400">
          <Loader2 className="h-4 w-4 animate-spin" />
          Rendering pages…
        </p>
      )}
      <HTMLFlipBook
        width={500}
        height={700}
        size="stretch"
        minWidth={280}
        maxWidth={900}
        minHeight={400}
        maxHeight={1200}
        maxShadowOpacity={0.5}
        showCover
        mobileScrollSupport
        drawShadow
        flippingTime={700}
        usePortrait
        startZIndex={0}
        autoSize
        startPage={0}
        clickEventForward
        useMouseEvents
        swipeDistance={30}
        showPageCorners
        disableFlipByClick={false}
        className="shadow-2xl"
        style={{}}
      >
        {Array.from({ length: numPages }).map((_, i) => (
          <div key={i} className="flex items-center justify-center bg-white">
            <canvas
              ref={(el) => {
                canvasRefs.current[i] = el
              }}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  )
}

export default FlipbookViewer
