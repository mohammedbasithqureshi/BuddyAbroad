import scholarships from '../data/scholarships.json'
import ScholarshipCard from '../components/ScholarshipCard'
import Breadcrumb from '../components/Breadcrumb'
import '../components/Cards.css'

export default function GovernmentSchemes() {
  const central = scholarships.filter(s => s.category === 'Central Government')
  const state = scholarships.filter(s => s.category === 'State Government')

  return (
    <>
      <Breadcrumb items={[{ label: 'Government Schemes' }]} />
      <div className="container" style={{ marginTop: 12 }}>
        <div className="section-title">🏛️ Central Government Scholarship Schemes</div>
        {central.map(s => <ScholarshipCard key={s.id} s={s} />)}
        <div className="section-title" style={{ marginTop: 12 }}>🗺️ State Government Scholarship Schemes</div>
        {state.map(s => <ScholarshipCard key={s.id} s={s} />)}
      </div>
    </>
  )
}