import Reveal from "../components/Reveal"

const sections = [
  {
    heading: "What are Cookies?",
    paragraphs: [
      "Cookies are small text files that are placed on your device (such as your computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site. Cookies can be temporary (session cookies) or permanent (persistent cookies).",
    ],
  },
  {
    heading: "How We Use Cookies",
    paragraphs: ["At Nile University of Nigeria, we use cookies for various purposes, including:"],
    list: [
      {
        label: "Essential Cookies:",
        text: "These cookies are necessary for the website to function properly. They enable you to navigate the site and use its features, such as accessing secure areas.",
      },
      {
        label: "Performance and Analytics Cookies:",
        text: "We use these cookies to analyze how visitors use our website, which helps us improve its performance and usability. These cookies do not collect personal information; instead, they provide aggregated data such as the number of visitors and the most popular pages.",
      },
      {
        label: "Functionality Cookies:",
        text: "These cookies allow the website to remember choices you make (such as your preferred language or region) and provide enhanced, personalized features.",
      },
      {
        label: "Advertising Cookies:",
        text: "We may work with third-party service providers to display advertising on our website or manage our advertising on other websites. These providers may use cookies to collect information about your browsing activities over time and across different websites to provide you with targeted advertising based on your interests.",
      },
    ],
  },
  {
    heading: "Your Cookie Choices",
    paragraphs: [
      "Our website may use cookies and similar technologies for analytics and website functionality; you can choose to decline cookies on our website. Most web browsers automatically accept cookies, but you can manage your cookie preferences through your browser settings to decline cookies if you prefer.",
      "However, please note that blocking cookies may affect your experience on the website and limit some features.",
    ],
  },
  {
    heading: "Third-party Cookies",
    paragraphs: [
      "Please be aware that third-party services embedded on our website, such as social media plugins or analytics tools, may also use cookies. We do not have control and responsibility over these cookies, and their use is subject to the privacy policies of the respective third parties.",
    ],
  },
  {
    heading: "Changes to this Cookie Policy",
    paragraphs: [
      "We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this page periodically as the latest version will be available on our website.",
    ],
  },
]

function CookiePolicy() {
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
              Cookie Policy
            </h1>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
        <Reveal>
          <div className="space-y-6 text-[19px] leading-[30px] text-[#333435]">
            <p>
              Welcome to the Cookie Policy page of Nile University of Nigeria. This page is
              designed to inform you about our use of cookies and similar technologies on our
              website.
            </p>

            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="mb-2 text-xl font-bold text-navy underline decoration-2 underline-offset-4">
                  {section.heading}
                </h2>
                <div className="space-y-3">
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
                {section.list && (
                  <ul className="mt-4 space-y-3">
                    {section.list.map((item) => (
                      <li key={item.label} className="flex gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-navy" />
                        <span>
                          <span className="font-semibold text-navy">{item.label}</span>{" "}
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div>
              <h2 className="mb-2 text-xl font-bold text-navy underline decoration-2 underline-offset-4">
                Contact Us
              </h2>
              <p>
                If you have any questions or concerns about our Cookie Policy or our use of
                cookies, please contact us at{" "}
                <a
                  href="mailto:info@nileuniversity.edu.ng"
                  className="font-semibold text-navy underline hover:text-gold"
                >
                  info@nileuniversity.edu.ng
                </a>
                .
              </p>
            </div>

            <p>
              Thank you for visiting the website of Nile University of Nigeria. We hope you have
              a great experience exploring our online platform.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default CookiePolicy
