import { Link } from "react-router-dom"
import Reveal from "../components/Reveal"
import {
  aLevelScale,
  beforeYouApply,
  institutionDiscount,
  jambScale,
  pgScholarships,
  siblingDiscount,
  siblingNotes,
  sportGuidelines,
  sportIntro,
  ugConditions,
  ugIntro,
} from "../data/scholarships"

const sectionHeading =
  "font-semibold not-italic text-[35px] leading-[50px] text-navy"
const subHeading = "text-lg font-bold uppercase tracking-wide text-navy"
const body = "font-normal text-[17px] leading-[25.5px] text-gray-600"

function PercentCard({
  percent,
  title,
  detail,
}: {
  percent: string
  title: string
  detail: string
}) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-gray-200 p-6">
      <span className="text-4xl font-extrabold text-gold">{percent}</span>
      <h4 className="mt-2 text-lg font-bold text-navy">{title}</h4>
      <p className="mt-2 text-[17px] leading-[25.5px] text-gray-600">{detail}</p>
    </div>
  )
}

function Conditions({ items }: { items: string[] }) {
  return (
    <details className="mt-6 rounded-lg border border-gray-200 [&_summary]:cursor-pointer">
      <summary className="px-5 py-3 text-sm font-semibold text-navy marker:text-gold">
        Full eligibility conditions
      </summary>
      <ul className="space-y-3 border-t border-gray-100 px-5 py-4">
        {items.map((item) => (
          <li key={item.slice(0, 30)} className="flex gap-3 text-[17px] leading-[25.5px] text-gray-600">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
            {item}
          </li>
        ))}
      </ul>
    </details>
  )
}

