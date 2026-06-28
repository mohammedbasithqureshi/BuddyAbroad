import { useSearchParams, Link } from 'react-router-dom'
import scholarships from '../data/scholarships.json'
import states from '../data/states.json'
import ScholarshipCard from '../components/ScholarshipCard'
import Breadcrumb from '../components/Breadcrumb'
import '../components/Cards.css'

export default function StateScholarships() {
  const [params, setParams] = useSearchParams()
  const selected = params.get('state') || ''
  const filtered = selected
    ? scholarships.filter(s => s.state === selected)
    : scholarships.filter(s => s.state)

  return (
    <>
      <Breadcrumb items={[{ label: 'State Scholarships' }]} />
      <div className="container" style={{ marginTop: 12 }}>
        <div className="section-title">🗺️ State Wise Scholarships</div>

        <div style={{
          background: '#fff',
          border: '1px solid var(--border)',
          padding: '10px',
          marginBottom: 12,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 6
        }}>
          <button
            onClick={() => setParams({})}
            className={`btn ${!selected ? 'btn-primary' : 'btn-outline'}`}
            style={{ fontSize: 13, padding: '5px 14px' }}
          >
            All States
          </button>
          {states.map(st => (
            <button
              key={st.id}
              onClick={() => setParams({ state: st.name })}
              className={`btn ${selected === st.name ? 'btn-primary' : 'btn-outline'}`}
              style={{ fontSize: 13, padding: '5px 14px' }}
            >
              {st.name}
            </button>
          ))}
        </div>

        {selected && (
          <p style={{ fontSize: 14, color: '#555', marginBottom: 8 }}>
            Showing scholarships for: <strong>{selected}</strong>
          </p>
        )}

        {filtered.length === 0 ? (
          <div style={{
            background: '#fff',
            padding: 40,
            textAlign: 'center',
            color: '#888',
            border: '1px solid var(--border)',
            borderRadius: 6
          }}>
            No scholarships found for this state.{' '}
            <Link to="/scholarships">View all scholarships</Link>
          </div>
        ) : (
          filtered.map(s => <ScholarshipCard key={s.id} s={s} />)
        )}
      </div>
    </>
  )
}