import Reveal from "../components/Reveal"

const points = [
  "The application process for the academic programmes and hostels at Nile University of Nigeria is completely free. We do not charge for application form or any part of our application process. Only Applicants applying for the EMBA Program will be required to pay an application fee.",
  "We do not have any authorized agents to issue or sell admission forms, or to collect tuition, hostel or other payments on our behalf. All payments including admission and hostel are conducted online via the official university portals.",
  "Nile University of Nigeria is not liable for any financial or other loss arising from dealings with unauthorised persons or channels.",
]

function FraudDisclaimer() {
  return (
    <div>
      <div className="relative flex min-h-[320px] items-center overflow-hidden bg-navy py-14 md:min-h-[380px]">
        <img
          src="/Rising%20Sun.avif"
          alt=""
          className="pointer-events-none absolute inset-y-0 right-0 h-full w-auto max-w-none opacity-30"
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          <Reveal>
            <h1 className="font-extrabold text-[40px] leading-[44px] text-white md:text-[55px] md:leading-[60px]">
              Fraud Disclaimer
            </h1>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
        <Reveal>
          <div className="space-y-6 text-[19px] leading-[30px] text-[#333435]">
            <p>Dear members of the public, please be advised that:</p>

            <ol className="list-decimal space-y-4 pl-6">
              {points.map((point) => (
                <li key={point.slice(0, 24)}>{point}</li>
              ))}
            </ol>

            <p>
              For further information or to report suspicious activity, please contact us at{" "}
              <a
                href="mailto:info@nileuniversity.edu.ng"
                className="font-semibold text-navy underline hover:text-gold"
              >
                info@nileuniversity.edu.ng
              </a>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default FraudDisclaimer
