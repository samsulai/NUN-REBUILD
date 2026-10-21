import type { Metadata } from "next"
import BlogClient from "@/components/BlogClient"
import { getPosts, WP_CATEGORY } from "@/lib/wordpress"

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Blog",
  description: "Articles, stories, and updates from Nile University of Nigeria.",
}

export default async function Page() {
  const posts = await getPosts(WP_CATEGORY.blog)
  return <BlogClient posts={posts} />
}
