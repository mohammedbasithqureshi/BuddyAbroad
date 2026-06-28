import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import scholarships from '../data/scholarships.json'
import ScholarshipCard from '../components/ScholarshipCard'
import Breadcrumb from '../components/Breadcrumb'
import '../components/Cards.css'

export default function Scholarships() {
  const [params] = useSearchParams()
  const [country, setCountry] = useState(params.get('country') || '')
  const [degree, setDegree] = useState(params.get('degree') || '')
  const [funding, setFunding] = useState(params.get('funding') || '')
  const [category, setCategory] = useState(params.get('category') || '')
  const [open, setOpen] = useState('')
  const q = params.get('q') || ''

  const filtered = useMemo(() => {
    return scholarships.filter(s => {
      if (q && !s.title.toLowerCase().includes(q.toLowerCase()) &&
        !s.university.toLowerCase().includes(q.toLowerCase()) &&
        !s.country.toLowerCase().includes(q.toLowerCase()) &&
        !(s.tags && s.tags.some(t => t.toLowerCase().includes(q.toLowerCase())))) return false
      if (country && s.country !== country) return false
      if (funding && s.funding !== funding) return false
      if (category && s.category !== category) return false
      if (degree && !(s.degree && s.degree.includes(degree))) return false
      if (open === 'open' && !s.open) return false
      if (open === 'closed' && s.open) return false
      return true
    })
  }, [q, country, degree, funding, category, open])

  const countries = [...new Set(scholarships.map(s => s.country))]
  const degrees = [...new Set(scholarships.flatMap(s => s.degree || []))]
  const categories = [...new Set(scholarships.map(s => s.category))]

  return (
    <>
      <Breadcrumb items={[{ label: 'Scholarships' }]} />
      <div className="container" style={{ marginTop: 12 }}>
        <div className="section-title">🎓 All Scholarships {q && `— Results for "${q}"`}</div>

        {/* Filters */}
        <div style={{
          background: '#fff', border: '1px solid var(--border)',
          padding: '12px', marginBottom: 12, display: 'flex', flexWrap: 'wrap', gap: 8
        }}>
          <select value={country} onChange={e => setCountry(e.target.value)} style={sel}>
            <option value="">All Countries</option>
            {countries.map(c => <option key={c}>{c}</option>)}
          </select>
          <select value={degree} onChange={e => setDegree(e.target.value)} style={sel}>
            <option value="">All Degrees</option>
            {degrees.map(d => <option key={d}>{d}</option>)}
          </select>
          <select value={funding} onChange={e => setFunding(e.target.value)} style={sel}>
            <option value="">All Funding</option>
            <option>Fully Funded</option>
            <option>Partial</option>
          </select>
          <select value={category} onChange={e => setCategory(e.target.value)} style={sel}>
            <option value="">All Categories</option>
            {categories.map(c => <option key={c}>{c}</option>)}
          </select>
          <select value={open} onChange={e => setOpen(e.target.value)} style={sel}>
            <option value="">Open & Closed</option>
            <option value="open">Open Only</option>
            <option value="closed">Closed Only</option>
          </select>
          <button onClick={() => { setCountry(''); setDegree(''); setFunding(''); setCategory(''); setOpen('') }}
            className="btn btn-accent" style={{ fontSize: 13, padding: '6px 14px' }}>
            Clear
          </button>
        </div>

        <p style={{ fontSize: 13, color: '#666', marginBottom: 8 }}>
          Showing {filtered.length} scholarships
        </p>

        {filtered.length === 0
          ? <div style={{ background: '#fff', padding: '40px', textAlign: 'center', color: '#888' }}>
              No scholarships found. Try changing filters.
            </div>
          : filtered.map(s => <ScholarshipCard key={s.id} s={s} />)
        }
      </div>
    </>
  )
}

const sel = {
  padding: '7px 10px', border: '1px solid var(--border)',
  borderRadius: 4, fontSize: 13, background: '#fff', outline: 'none'
}