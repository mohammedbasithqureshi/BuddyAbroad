import { useParams, Link } from 'react-router-dom'
import blogs from '../data/blogs.json'
import BlogCard from '../components/BlogCard'
import Breadcrumb from '../components/Breadcrumb'
import '../components/Cards.css'

export default function BlogDetail() {
  const { slug } = useParams()
  const b = blogs.find(x => x.slug === slug)

  if (!b) return (
    <div className="container" style={{ padding: 40, textAlign: 'center' }}>
      <h2>Blog Not Found</h2>
      <Link to="/blogs" className="btn btn-primary" style={{ marginTop: 16 }}>Back to Blogs</Link>
    </div>
  )

  const related = blogs.filter(x => x.slug !== slug && x.category === b.category).slice(0, 3)

  const share = () => {
    if (navigator.share) navigator.share({ title: b.title, url: window.location.href })
    else { navigator.clipboard.writeText(window.location.href); alert('Link copied!') }
  }

  const paragraphs = b.content.split('\n\n')

  return (
    <>
      <Breadcrumb items={[{ label: 'Blogs', path: '/blogs' }, { label: b.title }]} />
      <div className="container" style={{ marginTop: 12 }}>
        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 6, overflow: 'hidden', marginBottom: 12 }}>
          <div style={{ background: 'var(--navy)', padding: '16px', color: '#fff' }}>
            <span className="tag" style={{ background: '#3949ab', color: '#fff', marginBottom: 8, display: 'inline-block' }}>{b.category}</span>
            <h1 style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.3, marginBottom: 8 }}>{b.title}</h1>
            <div style={{ fontSize: 13, color: '#c5cae9' }}>
              By {b.author} · {new Date(b.date).toLocaleDateString('en-IN')} · {b.readingTime}
            </div>
          </div>
          <div style={{ padding: '14px 16px' }}>
            <p style={{ color: '#555', fontSize: 14, fontStyle: 'italic', marginBottom: 14, borderLeft: '4px solid var(--primary)', paddingLeft: 10 }}>
              {b.description}
            </p>
            {paragraphs.map((p, i) => {
              if (p.startsWith('**') && p.endsWith('**')) {
                return <h3 key={i} style={{ fontSize: 15, fontWeight: 700, color: '#1a237e', marginTop: 16, marginBottom: 6 }}>{p.replace(/\*\*/g, '')}</h3>
              }
              if (p.startsWith('**')) {
                const parts = p.split('**')
                return <p key={i} style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>
                  {parts.map((part, j) => j % 2 === 1 ? <strong key={j}>{part}</strong> : part)}
                </p>
              }
              return <p key={i} style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>{p}</p>
            })}

            {b.tags && (
              <div style={{ marginTop: 16, paddingTop: 10, borderTop: '1px solid #eee' }}>
                {b.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            )}

            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              <button onClick={share} className="btn btn-primary">📤 Share Article</button>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href); alert('Copied!') }} className="btn btn-outline">🔗 Copy Link</button>
            </div>
          </div>

          {/* FAQs */}
          {b.faqs && b.faqs.length > 0 && (
            <div style={{ padding: '14px 16px', borderTop: '1px solid #eee' }}>
              <h2 style={{ fontSize: 16, fontWeight: 700, color: '#1a237e', marginBottom: 12 }}>❓ Frequently Asked Questions</h2>
              {b.faqs.map((f, i) => (
                <div key={i} style={{ marginBottom: 12, background: '#f5f5f5', padding: '10px', borderRadius: 4 }}>
                  <strong style={{ fontSize: 14, display: 'block', marginBottom: 4 }}>Q: {f.q}</strong>
                  <p style={{ fontSize: 13, color: '#555' }}>A: {f.a}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {related.length > 0 && (
          <>
            <div className="section-title">Related Articles</div>
            {related.map(b => <BlogCard key={b.id} b={b} />)}
          </>
        )}
      </div>
    </>
  )
}