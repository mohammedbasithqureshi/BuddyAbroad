import { useState } from 'react'
import blogs from '../data/blogs.json'
import BlogCard from '../components/BlogCard'
import Breadcrumb from '../components/Breadcrumb'
import '../components/Cards.css'

export default function Blogs() {
  const [cat, setCat] = useState('')
  const categories = [...new Set(blogs.map(b => b.category))]
  const filtered = cat ? blogs.filter(b => b.category === cat) : blogs

  return (
    <>
      <Breadcrumb items={[{ label: 'Blogs' }]} />
      <div className="container" style={{ marginTop: 12 }}>
        <div className="section-title">📝 Latest Blogs & Guides</div>
        <div style={{ background: '#fff', border: '1px solid var(--border)', padding: '10px', marginBottom: 10, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <button onClick={() => setCat('')} className={`btn ${!cat ? 'btn-primary' : 'btn-outline'}`} style={{ fontSize: 13, padding: '5px 14px' }}>All</button>
          {categories.map(c => (
            <button key={c} onClick={() => setCat(c)} className={`btn ${cat === c ? 'btn-primary' : 'btn-outline'}`} style={{ fontSize: 13, padding: '5px 14px' }}>
              {c}
            </button>
          ))}
        </div>
        {filtered.map(b => <BlogCard key={b.id} b={b} />)}
      </div>
    </>
  )
}