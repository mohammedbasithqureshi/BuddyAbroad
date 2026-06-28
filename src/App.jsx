import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import Scholarships from './pages/Scholarships'
import ScholarshipDetail from './pages/ScholarshipDetail'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import Countries from './pages/Countries'
import DegreeWise from './pages/DegreeWise'
import IndiaScholarships from './pages/IndiaScholarships'
import StateScholarships from './pages/StateScholarships'
import GovernmentSchemes from './pages/GovernmentSchemes'
import Fellowships from './pages/Fellowships'
import Internships from './pages/Internships'
import StudyGuides from './pages/StudyGuides'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '60vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/scholarships/:id" element={<ScholarshipDetail />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/degree-wise" element={<DegreeWise />} />
          <Route path="/india-scholarships" element={<IndiaScholarships />} />
          <Route path="/state-scholarships" element={<StateScholarships />} />
          <Route path="/government-schemes" element={<GovernmentSchemes />} />
          <Route path="/fellowships" element={<Fellowships />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/study-guides" element={<StudyGuides />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}