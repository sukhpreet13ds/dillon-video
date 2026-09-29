import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaArrowRight, FaPlay } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import logoImg from '../assets/Layer_1.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    let timeoutId;
    if (mobileMenuOpen) {
      timeoutId = setTimeout(() => {
        setShowArrow(true);
      }, 1500);
    } else {
      setShowArrow(false);
    }
    return () => clearTimeout(timeoutId);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="site-header">
      <nav className="navbar-container" aria-label="Main Navigation">
        {/* Logo */}
        <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
          <img src={logoImg} alt="Dillon Video & Photo" className="navbar-logo-img" />
        </Link>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          <li>
            <a href="#services" className="navbar-link">SERVICES</a>
          </li>
          <li>
            <a href="#work" className="navbar-link">OUR WORK</a>
          </li>
          <li>
            <a href="#about" className="navbar-link">ABOUT</a>
          </li>
          <li>
            <a href="#contact" className="navbar-link">CONTACT</a>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="navbar-actions">
          <a href="tel:3526200686" className="nav-phone-btn">
            <FaPhoneAlt className="nav-phone-icon" aria-hidden="true" />
            <span>(352) 620-0686</span>
          </a>
          <a href="#contact" className="nav-cta-btn">
            <span>Get in Touch</span>
            <FaArrowRight className="cta-arrow" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Full-Screen Mobile Navigation Panel */}
      <div className={`mobile-nav-panel ${mobileMenuOpen ? 'open' : ''}`}>
        {/* Top bar: Left Logo, Right Cross Icon */}
        <div className="mobile-nav-header">
          <Link to="/" className="mobile-nav-logo" onClick={closeMobileMenu}>
            <img src={logoImg} alt="Dillon Video & Photo" className="mobile-nav-logo-img" />
          </Link>
          <button
            className="mobile-nav-close-btn"
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
          >
            <IoClose />
          </button>
        </div>

        {/* Body: Left-aligned vertical nav items, buttons, and video */}
        <div className="mobile-nav-body">
          <ul className="mobile-nav-list">
            <li>
              <a href="#services" className="mobile-nav-item" onClick={closeMobileMenu}>
                <span className="mobile-nav-text"><span className='letter-highlight'>S</span>ERVICES</span>
                <span className="mobile-nav-icon-wrapper">
                  <FaPlay className={`nav-icon-play ${showArrow ? 'hide' : 'show'}`} />
                  <FaArrowRight className={`nav-icon-arrow ${showArrow ? 'show' : 'hide'}`} />
                </span>
              </a>
            </li>
            <li>
              <a href="#work" className="mobile-nav-item" onClick={closeMobileMenu}>
                <span className="mobile-nav-text"><span className='letter-highlight'>O</span>UR <span className='letter-highlight'>W</span>ORK</span>
                <span className="mobile-nav-icon-wrapper">
                  <FaPlay className={`nav-icon-play ${showArrow ? 'hide' : 'show'}`} />
                  <FaArrowRight className={`nav-icon-arrow ${showArrow ? 'show' : 'hide'}`} />
                </span>
              </a>
            </li>
            <li>
              <a href="#about" className="mobile-nav-item" onClick={closeMobileMenu}>
                <span className="mobile-nav-text"><span className='letter-highlight'>A</span>BOUT</span>
                <span className="mobile-nav-icon-wrapper">
                  <FaPlay className={`nav-icon-play ${showArrow ? 'hide' : 'show'}`} />
                  <FaArrowRight className={`nav-icon-arrow ${showArrow ? 'show' : 'hide'}`} />
                </span>
              </a>
            </li>
            <li>
              <a href="#contact" className="mobile-nav-item" onClick={closeMobileMenu}>
                <span className="mobile-nav-text"><span className='letter-highlight'>C</span>ONTACT</span>
                <span className="mobile-nav-icon-wrapper">
                  <FaPlay className={`nav-icon-play ${showArrow ? 'hide' : 'show'}`} />
                  <FaArrowRight className={`nav-icon-arrow ${showArrow ? 'show' : 'hide'}`} />
                </span>
              </a>
            </li>
          </ul>

          <div className="mobile-nav-footer-actions">
            <a href="tel:3526200686" className="mobile-nav-phone-btn" onClick={closeMobileMenu}>
              <FaPhoneAlt className="nav-phone-icon" aria-hidden="true" />
              <span>(352) 620-0686</span>
            </a>
            <a href="#contact" className="mobile-nav-cta-btn" onClick={closeMobileMenu}>
              <span>Get in Touch</span>
              <FaArrowRight className="cta-arrow" aria-hidden="true" />
            </a>
          </div>

          {/* Video right after the buttons - rendered only when menu is open */}
          <div className="mobile-nav-video-container">
            {mobileMenuOpen && (
              <iframe
                className="mobile-nav-video-iframe"
                src="https://player.vimeo.com/video/662073747?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&controls=0&autopause=0&transparent=0&quality=360p&dnt=1"
                title="Mobile Menu Background Video"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
              />
            )}
            <div className="mobile-nav-video-overlay"></div>
            <div className="mobile-nav-video-text">
               <div className="video-line left-line"></div>
               <span>Let's Shoot</span>
               <div className="video-line right-line"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;