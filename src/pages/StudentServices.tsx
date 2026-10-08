import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import Accordion from "../components/Accordion"
import Reveal from "../components/Reveal"
import CountUp from "../components/CountUp"
import { serviceStats, services } from "../data/studentServices"

function StudentServices() {
  return (
    <div>
      <div className="relative flex h-[360px] items-center overflow-hidden bg-navy md:h-[440px]">
        <img
          src="/student-center.webp"
          alt="Students greeting each other outside the Nile Student Center"
          className="absolute inset-0 h-full w-full object-cover [object-position:center_32%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          <Reveal>
            <h1 className="font-extrabold text-[40px] leading-[44px] text-white md:text-[55px] md:leading-[60px]">
              Student Services
            </h1>
            <p className="mt-4 max-w-2xl font-normal text-[19px] leading-[30px] text-gray-100">
              Your Journey. Our Support.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-16">
        <Reveal>
          <div className="space-y-5 text-[19px] leading-[30px] text-[#333435]">
            <p>
              University life is about more than earning a degree. It is a time of growth,
              self-discovery, leadership, lifelong friendships and preparation for the future.
              At Nile University of Nigeria, Student Services ensures every student has access
              to the support, opportunities, and experiences needed to thrive academically,
              personally, professionally, and socially.
            </p>
            <p>
              From student wellbeing and leadership development to career readiness,
              entrepreneurship, sports, accommodation, alumni engagement and campus life, we
              are committed to creating an enriching, inclusive and transformative student
              experience.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-4 border-t-2 border-navy pt-8">
          {services.map((card) => (
            <Reveal key={card.title}>
              <Accordion title={card.title}>
                        <div className="space-y-4 px-6 py-6 text-[19px] leading-[30px] text-[#333435]">
                          {card.paragraphs.map((p) => (
                            <p key={p.slice(0, 30)}>{p}</p>
                          ))}
                          {card.list && (
                            <div>
                              <h3 className="mb-3 text-[20px] font-bold text-navy">
                                {card.list.heading}
                              </h3>
                              <ul
                                className={
                                  card.list.columns
                                    ? "grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3"
                                    : "space-y-3"
                                }
                              >
                                {card.list.items.map((item) => (
                                  <li key={item.slice(0, 30)} className="flex gap-3">
                                    <span className="mt-[13px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-navy" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {card.closing && <p>{card.closing}</p>}
                          {card.details && (
                            <div className="border-l-4 border-navy bg-[#f8f9fb] px-5 py-4 text-[16px] leading-[27px]">
                              {card.details.note && <p className="mb-2">{card.details.note}</p>}
                              <dl className="space-y-1">
                                {card.details.location && (
                                  <div>
                                    <dt className="inline font-bold">Location: </dt>
                                    <dd className="inline">{card.details.location}</dd>
                                  </div>
                                )}
                                {card.details.email && (
                                  <div>
                                    <dt className="inline font-bold">{card.details.emailLabel ?? "Email"}: </dt>
                                    <dd className="inline">
                                      <a
                                        href={`mailto:${card.details.email}`}
                                        className="text-navy underline"
                                      >
                                        {card.details.email}
                                      </a>
                                    </dd>
                                  </div>
                                )}
                                {card.details.hours && (
                                  <div>
                                    <dt className="inline font-bold">Office Hours: </dt>
                                    <dd className="inline">{card.details.hours}</dd>
                                  </div>
                                )}
                              </dl>
                            </div>
                          )}
                          {card.to && (
                            <div>
                              {card.linkHeading && (
                                <h3 className="mb-2 text-[20px] font-bold text-navy">
                                  {card.linkHeading}
                                </h3>
                              )}
                              <Link
                                to={card.to}
                                className="inline-flex items-center gap-1.5 font-bold text-navy hover:text-gold"
                              >
                                {card.linkLabel ?? "Learn more"}
                                <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
                              </Link>
                            </div>
                          )}
                        </div>
                      </Accordion>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 bg-navy px-6 py-12 text-center text-white md:grid-cols-5">
            {serviceStats.map((stat, i) => (
              <div
                key={stat.label}
                className={i === serviceStats.length - 1 ? "col-span-2 md:col-span-1" : ""}
              >
                <div className="mb-2 text-[40px] font-semibold leading-[44px] md:text-[48px] md:leading-[52px]">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-[16px] leading-[24px] text-white/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default StudentServices
