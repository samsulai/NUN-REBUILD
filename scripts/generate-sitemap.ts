import { writeFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { undergraduatePrograms, postgraduatePrograms } from "../src/data/courses.ts"

const SITE_URL = "https://nileuniversity.edu.ng"

const staticRoutes: { path: string; priority: string; changefreq: string }[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/undergraduate", priority: "0.9", changefreq: "weekly" },
  { path: "/postgraduate", priority: "0.9", changefreq: "weekly" },
  { path: "/contact", priority: "0.7", changefreq: "monthly" },
  { path: "/virtual-tour", priority: "0.6", changefreq: "monthly" },
  { path: "/blog", priority: "0.6", changefreq: "weekly" },
  { path: "/news", priority: "0.6", changefreq: "weekly" },
  { path: "/principal-officers", priority: "0.5", changefreq: "monthly" },
  { path: "/vice-chancellors-welcome", priority: "0.5", changefreq: "monthly" },
  { path: "/organisation-chart", priority: "0.4", changefreq: "monthly" },
  { path: "/employability-report", priority: "0.5", changefreq: "yearly" },
  { path: "/honoris-impact-report", priority: "0.5", changefreq: "yearly" },
  { path: "/alumni", priority: "0.5", changefreq: "monthly" },
  { path: "/partners", priority: "0.6", changefreq: "monthly" },
  { path: "/academic-calendar", priority: "0.6", changefreq: "monthly" },
  { path: "/scholarships-discounts", priority: "0.7", changefreq: "monthly" },
  { path: "/prospectus", priority: "0.7", changefreq: "monthly" },
  { path: "/welcome-booklet", priority: "0.5", changefreq: "yearly" },
  { path: "/tuition-fees", priority: "0.8", changefreq: "monthly" },
  { path: "/student-accommodation", priority: "0.6", changefreq: "monthly" },
  { path: "/student-services", priority: "0.6", changefreq: "monthly" },
  { path: "/sps", priority: "0.7", changefreq: "monthly" },
  { path: "/terms-conditions", priority: "0.3", changefreq: "yearly" },
  { path: "/fraud-disclaimer", priority: "0.3", changefreq: "yearly" },
  { path: "/cookie-policy", priority: "0.3", changefreq: "yearly" },
  { path: "/sitemap", priority: "0.3", changefreq: "monthly" },
]

const courseSlugs = Array.from(
  new Set([...undergraduatePrograms, ...postgraduatePrograms].map((c) => c.slug)),
)

const today = new Date().toISOString().slice(0, 10)

const urlEntries = [
  ...staticRoutes.map(
    ({ path, priority, changefreq }) =>
      `  <url>\n    <loc>${SITE_URL}${path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
  ),
  ...courseSlugs.map(
    (slug) =>
      `  <url>\n    <loc>${SITE_URL}/courses/${slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>`,
  ),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries.join("\n")}\n</urlset>\n`

const outPath = fileURLToPath(new URL("../public/sitemap.xml", import.meta.url))
writeFileSync(outPath, xml)

console.log(`sitemap.xml written with ${staticRoutes.length} static pages + ${courseSlugs.length} course pages`)
