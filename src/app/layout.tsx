import type { Metadata } from "next"
import { bitter, inter, lato, manrope, milliard } from "@/fonts"
import AppShell from "@/components/AppShell"
import { getAllCourses } from "@/lib/wordpress"
import { courseSearchEntries, sitePages, type SearchEntry } from "@/data/siteIndex"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://nileuniversity.edu.ng"),
  title: {
    default: "Nile University of Nigeria",
    template: "%s | Nile University of Nigeria",
  },
  description:
    "Nile University of Nigeria is a leading centre of academic excellence, research and innovation in Abuja, and a member institution of the Honoris United Universities network.",
  openGraph: {
    type: "website",
    siteName: "Nile University of Nigeria",
    locale: "en_NG",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nile University of Nigeria campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/cropped-Favicon-Nile-University-of-Nigeria.avif",
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Nile University of Nigeria",
  url: "https://nileuniversity.edu.ng",
  logo: "https://nileuniversity.edu.ng/footer-logo.png",
  sameAs: [
    "https://tedx.nileuniversity.edu.ng/",
    "https://online.nileuniversity.edu.ng/",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot 681, Cadastral Zone C-OO, Research & Institution Area, Jabi Airport Bypass",
    addressLocality: "Abuja",
    addressCountry: "NG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+234-916-985-3402",
    contactType: "admissions",
    email: "contact@nileuniversity.edu.ng",
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const courses = await getAllCourses()
  const searchIndex: SearchEntry[] = [...sitePages, ...courseSearchEntries(courses)]

  return (
    <html
      lang="en"
      className={`${lato.variable} ${milliard.variable} ${manrope.variable} ${inter.variable} ${bitter.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <AppShell searchIndex={searchIndex}>{children}</AppShell>
      </body>
    </html>
  )
}