function Scholarships() {
  return (
    <div>
      {/* Hero */}
      <div className="relative flex h-[300px] items-center overflow-hidden bg-navy md:h-[340px]">
        <img
          src="/Rising%20Sun.avif"
          alt=""
          className="pointer-events-none absolute inset-y-0 right-0 h-full w-auto max-w-none opacity-30"
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          <Reveal>
            <h1 className="font-extrabold text-[40px] leading-[44px] text-white md:text-[55px] md:leading-[60px]">
              Scholarships &amp; Discounts
            </h1>
            <p className="mt-3 font-normal text-[17px] leading-[25.5px] text-gray-100">
              Our scholarships and discounts policy for the 2026/2027 academic
              session.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-16">
        {/* Academic scholarships */}
        <Reveal>
          <h2 className={sectionHeading}>Academic Scholarships</h2>
        </Reveal>

        <Reveal>
          <div className="mt-8">
            <h3 className={subHeading}>Undergraduate programmes</h3>
            <p className={`mt-3 ${body}`}>{ugIntro}</p>

            <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
              <div className="bg-navy px-5 py-3 text-sm font-semibold text-white">
                All undergraduate programmes except Law &amp; Medicine
              </div>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200 text-xs uppercase tracking-wide text-gray-500">
                    <th className="px-5 py-3 font-semibold">Qualification</th>
                    <th className="px-5 py-3 text-right font-semibold">
                      Scholarship
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jambScale.map((row) => (
                    <tr
                      key={row.qualification}
                      className="border-b border-gray-100 last:border-0"
                    >
                      <td className="px-5 py-3 text-[17px] leading-[25.5px] text-gray-700">
                        {row.qualification}
                      </td>
                      <td className="px-5 py-3 text-right text-[17px] leading-[25.5px] font-bold text-navy">
                        {row.scholarship}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
                    <th className="px-5 py-3 font-semibold">A-Level result</th>
                    <th className="px-5 py-3 text-right font-semibold">
                      Nile SPS students
                    </th>
                    <th className="px-5 py-3 text-right font-semibold">
                      Other applicants
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {aLevelScale.map((row) => (
                    <tr key={row.result} className="border-b border-gray-100 last:border-0">
                      <td className="px-5 py-3 text-[17px] leading-[25.5px] text-gray-700">
                        {row.result}
                      </td>
                      <td className="px-5 py-3 text-right text-[17px] leading-[25.5px] font-bold text-navy">
                        {row.nileSps}
                      </td>
                      <td className="px-5 py-3 text-right text-[17px] leading-[25.5px] font-bold text-navy">
                        {row.others}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Conditions items={ugConditions} />
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12">
            <h3 className={subHeading}>Postgraduate programmes</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {pgScholarships.map((item) => (
                <PercentCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Sport scholarships */}
      <div className="bg-[#eef2fb] px-6 py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className={sectionHeading}>Sport Scholarships</h2>
            <div className="mt-6 flex flex-col gap-6 rounded-lg border border-gold/40 bg-white p-6 sm:flex-row sm:items-center">
              <span className="text-5xl font-extrabold text-gold">100%</span>
              <p className={body}>{sportIntro}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-8">
              <h3 className={subHeading}>Guidelines</h3>
              <ul className="mt-4 space-y-3">
                {sportGuidelines.map((item) => (
                  <li key={item.slice(0, 30)} className="flex gap-3 text-[17px] leading-[25.5px] text-gray-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Discounts */}
      <div className="mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-16">
        <Reveal>
          <h2 className={sectionHeading}>Discounts</h2>
        </Reveal>

        <Reveal>
          <div className="mt-8">
            <h3 className={subHeading}>Sibling discount</h3>
            <p className={`mt-3 ${body}`}>
              Parents with more than one child studying at Nile University receive
              a discount based on the number of children enrolled.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {siblingDiscount.map((row) => (
                <div key={row.children} className="rounded-lg border border-gray-200 p-4 text-center">
                  <span className="block text-2xl font-extrabold text-gold">
                    {row.discount}
                  </span>
                  <span className="mt-1 block text-xs text-gray-500">
                    {row.children}
                  </span>
                </div>
              ))}
            </div>
            <ul className="mt-5 space-y-2">
              {siblingNotes.map((note) => (
                <li key={note.slice(0, 30)} className="flex gap-3 text-[17px] leading-[25.5px] text-gray-500">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12">
            <h3 className={subHeading}>Postgraduate progression discount</h3>
            <div className="mt-6 flex flex-col gap-4 rounded-lg border border-gray-200 p-6 sm:flex-row sm:items-center">
              <span className="text-4xl font-extrabold text-gold">10%</span>
              <p className={body}>
                Parents of current undergraduate or postgraduate students at NILE
                who enrol in a postgraduate programme receive a 10% discount on
                their tuition.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12">
            <h3 className={subHeading}>Institutional sponsorship discount</h3>
            <p className={`mt-3 ${body}`}>
              Institutions or bodies sponsoring applicants to Nile&rsquo;s
              postgraduate programmes receive a discount based on the number of
              students enrolling within the current academic session.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {institutionDiscount.map((row) => (
                <div key={row.applicants} className="rounded-lg border border-gray-200 p-4 text-center">
                  <span className="block text-2xl font-extrabold text-gold">
                    {row.discount}
                  </span>
                  <span className="mt-1 block text-xs text-gray-500">
                    {row.applicants}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Before you apply */}
      <div className="bg-[#eef2fb] px-6 py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className={sectionHeading}>Before you apply</h2>
            <ul className="mt-6 space-y-4">
              {beforeYouApply.map((item) => (
                <li key={item.slice(0, 30)} className="flex gap-3 text-[17px] leading-[25.5px] text-gray-600">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-navy" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-navy px-6 py-16 text-center md:px-10 md:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to apply?
            </h2>
            <p className="mt-4 font-normal text-[17px] leading-[25.5px] text-gray-200">
              Speak to our admissions team about the scholarship or discount you
              may qualify for.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block border-l-[6px] border-gold bg-white px-6 py-3 text-base font-semibold text-navy transition-colors hover:bg-sand"
            >
              Contact Admissions
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Scholarships
