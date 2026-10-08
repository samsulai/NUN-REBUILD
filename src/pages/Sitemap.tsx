import { Link } from "react-router-dom"
import Reveal from "../components/Reveal"
import { undergraduatePrograms, postgraduatePrograms } from "../data/courses"

type SitemapLink = { label: string; to: string }

const pages: SitemapLink[] = [
  { label: "Home", to: "/" },
  { label: "Academic Calendar", to: "/academic-calendar" },
  { label: "Alumni", to: "/alumni" },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
  { label: "Cookie Policy", to: "/cookie-policy" },
  { label: "Download Prospectus", to: "/prospectus" },
  { label: "Employability Report", to: "/employability-report" },
  { label: "Fraud Disclaimer", to: "/fraud-disclaimer" },
  { label: "Honoris Impact Report 2025", to: "/honoris-impact-report" },
  { label: "Mystique Magazine", to: "/mystique-magazine" },
  { label: "News & Events", to: "/news" },
  { label: "Nile Consult & Services Ltd.", to: "https://nileconsultservices.com/" },
  { label: "Nile Online", to: "https://online.nileuniversity.edu.ng/" },
  { label: "Nile Welcome Booklet", to: "/welcome-booklet" },
  { label: "Organisation Chart", to: "/organisation-chart" },
  { label: "Our Partners", to: "/partners" },
  { label: "Postgraduate Courses", to: "/postgraduate" },
  { label: "Principal Officers", to: "/principal-officers" },
  { label: "Privacy Policy", to: "https://privacy.nileuniversity.edu.ng/" },
  { label: "Scholarships & Discounts", to: "/scholarships-discounts" },
  { label: "School of Preliminary Studies", to: "/sps" },
  { label: "SIWES", to: "/siwes" },
  { label: "Student Accommodation", to: "/student-accommodation" },
  { label: "Student Experience", to: "/student-services" },
  { label: "TEDx Nile University", to: "https://tedx.nileuniversity.edu.ng/" },
  { label: "Terms & Conditions", to: "/terms-conditions" },
  { label: "Tuition Fees", to: "/tuition-fees" },
  { label: "Undergraduate Courses", to: "/undergraduate" },
  { label: "Vice Chancellor's Welcome Message", to: "/vice-chancellors-welcome" },
  { label: "Virtual Tour", to: "/virtual-tour" },
].sort((a, b) => a.label.localeCompare(b.label))

const courses: SitemapLink[] = [...undergraduatePrograms, ...postgraduatePrograms]
  .map((c) => ({ label: c.name, to: `/courses/${c.slug}` }))
  .sort((a, b) => a.label.localeCompare(b.label))

function LinkList({ items }: { items: SitemapLink[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => {
        const isExternal = item.to.startsWith("http")
        return (
          <li key={item.label} className="flex items-start gap-3">
            <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 bg-gold" />
            {isExternal ? (
              <a
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[19px] leading-[30px] text-[#333435] hover:text-navy hover:underline"
              >
                {item.label}
              </a>
            ) : (
              <Link
                to={item.to}
                className="text-[19px] leading-[30px] text-[#333435] hover:text-navy hover:underline"
              >
                {item.label}
              </Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}

function Sitemap() {
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
              Sitemap
            </h1>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
        <Reveal>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-[34px] font-bold text-navy">Academic Programmes</h2>
              <LinkList items={courses} />
            </div>
            <div>
              <h2 className="mb-6 text-[34px] font-bold text-navy">Site Pages</h2>
              <LinkList items={pages} />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Sitemap
