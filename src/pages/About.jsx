import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaArrowRight } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';
import useVideoThumbnail from '../hooks/useVideoThumbnail';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import aboutRightImg from '../assets/about-right.png';
import jeffImg from '../assets/jeff.png';
import videoFallbackThumb from '../assets/vserv2.jpg';

const ABOUT_VIMEO_URL = "https://player.vimeo.com/video/686751977?autoplay=1&title=0&byline=0&portrait=0";

const About = () => {
  useScrollAnimation();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const videoThumb = useVideoThumbnail(ABOUT_VIMEO_URL, videoFallbackThumb);

  return (
    <main className="about-page-main">
      {/* 1. HERO SECTION (Dark) */}
      <section className="about-hero-section">
        <div className="about-container-page">
          {/* Breadcrumb */}
          <nav className="about-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="about-breadcrumb-link">HOME</Link>
            <span className="about-breadcrumb-sep">/</span>
            <span className="about-breadcrumb-active">ABOUT US</span>
          </nav>

          {/* Hero Content Row */}
          <div className="about-hero-row">
            <div className="about-hero-left animate-on-scroll" data-animation="animate__fadeInLeft">
              <h1 className="about-hero-title">
                Behind the lens.
                <span className="about-hero-title-italic">Beside you.</span>
              </h1>
              <p className="about-hero-intro">
                Experienced people. A hands-on approach. Professional video production from Ocala, Florida, to wherever your story takes us.
              </p>
              <Link to="/inquiry" className="about-hero-cta-btn">
                Let&apos;s work together
              </Link>
            </div>

            <div className="about-hero-right animate-on-scroll" data-animation="animate__fadeInRight">
              <div className="about-hero-img-box">
                <img
                  src={aboutRightImg}
                  alt="Dillon Video production team on set"
                  className="about-hero-img"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <span className="about-hero-img-caption">
                REAL PEOPLE. PROFESSIONAL PRODUCTION.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION 01: OUR STORY (Light / Cream) */}
      <section className="about-story-section">
        <div className="about-container-page">
          <span className="about-section-tag red-tag animate-on-scroll" data-animation="animate__fadeIn">
            01 / OUR STORY
          </span>

          <div className="about-story-grid">
            <div className="about-story-left animate-on-scroll" data-animation="animate__fadeInUp">
              <div className="about-story-year">1985</div>
              <span className="about-story-year-sub">
                A BEGINNING. NOT A FINISH LINE.
              </span>
            </div>

            <div className="about-story-right animate-on-scroll" data-animation="animate__fadeInUp">
              <h2 className="about-story-heading">
                Rooted in experience.<br />
                Driven by possibility.
              </h2>
              <div className="about-story-text">
                <p>
                  Dillon Video and Film Productions, Inc. was established in 1985. Professional video production has been at the heart of what we do ever since.
                </p>
                <p>
                  As technology has evolved, so have our services. What stays the same is our focus: experienced, creative crews and careful use of the latest technology to serve our clients.
                </p>
              </div>
            </div>
          </div>

          {/* Story Meta Footer Bar */}
          <div className="about-story-footer-row animate-on-scroll" data-animation="animate__fadeIn">
            <span className="about-story-footer-item">OCALA, FLORIDA</span>
            <span className="about-story-footer-sep">/</span>
            <span className="about-story-footer-item">VIDEO &amp; PHOTO PRODUCTION</span>
            <span className="about-story-footer-sep">/</span>
            <span className="about-story-footer-item">SINCE 1985</span>
          </div>
        </div>
      </section>

      {/* 3. SECTION 02: THE PERSON BEHIND THE PICTURE (Dark) */}
      <section className="about-jeff-section">
        <div className="about-container-page">
          <span className="about-section-tag animate-on-scroll" data-animation="animate__fadeIn">
            02 / THE PERSON BEHIND THE PICTURE
          </span>

          <div className="about-jeff-grid">
            {/* Left: Jeff Portrait */}
            <div className="about-jeff-left animate-on-scroll" data-animation="animate__fadeInUp">
              <div className="about-jeff-img-box">
                <img
                  src={jeffImg}
                  alt="Jeff Dillon - Founder & Camera Operator"
                  className="about-jeff-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="about-jeff-caption">
                JEFF DILLON / DILLON VIDEO &amp; FILM PRODUCTIONS, INC.
              </span>
            </div>

            {/* Right: Info & Quote */}
            <div className="about-jeff-right animate-on-scroll" data-animation="animate__fadeInUp">
              <h2 className="about-jeff-heading">
                A lifetime of<br />
                getting the shot.
              </h2>

              <div className="about-jeff-role-meta">
                <h3 className="about-jeff-name">Jeff Dillon</h3>
                <span className="about-jeff-title">PRODUCER / PHOTOGRAPHER</span>
              </div>

              <p className="about-jeff-bio">
                Jeff has guided Dillon Video since its founding. His experience as a news reporter and photojournalist for the ABC affiliate in Gainesville and the NBC affiliate in Orlando shaped a hands-on approach to production.
              </p>

              <blockquote className="about-jeff-quote">
                <p className="about-jeff-quote-text">
                  &ldquo;I can and will get you<br />
                  the video you need.&rdquo;
                </p>
                <cite className="about-jeff-quote-cite">&mdash; JEFF DILLON</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 03: OUR HOME. YOUR HORIZON. (Light / Cream) */}
      <section className="about-horizon-section">
        <div className="about-container-page">
          <span className="about-section-tag red-tag animate-on-scroll" data-animation="animate__fadeIn">
            03 / OUR HOME. YOUR HORIZON.
          </span>

          <div className="about-horizon-grid">
            {/* Left: Video Player Box */}
            <div className="about-horizon-left animate-on-scroll" data-animation="animate__fadeInUp">
              <div className="about-video-media-box">
                {!isVideoPlaying ? (
                  <div
                    className="about-video-poster"
                    onClick={() => setIsVideoPlaying(true)}
                    role="button"
                    tabIndex={0}
                    aria-label="Play Ocala and worldwide production video"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsVideoPlaying(true);
                      }
                    }}
                  >
                    <img
                      src={videoThumb}
                      alt="Production aerial landscape"
                      className="about-video-img"
                      loading="lazy"
                      decoding="async"
                    />
                    <button
                      type="button"
                      className="about-video-play-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsVideoPlaying(true);
                      }}
                      aria-label="Play video"
                    >
                      <FaPlay className="about-video-play-icon" aria-hidden="true" />
                    </button>
                  </div>
                ) : (
                  <iframe
                    className="about-video-iframe"
                    src={ABOUT_VIMEO_URL}
                    title="At home in Ocala. At work everywhere."
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                    allowFullScreen
                  />
                )}
              </div>
              <span className="about-video-caption">
                NINE PLACES. THE SAME COMMITMENT TO THE SHOT.
              </span>
            </div>

            {/* Right: Copy & Destination Grid */}
            <div className="about-horizon-right animate-on-scroll" data-animation="animate__fadeInUp">
              <h2 className="about-horizon-heading">
                At home in Ocala.<br />
                At work everywhere.
              </h2>

              <p className="about-horizon-desc">
                Our corporate offices and studios are in Ocala, Florida. Our productions take us across the United States&mdash;and well beyond it.
              </p>

              <div className="about-destinations-block">
                <span className="about-destinations-label">
                  PROJECTS HAVE TAKEN US TO:
                </span>
                <div className="about-destinations-grid">
                  <div className="about-destination-item">Africa</div>
                  <div className="about-destination-item">Tahiti</div>
                  <div className="about-destination-item">Central America</div>
                  <div className="about-destination-item">The Caribbean</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 04: HOW WE SHOW UP (Dark) */}
      <section className="about-values-section">
        <div className="about-container-page">
          <span className="about-section-tag animate-on-scroll" data-animation="animate__fadeIn">
            04 / HOW WE SHOW UP
          </span>

          <h2 className="about-values-heading animate-on-scroll" data-animation="animate__fadeInUp">
            The way we work matters.
          </h2>

          <div className="about-values-grid">
            {/* Pillar 01 */}
            <div className="about-value-card animate-on-scroll" data-animation="animate__fadeInUp">
              <span className="about-value-num">01</span>
              <h3 className="about-value-title">Hands-on, from the start.</h3>
              <p className="about-value-desc">
                We stay close to your project, with a practical approach shaped by years behind the camera.
              </p>
            </div>

            {/* Pillar 02 */}
            <div className="about-value-card animate-on-scroll" data-animation="animate__fadeInUp">
              <span className="about-value-num">02</span>
              <h3 className="about-value-title">Creative, not complicated.</h3>
              <p className="about-value-desc">
                Experienced crews and thoughtful production keep your story at the center of the process.
              </p>
            </div>

            {/* Pillar 03 */}
            <div className="about-value-card animate-on-scroll" data-animation="animate__fadeInUp">
              <span className="about-value-num">03</span>
              <h3 className="about-value-title">Technology with purpose.</h3>
              <p className="about-value-desc">
                As tools evolve, we add new capabilities&mdash;choosing the right approach for the result you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION 05: RECOGNITION (Light / Cream) */}
      <section className="about-recognition-section">
        <div className="about-container-page">
          <div className="about-recognition-row animate-on-scroll" data-animation="animate__fadeInUp">
            <div className="about-recognition-left">
              <span className="about-recognition-tag">RECOGNITION</span>
              <h2 className="about-recognition-title">A commitment to the craft.</h2>
              <p className="about-recognition-subtitle">Winners of over 15 Telly Awards.</p>
            </div>

            <div className="about-recognition-right">
              <Link to="/our-work" className="about-explore-work-btn">
                <span>Explore our work</span>
                <FaArrowRight className="about-btn-arrow" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA & FOOTER */}
      <CTA />
      <Footer />
    </main>
  );
};

export default About;
