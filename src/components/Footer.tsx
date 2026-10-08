import { useState } from "react"
import { Link } from "react-router-dom"
import { Mail, MessageCircle, Phone } from "lucide-react"
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6"
import AuditComplianceModal from "./AuditComplianceModal"

const columns = [
  {
    title: "Quick Links",
    links: [
      { label: "Contact Us", to: "/contact" },
      { label: "Virtual Tour", to: "/virtual-tour" },
      { label: "Frequently Asked Questions", to: null },
      { label: "News & Media", to: "/news" },
      { label: "Application Portal", to: null },
      { label: "Careers at Nile", to: null },
    ],
  },
  {
    title: "Study & Admission",
    links: [
      { label: "School of Preliminary Studies", to: "/sps" },
      { label: "Undergraduate Degrees", to: "/undergraduate" },
      { label: "Postgraduate Degrees", to: "/postgraduate" },
      { label: "Nile Consult & Services Ltd.", to: "https://nileconsultservices.com/" },
      { label: "Nile Business School", to: null },
      { label: "Nile Online", to: "https://online.nileuniversity.edu.ng/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Fraud Disclaimer", to: "/fraud-disclaimer" },
      { label: "Terms & Conditions", to: "/terms-conditions" },
      { label: "Privacy Policy", to: "https://privacy.nileuniversity.edu.ng/" },
      { label: "Cookie Policy", to: "/cookie-policy" },
      { label: "Audit Compliance", to: null },
      { label: "Sitemap", to: "/sitemap" },
    ],
  },
]

const socials = [
  { label: "Facebook", icon: FaFacebookF },
  { label: "Instagram", icon: FaInstagram },
  { label: "X", icon: FaXTwitter },
  { label: "LinkedIn", icon: FaLinkedinIn },
  { label: "YouTube", icon: FaYoutube },
]

function Footer() {
  const [auditOpen, setAuditOpen] = useState(false)

  return (
    <footer className="bg-navy">
      <div className="mx-auto grid max-w-screen-2xl gap-10 px-6 py-14 md:px-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <img
            src="/footer-logo.png"
            alt="Nile University of Nigeria"
            className="mb-4 h-14 w-auto"
          />
          <p className="mb-4 not-italic font-normal text-[16px] leading-[20px] text-white">
            Plot 681, Cadastral Zone C-OO, Research & Institution Area, Jabi Airport Bypass,
            Abuja FCT, Nigeria.
          </p>
          <div className="space-y-2">
            <a
              href="tel:+2349169853402"
              className="flex items-center gap-3 not-italic font-normal text-[16px] leading-[20px] text-white hover:text-gold-light"
            >
              <Phone className="h-4 w-4 text-gold-light" />
              0916 985 3402
            </a>
            <a
              href="https://wa.me/2349169853402"
              className="flex items-center gap-3 not-italic font-normal text-[16px] leading-[20px] text-white hover:text-gold-light"
            >
              <MessageCircle className="h-4 w-4 text-gold-light" />
              0916 985 3402
            </a>
            <a
              href="mailto:contact@nileuniversity.edu.ng"
              className="flex items-center gap-3 not-italic font-normal text-[16px] leading-[20px] text-white hover:text-gold-light"
            >
              <Mail className="h-4 w-4 text-gold-light" />
              contact@nileuniversity.edu.ng
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="mb-4 font-semibold text-white underline decoration-2 underline-offset-4">
              {col.title}
            </h4>
            <ul className="space-y-6">
              {col.links.map((link) => {
                const linkClass =
                  "not-italic font-normal text-[16px] leading-[20px] text-white hover:text-gold-light"
                const isExternal = link.to?.startsWith("http")
                return (
                  <li key={link.label} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-gold-light" />
                    {link.label === "Audit Compliance" ? (
                      <button
                        type="button"
                        onClick={() => setAuditOpen(true)}
                        className={linkClass}
                      >
                        {link.label}
                      </button>
                    ) : isExternal ? (
                      <a
                        href={link.to as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        {link.label}
                      </a>
                    ) : link.to ? (
                      <Link to={link.to} className={linkClass}>
                        {link.label}
                      </Link>
                    ) : (
                      <a href="#" className={linkClass}>
                        {link.label}
                      </a>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-4 px-6 py-6 text-sm text-white md:flex-row md:justify-between md:px-10">
          <p>© 2026 Nile University of Nigeria – All Rights Reserved | Member institution of Honoris United Universities.</p>
          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-navy transition-transform hover:scale-110"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <AuditComplianceModal open={auditOpen} onClose={() => setAuditOpen(false)} />
    </footer>
  )
}

export default Footer
