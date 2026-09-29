import React, { useState } from 'react';
import { FaPlay, FaArrowDown } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import TextType from '../components/TextType';
import thumbnail from "../assets/image.png"
const Home = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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
          {!isVideoLoaded && (
            <img
              src={thumbnail}
              alt="Video Thumbnail"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 0
              }}
            />
          )}
          <iframe
            className="hero-video-iframe"
            src="https://player.vimeo.com/video/662073747?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&controls=0&autopause=0&transparent=0&playsinline=1&dnt=1"
            title="Dillon Video Background"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            loading="eager"
            onLoad={() => setIsVideoLoaded(true)}
            style={{ opacity: isVideoLoaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
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
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="marquee-text">Multi-Camera Production &bull; Livestreaming &bull; Staging, Lighting, Audio &bull; Corporate Event Production &bull; Product Photography &bull; </span>
            <span className="marquee-text">Multi-Camera Production &bull; Livestreaming &bull; Staging, Lighting, Audio &bull; Corporate Event Production &bull; Product Photography &bull; </span>
          </div>
        </div>

        <div className="about-container">
          <p className="about-subtitle">MEET DILLON VIDEO</p>
          <h2 className="about-heading">
            Are your visuals<br />
            telling the authentic<br />
            story you deserve?
          </h2>
          <p className="about-paragraph">
            Dillon Video and Film Productions, Inc. was established in 1985. Since its inception, Dillon Video has specialized in professional video production services and has added additional services as technology evolved. With corporate offices and studios located in Ocala, Florida, Dillon Video continues to produce results-oriented projects across the US. Other projects have taken us to remote corners of the world, including Africa, Tahiti, Central America and the Caribbean.
          </p>
          <a href="#about-more" className="about-link">Know More</a>
        </div>
      </section>

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