const WP_BASE = "https://nileuniversity.edu.ng/wp-json/wp/v2"

export const WP_CATEGORY = {
  news: 1,
  blog: 47,
} as const

export const NEWS_PAGE_SIZE = 12

type WPRendered = { rendered: string }

type WPRawPost = {
  slug: string
  date: string
  title: WPRendered
  excerpt: WPRendered
  content?: WPRendered
  categories: number[]
  author: number
  featured_media: number
}

type WPRawPostEmbedded = WPRawPost & {
  yoast_head_json?: {
    description?: string
    og_image?: { url: string }[]
  }
  _embedded?: {
    "wp:featuredmedia"?: { source_url?: string }[]
    author?: { name?: string }[]
  }
}

export type Post = {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  image: string
  seoDescription: string
  ogImage: string
}

const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  "#39": "'",
  apos: "'",
  nbsp: " ",
  hellip: "…",
  lsquo: "‘",
  rsquo: "’",
  ldquo: "“",
  rdquo: "”",
  mdash: "—",
  ndash: "–",
}

function decodeEntities(input: string): string {
  return input.replace(/&(#\d+|#x[0-9a-f]+|[a-z]+);/gi, (match, code) => {
    if (code[0] === "#") {
      const codePoint =
        code[1]?.toLowerCase() === "x" ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10)
      return Number.isNaN(codePoint) ? match : String.fromCodePoint(codePoint)
    }
    return ENTITIES[code.toLowerCase()] ?? match
  })
}

export function stripHtml(html: string): string {
  return decodeEntities(html.replace(/<[^>]*>/g, "")).replace(/\s+/g, " ").trim()
}

/** Strips font-family/font-size from inline `style` attributes so pasted-in WordPress content
 * (often carrying a copied editor's font stack) can't override the site's Milliard/Lato type. */
function stripInlineFontStyles(html: string): string {
  return html.replace(/style="([^"]*)"/gi, (_match, style: string) => {
    const cleaned = style
      .replace(/font-family\s*:[^;]*;?/gi, "")
      .replace(/font-size\s*:[^;]*;?/gi, "")
      .trim()
    return cleaned ? `style="${cleaned}"` : ""
  })
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

