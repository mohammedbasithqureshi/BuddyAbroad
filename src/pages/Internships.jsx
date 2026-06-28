import Breadcrumb from '../components/Breadcrumb'

export default function Internships() {
  const internships = [
    { title: 'IISER Summer Internship Program', org: 'IISER Institutes', deadline: '2025-03-31', stipend: 'Rs.5,000/month', link: 'https://www.iiserpune.ac.in' },
    { title: 'ISRO Internship for Engineering Students', org: 'Indian Space Research Organisation', deadline: '2025-04-30', stipend: 'Rs.8,000/month', link: 'https://www.isro.gov.in' },
    { title: 'IIT Research Internship (SURGE Program)', org: 'IIT Kanpur', deadline: '2025-02-28', stipend: 'Rs.10,000/month', link: 'https://surge.iitk.ac.in' },
    { title: 'DRDO Apprenticeship Training', org: 'DRDO India', deadline: '2025-05-31', stipend: 'Rs.9,000/month', link: 'https://www.drdo.gov.in' },
    { title: 'National Internship Program (NIP)', org: 'Ministry of Skill Development', deadline: '2025-12-31', stipend: 'Up to Rs.9,000/month', link: 'https://www.internship.gov.in' }
  ]

  return (
    <>
      <Breadcrumb items={[{ label: 'Internships' }]} />
      <div className="container" style={{ marginTop: 12 }}>
        <div className="section-title">💼 Internship Opportunities for Students</div>
        {internships.map((item, i) => (
          <div key={i} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 6, padding: '14px', marginBottom: 10, boxShadow: 'var(--card-shadow)' }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1a237e', marginBottom: 6 }}>{item.title}</h3>
            <p style={{ fontSize: 13, color: '#555', marginBottom: 4 }}>🏛️ {item.org}</p>
            <p style={{ fontSize: 13, color: '#555', marginBottom: 4 }}>💰 Stipend: {item.stipend}</p>
            <p style={{ fontSize: 13, color: '#555', marginBottom: 8 }}>📅 Deadline: {item.deadline}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: 13, padding: '6px 14px' }}>
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </>
  )
}