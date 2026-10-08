import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import AnnouncementBar from "./AnnouncementBar"
import Navbar from "./Navbar"
import Footer from "./Footer"
import BackToTop from "./BackToTop"
import DisclaimerModal from "./DisclaimerModal"

function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <main className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop />
      <DisclaimerModal />
    </main>
  )
}

export default Layout