async function wpFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${WP_BASE}${path}`, { next: { revalidate: 3600 } })
    if (!res.ok) return null
    return (await res.json()) as T
  } catch {
    return null
  }
}

async function wpFetchWithHeaders<T>(
  path: string
): Promise<{ data: T; totalPages: number; total: number } | null> {
  try {
    const res = await fetch(`${WP_BASE}${path}`, { next: { revalidate: 3600 } })
    if (!res.ok) return null
    const data = (await res.json()) as T
    return {
      data,
      totalPages: Number(res.headers.get("X-WP-TotalPages") ?? "1"),
      total: Number(res.headers.get("X-WP-Total") ?? "0"),
    }
  } catch {
    return null
  }
}

/** Resolves featured-image URLs and author names for a batch of posts via small, targeted
 * bulk lookups instead of `_embed` — avoids pulling WordPress's full media object (every
 * registered thumbnail size, which this site's image-optimization plugin inflates a lot). */
async function resolveMediaAndAuthors(
  posts: WPRawPost[]
): Promise<{ images: Map<number, string>; authors: Map<number, string> }> {
  const mediaIds = Array.from(new Set(posts.map((p) => p.featured_media).filter((id) => id > 0)))
  const authorIds = Array.from(new Set(posts.map((p) => p.author).filter((id) => id > 0)))

  const [media, authors] = await Promise.all([
    mediaIds.length
      ? wpFetch<{ id: number; source_url: string }[]>(
          `/media?include=${mediaIds.join(",")}&per_page=${mediaIds.length}&_fields=id,source_url`
        )
      : Promise.resolve([]),
    authorIds.length
      ? wpFetch<{ id: number; name: string }[]>(
          `/users?include=${authorIds.join(",")}&per_page=${authorIds.length}&_fields=id,name`
        )
      : Promise.resolve([]),
  ])

  return {
    images: new Map((media ?? []).map((m) => [m.id, m.source_url])),
    authors: new Map((authors ?? []).map((a) => [a.id, a.name])),
  }
}

function mapListPost(
  raw: WPRawPost,
  images: Map<number, string>,
  authors: Map<number, string>
): Post {
  return {
    slug: raw.slug,
    title: decodeEntities(raw.title.rendered),
    excerpt: stripHtml(raw.excerpt.rendered),
    content: "",
    date: formatDate(raw.date),
    author: authors.get(raw.author) ?? "Nile University of Nigeria",
    image: images.get(raw.featured_media) ?? "/kdqcmr9vp8hfuf.jpg",
    seoDescription: stripHtml(raw.excerpt.rendered),
    ogImage: images.get(raw.featured_media) ?? "/og-image.jpg",
  }
}

function mapDetailPost(raw: WPRawPostEmbedded): Post {
  const media = raw._embedded?.["wp:featuredmedia"]?.[0]
  const author = raw._embedded?.author?.[0]

  return {
    slug: raw.slug,
    title: decodeEntities(raw.title.rendered),
    excerpt: stripHtml(raw.excerpt.rendered),
    content: stripInlineFontStyles(raw.content?.rendered ?? ""),
    date: formatDate(raw.date),
    author: author?.name ?? "Nile University of Nigeria",
    image: media?.source_url ?? "/kdqcmr9vp8hfuf.jpg",
    seoDescription: raw.yoast_head_json?.description ?? stripHtml(raw.excerpt.rendered),
    ogImage: raw.yoast_head_json?.og_image?.[0]?.url ?? media?.source_url ?? "/og-image.jpg",
  }
}

const LIST_FIELDS = "slug,date,title,excerpt,categories,author,featured_media"
const WP_MAX_PER_PAGE = 100

async function fetchListBatch(path: string): Promise<{ posts: Post[]; totalPages: number; total: number }> {
  const result = await wpFetchWithHeaders<WPRawPost[]>(path)
  if (!result || result.data.length === 0) return { posts: [], totalPages: 1, total: 0 }
  const { images, authors } = await resolveMediaAndAuthors(result.data)
  return {
    posts: result.data.map((raw) => mapListPost(raw, images, authors)),
    totalPages: result.totalPages,
    total: result.total,
  }
}

/** Fetches every post in a category, looping past WordPress's 100-per-request cap. Use only for
 * things that need the full set (generateStaticParams, sitemap, the Blog archive's small list). */
export async function getPosts(category: number): Promise<Post[]> {
  const all: Post[] = []
  let page = 1
  while (true) {
    const { posts, totalPages } = await fetchListBatch(
      `/posts?categories=${category}&per_page=${WP_MAX_PER_PAGE}&page=${page}&_fields=${LIST_FIELDS}`
    )
    if (posts.length === 0) break
    all.push(...posts)
    if (page >= totalPages) break
    page += 1
  }
  return all
}

/** True server-side pagination via WordPress's own `page`/`per_page` params — fetches only
 * the requested page's posts, so cost stays constant no matter how large the archive grows. */
export async function getPostsPage(
  category: number,
  page: number,
  perPage: number
): Promise<{ posts: Post[]; totalPages: number; total: number }> {
  return fetchListBatch(
    `/posts?categories=${category}&per_page=${perPage}&page=${page}&_fields=${LIST_FIELDS}`
  )
}

export async function getPostBySlug(slug: string, category: number): Promise<Post | null> {
  const raw = await wpFetch<WPRawPostEmbedded[]>(
    `/posts?slug=${encodeURIComponent(slug)}&_embed=1`
  )
  const post = raw?.[0]
  if (!post || !post.categories.includes(category)) return null
  return mapDetailPost(post)
}

type WPRawStaff = {
  slug: string
  title: WPRendered
  content: WPRendered
  featured_media: number
  acf: {
    designation?: string
    department?: string
    email_address?: string
    office?: string
    recent_publications?: string
    courses_and_modules_?: string
  }
}

export type StaffProfile = {
  slug: string
  name: string
  bio: string
  designation: string
  department: string
  email: string
  office: string
  publications: string
  courses: string
  image: string | null
}

function mapStaffProfile(raw: WPRawStaff, imageUrl: string | null): StaffProfile {
  return {
    slug: raw.slug,
    name: decodeEntities(raw.title.rendered),
    bio: stripInlineFontStyles(raw.content?.rendered ?? ""),
    designation: decodeEntities(raw.acf.designation ?? "").trim(),
    department: decodeEntities(raw.acf.department ?? "").trim(),
    email: raw.acf.email_address ?? "",
    office: decodeEntities(raw.acf.office ?? "").trim(),
    publications: stripInlineFontStyles(raw.acf.recent_publications ?? ""),
    courses: stripInlineFontStyles(raw.acf.courses_and_modules_ ?? ""),
    image: imageUrl,
  }
}

export async function getStaffBySlug(slug: string): Promise<StaffProfile | null> {
  const raw = await wpFetch<WPRawStaff[]>(
    `/staff?slug=${encodeURIComponent(slug)}&_fields=slug,title,content,featured_media,acf`
  )
  const person = raw?.[0]
  if (!person) return null

  let imageUrl: string | null = null
  if (person.featured_media > 0) {
    const media = await wpFetch<{ source_url?: string }>(
      `/media/${person.featured_media}?_fields=source_url`
    )
    imageUrl = media?.source_url ?? null
  }

  return mapStaffProfile(person, imageUrl)
}

export type CourseLevel = "undergraduate" | "postgraduate"

export type CourseSummary = {
  slug: string
  title: string
  facultyName: string
  facultySlug: string
  level: CourseLevel
  image: string
  description: string
}

export type CourseProfile = {
  slug: string
  title: string
  courseName: string
  facultyName: string
  facultySlug: string
  level: CourseLevel
  startDate: string
  duration: string
  fees: string
  missionVision: string
  educationalObjectives: string
  learningObjectives: string
  entryRequirements: string
  howTaught: string
  furtherStudy: string
  careerSupport: string
  image: string | null
}

type WPTaxonomyTerm = { id: number; slug: string; name: string }

type WPRawCourseListItem = {
  slug: string
  title: WPRendered
  content: WPRendered
  course_faculty: number[]
  course_level: number[]
  featured_media: number
  acf: {
    featured_text?: string
    "mission_vision_&_course_philosophy"?: string
  }
}

type WPRawCourseDetail = {
  slug: string
  title: WPRendered
  content: WPRendered
  course_faculty: number[]
  course_level: number[]
  featured_media: number
  acf: {
    start_date?: string
    duration?: string
    fees_per_session?: string
    course_name?: string
    "mission_vision_&_course_philosophy"?: string
    program_educational_objectives?: string
    program_learning_objectives?: string
    what_are_the_entry_requirements?: string
    how_will_i_be_taught?: string
    further_study?: string
    what_is_the_career_support?: string
  }
}

const DEFAULT_COURSE_IMAGE = "/kdqcmr9vp8hfuf.jpg"

function truncateAtWord(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  const cut = text.slice(0, maxLength)
  const lastSpace = cut.lastIndexOf(" ")
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : maxLength)}…`
}

