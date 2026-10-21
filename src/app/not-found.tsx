import Link from "next/link"

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 text-center md:px-10">
      <h1 className="mb-4 text-2xl font-bold text-gray-900">Page not found</h1>
      <p className="mb-6 text-[17px] leading-[27px] text-gray-500">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
      </p>
      <Link href="/" className="text-navy underline hover:text-navy-light">
        Back to home
      </Link>
    </div>
  )
}
