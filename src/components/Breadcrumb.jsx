import { Link } from 'react-router-dom'

export default function Breadcrumb({ items }) {
  return (
    <div style={{
      background: '#fff', padding: '8px 12px',
      borderBottom: '1px solid var(--border)',
      fontSize: 13, color: '#888'
    }}>
      <div className="container">
        <Link to="/" style={{ color: '#888' }}>Home</Link>
        {items.map((item, i) => (
          <span key={i}>
            <span style={{ margin: '0 6px' }}>›</span>
            {item.path
              ? <Link to={item.path} style={{ color: '#888' }}>{item.label}</Link>
              : <span style={{ color: '#333' }}>{item.label}</span>
            }
          </span>
        ))}
      </div>
    </div>
  )
}