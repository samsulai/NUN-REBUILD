import Reveal from "../components/Reveal"

const messageParagraphs = [
  "As Vice-Chancellor, I am determined to build on our well-established position as a top university in Africa.",
  "We have developed close links with businesses and the public service. Our focus and emphasis on employability and transferable skills means our graduates gain good jobs quickly after graduating. Joining forces with employers, businesses, and research organisations, we give them access to the kind of people they are looking for: people like you.",
  "Your future starts here. Enjoy this new and exciting chapter of your life, get involved with your studies, the wider student experiences such as sports and clubs, and the wider community so that you not only develop your subject knowledge but also prepare yourself for wherever your career takes you. Be open to new experiences and learning and in a world where nothing stays the same, be prepared to change, evolve, succeed, and have confidence in your ability to make a difference.",
]

const philosophy = [
  "Nile University educates people to be the best they can be. Our Undergraduate and Postgraduate students study practical courses that prepare them for the world of work.",
  "Our Postgraduate students accelerate their careers and earning power. We provide highly rated postgraduate education in a stimulating, respectful, and safe setting.",
  "Our strong business links give our students the highest record for graduate employment.",
]

function ViceChancellorWelcome() {
  return (
    <div>
      {/* Hero */}
      <div className="relative flex min-h-[380px] items-center overflow-hidden bg-navy py-16 md:min-h-[460px]">
        <img
          src="/VCs-welcome-message.avif"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          <Reveal>
            <h1 className="font-extrabold text-[40px] leading-[44px] text-white md:text-[55px] md:leading-[60px]">
              Vice Chancellor's Welcome Message
            </h1>
            <p className="mt-4 max-w-2xl text-[19px] leading-[30px] text-gray-100">
              I am proud to lead this University as the Vice-Chancellor. Here, you
              are part of a supportive, respectful, and safe community that will
              always strive to go further and help you achieve more.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Message */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <Reveal>
            <div className="space-y-6 text-[19px] leading-[30px] text-[#333435]">
              {messageParagraphs.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
              <p className="pt-2 text-lg font-semibold italic text-navy">
                Prof. Dilli Dogo
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <figure className="lg:sticky lg:top-28">
              <img
                src="/Prof.%20Dilli%20Dogo.avif"
                alt="Prof. Dilli Dogo, Vice-Chancellor of Nile University of Nigeria"
                className="w-full rounded-lg object-cover shadow-md"
              />
              <figcaption className="mt-4 text-center">
                <p className="text-lg font-bold text-navy">
                  PROF. DILLI DOGO (FNAMed, DFMC)
                </p>
                <p className="mt-1 text-sm text-gray-500">Vice-Chancellor</p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>

      {/* Philosophy / quote */}
      <div className="bg-sand px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:gap-12">
          <Reveal>
            <span
              aria-hidden="true"
              className="block font-serif text-[120px] leading-[0.8] text-gold md:text-[160px]"
            >
              &ldquo;
            </span>
          </Reveal>
          <Reveal delay={120}>
            <div className="max-w-3xl space-y-5 text-[19px] leading-[30px] italic text-[#333435] md:pt-6">
              {philosophy.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col items-center justify-center bg-navy px-8 py-14 text-center transition-transform duration-300 hover:-translate-y-1 md:px-12 md:py-20">
              <h2 className="mb-4 text-3xl font-bold text-white">
                Mission Statement
              </h2>
              <p className="max-w-md text-[19px] leading-[30px] text-gray-100">
                We educate through action, empowering visionary problem-solvers to
                create a prosperous Africa.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex h-full flex-col items-center justify-center bg-gold px-8 py-14 text-center transition-transform duration-300 hover:-translate-y-1 md:px-12 md:py-20">
              <h2 className="mb-4 text-3xl font-bold text-white">
                Vision Statement
              </h2>
              <p className="max-w-md text-[19px] leading-[30px] text-white/90">
                To forge bold, visionary leaders who will transform Africa.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

export default ViceChancellorWelcome
