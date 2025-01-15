import "./Footer.css";

import logo from "../../assets/Logo-1.png";

function Footer() {
  return (
    <footer className="footer-container">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <div className="footer-links">
          <h3 className="footer-link">Our Blog</h3>
          <h3 className="footer-link">Our Contact</h3>
          <h3 className="footer-link">Our Team</h3>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-copyright">© 2025 All Rights Reserved</div>
        <div className="footer-socials">
          <span className="social-link">Behance</span>
          <span className="social-link">Dribbble</span>
          <span className="social-link">Instagram</span>
          <span className="social-link">Pinterest</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
