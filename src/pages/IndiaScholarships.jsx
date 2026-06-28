import { Link } from 'react-router-dom'
import scholarships from '../data/scholarships.json'
import ScholarshipCard from '../components/ScholarshipCard'
import Breadcrumb from '../components/Breadcrumb'
import '../components/Cards.css'

export default function IndiaScholarships() {
  const india = scholarships.filter(s => s.country === 'India')
  const central = india.filter(s => s.category === 'Central Government')
  const state = india.filter(s => s.category === 'State Government')

  return (
    <>
      <Breadcrumb items={[{ label: 'India Scholarships' }]} />
      <div className="container" style={{ marginTop: 12 }}>

        {/* Quick links */}
        <div style={{ background: '#fff', border: '1px solid var(--border)', padding: '12px', marginBottom: 12 }}>
          <strong style={{ fontSize: 14, display: 'block', marginBottom: 8, color: '#1a237e' }}>🇮🇳 Browse India Scholarships</strong>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {['SC/ST Scholarships', 'OBC Scholarships', 'Minority Scholarships', 'Girls Scholarships', 'Merit Scholarships', 'Need Based', 'Engineering', 'Medical', 'Law'].map(cat => (
              <Link key={cat} to={`/scholarships?q=${cat}`} style={{
                background: '#1a237e', color: '#fff', padding: '5px 12px',
                borderRadius: 4, fontSize: 12, fontWeight: 600, textDecoration: 'none'
              }}>{cat}</Link>
            ))}
          </div>
        </div>

        <div className="section-title">🏛️ Central Government Scholarships</div>
        {central.map(s => <ScholarshipCard key={s.id} s={s} />)}

        <div className="section-title" style={{ marginTop: 12 }}>🗺️ State Government Scholarships</div>
        {state.map(s => <ScholarshipCard key={s.id} s={s} />)}

        {central.length === 0 && state.length === 0 && (
          <div style={{ background: '#fff', padding: 40, textAlign: 'center', color: '#888' }}>No India scholarships found.</div>
        )}
      </div>
    </>
  )
}