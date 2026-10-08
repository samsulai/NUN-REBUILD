import Reveal from "../components/Reveal"
import { newsItems } from "../data/newsItems"

function NewsEvents() {
  const featured = newsItems.find((item) => item.featured) ?? newsItems[0]
  const rest = newsItems.filter((item) => item !== featured)

  return (
    <div>
      <div className="relative flex min-h-[320px] items-center overflow-hidden bg-navy py-12 md:min-h-[380px]">
        <img
          src="/uni-partners.avif"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          <Reveal>
            <h1 className="font-extrabold text-[40px] leading-[44px] text-white md:text-[55px] md:leading-[60px]">
              Nile University's News and Events
            </h1>
            <p className="mt-4 max-w-3xl font-normal text-[19px] leading-[30px] text-gray-100">
              Learn about the latest happenings and the many on and off-campus
              activities that Nile's staff and students participate in.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
        <Reveal>
          <article className="grid gap-8 md:grid-cols-[3fr_2fr] md:gap-12">
            <a href="#" className="group block overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full max-h-[520px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </a>
            <div className="flex flex-col justify-center">
              <p className="mb-3 italic font-medium text-[15px] leading-[28px] uppercase tracking-widest text-gold">
                {featured.tag}
              </p>
              <h2 className="mb-5 font-bold uppercase text-[28px] leading-[36px] text-navy">
                <a href="#" className="transition-colors hover:opacity-80">
                  {featured.title}
                </a>
              </h2>
              <p className="mb-8 line-clamp-4 text-[19px] leading-[30px] text-[#333435]">
                {featured.excerpt}
              </p>
              <p className="text-base font-bold uppercase tracking-wide text-gray-900">
                {featured.date}
              </p>
            </div>
          </article>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 3) * 100}>
              <article className="group">
                <a href="#" className="block overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
                <p className="mb-2 mt-4 italic font-medium text-[15px] leading-[28px] uppercase tracking-widest text-gold">
                  {item.tag}
                </p>
                <h3 className="font-medium text-[19px] leading-[30px] text-navy">
                  <a href="#" className="hover:underline">
                    {item.title}
                  </a>
                </h3>
                <p className="mt-2 font-bold text-[17px] leading-[32px] uppercase tracking-wide text-gray-900">
                  {item.date}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsEvents
