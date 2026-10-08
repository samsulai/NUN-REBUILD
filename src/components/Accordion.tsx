import { useState, type ReactNode } from "react"
import { ChevronDown } from "lucide-react"

function Accordion({
  title,
  children,
  defaultOpen,
}: {
  title: ReactNode
  children: ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen ?? false)

  return (
    <div className="border border-navy/20 border-b-2 border-b-navy">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between bg-[#eef2fb] px-6 py-5 text-left text-xl font-bold text-navy"
      >
        {title}
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div
          className={`overflow-hidden transition-[opacity,visibility] duration-300 ease-out motion-reduce:transition-none ${
            open ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Accordion
