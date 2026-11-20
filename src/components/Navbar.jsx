import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhoneAlt, FaArrowRight, FaPlay, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import logoImg from '../assets/Layer_1.png';
import howWorkBg1 from '../assets/vserv1.jpg';
import howWorkBg2 from '../assets/vserv2.jpg';
import howWorkBg3 from '../assets/vserv3.jpg';
import howWorkBg4 from '../assets/vserv4.jpg';
import howWorkBg5 from '../assets/vserv5.jpg';
import howWorkBg6 from '../assets/vserv6.jpg';
import howWorkBg7 from '../assets/vserv7.jpg';
import howWorkBg8 from '../assets/vserv8.jpg';
import howWorkBg9 from '../assets/vserv9.jpg';

// Services list with individual image fields ready for replacement
const SERVICES_DATA = [
  {
    id: 'branding-videos',
    title: 'Branding Videos',
    link: '/branding',
    description: 'Stories with a clear point of view—crafted to move people, build lasting emotional resonance, and strengthen your brand authority.',
    tags: ['Brand Films', 'Commercials', 'Documentary', 'Storytelling'],
    image: howWorkBg1
  },
  {
    id: 'drone-aerial',
    title: 'Drone & Aerial',
    link: '/drone',
    description: 'Breathtaking 4K aerial cinematography and FAA-certified piloting delivering cinematic vantage points and sweeping perspectives from above.',
    tags: ['FAA Certified', '4K Cinema', 'FPV Flythroughs', 'Site Mapping'],
    image: howWorkBg2
  },
  {
    id: 'short-form-content',
    title: 'Short-Form Content',
    link: '/short-form',
    description: 'High-energy, thumb-stopping reels, shorts, and vertical storytelling engineered for maximum engagement and algorithmic reach.',
    tags: ['TikTok & Reels', 'YouTube Shorts', 'Dynamic Motion', 'Viral Hooks'],
    image: howWorkBg3
  },
  {
    id: 'multi-camera-production',
    title: 'Multi-Camera Production',
    link: '/multi-camera',
    description: 'Synchronized multicam live switching and recording for massive events, live entertainment, concerts, and studio broadcasts.',
    tags: ['Live Switching', 'Broadcast Rig', 'Multi-Angle', 'Concerts & Sports'],
    image: howWorkBg4
  },
  {
    id: 'live-streaming',
    title: 'Live Streaming',
    link: '/live-streaming',
    description: 'Ultra-reliable, low-latency broadcast streaming pipelines and redundant uplinks optimized for remote audiences anywhere.',
    tags: ['Redundant Uplink', 'Custom Graphics', 'Global CDN', 'Interactive Q&A'],
    image: howWorkBg5
  },
  {
    id: 'staging-lighting-audio',
    title: 'Staging, Lighting, Audio',
    link: '/staging-lighting-audio',
    description: 'Concert-grade sound reinforcement, intelligent stage lighting design, and modular staging that turn any space into an immersive experience.',
    tags: ['Concert Audio', 'Pro Lighting', 'LED Stage Displays', 'Wireless Mics'],
    image: howWorkBg6
  },
  {
    id: 'corporate-event-production',
    title: 'Corporate Event Production',
    link: '/corporate-event',
    description: 'Seamless media coverage, executive keynote recording, and live presentation visuals for conferences, summits, and annual meetings.',
    tags: ['Keynote Capture', 'Trade Shows', 'Executive Interviews', 'Same-Day Edits'],
    image: howWorkBg7
  },
  {
    id: 'product-photography',
    title: 'Product Photography',
    link: '/product-photography',
    description: 'Crisp, high-definition commercial product photography with precision studio lighting that makes every material detail stand out.',
    tags: ['Studio Lighting', 'E-Commerce HDR', '360 Spin Views', 'Macro Detail'],
    image: howWorkBg8
  },
  {
    id: 'real-estate-photography',
    title: 'Real Estate Photography',
    link: '/real-estate',
    description: 'HDR architectural photography, cinematic twilight imaging, and immersive virtual walkthroughs that elevate luxury property listings.',
    tags: ['Architectural HDR', 'Twilight Shots', 'Virtual Tours', 'Aerial Scenics'],
    image: howWorkBg9
  }
];

