import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (search.trim()) {
      navigate(`/scholarships?q=${encodeURIComponent(search.trim())}`)
      setSearch('')
      setMenuOpen(false)
    }
  }

  return (
    <>
      <div className="top-bar">
        <span>ScholarBuddy – India's Scholarship Portal for Students 2025</span>
      </div>
      <nav className="navbar">
        <div className="nav-inner">
          <div className="nav-left">
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              ☰ Menu
            </button>
            <Link to="/" className="nav-logo">
              📚 ScholarBuddy
            </Link>
          </div>
          <form className="nav-search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search scholarships, blogs..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button type="submit">🔍</button>
          </form>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <button className="menu-close" onClick={() => setMenuOpen(false)}>✕ Close</button>
          <Link to="/" onClick={() => setMenuOpen(false)}>🏠 Home</Link>
          <Link to="/scholarships" onClick={() => setMenuOpen(false)}>🎓 Scholarships</Link>
          <Link to="/blogs" onClick={() => setMenuOpen(false)}>📝 Blogs</Link>
          <Link to="/india-scholarships" onClick={() => setMenuOpen(false)}>🇮🇳 India Scholarships</Link>
          <Link to="/state-scholarships" onClick={() => setMenuOpen(false)}>🗺️ State Scholarships</Link>
          <Link to="/government-schemes" onClick={() => setMenuOpen(false)}>🏛️ Government Schemes</Link>
          <Link to="/fellowships" onClick={() => setMenuOpen(false)}>🔬 Fellowships</Link>
          <Link to="/internships" onClick={() => setMenuOpen(false)}>💼 Internships</Link>
          <Link to="/degree-wise" onClick={() => setMenuOpen(false)}>📖 Degree Wise</Link>
          <Link to="/countries" onClick={() => setMenuOpen(false)}>🌍 Countries</Link>
          <Link to="/study-guides" onClick={() => setMenuOpen(false)}>📚 Study Guides</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>ℹ️ About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>📞 Contact</Link>
        </div>
      )}

      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}
    </>
  )
}