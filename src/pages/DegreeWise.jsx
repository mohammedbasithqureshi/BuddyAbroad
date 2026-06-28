import { useSearchParams } from 'react-router-dom'
import scholarships from '../data/scholarships.json'
import ScholarshipCard from '../components/ScholarshipCard'
import Breadcrumb from '../components/Breadcrumb'
import '../components/Cards.css'

const DEGREES = ['Undergraduate', 'Postgraduate', 'Masters', 'PhD', 'Diploma', 'ITI', 'MBA', 'MTech', 'MPhil', 'Research']

export default function DegreeWise() {
  const [params, setParams] = useSearchParams()
  const selected = params.get('degree') || ''
  const filtered = selected
    ? scholarships.filter(s => s.degree && s.degree.includes(selected))
    : scholarships

  return (
    <>
      <Breadcrumb items={[{ label: 'Degree Wise' }]} />
      <div className="container" style={{ marginTop: 12 }}>
        <div className="section-title">🎓 Degree Wise Scholarships</div>
        <div style={{ background: '#fff', border: '1px solid var(--border)', padding: '10px', marginBottom: 12, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          <button onClick={() => setParams({})} className={`btn ${!selected ? 'btn-primary' : 'btn-outline'}`} style={{ fontSize: 13, padding: '5px 14px' }}>All</button>
          {DEGREES.map(d => (
            <button key={d} onClick={() => setParams({ degree: d })}
              className={`btn ${selected === d ? 'btn-primary' : 'btn-outline'}`}
              style={{ fontSize: 13, padding: '5px 14px' }}>
              {d}
            </button>
          ))}
        </div>
        {filtered.length === 0
          ? <div style={{ background: '#fff', padding: 40, textAlign: 'center', color: '#888' }}>No scholarships found for this degree level.</div>
          : filtered.map(s => <ScholarshipCard key={s.id} s={s} />)
        }
      </div>
    </>
  )
}