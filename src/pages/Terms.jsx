import Breadcrumb from '../components/Breadcrumb'

export default function Terms() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Terms of Use' }]} />
      <div className="container" style={{ marginTop: 12 }}>
        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 6, padding: '20px', boxShadow: 'var(--card-shadow)' }}>
          <h1 style={{ fontSize: 20, fontWeight: 800, color: '#1a237e', marginBottom: 16 }}>Terms of Use</h1>
          <p style={{ fontSize: 14, color: '#555', marginBottom: 10 }}>Last updated: June 2025</p>
          {[
            ['Acceptance of Terms', 'By accessing ScholarBuddy, you agree to these terms of use. If you disagree, please discontinue using the website.'],
            ['Informational Purpose Only', 'All content on ScholarBuddy is provided for informational purposes only. We do not guarantee the accuracy, completeness or currency of scholarship information. Always verify details on official websites.'],
            ['No Application Processing', 'ScholarBuddy does not process scholarship applications. We only provide information. You must apply directly through the official scholarship website or portal.'],
            ['Intellectual Property', 'All content including scholarship descriptions and blog articles on ScholarBuddy is original content. Copying or reproducing our content without permission is prohibited.'],
            ['Limitation of Liability', 'ScholarBuddy is not responsible for any loss resulting from reliance on information provided on this website. Use the information at your own risk.'],
            ['Changes to Terms', 'We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the new terms.']
          ].map(([h, p]) => (
            <div key={h} style={{ marginBottom: 16 }}>
              <h2 style={{ fontSize: 15, fontWeight: 700, color: '#1a237e', marginBottom: 6 }}>{h}</h2>
              <p style={{ fontSize: 14, color: '#444', lineHeight: 1.7 }}>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}