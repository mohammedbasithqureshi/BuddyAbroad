import { Link } from 'react-router-dom'

export default function ScholarshipCard({ s }) {
  const share = () => {
    const url = `${window.location.origin}/scholarships/${s.id}`
    if (navigator.share) {
      navigator.share({ title: s.title, url })
    } else {
      navigator.clipboard.writeText(url)
      alert('Link copied!')
    }
  }

  const deadline = s.deadline ? new Date(s.deadline).toLocaleDateString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric'
  }) : 'Check Website'

  return (
    <div className="scard">
      <div className="scard-header">
        <span className={s.funding === 'Fully Funded' ? 'badge-funded' : 'badge-partial'}>
          {s.funding}
        </span>
        <span className={s.open ? 'badge-open' : 'badge-closed'} style={{ marginLeft: 4 }}>
          {s.open ? 'Open' : 'Closed'}
        </span>
      </div>
      <div className="scard-body">
        <Link to={`/scholarships/${s.id}`} className="scard-title">{s.title}</Link>
        <div className="scard-meta">
          <span>🏫 {s.university}</span>
          <span>🌍 {s.country}</span>
        </div>
        <div className="scard-meta">
          <span>🎓 {Array.isArray(s.degree) ? s.degree.join(', ') : s.degree}</span>
          <span>📅 {deadline}</span>
        </div>
        <div className="scard-tags">
          {s.tags && s.tags.slice(0, 3).map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
      <div className="scard-footer">
        <Link to={`/scholarships/${s.id}`} className="btn btn-primary" style={{ fontSize: 13, padding: '6px 14px' }}>
          Read More
        </Link>
        <button onClick={share} className="btn btn-outline" style={{ fontSize: 13, padding: '6px 12px' }}>
          Share
        </button>
      </div>
    </div>
  )
}