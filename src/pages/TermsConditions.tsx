import Reveal from "../components/Reveal"

const sections = [
  {
    heading: "Acceptance of Terms",
    paragraphs: [
      "By accessing or using this website in any manner, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
    ],
  },
  {
    heading: "User License",
    paragraphs: [
      "Permission is granted to temporarily download one copy of the materials (information or software) on Nile University of Nigeria's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.",
    ],
    list: {
      intro: "Under this license, you may not:",
      items: [
        "Modify or copy the materials.",
        "Use the materials for any commercial purpose or for any public display (commercial or non-commercial).",
        "Attempt to decompile or reverse engineer any software contained on Nile University of Nigeria's website.",
      ],
      closing:
        "This license shall automatically terminate if you violate any of these restrictions and may be terminated by Nile University of Nigeria at any time.",
    },
  },
  {
    heading: "Regulatory Compliance",
    paragraphs: [
      "Any claim relating to the website of Nile University of Nigeria shall be governed by the laws of Nigeria without regard to its conflict of law provisions.",
    ],
  },
]

function TermsConditions() {
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
              Terms &amp; Conditions
            </h1>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
        <Reveal>
          <div className="space-y-6 text-[19px] leading-[30px] text-[#333435]">
            <p>
              Welcome to the website of Nile University of Nigeria. By accessing this website,
              you agree to comply with and be bound by the following terms and conditions of
              use. Please read these terms carefully before using our website.
            </p>

            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="mb-2 text-xl font-bold text-navy underline decoration-2 underline-offset-4">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
                {section.list && (
                  <>
                    <p className="mt-4">{section.list.intro}</p>
                    <ol className="mt-3 list-decimal space-y-2 pl-6">
                      {section.list.items.map((item) => (
                        <li key={item.slice(0, 24)}>{item}</li>
                      ))}
                    </ol>
                    <p className="mt-4">{section.list.closing}</p>
                  </>
                )}
              </div>
            ))}

            <p>
              By using this website, you signify your acceptance of these terms and conditions.
              If you do not agree to these terms, please do not use our website. Nile University
              of Nigeria reserves all rights to modify these terms and conditions at any time
              without prior notice.
            </p>

            <p>
              For further information or enquiries regarding these terms and conditions, please
              contact us at{" "}
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

export default TermsConditions
