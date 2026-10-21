import Image from "next/image"
import Reveal from "./Reveal"

const items = [
  {
    tag: "News",
    image: "/l1.jpeg",
    date: "Jul 2026",
    headline: "Nile University places 3rd at the JAMB National Tertiary Admissions Performance Merit Awards",
  },
  {
    tag: "News",
    image: "/l2.jpeg",
    date: "Mar 2021",
    headline: "Nile University joins Honoris United Universities, Africa's largest private higher education network",
  },
  {
    tag: "News",
    image: "/l3.jpeg",
    date: "Jun 2026",
    headline: "Nile University medical graduates recognised by the UK General Medical Council",
  },
]

function News() {
  return (
    <section className="bg-gray-50 px-6 py-16 md:px-10">
      <Reveal>
        <div className="mx-auto flex max-w-7xl items-baseline justify-between">
          <h2 className="text-[48px] font-semibold not-italic leading-[48px] text-navy">Latest news and events</h2>
          <a href="#" className="text-lg text-gray-500 hover:text-navy">
            View all ›
          </a>
        </div>
      </Reveal>
      <div className="mx-auto mt-6 grid max-w-7xl gap-5 md:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.headline} delay={i * 100}>
            <div className="group">
              <div className="relative mb-3 h-64 overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute left-2 top-2 rounded bg-navy px-2 py-0.5 text-xs font-medium text-white">
                  {item.tag}
                </span>
              </div>
              <p className="mb-1 text-base text-gray-400">{item.date}</p>
              <p className="mb-2 text-lg font-medium leading-snug text-navy">
                {item.headline}
              </p>
              <a href="#" className="text-base text-gray-400 hover:text-navy">
                Read more
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default News