function courseDescription(
  acf: { featured_text?: string; "mission_vision_&_course_philosophy"?: string },
  content: string,
  title: string
): string {
  const featured = stripHtml(acf.featured_text ?? "")
  if (featured) return truncateAtWord(featured, 180)
  const fromContent = stripHtml(content)
  if (fromContent) return truncateAtWord(fromContent, 180)
  const fromMission = stripHtml(acf["mission_vision_&_course_philosophy"] ?? "")
  if (fromMission) return truncateAtWord(fromMission, 180)
  return `Learn more about ${title} at Nile University of Nigeria.`
}

let courseTaxonomyCache: Promise<{
  faculties: Map<number, WPTaxonomyTerm>
  levels: Map<number, CourseLevel>
}> | null = null

function getCourseTaxonomies() {
  if (!courseTaxonomyCache) {
    courseTaxonomyCache = (async () => {
      const [facultyTerms, levelTerms] = await Promise.all([
        wpFetch<WPTaxonomyTerm[]>("/course_faculty?per_page=100&_fields=id,slug,name"),
        wpFetch<WPTaxonomyTerm[]>("/course_level?per_page=100&_fields=id,slug,name"),
      ])
      return {
        faculties: new Map((facultyTerms ?? []).map((t) => [t.id, t])),
        levels: new Map(
          (levelTerms ?? []).map((t) => [t.id, t.slug as CourseLevel])
        ),
      }
    })()
  }
  return courseTaxonomyCache
}

const COURSE_MAX_PER_PAGE = 100

