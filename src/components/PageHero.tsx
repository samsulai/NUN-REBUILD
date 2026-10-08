import { Link } from "react-router-dom"
import Reveal from "./Reveal"

function PageHero({
  crumb,
  title,
  description,
  maxWidth = "max-w-5xl",
}: {
  crumb?: string
  title: string
  description?: string
  maxWidth?: string
}) {
  return (
    <div className="bg-gray-200 px-6 py-12 md:px-10">
      <div className={`mx-auto ${maxWidth}`}>
        <Reveal>
          {crumb && (
            <p className="mb-3 text-sm text-gray-500">
              <Link to="/" className="hover:text-navy">
                Home
              </Link>{" "}
              <span className="mx-1">›</span> {crumb}
            </p>
          )}
          <h1 className="mb-3 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-[19px] leading-[30px] text-[#333435]">{description}</p>
          )}
        </Reveal>
      </div>
    </div>
  )
}

export default PageHero
