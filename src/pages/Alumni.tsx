import Reveal from "../components/Reveal"
import {
  alumniBenefits,
  alumniExecutives,
  alumniIntro,
  avatarSrc,
  stateAmbassadors,
  type AlumniMember,
} from "../data/alumni"

function MemberCard({ member }: { member: AlumniMember }) {
  return (
    <div className="flex flex-col text-center">
      <div className="overflow-hidden rounded-lg bg-[#dfe6f5]">
        <img
          src={avatarSrc[member.avatar]}
          alt={member.name}
          className="aspect-square w-full object-cover object-top"
        />
      </div>
      <h3 className="mt-4 font-semibold text-[22px] leading-[32px] text-navy">
        {member.name}
      </h3>
      <p className="mt-1 font-normal text-[16px] leading-[32px] text-gray-500">
        {member.role}
      </p>
    </div>
  )
}

function MemberGrid({
  heading,
  members,
}: {
  heading: string
  members: AlumniMember[]
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-16">
      <Reveal>
        <h2 className="mb-10 text-center text-3xl font-bold text-navy md:text-4xl">
          {heading}
        </h2>
      </Reveal>
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
        {members.map((member, i) => (
          <Reveal key={member.name} delay={(i % 4) * 80}>
            <MemberCard member={member} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Alumni() {
  return (
    <div>
      {/* Hero */}
      <div className="relative flex h-[360px] items-center overflow-hidden bg-navy md:h-[420px]">
        <img
          src="/alumni.avif"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          <Reveal>
            <h1 className="font-extrabold text-[40px] leading-[44px] text-white md:text-[55px] md:leading-[60px]">
              Alumni
            </h1>
            <p className="mt-4 max-w-2xl text-[19px] leading-[30px] text-gray-100">
              Discover what some of our alumni have to say about their time at Nile
              University.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Intro */}
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-16">
        <Reveal>
          <p className="text-[17px] leading-[34px] text-[#333435]">{alumniIntro}</p>
        </Reveal>
      </div>

      {/* Benefits */}
      <div className="bg-[#eef2fb] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="mb-12 text-3xl font-bold text-navy md:text-4xl">
              Why stay connected
            </h2>
          </Reveal>
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {alumniBenefits.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 100}>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-navy">{item.title}</h3>
                  <p className="text-[15px] leading-[28px] text-[#333435]">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* People */}
      <MemberGrid heading="Alumni Executives" members={alumniExecutives} />
      <MemberGrid heading="State Ambassadors" members={stateAmbassadors} />

      {/* CTA */}
      <div className="bg-navy px-6 py-16 text-center md:px-10 md:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Join the alumni network
            </h2>
            <p className="mt-4 text-[19px] leading-[30px] text-gray-200">
              Reconnect with classmates, mentor current students, and stay part of
              the Nile University community wherever you are in the world.
            </p>
            <a
              href="#"
              className="mt-8 inline-block border-l-[6px] border-gold bg-white px-6 py-3 text-base font-semibold text-navy transition-colors hover:bg-sand"
            >
              Register as an alumnus
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Alumni
