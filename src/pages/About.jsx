import Breadcrumb from '../components/Breadcrumb'

export default function About() {
  return (
    <>
      <Breadcrumb items={[{ label: 'About' }]} />
      <div className="container" style={{ marginTop: 12 }}>
        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 6, padding: '20px', boxShadow: 'var(--card-shadow)' }}>
          <h1 style={{ fontSize: 20, fontWeight: 800, color: '#1a237e', marginBottom: 12 }}>About ScholarBuddy</h1>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 12, color: '#444' }}>
            ScholarBuddy is India's dedicated scholarship portal built to help students from all backgrounds discover and apply for scholarships, fellowships, and financial aid programs. Our mission is to make quality education accessible to every deserving student in India and abroad.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 12, color: '#444' }}>
            We cover Central Government scholarships like PMRF, NSP, INSPIRE, Maulana Azad Fellowship, AICTE Pragati, and many more. We also list State Government scholarships from Telangana, Andhra Pradesh, Karnataka, Tamil Nadu, Maharashtra and other states.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 12, color: '#444' }}>
            For students aspiring to study abroad, we cover international scholarships from the USA, UK, Germany, Canada, Australia and more including Fulbright, Chevening, Commonwealth, and DAAD scholarships.
          </p>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: '#1a237e', margin: '16px 0 8px' }}>Disclaimer</h2>
          <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7 }}>
            ScholarBuddy is an informational portal. We do not process scholarship applications or guarantee any scholarship. All information is provided for educational purposes only. Always verify details on the official scholarship website before applying. We are not affiliated with any government body or scholarship organization unless explicitly stated.
          </p>
        </div>
      </div>
    </>
  )
}