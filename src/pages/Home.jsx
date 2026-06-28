import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import scholarships from '../data/scholarships.json'
import blogs from '../data/blogs.json'
import quicknav from '../data/quicknav.json'
import ScholarshipCard from '../components/ScholarshipCard'
import BlogCard from '../components/BlogCard'
import '../components/Cards.css'

export default function Home() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (search.trim()) navigate(`/scholarships?q=${encodeURIComponent(search.trim())}`)
  }

  const latest = scholarships.slice(0, 8)
  const latestBlogs = blogs.slice(0, 4)

  return (
    <div>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #1a237e 0%, #283593 60%, #3949ab 100%)',
        color: '#fff', padding: '28px 12px 24px', textAlign: 'center'
      }}>
        <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>
          🎓 Find Scholarships for Indian Students
        </h1>
        <p style={{ fontSize: 14, color: '#c5cae9', marginBottom: 16 }}>
          Central Government · State Government · International · Fellowships
        </p>
        <form onSubmit={handleSearch} style={{ display: 'flex', maxWidth: 500, margin: '0 auto', gap: 0 }}>
          <input
            type="text"
            placeholder="Search scholarships, state, degree..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              flex: 1, padding: '11px 14px', fontSize: 15,
              border: 'none', borderRadius: '6px 0 0 6px', outline: 'none'
            }}
          />
          <button type="submit" className="btn btn-accent" style={{ borderRadius: '0 6px 6px 0', padding: '11px 18px' }}>
            Search
          </button>
        </form>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 14 }}>
          <Link to="/scholarships" className="btn btn-accent" style={{ fontSize: 13 }}>Browse All</Link>
          <Link to="/blogs" style={{ background: '#fff', color: '#1a237e', padding: '7px 16px', borderRadius: 6, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Latest Blogs</Link>
        </div>
      </div>

      {/* Stats */}
      <div style={{ background: '#fff', borderBottom: '2px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', textAlign: 'center', padding: '12px 0' }}>
            {[
              { n: '500+', l: 'Scholarships' },
              { n: '28+', l: 'States' },
              { n: '50+', l: 'Countries' },
              { n: '1L+', l: 'Students Helped' }
            ].map(s => (
              <div key={s.l} style={{ padding: '8px 4px', borderRight: '1px solid #eee' }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: '#1a237e' }}>{s.n}</div>
                <div style={{ fontSize: 11, color: '#777' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="container" style={{ marginTop: 12 }}>
        <div className="section-title">🚀 Quick Navigation</div>
        <div style={{ background: '#fff', border: '1px solid var(--border)', padding: '10px 8px', marginBottom: 12 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {quicknav.map(item => (
              <Link
                key={item.id}
                to={item.path}
                style={{
                  background: item.color,
                  color: '#fff',
                  padding: '5px 12px',
                  borderRadius: 4,
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Two column layout like screenshot */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
          {/* Latest Scholarships */}
          <div>
            <div className="section-title">🎓 Latest Scholarships</div>
            <div style={{ background: '#fff', border: '1px solid var(--border)' }}>
              {latest.slice(0, 6).map(s => (
                <div key={s.id} style={{ padding: '10px 12px', borderBottom: '1px solid #eee' }}>
                  <Link to={`/scholarships/${s.id}`} style={{
                    color: '#1a237e', fontWeight: 600, fontSize: 14,
                    display: 'block', marginBottom: 2
                  }}>
                    • {s.title}
                  </Link>
                  <span style={{ fontSize: 11, color: '#888' }}>{s.country} · {s.funding} · Deadline: {new Date(s.deadline).toLocaleDateString('en-IN')}</span>
                </div>
              ))}
              <div style={{ padding: '8px 12px' }}>
                <Link to="/scholarships" style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 13 }}>View All Scholarships »</Link>
              </div>
            </div>
          </div>

          {/* Latest Blogs */}
          <div>
            <div className="section-title">📝 Latest Blogs</div>
            <div style={{ background: '#fff', border: '1px solid var(--border)' }}>
              {latestBlogs.map(b => (
                <div key={b.id} style={{ padding: '10px 12px', borderBottom: '1px solid #eee' }}>
                  <Link to={`/blogs/${b.slug}`} style={{
                    color: '#1a237e', fontWeight: 600, fontSize: 14,
                    display: 'block', marginBottom: 2
                  }}>
                    • {b.title}
                  </Link>
                  <span style={{ fontSize: 11, color: '#888' }}>{b.category} · {b.readingTime}</span>
                </div>
              ))}
              <div style={{ padding: '8px 12px' }}>
                <Link to="/blogs" style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 13 }}>View All Blogs »</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scholarship Cards */}
        <div className="section-title">🏆 Featured Scholarships</div>
        <div style={{ marginTop: 0 }}>
          {latest.map(s => <ScholarshipCard key={s.id} s={s} />)}
        </div>
        <div style={{ textAlign: 'center', margin: '16px 0' }}>
          <Link to="/scholarships" className="btn btn-primary">View All Scholarships</Link>
        </div>

        {/* Blog section */}
        <div className="section-title" style={{ marginTop: 8 }}>📰 Latest Articles</div>
        <div style={{ marginTop: 0, marginBottom: 16 }}>
          {latestBlogs.map(b => <BlogCard key={b.id} b={b} />)}
        </div>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <Link to="/blogs" className="btn btn-primary">View All Blogs</Link>
        </div>
      </div>
    </div>
  )
}