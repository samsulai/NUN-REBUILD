import { undergraduatePrograms, postgraduatePrograms } from "./courses"

export type SearchEntry = {
  label: string
  to: string
  group: "Page" | "Undergraduate" | "Postgraduate"
}

const rawPages: SearchEntry[] = [
  { label: "Home", to: "/", group: "Page" },
  { label: "Academic Calendar", to: "/academic-calendar", group: "Page" },
  { label: "Alumni", to: "/alumni", group: "Page" },
  { label: "Blog", to: "/blog", group: "Page" },
  { label: "Contact Us", to: "/contact", group: "Page" },
  { label: "Cookie Policy", to: "/cookie-policy", group: "Page" },
  { label: "Download Prospectus", to: "/prospectus", group: "Page" },
  { label: "Employability Report", to: "/employability-report", group: "Page" },
  { label: "Fraud Disclaimer", to: "/fraud-disclaimer", group: "Page" },
  { label: "Honoris Impact Report 2025", to: "/honoris-impact-report", group: "Page" },
  { label: "Mystique Magazine", to: "/mystique-magazine", group: "Page" },
  { label: "News & Events", to: "/news", group: "Page" },
  { label: "Nile Consult & Services Ltd.", to: "https://nileconsultservices.com/", group: "Page" },
  { label: "Nile Online", to: "https://online.nileuniversity.edu.ng/", group: "Page" },
  { label: "Nile Welcome Booklet", to: "/welcome-booklet", group: "Page" },
  { label: "Organisation Chart", to: "/organisation-chart", group: "Page" },
  { label: "Our Partners", to: "/partners", group: "Page" },
  { label: "Postgraduate Courses", to: "/postgraduate", group: "Page" },
  { label: "Principal Officers", to: "/principal-officers", group: "Page" },
  { label: "Privacy Policy", to: "https://privacy.nileuniversity.edu.ng/", group: "Page" },
  { label: "Scholarships & Discounts", to: "/scholarships-discounts", group: "Page" },
  { label: "School of Preliminary Studies", to: "/sps", group: "Page" },
  { label: "SIWES", to: "/siwes", group: "Page" },
  { label: "Student Accommodation", to: "/student-accommodation", group: "Page" },
  { label: "Student Experience", to: "/student-services", group: "Page" },
  { label: "TEDx Nile University", to: "https://tedx.nileuniversity.edu.ng/", group: "Page" },
  { label: "Terms & Conditions", to: "/terms-conditions", group: "Page" },
  { label: "Tuition Fees", to: "/tuition-fees", group: "Page" },
  { label: "Undergraduate Courses", to: "/undergraduate", group: "Page" },
  { label: "Vice Chancellor's Welcome Message", to: "/vice-chancellors-welcome", group: "Page" },
  { label: "Virtual Tour", to: "/virtual-tour", group: "Page" },
]
export const sitePages: SearchEntry[] = [...rawPages].sort((a, b) =>
  a.label.localeCompare(b.label),
)

export const courseEntries: SearchEntry[] = [
  ...undergraduatePrograms.map((c) => ({
    label: c.name,
    to: `/courses/${c.slug}`,
    group: "Undergraduate" as const,
  })),
  ...postgraduatePrograms.map((c) => ({
    label: c.name,
    to: `/courses/${c.slug}`,
    group: "Postgraduate" as const,
  })),
].sort((a, b) => a.label.localeCompare(b.label))

export const searchIndex: SearchEntry[] = [...sitePages, ...courseEntries]
