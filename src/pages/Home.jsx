import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaPause, FaArrowDown } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import TextType from '../components/TextType';
import ThreeCol from '../components/ThreeCol';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import thumbnail from "../assets/heroBg.webp";
import howWorkBg from "../assets/how-work.jpg";
import vserv1 from '../assets/vserv1.jpg';
import vserv2 from '../assets/vserv2.jpg';
import vserv3 from '../assets/vserv3.jpg';
import vserv4 from '../assets/vserv4.jpg';
import vserv5 from '../assets/vserv5.jpg';
import vserv6 from '../assets/vserv6.jpg';
import vserv7 from '../assets/vserv7.jpg';
import vserv8 from '../assets/vserv8.jpg';
import vserv9 from '../assets/vserv9.jpg';
import useScrollAnimation from '../hooks/useScrollAnimation';

// 9 Services Data for the 3x3 Home Showcase
const HOME_SERVICES = [
  {
    num: '01',
    title: 'Branding Videos',
    desc: 'Stories with a clear point of view crafted to move people and build lasting brand authority.',
    image: vserv1,
    link: '/branding'
  },
  {
    num: '02',
    title: 'Drone & Aerial',
    desc: 'Breathtaking 4K cinematography and FAA-certified piloting delivering cinematic vantage points.',
    image: vserv2,
    link: '/drone'
  },
  {
    num: '03',
    title: 'Short-Form Content',
    desc: 'High-energy, thumb-stopping vertical reels engineered for maximum algorithmic reach.',
    image: vserv3,
    link: '/short-form'
  },
  {
    num: '04',
    title: 'Multi-Camera Production',
    desc: 'Synchronized live vision switching and multi-angle recording for large events and concerts.',
    image: vserv4,
    link: '/multi-camera'
  },
  {
    num: '05',
    title: 'Live Streaming',
    desc: 'Ultra-reliable broadcast streaming pipelines with redundant cellular uplinks and custom graphics.',
    image: vserv5,
    link: '/live-streaming'
  },
  {
    num: '06',
    title: 'Staging, Lighting, Audio',
    desc: 'Concert-grade sound reinforcement, intelligent lighting design, and modular staging.',
    image: vserv6,
    link: '/staging-lighting-audio'
  },
  {
    num: '07',
    title: 'Corporate Event Production',
    desc: 'Seamless media coverage, executive keynote recording, and same-day highlight recaps.',
    image: vserv7,
    link: '/corporate-event'
  },
  {
    num: '08',
    title: 'Product Photography',
    desc: 'Crisp commercial product photography with precision studio lighting and macro detail.',
    image: vserv8,
    link: '/product-photography'
  },
  {
    num: '09',
    title: 'Real Estate Photography',
    desc: 'HDR architectural imaging, twilight captures, and immersive virtual walkthroughs.',
    image: vserv9,
    link: '/real-estate'
  }
];

