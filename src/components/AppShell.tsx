"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import AnnouncementBar from "./AnnouncementBar"
import Navbar from "./Navbar"
import Footer from "./Footer"
import BackToTop from "./BackToTop"
import DisclaimerModal from "./DisclaimerModal"
import type { SearchEntry } from "@/data/siteIndex"

function AppShell({
  children,
  searchIndex,
}: {
  children: React.ReactNode
  searchIndex: SearchEntry[]
}) {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <main className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar searchIndex={searchIndex} />
      {children}
      <Footer />
      <BackToTop />
      <DisclaimerModal />
    </main>
  )
}

export default AppShell
