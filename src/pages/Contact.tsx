import { Mail, MapPin, Phone } from "lucide-react"
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6"
import PhotoHero from "../components/PhotoHero"
import Reveal from "../components/Reveal"

const departments = [
  { name: "Admissions office", email: "admissions@nileuniversity.edu.ng" },
  { name: "Registry", email: "registry@nileuniversity.edu.ng" },
  { name: "Finance office", email: "finance@nileuniversity.edu.ng" },
  { name: "Student affairs", email: "studentaffairs@nileuniversity.edu.ng" },
  { name: "ICT support", email: "ict@nileuniversity.edu.ng" },
  { name: "Library", email: "library@nileuniversity.edu.ng" },
]

const socials = [
  { label: "Facebook", icon: FaFacebookF },
  { label: "Instagram", icon: FaInstagram },
  { label: "X", icon: FaXTwitter },
  { label: "LinkedIn", icon: FaLinkedinIn },
  { label: "YouTube", icon: FaYoutube },
]

function Contact() {
  return (
    <div>
      <PhotoHero image="/DSC08719-1.avif" title="Contact Us" subtitle="Get in touch" />

      <div className="bg-gray-50 px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_360px]">
          <Reveal>
            <h2 className="mb-4 text-2xl font-extrabold uppercase tracking-wide text-navy md:text-3xl">
              Leave us your info
            </h2>
            <p className="mb-8 max-w-xl text-[19px] leading-[30px] text-gray-500">
              Have a question about admissions, programmes, or campus life? Fill out the form
              below and our team will get back to you as soon as possible.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <label className="block">
                <span className="sr-only">Full name</span>
                <input
                  type="text"
                  required
                  placeholder="Full Name*"
                  className="w-full rounded border-none bg-white px-5 py-4 text-base text-gray-700 shadow-sm outline-none focus:ring-2 focus:ring-navy"
                />
              </label>
              <label className="block">
                <span className="sr-only">Email</span>
                <input
                  type="email"
                  required
                  placeholder="Email*"
                  className="w-full rounded border-none bg-white px-5 py-4 text-base text-gray-700 shadow-sm outline-none focus:ring-2 focus:ring-navy"
                />
              </label>
              <label className="block">
                <span className="sr-only">Subject</span>
                <input
                  type="text"
                  required
                  placeholder="Subject*"
                  className="w-full rounded border-none bg-white px-5 py-4 text-base text-gray-700 shadow-sm outline-none focus:ring-2 focus:ring-navy"
                />
              </label>
              <label className="block">
                <span className="sr-only">Message</span>
                <textarea
                  rows={5}
                  required
                  placeholder="Message*"
                  className="w-full rounded border-none bg-white px-5 py-4 text-base text-gray-700 shadow-sm outline-none focus:ring-2 focus:ring-navy"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded bg-gold px-6 py-4 text-base font-semibold uppercase tracking-wide text-white transition-colors hover:bg-gold-light"
              >
                Submit now
              </button>
            </form>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mb-4 text-2xl font-extrabold uppercase tracking-wide text-navy md:text-3xl">
              Location
            </h2>
            <p className="mb-6 text-[19px] leading-[30px] text-gray-500">
              Plot 681, Cadastral Zone C-OO, Research &amp; Institution Area, Jabi Airport
              Bypass, Abuja FCT, Nigeria.
            </p>
            <div className="mb-8 space-y-3">
              <a
                href="mailto:contact@nileuniversity.edu.ng"
                className="flex items-center gap-3 text-base text-gray-700 hover:text-navy"
              >
                <Mail className="h-4 w-4 flex-shrink-0 text-gold" />
                contact@nileuniversity.edu.ng
              </a>
              <a
                href="tel:+2349169853402"
                className="flex items-center gap-3 text-base text-gray-700 hover:text-navy"
              >
                <Phone className="h-4 w-4 flex-shrink-0 text-gold" />
                0916 985 3402
              </a>
              <div className="flex items-center gap-3 text-base text-gray-700">
                <MapPin className="h-4 w-4 flex-shrink-0 text-gold" />
                Abuja, Nigeria
              </div>
            </div>

            <h3 className="mb-3 text-lg font-extrabold uppercase tracking-wide text-navy">
              Map
            </h3>
            <div className="h-64 overflow-hidden rounded-lg shadow-sm">
              <iframe
                title="Nile University location"
                src="https://www.google.com/maps?q=Nile+University+of+Nigeria,+Abuja&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="mx-auto mt-16 flex max-w-6xl justify-center gap-3 border-t border-gray-200 pt-10">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white transition-transform hover:scale-110"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="mb-6 text-xl font-bold text-navy">Department contacts</h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept, i) => (
              <Reveal key={dept.name} delay={i * 60}>
                <div className="rounded-lg border border-gray-200 bg-white p-5">
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">{dept.name}</h3>
                  <p className="text-base text-gray-500">{dept.email}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
