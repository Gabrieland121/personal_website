import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/gabeamezquita/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:gamezquita@gatech.edu">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <p className="copyright">© {new Date().getFullYear()} Gabriel Amezquita Medina. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;