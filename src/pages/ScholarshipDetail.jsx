import { useParams, Link } from 'react-router-dom'
import scholarships from '../data/scholarships.json'
import ScholarshipCard from '../components/ScholarshipCard'
import Breadcrumb from '../components/Breadcrumb'
import '../components/Cards.css'

export default function ScholarshipDetail() {
  const { id } = useParams()
  const s = scholarships.find(x => x.id === id)

  if (!s) return (
    <div className="container" style={{ padding: '40px 0', textAlign: 'center' }}>
      <h2>Scholarship Not Found</h2>
      <Link to="/scholarships" className="btn btn-primary" style={{ marginTop: 16 }}>Back to Scholarships</Link>
    </div>
  )

  const related = scholarships.filter(x => x.id !== id && (x.country === s.country || x.category === s.category)).slice(0, 4)

  const share = () => {
    if (navigator.share) navigator.share({ title: s.title, url: window.location.href })
    else { navigator.clipboard.writeText(window.location.href); alert('Link copied!') }
  }

  return (
    <>
      <Breadcrumb items={[{ label: 'Scholarships', path: '/scholarships' }, { label: s.title }]} />
      <div className="container" style={{ marginTop: 12 }}>
        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 6, overflow: 'hidden', marginBottom: 12 }}>

          {/* Header */}
          <div style={{ background: 'var(--navy)', color: '#fff', padding: '16px' }}>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 }}>
              <span className={s.funding === 'Fully Funded' ? 'badge-funded' : 'badge-partial'}>{s.funding}</span>
              <span className={s.open ? 'badge-open' : 'badge-closed'}>{s.open ? 'Open' : 'Closed'}</span>
              <span className="tag" style={{ background: '#3949ab', color: '#fff' }}>{s.category}</span>
            </div>
            <h1 style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.3, marginBottom: 8 }}>{s.title}</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, fontSize: 13, color: '#c5cae9' }}>
              <span>🏫 {s.university}</span>
              <span>🌍 {s.country}</span>
              <span>🎓 {Array.isArray(s.degree) ? s.degree.join(', ') : s.degree}</span>
              <span>📅 Deadline: {new Date(s.deadline).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: '14px 16px' }}>
            <Section title="✅ Eligibility" content={s.eligibility} />
            <Section title="💰 Benefits" content={s.benefits} />
            <Section title="📋 Application Process" content={s.applicationProcess} />
            <Section title="🏆 Selection Process" content={s.selectionProcess} />

            <div style={{ marginBottom: 14 }}>
              <strong style={{ display: 'block', marginBottom: 6, fontSize: 14, color: '#1a237e' }}>📄 Documents Required</strong>
              <ul style={{ paddingLeft: 18, fontSize: 14, lineHeight: 2 }}>
                {s.documents && s.documents.map(d => <li key={d}>{d}</li>)}
              </ul>
            </div>

            {s.tags && s.tags.length > 0 && (
              <div style={{ marginBottom: 14 }}>
                {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            )}

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 16 }}>
              <a href={s.officialUrl} target="_blank" rel="noopener noreferrer" className="btn btn-green">
                🌐 Official Website
              </a>
              <button onClick={share} className="btn btn-outline">📤 Share</button>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href); alert('Link copied!') }} className="btn btn-outline">
                🔗 Copy Link
              </button>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <>
            <div className="section-title">Related Scholarships</div>
            {related.map(s => <ScholarshipCard key={s.id} s={s} />)}
          </>
        )}
      </div>
    </>
  )
}

function Section({ title, content }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <strong style={{ display: 'block', marginBottom: 4, fontSize: 14, color: '#1a237e' }}>{title}</strong>
      <p style={{ fontSize: 14, color: '#444', lineHeight: 1.6 }}>{content}</p>
    </div>
  )
}