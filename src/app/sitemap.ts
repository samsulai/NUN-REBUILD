import type { MetadataRoute } from "next"
import { getAllCourses, getPosts, getPostsPage, NEWS_PAGE_SIZE, WP_CATEGORY } from "@/lib/wordpress"

const SITE_URL = "https://nileuniversity.edu.ng"

const staticRoutes: {
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
}[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/undergraduate", priority: 0.9, changeFrequency: "weekly" },
  { path: "/postgraduate", priority: 0.9, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/virtual-tour", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/news", priority: 0.6, changeFrequency: "weekly" },
  { path: "/principal-officers", priority: 0.5, changeFrequency: "monthly" },
  { path: "/vice-chancellors-welcome", priority: 0.5, changeFrequency: "monthly" },
  { path: "/organisation-chart", priority: 0.4, changeFrequency: "monthly" },
  { path: "/employability-report", priority: 0.5, changeFrequency: "yearly" },
  { path: "/honoris-impact-report", priority: 0.5, changeFrequency: "yearly" },
  { path: "/alumni", priority: 0.5, changeFrequency: "monthly" },
  { path: "/partners", priority: 0.6, changeFrequency: "monthly" },
  { path: "/academic-calendar", priority: 0.6, changeFrequency: "monthly" },
  { path: "/scholarships-discounts", priority: 0.7, changeFrequency: "monthly" },
  { path: "/prospectus", priority: 0.7, changeFrequency: "monthly" },
  { path: "/welcome-booklet", priority: 0.5, changeFrequency: "yearly" },
  { path: "/tuition-fees", priority: 0.8, changeFrequency: "monthly" },
  { path: "/student-accommodation", priority: 0.6, changeFrequency: "monthly" },
  { path: "/student-services", priority: 0.6, changeFrequency: "monthly" },
  { path: "/sps", priority: 0.7, changeFrequency: "monthly" },
  { path: "/siwes", priority: 0.5, changeFrequency: "monthly" },
  { path: "/mystique-magazine", priority: 0.4, changeFrequency: "monthly" },
  { path: "/terms-conditions", priority: 0.3, changeFrequency: "yearly" },
  { path: "/fraud-disclaimer", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/sitemap", priority: 0.3, changeFrequency: "monthly" },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const [courses, newsPosts, blogPosts, newsFirstPage] = await Promise.all([
    getAllCourses(),
    getPosts(WP_CATEGORY.news),
    getPosts(WP_CATEGORY.blog),
    getPostsPage(WP_CATEGORY.news, 1, NEWS_PAGE_SIZE),
  ])
  const courseSlugs = Array.from(new Set(courses.map((c) => c.slug)))
  const newsListPages = Array.from({ length: newsFirstPage.totalPages - 1 }, (_, i) => i + 2)

  return [
    ...staticRoutes.map((r) => ({
      url: `${SITE_URL}${r.path}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...courseSlugs.map((slug) => ({
      url: `${SITE_URL}/courses/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...newsListPages.map((p) => ({
      url: `${SITE_URL}/news?page=${p}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.4,
    })),
    ...newsPosts.map((post) => ({
      url: `${SITE_URL}/news/${post.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ]
}
