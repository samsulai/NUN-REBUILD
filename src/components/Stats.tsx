import { useEffect, useState } from "react"
import { useInView } from "../hooks/useInView"

const stats = [
  { value: 13000, suffix: "+", label: "Alumni" },
  { value: 100, suffix: "+", label: "Degree programmes" },
  { value: 17, suffix: "+", label: "Years of excellence" },
  { value: 80, suffix: "%", label: "Employability rate" },
]

function StatItem({
  value,
  suffix,
  label,
  inView,
  bordered,
}: {
  value: number
  suffix: string
  label: string
  inView: boolean
  bordered: string
}) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value)
      return
    }

    let frame: number
    let start: number | null = null
    const duration = 1600

    const step = (timestamp: number) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <div className={`px-4 py-8 ${bordered}`}>
      <div className="mb-2 text-4xl font-bold text-navy md:text-5xl">
        {display.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm text-gray-500 md:text-base">{label}</div>
    </div>
  )
}

function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section className="bg-sand px-6 py-14 text-center md:px-10">
      <h2 className="mb-8 text-[48px] font-semibold not-italic leading-[48px] text-navy">
        Our achievements at a glance
      </h2>
      <div
        ref={ref}
        className="mx-auto grid max-w-5xl grid-cols-2 overflow-hidden rounded-lg border border-gray-200 bg-white md:grid-cols-4"
      >
        {stats.map((stat, i) => {
          const bordered = `${
            i !== stats.length - 1 ? "border-b border-gray-100 md:border-b-0 md:border-r" : ""
          } ${i % 2 === 0 ? "border-r border-gray-100 md:border-r" : ""}`
          return (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              inView={inView}
              bordered={bordered}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Stats
