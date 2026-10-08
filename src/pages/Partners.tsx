import Accordion from "../components/Accordion"
import Reveal from "../components/Reveal"
import { partnerGroups, type Partner } from "../data/partners"

function PartnerTile({ partner }: { partner: Partner }) {
  const inner = (
    <>
      <div className="flex flex-1 items-center justify-center">
        <img
          src={partner.logo}
          alt={partner.name}
          title={partner.name}
          loading="lazy"
          className="max-h-32 max-w-[92%] object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <p className="min-h-[2.5rem] pt-2 text-center text-[13px] font-semibold leading-snug text-gray-800 sm:text-[14px]">
        {partner.name}
      </p>
    </>
  )

  const className =
    "group flex h-full min-h-[14rem] flex-col rounded-lg border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-navy/40 hover:shadow-md"

  return partner.url ? (
    <a href={partner.url} target="_blank" rel="noopener noreferrer" className={className}>
      {inner}
    </a>
  ) : (
    <div className={className}>{inner}</div>
  )
}

function Partners() {
  return (
    <div>
      {/* Hero */}
      <div className="relative flex h-[360px] items-center overflow-hidden bg-navy md:h-[420px]">
        <img
          src="/Rising%20Sun.avif"
          alt=""
          className="pointer-events-none absolute inset-y-0 right-0 h-full w-auto max-w-none opacity-30"
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          <Reveal>
            <h1 className="font-extrabold text-[40px] leading-[44px] text-white md:text-[55px] md:leading-[60px]">
              Nile University Partners
            </h1>
            <p className="mt-4 max-w-2xl text-[19px] leading-[30px] text-gray-100">
              Our network of global partners shapes how we teach, research, and
              prepare graduates for the world of work.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="space-y-4">
          {partnerGroups.map((group, gi) => (
            <Accordion
              key={group.heading}
              defaultOpen={gi === 0}
              title={
                <span className="flex items-center gap-3">
                  {group.heading}
                  <span className="rounded-full bg-navy/10 px-2.5 py-0.5 text-sm font-semibold text-navy">
                    {group.partners.length}
                  </span>
                </span>
              }
            >
              <div className="px-6 py-8">
                <p className="max-w-3xl text-[15px] leading-relaxed text-[#333435]">
                  {group.blurb}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
                  {group.partners.map((partner, i) => (
                    <Reveal key={partner.name} delay={(i % 4) * 60}>
                      <PartnerTile partner={partner} />
                    </Reveal>
                  ))}
                </div>
              </div>
            </Accordion>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-navy px-6 py-16 text-center md:px-10 md:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Partner with Nile University
            </h2>
            <p className="mt-4 text-[19px] leading-[30px] text-gray-200">
              We welcome academic institutions, employers, and organisations
              interested in research collaboration, student opportunities, and
              knowledge exchange.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-block border-l-[6px] border-gold bg-white px-6 py-3 text-base font-semibold text-navy transition-colors hover:bg-sand"
            >
              Get in touch
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Partners
