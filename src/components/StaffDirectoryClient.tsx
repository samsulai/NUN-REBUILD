"use client"

import { useMemo, useState } from "react"
import { Search, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Accordion from "@/components/Accordion"
import Reveal from "@/components/Reveal"
import { staffFaculties, type StaffPerson } from "@/data/staff"

function StaffCard({ member, context }: { member: StaffPerson; context?: string }) {
  const content = (
    <div className="flex flex-col text-center">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-100 shadow-md">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <User className="h-12 w-12 text-gray-300" strokeWidth={1.5} />
          </div>
        )}
      </div>
      <h3 className="mt-4 font-semibold text-[24px] leading-[32px] text-navy">{member.name}</h3>
      <p className="mt-1 font-normal text-[16px] leading-[32px] text-[#333435] [font-family:var(--font-manrope)]">
        {member.title}
      </p>
      {context && (
        <p className="mt-1 text-[13px] font-medium uppercase tracking-wide text-gold">{context}</p>
      )}
    </div>
  )

  if (member.slug) {
    return (
      <Link href={`/staff/${member.slug}`} className="block transition-opacity hover:opacity-80">
        {content}
      </Link>
    )
  }

  return content
}

/** Rows of 3 or fewer get a 3-column grid (bigger cards filling the row), matching how the
 * live site sizes short leadership rows. Larger groups keep the denser 4-column grid. */
function gridColsClass(count: number) {
  if (count <= 3) return "grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
  return "grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
}

type FlatMatch = { member: StaffPerson; context: string }

function StaffDirectoryClient() {
  const [query, setQuery] = useState("")

  const allMatches = useMemo((): FlatMatch[] => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    const results: FlatMatch[] = []
    for (const faculty of staffFaculties) {
      for (const member of faculty.leadership) {
        if (member.name.toLowerCase().includes(q)) {
          results.push({ member, context: faculty.heading })
        }
      }
      for (const dept of faculty.departments) {
        for (const member of dept.members) {
          if (member.name.toLowerCase().includes(q)) {
            results.push({ member, context: `${faculty.heading} · ${dept.name}` })
          }
        }
      }
    }
    return results
  }, [query])

  const isSearching = query.trim().length > 0

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
      <div className="mb-12 max-w-md">
        <div className="flex items-center gap-2 rounded border border-gray-300 px-4 py-2.5">
          <Search className="h-4 w-4 flex-shrink-0 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for staff by name..."
            className="w-full text-sm text-gray-700 outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      {isSearching ? (
        allMatches.length === 0 ? (
          <p className="text-center text-base text-gray-500">No staff match your search.</p>
        ) : (
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {allMatches.map(({ member, context }, i) => (
              <Reveal key={`${member.slug ?? member.name}-${context}`} delay={(i % 4) * 80}>
                <StaffCard member={member} context={context} />
              </Reveal>
            ))}
          </div>
        )
      ) : (
        <div className="space-y-4">
          {staffFaculties.map((faculty, fi) => {
            const total =
              faculty.leadership.length +
              faculty.departments.reduce((sum, d) => sum + d.members.length, 0)
            return (
              <Accordion
                key={faculty.heading}
                defaultOpen={fi === 0}
                title={
                  <span className="flex items-center gap-3">
                    {faculty.heading}
                    <span className="rounded-full bg-navy/10 px-2.5 py-0.5 text-sm font-semibold text-navy">
                      {total}
                    </span>
                  </span>
                }
              >
                <div className="px-6 py-8">
                  {faculty.leadership.length > 0 && (
                    <div className={gridColsClass(faculty.leadership.length)}>
                      {faculty.leadership.map((member, i) => (
                        <Reveal key={member.slug ?? member.name} delay={(i % 4) * 80}>
                          <StaffCard member={member} />
                        </Reveal>
                      ))}
                    </div>
                  )}

                  {faculty.departments.map((dept) => (
                    <div key={dept.name} className="mt-10 first:mt-0">
                      <h3 className="mb-6 border-t border-gray-200 pt-8 text-sm font-bold uppercase tracking-wide text-navy first:border-t-0 first:pt-0">
                        {dept.name}
                      </h3>
                      <div className={gridColsClass(dept.members.length)}>
                        {dept.members.map((member, i) => (
                          <Reveal key={member.slug ?? member.name} delay={(i % 4) * 80}>
                            <StaffCard member={member} />
                          </Reveal>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Accordion>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default StaffDirectoryClient
