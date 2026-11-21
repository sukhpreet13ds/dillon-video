import React from 'react';
import { Link } from 'react-router-dom';
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
              Specialized production services
            </h4>
            <ul className="footer-link-list">
              <li><Link to="/branding">Branding Videos</Link></li>
              <li><Link to="/drone">Drone & Aerial</Link></li>
              <li><Link to="/short-form">Short-Form Content</Link></li>
              <li><Link to="/multi-camera">Multi-Camera Production</Link></li>
              <li><Link to="/live-streaming">Live Streaming</Link></li>
              <li><Link to="/staging-lighting-audio">Staging, Lighting, Audio</Link></li>
              <li><Link to="/corporate-events">Corporate Event Production</Link></li>
              <li><Link to="/product-photography">Product Photography</Link></li>
              <li><Link to="/real-estate">Real Estate Photography</Link></li>
            </ul>
          </div>

          {/* Column 3: Main Navigation */}
          <div className="footer-col-links animate-on-scroll" data-animation="animate__fadeInUp">
            <h4 className="footer-col-title">Main</h4>
            <ul className="footer-link-list">
              <li><Link to="/our-work">Our work</Link></li>
              <li><Link to="/about">Our people</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><a href="#testimonials">Reviews</a></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><a href="#alternatives">Dillon Video vs. Alternatives</a></li>
            </ul>
          </div>

          {/* Column 4: Learn Navigation */}
          <div className="footer-col-links animate-on-scroll" data-animation="animate__fadeInUp">
            <h4 className="footer-col-title">Learn</h4>
            <ul className="footer-link-list">
              <li><a href="#blog">Blog</a></li>
              <li><a href="#events">Events & Summits</a></li>
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
