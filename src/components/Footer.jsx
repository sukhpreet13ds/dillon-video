import React from 'react';
import footerLogo from '../assets/logo-footer.png';
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Top Header Labels with Separator Line */}
        <div className="footer-top-row animate-on-scroll" data-animation="animate__fadeInUp">
          <div className="footer-top-left"></div>
          <div className="footer-top-services">
            <span>Services</span>
          </div>
          <div className="footer-top-navigation">
            <span>Navigation</span>
          </div>
        </div>

        {/* Main 4-Column Content */}
        <div className="footer-main-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col-brand animate-on-scroll" data-animation="animate__fadeInUp">
            <div className="footer-logo-badge">
              <img
                src={footerLogo}
                alt="Dillon Video & Photo Productions"
                className="footer-logo-img"
              />
            </div>
            <p className="footer-brand-desc">
              Dillon Video & Photo Productions provides a unique blend of exceptional customer service, experienced and creative crews, and careful use of the latest technology to provide superior services to our clients since 1985.
            </p>
          </div>

          {/* Column 2: Specialized Production Services */}
          <div className="footer-col-links animate-on-scroll" data-animation="animate__fadeInUp">
            <h4 className="footer-col-title">
              Specialized production services <span className="title-arrow">&#8599;</span>
            </h4>
            <ul className="footer-link-list">
              <li><a href="#services">Branding Videos</a></li>
              <li><a href="#services">Drone & Aerial</a></li>
              <li><a href="#services">Short-Form Content</a></li>
              <li><a href="#services">Multi-Camera Production</a></li>
              <li><a href="#services">Live Streaming</a></li>
              <li><a href="#services">Staging, Lighting, Audio</a></li>
              <li><a href="#services">Corporate Event Production</a></li>
              <li><a href="#services">Product Photography</a></li>
              <li><a href="#services">Real Estate Photography</a></li>
            </ul>
          </div>

          {/* Column 3: Main Navigation */}
          <div className="footer-col-links animate-on-scroll" data-animation="animate__fadeInUp">
            <h4 className="footer-col-title">Main</h4>
            <ul className="footer-link-list">
              <li><a href="#work">Our work</a></li>
              <li><a href="#about">Our people</a></li>
              <li><a href="#about">About us</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#testimonials">Reviews</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#alternatives">Dillon Video vs. Alternatives</a></li>
            </ul>
          </div>

          {/* Column 4: Learn Navigation */}
          <div className="footer-col-links animate-on-scroll" data-animation="animate__fadeInUp">
            <h4 className="footer-col-title">Learn</h4>
            <ul className="footer-link-list">
              <li><a href="#blog">Blog</a></li>
              <li><a href="#events">Events & Summits</a></li>
              <li><a href="#guides">Guides</a></li>
              <li><a href="#reports">Reports</a></li>
              <li><a href="#stories">Customer Stories</a></li>
              <li><a href="#whats-new">What's new</a></li>
              <li><a href="#help">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal & Socials */}
        <div className="footer-bottom-bar animate-on-scroll" data-animation="animate__fadeInUp">
          <p className="footer-copyright">
            Copyright &copy; 2026 Dillon Video & Photo Productions.
          </p>

          <div className="footer-legal-links">
            <a href="#privacy">Privacy policy</a>
            <a href="#terms">Terms of use</a>
            <a href="#status">Status page</a>
            <a href="#dmca">DMCA</a>
          </div>

          <div className="footer-social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-btn">
              <FaLinkedinIn />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-btn">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-btn">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-social-btn">
              <FaYoutube />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="footer-social-btn">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
