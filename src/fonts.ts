import { Bitter, Inter, Lato, Manrope } from "next/font/google"
import localFont from "next/font/local"

export const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-lato",
  display: "swap",
})

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-manrope",
  display: "swap",
})

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
  display: "swap",
})

export const bitter = Bitter({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-bitter",
  display: "swap",
})

export const milliard = localFont({
  variable: "--font-milliard",
  display: "swap",
  src: [
    { path: "../public/milliard/Rene Bieder  Milliard Hairline.otf", weight: "100", style: "normal" },
    { path: "../public/milliard/Rene Bieder  Milliard Thin.otf", weight: "200", style: "normal" },
    { path: "../public/milliard/Rene Bieder  Milliard ExtraLight.otf", weight: "300", style: "normal" },
    { path: "../public/milliard/Rene Bieder  Milliard Book.otf", weight: "400", style: "normal" },
    { path: "../public/milliard/Rene Bieder  Milliard Medium.otf", weight: "500", style: "normal" },
    { path: "../public/milliard/Rene Bieder  Milliard SemiBold.otf", weight: "600", style: "normal" },
    { path: "../public/milliard/Rene Bieder  Milliard Bold.otf", weight: "700", style: "normal" },
    { path: "../public/milliard/Rene Bieder  Milliard ExtraBold.otf", weight: "800", style: "normal" },
    { path: "../public/milliard/Rene Bieder  Milliard Black.otf", weight: "900", style: "normal" },
  ],
})
