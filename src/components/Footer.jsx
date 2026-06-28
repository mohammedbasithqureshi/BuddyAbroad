import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>📚 ScholarBuddy</h3>
            <p style={{ fontSize: 13, color: '#aaa', marginTop: 6 }}>
              India's trusted scholarship portal helping students find fully funded, partial, state and central government scholarships.
            </p>
          </div>
          <div>
            <h4>Scholarships</h4>
            <ul>
              <li><Link to="/india-scholarships">India Scholarships</Link></li>
              <li><Link to="/state-scholarships">State Scholarships</Link></li>
              <li><Link to="/government-schemes">Government Schemes</Link></li>
              <li><Link to="/scholarships?funding=Fully Funded">Fully Funded</Link></li>
              <li><Link to="/fellowships">Fellowships</Link></li>
            </ul>
          </div>
          <div>
            <h4>By Degree</h4>
            <ul>
              <li><Link to="/degree-wise?degree=Undergraduate">Undergraduate</Link></li>
              <li><Link to="/degree-wise?degree=Masters">Master's</Link></li>
              <li><Link to="/degree-wise?degree=PhD">PhD</Link></li>
              <li><Link to="/degree-wise?degree=Diploma">Diploma / ITI</Link></li>
              <li><Link to="/degree-wise?degree=MBA">MBA</Link></li>
            </ul>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/countries">Countries</Link></li>
              <li><Link to="/study-guides">Study Guides</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Use</Link></li>
              <li><Link to="/admin">Admin Panel</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 ScholarBuddy. All Rights Reserved. | For educational purposes only. Always verify scholarship details on official websites.</p>
        </div>
      </div>
      <style>{`
        .footer {
          background: #111;
          color: #ccc;
          margin-top: 32px;
          padding: 32px 0 0;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 24px;
          padding-bottom: 24px;
        }
        .footer h3 { color: #fff; font-size: 18px; }
        .footer h4 { color: #fff; font-size: 14px; margin-bottom: 10px; }
        .footer ul { list-style: none; padding: 0; }
        .footer ul li { margin-bottom: 6px; }
        .footer ul li a { color: #aaa; font-size: 13px; text-decoration: none; }
        .footer ul li a:hover { color: #fff; }
        .footer-bottom {
          border-top: 1px solid #333;
          padding: 14px 0;
          text-align: center;
          font-size: 12px;
          color: #777;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </footer>
  )
}