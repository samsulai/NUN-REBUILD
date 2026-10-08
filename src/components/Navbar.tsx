import { useState } from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { ChevronDown, Search, X } from "lucide-react"
import logo from "../assets/nile-logo.svg"

type DropdownLink = { label: string; to: string | null }
type DropdownColumn = { heading: string; links: DropdownLink[] }
type Dropdown = { columns: DropdownColumn[] }
type NavLink = { label: string; to: string | null; dropdown?: Dropdown }

const aboutDropdown: Dropdown = {
  columns: [
    {
      heading: "Leadership & reports",
      links: [
        { label: "Vice Chancellor's Welcome Message", to: "/vice-chancellors-welcome" },
        { label: "Organisation Chart", to: "/organisation-chart" },
        { label: "Principal Officers", to: "/principal-officers" },
        { label: "Faculty Staff", to: null },
        { label: "Employability Report", to: "/employability-report" },
        { label: "Honoris Impact Report 2025", to: "/honoris-impact-report" },
      ],
    },
    {
      heading: "Community",
      links: [
        { label: "Honoris United Universities", to: null },
        { label: "Alumni", to: "/alumni" },
        { label: "Nile Community", to: null },
        { label: "TEDx Nile University", to: "https://tedx.nileuniversity.edu.ng/" },
        { label: "Our Partners", to: "/partners" },
        { label: "Virtual Tour", to: "/virtual-tour" },
      ],
    },
  ],
}

