import type { Metadata } from "next"
import CoursesListClient from "@/components/CoursesListClient"
import { getAllCourses } from "@/lib/wordpress"

export const metadata: Metadata = {
  alternates: { canonical: "/undergraduate" },
  title: "Undergraduate Courses",
  description: "Browse the undergraduate degree programmes offered at Nile University of Nigeria.",
}

export default async function Page() {
  const courses = await getAllCourses()
  const undergraduate = courses.filter((c) => c.level === "undergraduate")
  return <CoursesListClient level="undergraduate" courses={undergraduate} />
}
