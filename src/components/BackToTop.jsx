import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed', bottom: 20, right: 16, zIndex: 999,
        background: 'var(--primary)', color: '#fff',
        border: 'none', borderRadius: '50%',
        width: 44, height: 44, fontSize: 20,
        cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
      }}
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}