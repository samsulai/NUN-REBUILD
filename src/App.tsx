import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import CoursesList from "./pages/CoursesList"
import CourseDetail from "./pages/CourseDetail"
import Contact from "./pages/Contact"
import VirtualTour from "./pages/VirtualTour"
import Blog from "./pages/Blog"
import NewsEvents from "./pages/NewsEvents"
import PrincipalOfficers from "./pages/PrincipalOfficers"
import ViceChancellorWelcome from "./pages/ViceChancellorWelcome"
import OrganisationChart from "./pages/OrganisationChart"
import EmployabilityReport from "./pages/EmployabilityReport"
import HonorisImpactReport from "./pages/HonorisImpactReport"
import Alumni from "./pages/Alumni"
import Partners from "./pages/Partners"
import AcademicCalendar from "./pages/AcademicCalendar"
import Scholarships from "./pages/Scholarships"
import Prospectus from "./pages/Prospectus"
import WelcomeBooklet from "./pages/WelcomeBooklet"
import TuitionFees from "./pages/TuitionFees"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="undergraduate" element={<CoursesList level="undergraduate" />} />
        <Route path="postgraduate" element={<CoursesList level="postgraduate" />} />
        <Route path="courses/:slug" element={<CourseDetail />} />
        <Route path="single-course" element={<Navigate to="/courses/b-sc-biology" replace />} />
        <Route path="contact" element={<Contact />} />
        <Route path="virtual-tour" element={<VirtualTour />} />
        <Route path="blog" element={<Blog />} />
        <Route path="news" element={<NewsEvents />} />
        <Route path="principal-officers" element={<PrincipalOfficers />} />
        <Route path="vice-chancellors-welcome" element={<ViceChancellorWelcome />} />
        <Route path="organisation-chart" element={<OrganisationChart />} />
        <Route path="employability-report" element={<EmployabilityReport />} />
        <Route path="honoris-impact-report" element={<HonorisImpactReport />} />
        <Route path="alumni" element={<Alumni />} />
        <Route path="partners" element={<Partners />} />
        <Route path="academic-calendar" element={<AcademicCalendar />} />
        <Route path="scholarships-discounts" element={<Scholarships />} />
        <Route path="prospectus" element={<Prospectus />} />
        <Route path="welcome-booklet" element={<WelcomeBooklet />} />
        <Route path="tuition-fees" element={<TuitionFees />} />
      </Route>
    </Routes>
  )
}

export default App
