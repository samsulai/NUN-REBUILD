import { useEffect, useMemo, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowRight, Search, X } from "lucide-react"
import { searchIndex, type SearchEntry } from "../data/siteIndex"

const groupLabel: Record<SearchEntry["group"], string> = {
  Page: "Page",
  Undergraduate: "Undergraduate",
  Postgraduate: "Postgraduate",
}

function highlight(label: string, query: string) {
  const idx = label.toLowerCase().indexOf(query.toLowerCase())
  if (idx === -1) return label
  return (
    <>
      {label.slice(0, idx)}
      <mark className="rounded-sm bg-gold/30 text-white">
        {label.slice(idx, idx + query.length)}
      </mark>
      {label.slice(idx + query.length)}
    </>
  )
}

function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("")
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    const scored = searchIndex
      .map((entry) => {
        const label = entry.label.toLowerCase()
        let score = -1
        if (label === q) score = 0
        else if (label.startsWith(q)) score = 1
        else if (label.includes(q)) score = 2
        return { entry, score }
      })
      .filter((r) => r.score >= 0)
      .sort((a, b) => a.score - b.score || a.entry.label.localeCompare(b.entry.label))
    return scored.map((r) => r.entry).slice(0, 8)
  }, [query])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  useEffect(() => {
    if (!open) return
    setQuery("")
    const frame = requestAnimationFrame(() => inputRef.current?.focus())
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open) return null

  const go = (entry: SearchEntry) => {
    onClose()
    if (entry.to.startsWith("http")) {
      window.open(entry.to, "_blank", "noopener,noreferrer")
    } else {
      navigate(entry.to)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (results.length === 0) return
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveIndex((i) => (i + 1) % results.length)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIndex((i) => (i - 1 + results.length) % results.length)
    } else if (e.key === "Enter") {
      e.preventDefault()
      const entry = results[activeIndex]
      if (entry) go(entry)
    }
  }

  return (
    <div
      className="animate-fade-in fixed inset-0 z-[90] flex flex-col overflow-y-auto bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close search"
        onClick={onClose}
        className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white md:right-10 md:top-8"
      >
        <X className="h-6 w-6" strokeWidth={2} />
      </button>

      <div
        className="m-auto w-full max-w-2xl px-6 py-24"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-4 border-b-2 border-white/25 pb-4 focus-within:border-gold">
          <Search className="h-7 w-7 shrink-0 text-white/50" strokeWidth={1.75} />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search…"
            className="w-full bg-transparent py-1 text-[26px] font-semibold not-italic text-white outline-none placeholder:text-white/35 md:text-[34px]"
          />
        </div>

        {query.trim() !== "" && (
          <div className="mt-6">
            {results.length === 0 ? (
              <p className="text-[17px] text-white/50">No results for &ldquo;{query}&rdquo;.</p>
            ) : (
              <ul className="space-y-1">
                {results.map((entry, i) => (
                  <li key={entry.to + entry.label}>
                    <button
                      type="button"
                      onClick={() => go(entry)}
                      onMouseEnter={() => setActiveIndex(i)}
                      className={`group flex w-full items-center justify-between gap-4 rounded-lg px-4 py-3.5 text-left transition-colors ${
                        i === activeIndex ? "bg-white/10" : "hover:bg-white/5"
                      }`}
                    >
                      <span className="truncate text-[18px] font-medium text-white">
                        {highlight(entry.label, query)}
                      </span>
                      <span className="flex flex-shrink-0 items-center gap-2">
                        <span className="text-[12px] font-semibold uppercase tracking-wide text-gold-light">
                          {groupLabel[entry.group]}
                        </span>
                        <ArrowRight
                          className={`h-4 w-4 text-white/40 transition-transform duration-150 ${
                            i === activeIndex ? "translate-x-0.5 text-white" : ""
                          }`}
                          strokeWidth={2.25}
                        />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchOverlay
