import Image from "next/image"
import Reveal from "./Reveal"

function PhotoHero({
  image,
  title,
  subtitle,
  height = "h-[360px] md:h-[420px]",
}: {
  image: string
  title: string
  subtitle?: string
  height?: string
}) {
  return (
    <div
      className={`relative flex ${height} items-center justify-center overflow-hidden bg-navy px-6 text-center`}
    >
      <Image src={image} alt="" fill sizes="100vw" priority className="object-cover" />
      <div className="absolute inset-0 bg-navy/70" />
      <Reveal>
        <div className="relative">
          <h1 className="text-4xl font-bold text-white md:text-6xl">{title}</h1>
          {subtitle && (
            <p className="mt-3 text-lg uppercase tracking-widest text-gray-200">{subtitle}</p>
          )}
        </div>
      </Reveal>
    </div>
  )
}

export default PhotoHero
