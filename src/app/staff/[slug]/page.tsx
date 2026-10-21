import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Building2, Mail, MapPin, User } from "lucide-react"
import { notFound } from "next/navigation"
import Reveal from "@/components/Reveal"
import { getAllStaffSlugs } from "@/data/staff"
import { getStaffBySlug } from "@/lib/wordpress"

const proseClasses =
  "space-y-3 [&_p]:m-0 font-normal text-[20px] leading-[32px] text-[#7A7A7A] [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-navy [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-navy [&_a]:text-navy [&_a]:underline [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-6 [&_strong]:font-semibold [&_strong]:text-navy"

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail
  label: string
  value: string
  href?: string
}) {
  const valueNode = href ? (
    <a href={href} className="break-words text-[15px] text-gray-600 hover:text-navy">
      {value}
    </a>
  ) : (
    <span className="text-[15px] text-gray-600">{value}</span>
  )

  return (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded border border-gray-200">
        <Icon className="h-5 w-5 text-navy" strokeWidth={1.75} />
      </div>
      <div>
        <p className="font-semibold text-[15px] text-navy">{label}</p>
        {valueNode}
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return getAllStaffSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const person = await getStaffBySlug(slug)
  if (!person) return {}
  return {
    title: person.name,
    description: person.designation
      ? `${person.name}, ${person.designation}${person.department ? ` in ${person.department}` : ""} at Nile University of Nigeria.`
      : `${person.name} at Nile University of Nigeria.`,
    alternates: { canonical: `/staff/${slug}` },
  }
}

export default async function StaffProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const person = await getStaffBySlug(slug)
  if (!person) notFound()

  const hasBio = person.bio.trim().length > 0
  const hasPublications = person.publications.trim().length > 0
  const hasCourses = person.courses.trim().length > 0
  const hasContact = Boolean(person.email || person.office || person.department)

  return (
    <div>
      <div className="relative flex min-h-[260px] items-center overflow-hidden bg-navy py-14 md:min-h-[300px]">
        <Image
          src="/Rising Sun.avif"
          alt=""
          fill
          sizes="100vw"
          priority
          className="pointer-events-none object-contain object-right opacity-30"
        />
        <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
          <Reveal>
            <p className="mb-4 text-sm text-gray-300">
              <Link href="/" className="hover:text-gold-light">
                Home
              </Link>{" "}
              <span className="mx-1">›</span>{" "}
              <Link href="/staff" className="hover:text-gold-light">
                Faculty Staff
              </Link>{" "}
              <span className="mx-1">›</span> <span className="text-white">{person.name}</span>
            </p>
            <h1 className="font-extrabold text-[32px] leading-[40px] text-white md:text-[46px] md:leading-[52px]">
              {person.name}
            </h1>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-16">
        <div className="grid gap-12 md:grid-cols-[320px_1fr]">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-100 shadow-md">
              {person.image ? (
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="320px"
                  className="object-cover object-top"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <User className="h-16 w-16 text-gray-300" strokeWidth={1.5} />
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div>
              {person.designation && (
                <p className="text-[15px] font-semibold uppercase tracking-wide text-gold">
                  {person.designation}
                </p>
              )}
              <h2 className="mt-1 font-extrabold text-[28px] leading-[36px] text-navy md:text-[32px]">
                {person.name}
              </h2>

              {hasContact && (
                <div className="mt-8 space-y-6">
                  {person.email && (
                    <ContactRow
                      icon={Mail}
                      label="Email Address"
                      value={person.email}
                      href={`mailto:${person.email}`}
                    />
                  )}
                  {person.office && <ContactRow icon={MapPin} label="Office" value={person.office} />}
                  {person.department && (
                    <ContactRow icon={Building2} label="Department" value={person.department} />
                  )}
                </div>
              )}
            </div>
          </Reveal>
        </div>

        <div className="mt-16 space-y-14">
          {hasBio && (
            <Reveal>
              <div className="border-t border-gray-200 pt-10">
                <h2 className="mb-5 font-extrabold text-[22px] text-navy">Biography</h2>
                <div className={proseClasses} dangerouslySetInnerHTML={{ __html: person.bio }} />
              </div>
            </Reveal>
          )}

          {hasCourses && (
            <Reveal>
              <div className="border-t border-gray-200 pt-10">
                <h2 className="mb-5 font-extrabold text-[22px] text-navy">
                  Courses &amp; Modules Taught
                </h2>
                <div className={proseClasses} dangerouslySetInnerHTML={{ __html: person.courses }} />
              </div>
            </Reveal>
          )}

          {hasPublications && (
            <Reveal>
              <div className="border-t border-gray-200 pt-10">
                <h2 className="mb-5 font-extrabold text-[22px] text-navy">Publications</h2>
                <div
                  className={proseClasses}
                  dangerouslySetInnerHTML={{ __html: person.publications }}
                />
              </div>
            </Reveal>
          )}

          {!hasBio && !hasPublications && !hasCourses && (
            <p className="border-t border-gray-200 pt-10 text-gray-500">
              No further details are available for this staff member yet.
            </p>
          )}
        </div>

        <div className="mt-14 border-t border-gray-200 pt-8">
          <Link href="/staff" className="font-semibold text-navy underline hover:text-navy-light">
            ← Back to Faculty Staff
          </Link>
        </div>
      </div>
    </div>
  )
}
