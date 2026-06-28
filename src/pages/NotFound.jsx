import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '60px 16px' }}>
      <div style={{ fontSize: 60 }}>😕</div>
      <h1 style={{ fontSize: 28, fontWeight: 800, color: '#1a237e', margin: '16px 0 8px' }}>404 – Page Not Found</h1>
      <p style={{ fontSize: 15, color: '#666', marginBottom: 24 }}>The page you are looking for does not exist or has been moved.</p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/" className="btn btn-primary">Go to Home</Link>
        <Link to="/scholarships" className="btn btn-outline">View Scholarships</Link>
      </div>
    </div>
  )
}