// Helper to check if a service matches the current URL pathname
const isServiceActive = (service, currentPath) => {
  if (!currentPath || currentPath === '/') return false;
  const path = currentPath.toLowerCase().replace(/\/$/, '');
  const link = service.link.toLowerCase().replace(/\/$/, '');
  const idPath = `/${service.id.toLowerCase()}`;
  return path === link || path === idPath;
};

// Unified Mega Menu Component
const MegaMenuDropdown = ({
  megaMenuRef,
  pointerLeft,
  activeServiceIndex,
  setActiveServiceIndex,
  activeService,
  handleServiceClick,
  currentPathname
}) => (
  <div
    id="services-mega-menu"
    ref={megaMenuRef}
    className="mega-menu-wrapper"
    role="region"
    aria-label="Services Mega Menu"
  >
    {/* Pointer triangle indicator aligned under SERVICES */}
    <div
      className="mega-menu-pointer"
      style={{ left: pointerLeft !== null ? `${pointerLeft}px` : '220px' }}
      aria-hidden="true"
    />

    <div className="mega-menu-card">
      {/* Column 1: Services List (Left) */}
      <div className="mega-col-left">
        <span className="mega-section-label">SERVICES</span>
        <ul
          className="mega-services-list"
          onMouseLeave={() => setActiveServiceIndex(null)}
        >
          {SERVICES_DATA.map((service, idx) => {
            const isHovered = idx === activeServiceIndex;
            const isCurrent = isServiceActive(service, currentPathname);
            const isActive = isHovered || isCurrent;
            return (
              <li key={service.id}>
                <Link
                  to={service.link}
                  className={`mega-service-link ${isActive ? 'active' : ''} ${isCurrent ? 'current-page' : ''}`}
                  onMouseEnter={() => setActiveServiceIndex(idx)}
                  onFocus={() => setActiveServiceIndex(idx)}
                  onClick={handleServiceClick}
                >
                  <span className="mega-link-text">{service.title}</span>
                  {isActive && <span className="mega-active-dot" aria-hidden="true" />}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Column 2: Service Details & Tags (Middle) */}
      <div className="mega-col-middle" key={`detail-${activeService.id}`}>
        <span className="mega-section-label">EXPLORE</span>
        <Link
          to={activeService.link}
          className="mega-detail-title-link"
          onClick={handleServiceClick}
        >
          <span className="mega-detail-title">{activeService.title}</span>
          <FaArrowRight className="mega-detail-arrow" aria-hidden="true" />
        </Link>
        <p className="mega-detail-desc">{activeService.description}</p>

        <div className="mega-pills-grid">
          {activeService.tags.map((tag, tagIdx) => (
            <span key={tagIdx} className="mega-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Column 3: Service Image Card (Right) */}
      <div className="mega-col-right" key={`img-${activeService.id}`}>
        <div className="mega-image-card">
          <img
            src={activeService.image}
            alt={activeService.title}
            className="mega-card-img"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const location = useLocation();
  const currentServiceIndex = SERVICES_DATA.findIndex(s => isServiceActive(s, location.pathname));
  const isServicesPage = currentServiceIndex !== -1;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [megaMenuLocation, setMegaMenuLocation] = useState(null); // 'top' | 'bottom' | null
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);
  const activeServiceIndex = hoveredServiceIndex !== null
    ? hoveredServiceIndex
    : (currentServiceIndex !== -1 ? currentServiceIndex : 0);
  const [pointerLeft, setPointerLeft] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const isMobileServicesExpanded = mobileServicesOpen || isServicesPage;
  const [isScrolled, setIsScrolled] = useState(false);

  const topServicesBtnRef = useRef(null);
  const bottomServicesBtnRef = useRef(null);
  const megaMenuRef = useRef(null);

  // Desktop scroll detection: when scrolling down past 80px, show bottom capsule navbar
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth > 991) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || document.body.scrollTop || 0;
        setIsScrolled(scrollTop > 80);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => {
      if (prev) {
        setShowArrow(false);
      }
      return !prev;
    });
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setShowArrow(false);
    if (!isServicesPage) {
      setMobileServicesOpen(false);
    }
  };

  const toggleTopMegaMenu = (e) => {
    e.stopPropagation();
    setHoveredServiceIndex(null);
    setMegaMenuLocation(prev => prev === 'top' ? null : 'top');
  };

  const toggleBottomMegaMenu = (e) => {
    e.stopPropagation();
    setHoveredServiceIndex(null);
    setMegaMenuLocation(prev => prev === 'bottom' ? null : 'bottom');
  };

  const closeMegaMenu = () => {
    setMegaMenuLocation(null);
  };

  const handleServiceClick = () => {
    closeMegaMenu();
    closeMobileMenu();
  };

  // Dynamically calculate pointer arrow position aligned with the active SERVICES nav item
  useEffect(() => {
    if (!megaMenuLocation) return;

    const updatePointerPosition = () => {
      const targetBtnRef = megaMenuLocation === 'bottom' ? bottomServicesBtnRef : topServicesBtnRef;
      if (targetBtnRef.current && megaMenuRef.current) {
        const btnRect = targetBtnRef.current.getBoundingClientRect();
        const menuRect = megaMenuRef.current.getBoundingClientRect();
        const offset = (btnRect.left + btnRect.width / 2) - menuRect.left;
        setPointerLeft(offset);
      }
    };

    const id = requestAnimationFrame(updatePointerPosition);
    window.addEventListener('resize', updatePointerPosition);
    window.addEventListener('scroll', updatePointerPosition, { passive: true });
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('resize', updatePointerPosition);
      window.removeEventListener('scroll', updatePointerPosition);
    };
  }, [megaMenuLocation]);

  // Close mega menu on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isInsideMega = megaMenuRef.current && megaMenuRef.current.contains(event.target);
      const isOnTopBtn = topServicesBtnRef.current && topServicesBtnRef.current.contains(event.target);
      const isOnBottomBtn = bottomServicesBtnRef.current && bottomServicesBtnRef.current.contains(event.target);

      if (!isInsideMega && !isOnTopBtn && !isOnBottomBtn) {
        setMegaMenuLocation(null);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMegaMenuLocation(null);
      }
    };

    if (megaMenuLocation) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [megaMenuLocation]);

  // Mobile arrow animation trigger
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const timeoutId = setTimeout(() => {
      setShowArrow(true);
    }, 1500);
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

  const activeService = SERVICES_DATA[activeServiceIndex] || SERVICES_DATA[0];

  return (
    <>
      {/* 1. TOP NAVBAR (Normal on page load at the top) */}
      <header className="site-header">
        <nav className="navbar-container" aria-label="Main Navigation">
          {/* Logo */}
          <Link to="/" className="navbar-brand" onClick={() => { closeMobileMenu(); closeMegaMenu(); }}>
            <img src={logoImg} alt="Dillon Video & Photo" className="navbar-logo-img" />
          </Link>

          {/* Desktop Menu */}
          <ul className="navbar-menu">
            <li className="navbar-menu-item-services">
              <button
                ref={topServicesBtnRef}
                type="button"
                className={`navbar-link navbar-services-btn ${isServicesPage || megaMenuLocation === 'top' ? 'active' : ''}`}
                onClick={toggleTopMegaMenu}
                aria-expanded={megaMenuLocation === 'top'}
                aria-controls="services-mega-menu"
              >
                <span>SERVICES</span>
                <FaChevronDown className={`services-chevron ${megaMenuLocation === 'top' ? 'open' : ''}`} aria-hidden="true" />
              </button>
            </li>
            <li>
              <a href="#work" className="navbar-link" onClick={closeMegaMenu}>OUR WORK</a>
            </li>
            <li>
              <a href="#about" className="navbar-link" onClick={closeMegaMenu}>ABOUT</a>
            </li>
            <li>
              <a href="#contact" className="navbar-link" onClick={closeMegaMenu}>CONTACT</a>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="navbar-actions">
            <a href="tel:3526200686" className="nav-phone-btn" onClick={closeMegaMenu}>
              <FaPhoneAlt className="nav-phone-icon" aria-hidden="true" />
              <span>(352) 620-0686</span>
            </a>
            <a href="#contact" className="nav-cta-btn" onClick={closeMegaMenu}>
              <span>Get in Touch</span>
              <FaArrowRight className="cta-arrow" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle (kept intact at top on mobile) */}
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

        {/* Top Mega Menu (opens downwards) */}
        {megaMenuLocation === 'top' && (
          <MegaMenuDropdown
            megaMenuRef={megaMenuRef}
            pointerLeft={pointerLeft}
            activeServiceIndex={activeServiceIndex}
            setActiveServiceIndex={setHoveredServiceIndex}
            activeService={activeService}
            handleServiceClick={handleServiceClick}
            currentPathname={location.pathname}
          />
        )}
      </header>

      {/* 2. BOTTOM CAPSULE NAVBAR (Different capsule shape, shows on scroll down on desktop) */}
      {isScrolled && (
        <aside className="bottom-capsule-navbar" aria-label="Bottom Quick Navigation">
          {/* Capsule Menu */}
          <ul className="capsule-menu">
            <li>
              <button
                ref={bottomServicesBtnRef}
                type="button"
                className={`capsule-services-btn ${isServicesPage || megaMenuLocation === 'bottom' ? 'active' : ''}`}
                onClick={toggleBottomMegaMenu}
                aria-expanded={megaMenuLocation === 'bottom'}
                aria-controls="services-mega-menu"
              >
                <span>SERVICES</span>
                <FaChevronUp className={`capsule-services-chevron ${megaMenuLocation === 'bottom' ? 'open' : ''}`} aria-hidden="true" />
              </button>
            </li>
            <li>
              <a href="#work" className="capsule-link" onClick={closeMegaMenu}>OUR WORK</a>
            </li>
            <li>
              <a href="#about" className="capsule-link" onClick={closeMegaMenu}>ABOUT</a>
            </li>
            <li>
              <a href="#contact" className="capsule-link" onClick={closeMegaMenu}>CONTACT</a>
            </li>
          </ul>

          <div className="capsule-divider" aria-hidden="true" />

          {/* Capsule Actions */}
          <div className="capsule-actions">
            <a href="tel:3526200686" className="capsule-phone-btn" onClick={closeMegaMenu}>
              <FaPhoneAlt className="capsule-phone-icon" aria-hidden="true" />
              <span>(352) 620-0686</span>
            </a>
            <a href="#contact" className="capsule-cta-btn" onClick={closeMegaMenu}>
              <span>Get in Touch</span>
              <FaArrowRight className="capsule-cta-arrow" aria-hidden="true" />
            </a>
          </div>

          {/* Upward Mega Menu attached to the bottom capsule */}
          {megaMenuLocation === 'bottom' && (
            <MegaMenuDropdown
              megaMenuRef={megaMenuRef}
              pointerLeft={pointerLeft}
              activeServiceIndex={activeServiceIndex}
              setActiveServiceIndex={setHoveredServiceIndex}
              activeService={activeService}
              handleServiceClick={handleServiceClick}
              currentPathname={location.pathname}
            />
          )}
        </aside>
      )}

      {/* 3. FULL-SCREEN MOBILE NAVIGATION PANEL (Kept 100% intact) */}
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

        {/* Body: Left-aligned vertical nav items, dropdowns, buttons, and video */}
        <div className="mobile-nav-body">
          <ul className="mobile-nav-list">
            <li>
              <button
                type="button"
                className={`mobile-nav-item mobile-nav-services-btn ${isServicesPage || isMobileServicesExpanded ? 'active' : ''}`}
                onClick={() => setMobileServicesOpen(prev => !prev)}
                aria-expanded={isMobileServicesExpanded}
              >
                <span className="mobile-nav-text"><span className='letter-highlight'>S</span>ERVICES</span>
                <span className="mobile-nav-icon-wrapper">
                  <FaChevronDown className={`mobile-services-chevron ${isMobileServicesExpanded ? 'open' : ''}`} />
                </span>
              </button>

              {/* Mobile Services Accordion Dropdown */}
              <div className={`mobile-services-dropdown ${isMobileServicesExpanded ? 'open' : ''}`}>
                <ul className="mobile-services-sublist">
                  {SERVICES_DATA.map((service) => {
                    const isCurrent = isServiceActive(service, location.pathname);
                    return (
                      <li key={service.id}>
                        <Link
                          to={service.link}
                          className={`mobile-service-sublink ${isCurrent ? 'active' : ''}`}
                          onClick={handleServiceClick}
                        >
                          <span className="mobile-sublink-title">{service.title}</span>
                          <FaArrowRight className="mobile-sublink-arrow" aria-hidden="true" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
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
    </>
  );
};

export default Navbar;