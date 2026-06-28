import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'

const guides = [
  { title: 'How to Write a Winning Scholarship Essay', desc: 'Tips and structure to write a compelling scholarship essay that stands out.', link: '/blogs' },
  { title: 'Germany Student Visa Guide 2025', desc: 'Step by step process to apply for a German student visa for Indian students.', link: '/blogs/study-germany-without-ielts-indian-students-2025' },
  { title: 'How to Apply on NSP Portal', desc: 'Complete walkthrough of the National Scholarship Portal application process.', link: '/blogs/how-to-apply-nsp-scholarship-2025' },
  { title: 'Documents Required for Government Scholarships', desc: 'Universal checklist of documents needed for most government scholarship applications.', link: '/blogs' },
  { title: 'Scholarship Interview Preparation Tips', desc: 'How to prepare and what to expect in scholarship selection interviews.', link: '/blogs' },
  { title: 'IELTS vs TOEFL – Which is Better for Scholarships?', desc: 'Comparison of English proficiency tests accepted by major international scholarships.', link: '/blogs' }
]

export default function StudyGuides() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Study Guides' }]} />
      <div className="container" style={{ marginTop: 12 }}>
        <div className="section-title">📚 Study Guides & Resources</div>
        {guides.map((g, i) => (
          <div key={i} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 6, padding: '14px', marginBottom: 10, boxShadow: 'var(--card-shadow)', display: 'flex', gap: 12 }}>
            <div style={{ fontSize: 28, flexShrink: 0 }}>📖</div>
            <div>
              <Link to={g.link} style={{ fontSize: 15, fontWeight: 700, color: '#1a237e', display: 'block', marginBottom: 4 }}>{g.title}</Link>
              <p style={{ fontSize: 13, color: '#555' }}>{g.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}