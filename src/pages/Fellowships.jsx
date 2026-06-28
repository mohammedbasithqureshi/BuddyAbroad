import scholarships from '../data/scholarships.json'
import blogs from '../data/blogs.json'
import ScholarshipCard from '../components/ScholarshipCard'
import BlogCard from '../components/BlogCard'
import Breadcrumb from '../components/Breadcrumb'
import '../components/Cards.css'

export default function Fellowships() {
  const fellowships = scholarships.filter(s =>
    s.tags && (s.tags.includes('Fellowship') || s.tags.includes('Research')) ||
    s.degree && s.degree.includes('PhD')
  )
  const fblogs = blogs.filter(b => b.tags && b.tags.includes('Fellowship'))

  return (
    <>
      <Breadcrumb items={[{ label: 'Fellowships' }]} />
      <div className="container" style={{ marginTop: 12 }}>
        <div className="section-title">🔬 Research Fellowships & Grants</div>
        {fellowships.length > 0
          ? fellowships.map(s => <ScholarshipCard key={s.id} s={s} />)
          : <div style={{ background: '#fff', padding: 40, textAlign: 'center', color: '#888' }}>No fellowships listed yet.</div>
        }
        {fblogs.length > 0 && (
          <>
            <div className="section-title" style={{ marginTop: 12 }}>📝 Fellowship Guides</div>
            {fblogs.map(b => <BlogCard key={b.id} b={b} />)}
          </>
        )}
      </div>
    </>
  )
}