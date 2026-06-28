import { Link } from 'react-router-dom'
import countries from '../data/countries.json'
import Breadcrumb from '../components/Breadcrumb'

export default function Countries() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Countries' }]} />
      <div className="container" style={{ marginTop: 12 }}>
        <div className="section-title">🌍 Study Abroad – Countries</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, marginTop: 0 }}>
          {countries.map(c => (
            <Link
              key={c.id}
              to={`/scholarships?country=${encodeURIComponent(c.name)}`}
              style={{
                background: '#fff', border: '1px solid var(--border)',
                borderRadius: 6, padding: '14px', textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: 12, boxShadow: 'var(--card-shadow)'
              }}
            >
              <span style={{ fontSize: 32 }}>{c.flag}</span>
              <div>
                <div style={{ fontWeight: 700, color: '#1a237e', fontSize: 15 }}>{c.name}</div>
                <div style={{ fontSize: 12, color: '#888' }}>{c.count}+ Scholarships</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}