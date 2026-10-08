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
import Accommodation from "./pages/Accommodation"
import StudentServices from "./pages/StudentServices"
import SchoolOfPreliminaryStudies from "./pages/SchoolOfPreliminaryStudies"
import TermsConditions from "./pages/TermsConditions"
import FraudDisclaimer from "./pages/FraudDisclaimer"
import CookiePolicy from "./pages/CookiePolicy"
import Sitemap from "./pages/Sitemap"
import Siwes from "./pages/Siwes"
import MystiqueMagazine from "./pages/MystiqueMagazine"

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
        <Route path="student-accommodation" element={<Accommodation />} />
        <Route path="student-services" element={<StudentServices />} />
        <Route path="sps" element={<SchoolOfPreliminaryStudies />} />
        <Route path="terms-conditions" element={<TermsConditions />} />
        <Route path="fraud-disclaimer" element={<FraudDisclaimer />} />
        <Route path="cookie-policy" element={<CookiePolicy />} />
        <Route path="sitemap" element={<Sitemap />} />
        <Route path="siwes" element={<Siwes />} />
        <Route path="mystique-magazine" element={<MystiqueMagazine />} />
      </Route>
    </Routes>
  )
}

export default App