export async function getAllCourses(): Promise<CourseSummary[]> {
  const [taxonomies] = await Promise.all([getCourseTaxonomies()])
  const { faculties, levels } = taxonomies

  const all: WPRawCourseListItem[] = []
  let page = 1
  while (true) {
    const result = await wpFetchWithHeaders<WPRawCourseListItem[]>(
      `/courses?per_page=${COURSE_MAX_PER_PAGE}&page=${page}&_fields=slug,title,content,course_faculty,course_level,featured_media,acf`
    )
    if (!result || result.data.length === 0) break
    all.push(...result.data)
    if (page >= result.totalPages) break
    page += 1
  }

  const mediaIds = Array.from(
    new Set(all.map((c) => c.featured_media).filter((id) => id > 0))
  )
  const media = mediaIds.length
    ? await wpFetch<{ id: number; source_url: string }[]>(
        `/media?include=${mediaIds.join(",")}&per_page=${mediaIds.length}&_fields=id,source_url`
      )
    : []
  const imageMap = new Map((media ?? []).map((m) => [m.id, m.source_url]))

  return all
    .map((raw) => {
      const facultyTerm = raw.course_faculty.map((id) => faculties.get(id)).find(Boolean)
      const level = raw.course_level.map((id) => levels.get(id)).find(Boolean) ?? "undergraduate"
      return {
        slug: raw.slug,
        title: decodeEntities(raw.title.rendered),
        facultyName: facultyTerm ? decodeEntities(facultyTerm.name) : "",
        facultySlug: facultyTerm?.slug ?? "",
        level,
        image: imageMap.get(raw.featured_media) ?? DEFAULT_COURSE_IMAGE,
        description: courseDescription(
          raw.acf,
          raw.content?.rendered ?? "",
          decodeEntities(raw.title.rendered)
        ),
      }
    })
    .sort((a, b) => a.title.localeCompare(b.title))
}

export async function getCourseBySlug(slug: string): Promise<CourseProfile | null> {
  const [taxonomies, raw] = await Promise.all([
    getCourseTaxonomies(),
    wpFetch<WPRawCourseDetail[]>(`/courses?slug=${encodeURIComponent(slug)}`),
  ])
  const course = raw?.[0]
  if (!course) return null

  const { faculties, levels } = taxonomies
  const facultyTerm = course.course_faculty.map((id) => faculties.get(id)).find(Boolean)
  const level = course.course_level.map((id) => levels.get(id)).find(Boolean) ?? "undergraduate"

  let imageUrl: string | null = null
  if (course.featured_media > 0) {
    const media = await wpFetch<{ source_url?: string }>(
      `/media/${course.featured_media}?_fields=source_url`
    )
    imageUrl = media?.source_url ?? null
  }

  const acf = course.acf

  /** Prefer the post's own body (written as a normal description for most courses) over the
   * ACF "Mission, Vision & Course Philosophy" field, which is empty or a leftover editor
   * artifact for many courses — falls back to it only when there's no real post content. */
  const postContent = course.content?.rendered ?? ""
  const description =
    stripHtml(postContent).length > 0 ? postContent : acf["mission_vision_&_course_philosophy"] ?? ""

  return {
    slug: course.slug,
    title: decodeEntities(course.title.rendered),
    courseName: decodeEntities(acf.course_name ?? "").trim(),
    facultyName: facultyTerm ? decodeEntities(facultyTerm.name) : "",
    facultySlug: facultyTerm?.slug ?? "",
    level,
    startDate: decodeEntities(acf.start_date ?? "").trim(),
    duration: decodeEntities(acf.duration ?? "").trim(),
    fees: decodeEntities(acf.fees_per_session ?? "").trim(),
    missionVision: stripInlineFontStyles(description),
    educationalObjectives: stripInlineFontStyles(acf.program_educational_objectives ?? ""),
    learningObjectives: stripInlineFontStyles(acf.program_learning_objectives ?? ""),
    entryRequirements: stripInlineFontStyles(acf.what_are_the_entry_requirements ?? ""),
    howTaught: stripInlineFontStyles(acf.how_will_i_be_taught ?? ""),
    furtherStudy: stripInlineFontStyles(acf.further_study ?? ""),
    careerSupport: stripInlineFontStyles(acf.what_is_the_career_support ?? ""),
    image: imageUrl,
  }
}
