import { Link } from 'react-router-dom'

export default function BlogCard({ b }) {
  const share = () => {
    const url = `${window.location.origin}/blogs/${b.slug}`
    if (navigator.share) {
      navigator.share({ title: b.title, url })
    } else {
      navigator.clipboard.writeText(url)
      alert('Link copied!')
    }
  }

  return (
    <div className="bcard">
      <div className="bcard-img">
        <span>📝</span>
      </div>
      <div className="bcard-body">
        <div className="bcard-meta-top">
          <span className="tag">{b.category}</span>
          <span style={{ fontSize: 12, color: '#888', marginLeft: 8 }}>{b.readingTime}</span>
        </div>
        <Link to={`/blogs/${b.slug}`} className="bcard-title">{b.title}</Link>
        <p className="bcard-desc">{b.description}</p>
        <div className="bcard-footer">
          <span style={{ fontSize: 12, color: '#888' }}>By {b.author} · {new Date(b.date).toLocaleDateString('en-IN')}</span>
          <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
            <Link to={`/blogs/${b.slug}`} className="btn btn-primary" style={{ fontSize: 13, padding: '5px 12px' }}>
              Read More
            </Link>
            <button onClick={share} className="btn btn-outline" style={{ fontSize: 13, padding: '5px 10px' }}>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}