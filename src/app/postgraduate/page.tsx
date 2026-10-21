import type { Metadata } from "next"
import CoursesListClient from "@/components/CoursesListClient"
import { getAllCourses } from "@/lib/wordpress"

export const metadata: Metadata = {
  alternates: { canonical: "/postgraduate" },
  title: "Postgraduate Courses",
  description: "Browse the postgraduate degree programmes offered at Nile University of Nigeria.",
}

export default async function Page() {
  const courses = await getAllCourses()
  const postgraduate = courses.filter((c) => c.level === "postgraduate")
  return <CoursesListClient level="postgraduate" courses={postgraduate} />
}