// Optimized Lazy-loading Video Box for Crafted Section
const CraftedVideoBox = ({ vimeoId, title, thumb, boxClass }) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            if (iframeRef.current && iframeRef.current.contentWindow) {
              try {
                iframeRef.current.contentWindow.postMessage(
                  JSON.stringify({ method: 'play' }),
                  '*'
                );
              } catch { }
            }
          } else {
            if (iframeRef.current && iframeRef.current.contentWindow) {
              try {
                iframeRef.current.contentWindow.postMessage(
                  JSON.stringify({ method: 'pause' }),
                  '*'
                );
              } catch { }
            }
          }
        });
      },
      {
        rootMargin: '250px 0px',
        threshold: 0.1
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleIframeLoad = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      try {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ method: 'addEventListener', value: 'play' }),
          '*'
        );
      } catch { }
    }
    // Smooth crossfade after buffer
    setTimeout(() => {
      setIsReady(true);
    }, 1000);
  };

  return (
    <div className={`crafted-video-box ${boxClass}`} ref={containerRef}>
      <img
        src={thumb}
        alt={title}
        className="crafted-video-thumb"
        loading="lazy"
        decoding="async"
        style={{
          opacity: isReady ? 0 : 1
        }}
      />
      {shouldLoad && (
        <iframe
          ref={iframeRef}
          className="crafted-video-iframe"
          src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&controls=0&autopause=0&transparent=0&playsinline=1&dnt=1&api=1`}
          title={title}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          onLoad={handleIframeLoad}
        />
      )}
    </div>
  );
};

const Home = () => {
  useScrollAnimation();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isFeaturedMounted, setIsFeaturedMounted] = useState(false);
  const [isFeaturedLoaded, setIsFeaturedLoaded] = useState(false);
  const [isFeaturedPlaying, setIsFeaturedPlaying] = useState(true);
  const userPausedFeaturedRef = useRef(false);

  const heroSectionRef = useRef(null);
  const featuredSectionRef = useRef(null);
  const featuredIframeRef = useRef(null);
  const heroIframeRef = useRef(null);

  // Floating capsule cursor state for 3x3 services showcase
  const [hoveredService, setHoveredService] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const [isTouchDevice] = useState(
    () => typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)
  );

  const handleServicesMouseMove = (e) => {
    if (isTouchDevice) return;
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleServicesMouseEnter = () => {
    if (isTouchDevice) return;
    setIsCursorVisible(true);
  };

  const handleServicesMouseLeave = () => {
    setIsCursorVisible(false);
    setHoveredService(null);
  };

  // Listen to Vimeo playback messages so hero thumbnail only fades when video actually starts
  useEffect(() => {
    const handleVimeoMessage = (event) => {
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        if (data && (data.event === 'play' || data.event === 'playing' || data.event === 'timeupdate')) {
          setIsVideoLoaded(true);
        }
      } catch { }
    };

    window.addEventListener('message', handleVimeoMessage);
    return () => window.removeEventListener('message', handleVimeoMessage);
  }, []);

  // Pause hero video when scrolled away to conserve CPU, GPU and bandwidth
  useEffect(() => {
    if (!heroSectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!heroIframeRef.current || !heroIframeRef.current.contentWindow) return;
          try {
            if (entry.isIntersecting) {
              heroIframeRef.current.contentWindow.postMessage(
                JSON.stringify({ method: 'play' }),
                '*'
              );
            } else {
              heroIframeRef.current.contentWindow.postMessage(
                JSON.stringify({ method: 'pause' }),
                '*'
              );
            }
          } catch { }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(heroSectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleHeroIframeLoad = () => {
    if (heroIframeRef.current && heroIframeRef.current.contentWindow) {
      try {
        heroIframeRef.current.contentWindow.postMessage(
          JSON.stringify({ method: 'addEventListener', value: 'play' }),
          '*'
        );
        heroIframeRef.current.contentWindow.postMessage(
          JSON.stringify({ method: 'addEventListener', value: 'timeupdate' }),
          '*'
        );
      } catch { }
    }
    // Safety fallback: smooth fade after video has had buffering time
    setTimeout(() => {
      setIsVideoLoaded(true);
    }, 1200);
  };

  const toggleFeaturedVideo = () => {
    if (!featuredIframeRef.current) return;
    const nextState = !isFeaturedPlaying;
    userPausedFeaturedRef.current = !nextState;
    const command = nextState ? 'playVideo' : 'pauseVideo';
    try {
      featuredIframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: command, args: '' }),
        '*'
      );
    } catch { }
    setIsFeaturedPlaying(nextState);
  };

  // Lazy load featured YouTube iframe when approaching, and pause when leaving viewport
  useEffect(() => {
    if (!featuredSectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFeaturedMounted(true);
            if (featuredIframeRef.current && !userPausedFeaturedRef.current) {
              try {
                featuredIframeRef.current.contentWindow.postMessage(
                  JSON.stringify({ event: 'command', func: 'playVideo', args: '' }),
                  '*'
                );
                setIsFeaturedPlaying(true);
              } catch { }
            }
          } else {
            if (featuredIframeRef.current) {
              try {
                featuredIframeRef.current.contentWindow.postMessage(
                  JSON.stringify({ event: 'command', func: 'pauseVideo', args: '' }),
                  '*'
                );
              } catch { }
            }
          }
        });
      },
      { rootMargin: '300px 0px', threshold: 0.15 }
    );

    observer.observe(featuredSectionRef.current);
    return () => observer.disconnect();
  }, []);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section" ref={heroSectionRef}>
        {/* Background Video Wrapper */}
        <div className="hero-video-wrapper" aria-hidden="true">
          {/* High-priority Poster Thumbnail - covers iframe until actual playback starts */}
          <img
            src={thumbnail}
            alt="Dillon Video Reel"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 1,
              opacity: isVideoLoaded ? 0 : 1,
              transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              pointerEvents: 'none'
            }}
          />
          <iframe
            ref={heroIframeRef}
            className="hero-video-iframe"
            src="https://player.vimeo.com/video/729024737?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&controls=0&autopause=0&transparent=1&playsinline=1&dnt=1&api=1"
            title="Dillon Video Background"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            loading="eager"
            onLoad={handleHeroIframeLoad}
            style={{
              zIndex: 0
            }}
          />
          {/* Lightly blackish layer overlay to ensure maximum text visibility */}
          <div className="hero-overlay"></div>
        </div>

        {/* Foreground Content */}
        <div className="hero-container">
          {/* Main Title Block */}
          <div className="hero-main">
            <p className="hero-subtitle animate__animated animate__fadeInUp">
              VIDEO PRODUCTION, PERFECTED SINCE 1985
            </p>
            <h1 className="hero-heading">
              <span className="line-powerful animate__animated animate__fadeInUp">
                Powerful
              </span>
              <span className="line-visuals animate__animated animate__fadeInUp">
                <TextType
                  text={["Visuals.", "Impact.", "Motion."]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  deletingSpeed={50}
                  showCursor={true}
                  cursorCharacter="|"
                  loop={true}
                />
              </span>
              <span className="line-production animate__animated animate__fadeInUp">
                Professional production.
              </span>
            </h1>
          </div>

          {/* Bottom Bar: Tags, Scroll Indicator, Play & Contact */}
          <div className="hero-bottom-bar animate__animated animate__fadeInUp">
            <div className="hero-tags">
              <span className="hero-tag">BRANDING VIDEOS</span>
              <span className="hero-tag">DRONES</span>
              <span className="hero-tag">SHORT-FORM CONTENT</span>
            </div>

            <div
              className="hero-scroll-indicator"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              <span>SCROLL TO ENTER</span>
              <FaArrowDown className="scroll-arrow" aria-hidden="true" />
            </div>

            <div className="hero-bottom-right">
              <button
                className="hero-play-circle"
                onClick={openVideoModal}
                aria-label="Play full video reel"
                title="Watch Full Reel"
              >
                <FaPlay className="play-icon" aria-hidden="true" />
              </button>
              <a href="#contact" className="hero-contact-link">
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Line */}
      <div className="marquee-container animate-on-scroll" data-animation="animate__fadeInUp">
        <div className="marquee-content">
          <span className="marquee-text">Multi-Camera Production &bull; Livestreaming &bull; Staging, Lighting, Audio &bull; Corporate Event Production &bull; Product Photography &bull; </span>
          <span className="marquee-text">Multi-Camera Production &bull; Livestreaming &bull; Staging, Lighting, Audio &bull; Corporate Event Production &bull; Product Photography &bull; </span>
        </div>
      </div>

      {/* Services Showcase Section (3x3 Boxes, No Gap) */}
      <section
        className="services-showcase-section"
        id="services"
        onMouseMove={handleServicesMouseMove}
        onMouseEnter={handleServicesMouseEnter}
        onMouseLeave={handleServicesMouseLeave}
      >
        {/* Floating Capsule Cursor (Hidden on touch devices) */}
        {!isTouchDevice && isCursorVisible && hoveredService && (
          <div
            className="services-floating-cursor visible"
            style={{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`
            }}
            aria-hidden="true"
          >
            <span className="cursor-text">Explore {hoveredService}</span>
          </div>
        )}

        <div className="services-showcase-container">
          <div className="services-showcase-grid">
            {HOME_SERVICES.map((service) => (
              <Link
                key={service.num}
                to={service.link}
                className="service-showcase-box animate-on-scroll"
                data-animation="animate__fadeIn"
                onMouseEnter={() => setHoveredService(service.title)}
              >
                {/* Background Image and Overlays */}
                <div className="service-box-bg-wrap">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-box-bg-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="service-box-overlay" />
                </div>

                {/* Top Corner Number */}
                <span className="service-box-num">{service.num}</span>

                {/* Top Right Corner Tilted Play Button converting to Tilted Arrow on hover */}
                <div className="service-box-icon-corner" aria-hidden="true">
                  <FaPlay className="service-box-icon service-box-icon-play" />
                  <FiArrowUpRight className="service-box-icon service-box-icon-arrow" />
                </div>

                {/* Bottom Content: Title and description */}
                <div className="service-box-content">
                  <h3 className="service-box-title">{service.title}</h3>
                  <p className="service-box-desc">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">

        <div className="about-container">
          <p className="about-subtitle animate-on-scroll" data-animation="animate__fadeInUp">MEET DILLON VIDEO</p>
          <h2 className="about-heading animate-on-scroll" data-animation="animate__fadeInUp">
            Are your visuals<br />
            telling the authentic<br />
            story you deserve?
          </h2>
          <p className="about-paragraph animate-on-scroll" data-animation="animate__fadeInUp">
            Dillon Video and Film Productions, Inc. was established in 1985. Since its inception, Dillon Video has specialized in professional video production services and has added additional services as technology evolved. With corporate offices and studios located in Ocala, Florida, Dillon Video continues to produce results-oriented projects across the US. Other projects have taken us to remote corners of the world, including Africa, Tahiti, Central America and the Caribbean.
          </p>
          <a href="#about-more" className="about-link animate-on-scroll" data-animation="animate__fadeInUp">Know More</a>
        </div>
      </section>

      {/* Crafted with Care / What We Shoot Section */}
      <section className="crafted-section" id="what-we-shoot">
        <div className="crafted-container">
          {/* Header */}
          <div className="crafted-header">
            <span className="crafted-tagline animate-on-scroll" data-animation="animate__fadeInUp">WHAT WE SHOOT</span>
            <h2 className="crafted-title animate-on-scroll" data-animation="animate__fadeInUp">
              Crafted <em>with care.</em>
            </h2>
            <a href="#contact" className="crafted-discuss-btn animate-on-scroll" data-animation="animate__fadeInUp">
              DISCUSS YOUR PROJECT
            </a>
          </div>

          {/* Video Grid */}
          <div className="crafted-grid">
            {/* Card 1: Square & Larger */}
            <div className="crafted-card animate-on-scroll" data-animation="animate__fadeInUp">
              <CraftedVideoBox
                vimeoId="729024737"
                title="Corporate Event Production"
                thumb="https://i.vimeocdn.com/video/1467442577-412bc3d26a60e7e14a1c6f783b8d28ab10e457f07f565149ce83a4974747113a-d_640"
                boxClass="square-box"
              />
              <div className="crafted-card-content">
                <h3 className="crafted-card-title">John Speaking
                  <br />about Gilber</h3>
                <p className="crafted-card-desc">
                  PROFESSIONAL SYNCHRONIZED MULTICAM COVERAGE FOR MASSIVE CORPORATE EVENTS, LIVE SPORTS, STAGE PLAYS, AND ENTERTAINMENT BROADCASTS.
                </p>
              </div>
            </div>

            {/* Card 2: Vertical / Staggered */}
            <div className="crafted-card card-staggered animate-on-scroll" data-animation="animate__fadeInUp">
              <CraftedVideoBox
                vimeoId="1163760683"
                title="Staging, Lighting & Audio"
                thumb="https://i.vimeocdn.com/video/2120113912-0465ce4b5144bf816471d4cd71e229164ae5829aa30f96972e850a2f9299150e-d_640"
                boxClass="portrait-box-tall"
              />
              <div className="crafted-card-content">
                <h3 className="crafted-card-title">Tino Martinez</h3>
                <p className="crafted-card-desc">
                  ULTRA-RELIABLE, REDUNDANT LIVE PRODUCTION AND HIGH-BANDWIDTH STREAMING PIPELINES OPTIMIZED FOR REMOTE AUDIENCES ANYWHERE.
                </p>
              </div>
            </div>

            {/* Card 3: Vertical */}
            <div className="crafted-card animate-on-scroll" data-animation="animate__fadeInUp">
              <CraftedVideoBox
                vimeoId="1163760789"
                title="Branding Videos"
                thumb="https://i.vimeocdn.com/video/2120113532-f211edbde2a4465d2efbf2b4ab9d3c9e2b948ec11c33a6b59ce859c64b824125-d_640"
                boxClass="portrait-box"
              />
              <div className="crafted-card-content">
                <h3 className="crafted-card-title">Gabi Powel</h3>
                <p className="crafted-card-desc">
                  STORIES WITH A CLEAR POINT OF VIEW- CRAFTED TO MOVE PEOPLE AND STRENGTHEN YOUR BRAND.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ThreeCol / Award-Winning Section */}
      <ThreeCol />

      {/* Featured Video Section */}
      <section className="featured-video-section" ref={featuredSectionRef} id="featured-video">
        <div className="featured-video-container">
          <div className="featured-video-wrapper animate-on-scroll" data-animation="animate__zoomIn" onClick={toggleFeaturedVideo}>
            <img
              src="https://i.ytimg.com/vi/50ngZiCfsxE/maxresdefault.jpg"
              alt="Dillon Featured Video"
              className="featured-video-thumb"
              loading="lazy"
              decoding="async"
              style={{
                opacity: isFeaturedLoaded ? 0 : 1
              }}
            />
            {isFeaturedMounted && (
              <iframe
                ref={featuredIframeRef}
                className="featured-video-iframe"
                src="https://www.youtube.com/embed/50ngZiCfsxE?enablejsapi=1&autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=50ngZiCfsxE&playsinline=1&modestbranding=1&showinfo=0&iv_load_policy=3"
                title="Dillon Featured Video"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                onLoad={() => {
                  setTimeout(() => {
                    setIsFeaturedLoaded(true);
                  }, 1000);
                }}
              />
            )}
            {/* Click layer to intercept clicks and toggle play/pause */}
            <div className="featured-video-overlay" />

            {/* Bottom Right Corner Play/Pause Circular Button */}
            <button
              className="featured-video-btn"
              onClick={(e) => {
                e.stopPropagation();
                toggleFeaturedVideo();
              }}
              aria-label={isFeaturedPlaying ? "Pause video" : "Play video"}
            >
              {isFeaturedPlaying ? (
                <FaPause className="featured-btn-icon" />
              ) : (
                <FaPlay className="featured-btn-icon play" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="how-work-section" id="how-we-work">
        <div
          className="how-work-bg"
          style={{ backgroundImage: `url(${howWorkBg})` }}
        >
          <div className="how-work-overlay"></div>
        </div>

        <div className="how-work-container">
          {/* Top Header Row */}
          <div className="how-work-header">
            <div className="how-work-header-left">
              <span className="how-work-tagline animate-on-scroll" data-animation="animate__fadeInUp">HOW WE WORK</span>
              <h2 className="how-work-title animate-on-scroll" data-animation="animate__fadeInUp">
                Simple process.<br />
                <em>Real results.</em>
              </h2>
            </div>

            <div className="how-work-header-right animate-on-scroll" data-animation="animate__fadeInUp">
              <div className="how-work-accent-line"></div>
              <p className="how-work-intro">
                We believe the best imagery comes from collaboration and trust. Our process is built to be clear, efficient, and low-friction, so you can focus on your story while we focus on capturing it.
              </p>
            </div>
          </div>

          {/* 4 Process Cards */}
          <div className="how-work-grid">
            <div className="how-work-card animate-on-scroll" data-animation="animate__fadeInUp">
              <span className="how-work-step">01</span>
              <h3 className="how-work-step-title">Discover</h3>
              <p className="how-work-step-desc">
                We start with a conversation to understand your vision, your brand, and what success looks like so everything begins with clarity.
              </p>
            </div>

            <div className="how-work-card animate-on-scroll" data-animation="animate__fadeInUp">
              <span className="how-work-step">02</span>
              <h3 className="how-work-step-title">Plan</h3>
              <p className="how-work-step-desc">
                We handle the details. Shot lists, timelines, and location scouting, so when shoot day arrives, everything feels seamless and fully thought through.
              </p>
            </div>

            <div className="how-work-card animate-on-scroll" data-animation="animate__fadeInUp">
              <span className="how-work-step">03</span>
              <h3 className="how-work-step-title">Produce</h3>
              <p className="how-work-step-desc">
                We show up present and intentional, capturing moments as they naturally unfold so your imagery feels authentic, not staged.
              </p>
            </div>

            <div className="how-work-card animate-on-scroll" data-animation="animate__fadeInUp">
              <span className="how-work-step">04</span>
              <h3 className="how-work-step-title">Deliver</h3>
              <p className="how-work-step-desc">
                Your final assets are delivered in a polished, organized gallery, ready to use across every platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonial />

      {/* CTA Section with Brand Logos */}
      <CTA />

      {/* Footer Section */}
      <Footer />

      {/* Video Modal Lightbox when Play Button is clicked */}
      {isVideoModalOpen && (
        <div className="video-modal-backdrop" onClick={closeVideoModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeVideoModal} aria-label="Close video modal">
              <IoClose />
            </button>
            <iframe
              className="video-modal-iframe"
              src="https://player.vimeo.com/video/662073747?autoplay=1&title=1&byline=1"
              title="Full Video Reel"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;