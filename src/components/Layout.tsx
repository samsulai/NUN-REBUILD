import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import AnnouncementBar from "./AnnouncementBar"
import Navbar from "./Navbar"
import Footer from "./Footer"

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
    </main>
  )
}

export default Layout
