import Breadcrumb from '../components/Breadcrumb'

export default function Privacy() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
      <div className="container" style={{ marginTop: 12 }}>
        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 6, padding: '20px', boxShadow: 'var(--card-shadow)' }}>
          <h1 style={{ fontSize: 20, fontWeight: 800, color: '#1a237e', marginBottom: 16 }}>Privacy Policy</h1>
          <p style={{ fontSize: 14, color: '#555', marginBottom: 10 }}>Last updated: June 2025</p>
          {[
            ['Information We Collect', 'ScholarBuddy does not collect any personal information from users. The website works entirely offline using local JSON files. If you use the contact form, your message is processed locally and not stored on any server.'],
            ['Cookies', 'We may use cookies to remember your preferences such as dark mode settings or bookmarked scholarships. These cookies are stored locally on your device and are not shared with any third party.'],
            ['Google AdSense', 'This website may display advertisements through Google AdSense. Google may use cookies to show relevant ads based on your interests. You can opt out of personalized advertising by visiting Google Ad Settings.'],
            ['Third Party Links', 'ScholarBuddy contains links to external scholarship websites. We are not responsible for the privacy practices or content of those websites. We recommend reading their privacy policies before submitting any personal information.'],
            ['Data Security', 'Since ScholarBuddy does not collect personal data, there is no risk of your information being stored or leaked from our systems.'],
            ['Contact', 'If you have any questions about this privacy policy, please use the Contact page to reach us.']
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