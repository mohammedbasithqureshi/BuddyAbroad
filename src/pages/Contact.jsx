import { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'

export default function Contact() {
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setDone(true)
  }

  return (
    <>
      <Breadcrumb items={[{ label: 'Contact' }]} />
      <div className="container" style={{ marginTop: 12 }}>
        <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 6, padding: '20px', maxWidth: 600, boxShadow: 'var(--card-shadow)' }}>
          <h1 style={{ fontSize: 20, fontWeight: 800, color: '#1a237e', marginBottom: 8 }}>Contact Us</h1>
          <p style={{ fontSize: 14, color: '#555', marginBottom: 16 }}>Have a question, suggestion or want to add a scholarship? Write to us.</p>
          {done ? (
            <div style={{ background: '#e8f5e9', padding: '16px', borderRadius: 4, color: '#1b5e20', fontWeight: 600 }}>
              ✅ Thank you! We will get back to you within 2 working days.
            </div>
          ) : (
            <div>
              <div style={{ marginBottom: 12 }}>
                <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 4 }}>Your Name</label>
                <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={inp} placeholder="Enter your name" required />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 4 }}>Email Address</label>
                <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inp} placeholder="your@email.com" required />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 4 }}>Message</label>
                <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ ...inp, height: 120, resize: 'vertical' }} placeholder="Your message..." required />
              </div>
              <button onClick={handleSubmit} className="btn btn-primary" style={{ width: '100%', padding: '11px' }}>Send Message</button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

const inp = {
  width: '100%', padding: '9px 12px', border: '1px solid #ddd',
  borderRadius: 4, fontSize: 14, outline: 'none', boxSizing: 'border-box'
}