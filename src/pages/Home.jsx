import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaArrowDown } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import TextType from '../components/TextType';
import ThreeCol from '../components/ThreeCol';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import thumbnail from "../assets/image.png";
import howWorkBg from "../assets/how-work.jpg";
import useScrollAnimation from '../hooks/useScrollAnimation';

const Home = () => {
  useScrollAnimation();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isFeaturedPlaying, setIsFeaturedPlaying] = useState(true);
  const featuredSectionRef = useRef(null);
  const featuredIframeRef = useRef(null);
  const heroIframeRef = useRef(null);

  // Listen to Vimeo playback messages so thumbnail only fades when video actually starts
  useEffect(() => {
    const handleVimeoMessage = (event) => {
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        if (data && (data.event === 'play' || data.event === 'playing' || data.event === 'timeupdate')) {
          setIsVideoLoaded(true);
        }
      } catch (err) {}
    };

    window.addEventListener('message', handleVimeoMessage);
    return () => window.removeEventListener('message', handleVimeoMessage);
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
      } catch (e) {}
    }
    // Safety fallback: smooth fade after video has had buffering time
    setTimeout(() => {
      setIsVideoLoaded(true);
    }, 1200);
  };

  const toggleFeaturedVideo = () => {
    if (!featuredIframeRef.current) return;
    const command = isFeaturedPlaying ? 'pauseVideo' : 'playVideo';
    featuredIframeRef.current.contentWindow.postMessage(
      JSON.stringify({ event: 'command', func: command, args: '' }),
      '*'
    );
    setIsFeaturedPlaying(!isFeaturedPlaying);
  };

  useEffect(() => {
    if (!featuredSectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (featuredIframeRef.current) {
              featuredIframeRef.current.contentWindow.postMessage(
                JSON.stringify({ event: 'command', func: 'playVideo', args: '' }),
                '*'
              );
              setIsFeaturedPlaying(true);
            }
          }
        });
      },
      { threshold: 0.25 }
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
      <section className="hero-section">
        {/* Background Video Wrapper */}
        <div className="hero-video-wrapper" aria-hidden="true">
          {/* High-priority Poster Thumbnail - covers iframe until actual playback starts */}
          <img
            src={thumbnail}
            alt="Dillon Video Reel"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
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
            src="https://player.vimeo.com/video/662073747?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&controls=0&autopause=0&transparent=1&playsinline=1&dnt=1&api=1"
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

      {/* About Section with Marquee */}
      <section className="about-section" id="about">
        <div className="marquee-container animate-on-scroll" data-animation="animate__fadeInUp">
          <div className="marquee-content">
            <span className="marquee-text">Multi-Camera Production &bull; Livestreaming &bull; Staging, Lighting, Audio &bull; Corporate Event Production &bull; Product Photography &bull; </span>
            <span className="marquee-text">Multi-Camera Production &bull; Livestreaming &bull; Staging, Lighting, Audio &bull; Corporate Event Production &bull; Product Photography &bull; </span>
          </div>
        </div>

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
              <div className="crafted-video-box square-box">
                <iframe
                  className="crafted-video-iframe"
                  src="https://player.vimeo.com/video/1031704729?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&controls=0&autopause=0&transparent=0&playsinline=1&dnt=1"
                  title="Corporate Event Production"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                  loading="lazy"
                />
              </div>
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
              <div className="crafted-video-box portrait-box-tall">
                <iframe
                  className="crafted-video-iframe"
                  src="https://player.vimeo.com/video/1163760683?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&controls=0&autopause=0&transparent=0&playsinline=1&dnt=1"
                  title="Staging, Lighting & Audio"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                  loading="lazy"
                />
              </div>
              <div className="crafted-card-content">
                <h3 className="crafted-card-title">Tino Martinez</h3>
                <p className="crafted-card-desc">
                  ULTRA-RELIABLE, REDUNDANT LIVE PRODUCTION AND HIGH-BANDWIDTH STREAMING PIPELINES OPTIMIZED FOR REMOTE AUDIENCES ANYWHERE.
                </p>
              </div>
            </div>

            {/* Card 3: Vertical */}
            <div className="crafted-card animate-on-scroll" data-animation="animate__fadeInUp">
              <div className="crafted-video-box portrait-box">
                <iframe
                  className="crafted-video-iframe"
                  src="https://player.vimeo.com/video/1163760789?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&controls=0&autopause=0&transparent=0&playsinline=1&dnt=1"
                  title="Branding Videos"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                  loading="lazy"
                />
              </div>
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
            <iframe
              ref={featuredIframeRef}
              className="featured-video-iframe"
              src="https://www.youtube.com/embed/50ngZiCfsxE?enablejsapi=1&autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=50ngZiCfsxE&playsinline=1&modestbranding=1&showinfo=0&iv_load_policy=3"
              title="Dillon Featured Video"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
            />
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