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
          className="max-h-20 max-w-[88%] object-contain opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
        />
      </div>
      <p className="line-clamp-2 min-h-[2rem] text-center text-xs leading-snug text-gray-500">
        {partner.name}
      </p>
    </>
  )

  const className =
    "group flex h-44 flex-col rounded-lg border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md"

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
            <p className="mt-4 max-w-2xl text-[17px] leading-[30px] text-gray-100">
              Our network of global partners shapes how we teach, research, and
              prepare graduates for the world of work.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        {partnerGroups.map((group, gi) => (
          <section key={group.heading} className={gi > 0 ? "mt-20" : ""}>
            <Reveal>
              <h2 className="text-[28px] font-semibold not-italic leading-tight text-navy md:text-[36px]">
                {group.heading}
              </h2>
              <span className="mt-3 block h-1 w-14 rounded bg-gold" />
              <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-gray-600">
                {group.blurb}
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
              {group.partners.map((partner, i) => (
                <Reveal key={partner.name} delay={(i % 4) * 60}>
                  <PartnerTile partner={partner} />
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-navy px-6 py-16 text-center md:px-10 md:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Partner with Nile University
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-200">
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