const studyDropdown: Dropdown = {
  columns: [
    {
      heading: "Admissions & programmes",
      links: [
        { label: "Screen Now (Undergraduate Screening Portal)", to: null },
        { label: "Apply Now (Postgraduate)", to: null },
        { label: "Undergraduate Courses", to: "/undergraduate" },
        { label: "Postgraduate Courses", to: "/postgraduate" },
        { label: "School of Preliminary Studies", to: "/sps" },
        { label: "Nile Consult & Services Ltd.", to: "https://nileconsultservices.com/" },
        { label: "Nile Online", to: "https://online.nileuniversity.edu.ng/" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Tuition Fees", to: "/tuition-fees" },
        { label: "Download Prospectus", to: "/prospectus" },
        { label: "Nile Welcome Booklet", to: "/welcome-booklet" },
        { label: "Scholarships & Discounts", to: "/scholarships-discounts" },
        { label: "Academic Calendar", to: "/academic-calendar" },
        { label: "SIWES", to: "/siwes" },
        { label: "Student Information System", to: null },
      ],
    },
  ],
}

const studentLifeDropdown: Dropdown = {
  columns: [
    {
      heading: "Student experience",
      links: [
        { label: "Virtual Tour", to: "/virtual-tour" },
        { label: "Student Experience", to: "/student-services" },
        { label: "Student Accommodation", to: "/student-accommodation" },
      ],
    },
    {
      heading: "Resources & activities",
      links: [
        { label: "Student Handbook", to: null },
        { label: "Clubs & Activities", to: null },
        { label: "Mystique Magazine", to: "/mystique-magazine" },
      ],
    },
  ],
}

const applyLinks: DropdownLink[] = [
  { label: "SPS", to: "/sps" },
  { label: "Undergraduate", to: "/undergraduate" },
  { label: "Postgraduate", to: "/postgraduate" },
]

const links: NavLink[] = [
  { label: "About Nile", to: null, dropdown: aboutDropdown },
  { label: "Study & admissions", to: null, dropdown: studyDropdown },
  { label: "Campus Life", to: null, dropdown: studentLifeDropdown },
  { label: "News & media", to: "/news" },
  { label: "Contact us", to: "/contact" },
  { label: "Blog", to: "/blog" },
]

const spsLinks: NavLink[] = [
  { label: "Programme Structure", to: null },
  { label: "Pay Fees", to: null },
  { label: "Apply Now", to: null },
  { label: "Sign In", to: null },
]

function Navbar() {
  const { pathname } = useLocation()
  const isSps = pathname.startsWith("/sps")
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState("")

  return (
    <header
      className="sticky top-0 z-50 border-b border-gray-200 bg-white"
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        <Link to="/">
          <img
            src={isSps ? "/sps-logo.avif" : logo}
            alt={isSps ? "Nile University School of Preliminary Studies" : "Nile University of Nigeria"}
            className={isSps ? "h-10 w-auto md:h-12" : "h-10 w-auto md:h-11"}
          />
        </Link>

        <nav className="hidden items-center gap-6 text-[20px] font-medium not-italic leading-[30px] text-gray-600 lg:flex">
          {(isSps ? spsLinks : links).map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(link.dropdown ? link.label : null)}
            >
              {link.to ? (
                <Link
                  to={link.to}
                  className="relative flex items-center gap-1 py-1 transition-colors hover:text-navy after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href="#"
                  className="relative flex items-center gap-1 py-1 transition-colors hover:text-navy after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openMenu === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>
              )}

              {link.dropdown && openMenu === link.label && (
                <div className="animate-fade-in-up absolute left-0 top-full z-50 pt-4">
                  <div className="flex divide-x divide-gray-200 whitespace-nowrap border border-gray-100 bg-white shadow-xl">
                    {link.dropdown.columns.map((col) => (
                      <div key={col.heading} className="px-8 py-8">
                        <h3 className="mb-4 text-base font-bold text-navy">{col.heading}</h3>
                        <ul className="space-y-6">
                          {col.links.map((item) => {
                            const linkClass =
                              "not-italic font-normal text-[16px] leading-[28px] text-[#333435] hover:text-navy"
                            const isExternal = item.to?.startsWith("http")
                            return (
                              <li key={item.label}>
                                {isExternal ? (
                                  <a
                                    href={item.to as string}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={linkClass}
                                  >
                                    {item.label}
                                  </a>
                                ) : item.to ? (
                                  <Link to={item.to} className={linkClass}>
                                    {item.label}
                                  </Link>
                                ) : (
                                  <a href="#" className={linkClass}>
                                    {item.label}
                                  </a>
                                )}
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label={searchOpen ? "Close search" : "Open search"}
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((v) => !v)}
            className="hidden text-navy transition-colors hover:text-gold lg:block"
          >
            {searchOpen ? (
              <X className="h-[22px] w-[22px]" strokeWidth={2.5} />
            ) : (
              <Search className="h-[22px] w-[22px]" strokeWidth={2.5} />
            )}
          </button>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("Apply now")}
          >
            {!isSps && (
              <a
                href="#"
                className="flex items-center gap-1 rounded bg-navy px-5 py-2.5 text-base font-medium text-white transition-all hover:scale-105 hover:bg-navy-light"
              >
                Apply now
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openMenu === "Apply now" ? "rotate-180" : ""
                  }`}
                />
              </a>
            )}

            {!isSps && openMenu === "Apply now" && (
              <div className="animate-fade-in-up absolute right-0 top-full z-50 pt-4">
                <ul className="w-56 space-y-1 border border-gray-100 bg-white/90 p-3 shadow-xl backdrop-blur-md">
                  {applyLinks.map((item) => {
                    const linkClass =
                      "block rounded px-3 py-2 not-italic font-normal text-[16px] leading-[28px] text-[#333435] transition-colors hover:bg-sand hover:text-navy"
                    return (
                      <li key={item.label}>
                        {item.to ? (
                          <Link to={item.to} className={linkClass}>
                            {item.label}
                          </Link>
                        ) : (
                          <a href="#" className={linkClass}>
                            {item.label}
                          </a>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {searchOpen && (
        <div className="animate-fade-in-up border-t border-gray-100 bg-white">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSearchOpen(false)
            }}
            className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-4 md:px-10"
          >
            <Search className="h-5 w-5 shrink-0 text-gray-400" strokeWidth={1.75} />
            <input
              autoFocus
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Nile University…"
              className="w-full bg-transparent py-1 text-[17px] not-italic text-navy outline-none placeholder:text-gray-400"
            />
          </form>
        </div>
      )}
    </header>
  )
}

export default Navbar
