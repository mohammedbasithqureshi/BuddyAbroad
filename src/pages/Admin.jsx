import { useState, useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import scholarshipsData from '../data/scholarships.json'
import blogsData from '../data/blogs.json'

export default function Admin() {
  const [tab, setTab] = useState('scholarships')
  const [scholarships, setScholarships] = useState(() => {
    const saved = localStorage.getItem('sb_scholarships')
    return saved ? JSON.parse(saved) : scholarshipsData
  })
  const [blogs, setBlogs] = useState(() => {
    const saved = localStorage.getItem('sb_blogs')
    return saved ? JSON.parse(saved) : blogsData
  })
  const [editS, setEditS] = useState(null)
  const [editB, setEditB] = useState(null)
  const [msg, setMsg] = useState('')

  useEffect(() => { localStorage.setItem('sb_scholarships', JSON.stringify(scholarships)) }, [scholarships])
  useEffect(() => { localStorage.setItem('sb_blogs', JSON.stringify(blogs)) }, [blogs])

  const saveMsg = (m) => { setMsg(m); setTimeout(() => setMsg(''), 2000) }

  const delScholarship = (id) => {
    if (confirm('Delete this scholarship?')) {
      setScholarships(prev => prev.filter(s => s.id !== id))
      saveMsg('Deleted!')
    }
  }

  const exportJson = () => {
    const data = JSON.stringify(tab === 'scholarships' ? scholarships : blogs, null, 2)
    const blob = new Blob([data], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = tab === 'scholarships' ? 'scholarships.json' : 'blogs.json'
    a.click()
    saveMsg('Exported!')
  }

  return (
    <>
      <Breadcrumb items={[{ label: 'Admin Panel' }]} />
      <div className="container" style={{ marginTop: 12 }}>
        <div style={{ background: '#1a237e', color: '#fff', padding: '12px 16px', borderRadius: '6px 6px 0 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: 18, fontWeight: 800 }}>⚙️ Admin Panel</h1>
          {msg && <span style={{ background: '#2e7d32', padding: '4px 12px', borderRadius: 4, fontSize: 13 }}>{msg}</span>}
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--border)', borderTop: 'none' }}>
          <div style={{ display: 'flex', borderBottom: '2px solid var(--border)' }}>
            {['scholarships', 'blogs'].map(t => (
              <button key={t} onClick={() => setTab(t)} style={{
                padding: '10px 20px', border: 'none', fontWeight: 700, fontSize: 14,
                background: tab === t ? '#1a237e' : '#f5f5f5',
                color: tab === t ? '#fff' : '#333', cursor: 'pointer', textTransform: 'capitalize'
              }}>
                {t === 'scholarships' ? '🎓 Scholarships' : '📝 Blogs'}
              </button>
            ))}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', padding: '6px 12px', gap: 8 }}>
              <button onClick={exportJson} className="btn btn-green" style={{ fontSize: 13, padding: '6px 14px' }}>Export JSON</button>
            </div>
          </div>

          <div style={{ padding: '12px' }}>
            {tab === 'scholarships' && (
              <>
                <p style={{ fontSize: 13, color: '#666', marginBottom: 10 }}>Total: {scholarships.length} scholarships</p>
                {scholarships.map(s => (
                  <div key={s.id} style={{ border: '1px solid #eee', borderRadius: 4, padding: '10px 12px', marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: '#1a237e' }}>{s.title}</div>
                      <div style={{ fontSize: 12, color: '#888' }}>{s.country} · {s.funding} · {s.category}</div>
                    </div>
                    <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
                      <button onClick={() => delScholarship(s.id)} style={{ background: '#b71c1c', color: '#fff', border: 'none', borderRadius: 4, padding: '5px 10px', fontSize: 12, cursor: 'pointer' }}>Delete</button>
                    </div>
                  </div>
                ))}
              </>
            )}

            {tab === 'blogs' && (
              <>
                <p style={{ fontSize: 13, color: '#666', marginBottom: 10 }}>Total: {blogs.length} blogs</p>
                {blogs.map(b => (
                  <div key={b.id} style={{ border: '1px solid #eee', borderRadius: 4, padding: '10px 12px', marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: '#1a237e' }}>{b.title}</div>
                      <div style={{ fontSize: 12, color: '#888' }}>{b.category} · {b.author}</div>
                    </div>
                    <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
                      <button onClick={() => setBlogs(prev => prev.filter(x => x.id !== b.id))} style={{ background: '#b71c1c', color: '#fff', border: 'none', borderRadius: 4, padding: '5px 10px', fontSize: 12, cursor: 'pointer' }}>Delete</button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}