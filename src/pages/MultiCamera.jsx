import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import useScrollAnimation from '../hooks/useScrollAnimation';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import heroThumb from '../assets/multi-thumbnail.avif';
import useVideoThumbnail from '../hooks/useVideoThumbnail';
import '../style/services.css';

const STORIES_VIDEO_URL = "https://player.vimeo.com/video/727177727?autoplay=1&title=0&byline=0&portrait=0";
const STORIES_VIDEO_THUMB = "https://i.vimeocdn.com/video/1463877409-d704eaa6bef41774cc1c7e2685b4c56f8f73792050be9abbe075c998a53d42a2-d_960";

const MultiCamera = () => {
  useScrollAnimation();
  const [isHeroPlaying, setIsHeroPlaying] = useState(false);
  const [isStoriesPlaying, setIsStoriesPlaying] = useState(false);
  const storiesThumbnail = useVideoThumbnail(STORIES_VIDEO_URL, STORIES_VIDEO_THUMB);

  return (
    <main className="service-page-main page-multi-camera">
      {/* 1. HERO SECTION (Dark) */}
      <section className="service-hero-section">
        <div className="service-container">
          {/* Breadcrumb */}
          <nav className="service-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">HOME</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-muted">SERVICES</span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-active">MULTI-CAMERA PRODUCTION</span>
          </nav>

          {/* Heading & Intro Row */}
          <div className="service-hero-header-row">
            <div className="service-hero-heading-col">
              <h1 className="service-hero-title">
                Multi-Camera Production
                <span className="service-hero-subtitle">Synchronized coverage. Every angle.</span>
              </h1>
              <Link to="/inquiry" className="service-hero-cta-btn">
                Plan your multicam production
              </Link>
            </div>

            <div className="service-hero-intro-col">
              <p className="service-hero-intro-text">
                Live vision switching, coordinated camera crews, and high-definition multi-angle recording for concerts, sports, and conferences.
              </p>
            </div>
          </div>

          {/* Hero Video Container (Not autoplay, loads/plays on click) */}
          <div className="service-hero-video-box">
            {!isHeroPlaying ? (
              <div
                className="service-video-poster"
                onClick={() => setIsHeroPlaying(true)}
                role="button"
                tabIndex={0}
                aria-label="Play Multi-Camera Production reel"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsHeroPlaying(true);
                  }
                }}
              >
                <img
                  src={heroThumb}
                  alt="Multi-Camera Production Reel"
                  className="service-video-poster-img"
                  fetchPriority="high"
                  loading="eager"
                />
                <button
                  type="button"
                  className="service-play-btn"
                  aria-label="Play video"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsHeroPlaying(true);
                  }}
                >
                  <FaPlay className="service-play-icon" aria-hidden="true" />
                </button>
              </div>
            ) : (
              <iframe
                className="service-video-iframe"
                src="https://player.vimeo.com/video/906858689?autoplay=1&title=0&byline=0&portrait=0"
                title="Multi-Camera Production Reel"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                allowFullScreen
              />
            )}
          </div>

          {/* Video Sub-bar Metadata */}
          <div className="service-video-metadata-row">
            <span className="service-meta-tag">BROADCAST SWITCHING / MULTI-ANGLE RIGS</span>
            <span className="service-meta-tag">PROFESSIONAL PRODUCTION. SINCE 1980.</span>
          </div>
        </div>
      </section>

      {/* 2. WHY A BRANDING VIDEO (Warm Light / Beige) */}
      <section className="service-why-section">
        <div className="service-container">
          <span className="service-section-tag red-tag animate-on-scroll" data-animation="animate__fadeIn">
            01 / WHY MULTI-CAMERA PRODUCTION
          </span>

          <div className="service-why-main-grid">
            <div className="service-why-heading-col animate-on-scroll" data-animation="animate__fadeInUp">
              <h2 className="service-section-heading-dark">
                More than one shot.<br />
                Total event immersion.
              </h2>
            </div>
            <div className="service-why-body-col animate-on-scroll" data-animation="animate__fadeInUp">
              <p className="service-lead-text">
                Live events happen in real time and leave zero room for missed moments. Our multi-camera broadcast systems sync every angle, close-up, and wide audience reaction with frame-accurate precision.
              </p>
              <p className="service-sub-text">
                Complete with director intercoms, robotic PTZ units, tally lights, and live vision switching ready for IMAG projection and instant replays.
              </p>
            </div>
          </div>

          {/* 3 Pillars / Feature Columns */}
          <div className="service-why-features-row animate-on-scroll" data-animation="animate__fadeInUp">
            <div className="service-feature-item">
              <h3 className="service-feature-title">Live switching.</h3>
              <p className="service-feature-desc">
                Instant director switching between cameras with graphics, lower-thirds, and overlays.
              </p>
            </div>
            <div className="service-feature-item">
              <h3 className="service-feature-title">ISO recordings.</h3>
              <p className="service-feature-desc">
                Every camera recorded independently in ProRes 4K for comprehensive post-event editing.
              </p>
            </div>
            <div className="service-feature-item">
              <h3 className="service-feature-title">Broadcast hardware.</h3>
              <p className="service-feature-desc">
                SDI fiber infrastructure, professional telephoto glass, and redundant recording systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STORIES WE CAN HELP YOU TELL (Dark) */}
      <section className="service-stories-section">
        <div className="service-container">
          <span className="service-section-tag animate-on-scroll" data-animation="animate__fadeIn">
            02 / PRODUCTIONS WE COVER
          </span>

          <div className="service-stories-grid">
            {/* Left Column: Heading, Video Box, and Caption */}
            <div className="service-stories-left-col animate-on-scroll" data-animation="animate__fadeInUp">
              <h2 className="service-section-heading-light">
                One stage.<br />
                Flawless execution.
              </h2>

              <div className="stories-video-box">
                {!isStoriesPlaying ? (
                  <div
                    className="stories-video-poster"
                    onClick={() => setIsStoriesPlaying(true)}
                    role="button"
                    tabIndex={0}
                    aria-label="Play multicam sample video"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsStoriesPlaying(true);
                      }
                    }}
                  >
                    <img
                      src={storiesThumbnail}
                      alt="Multicam Production Sample"
                      className="stories-video-poster-img"
                      loading="lazy"
                    />
                    <button
                      type="button"
                      className="service-play-btn service-play-btn-small"
                      aria-label="Play video"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsStoriesPlaying(true);
                      }}
                    >
                      <FaPlay className="service-play-icon" aria-hidden="true" />
                    </button>
                  </div>
                ) : (
                  <iframe
                    className="stories-video-iframe"
                    src="https://player.vimeo.com/video/727177727?autoplay=1&title=0&byline=0&portrait=0"
                    title="Multicam Production Sample"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                    allowFullScreen
                  />
                )}
              </div>

              <span className="stories-video-caption">SYNCHRONIZED CAMERAS. BROADCAST QUALITY.</span>
            </div>

            {/* Right Column: Numbered Service Story Types */}
            <div className="service-stories-right-col animate-on-scroll" data-animation="animate__fadeInUp">
              <div className="stories-list">
                <div className="story-item">
                  <span className="story-number">01</span>
                  <div className="story-body">
                    <h3 className="story-title">Keynotes &amp; large summits</h3>
                    <p className="story-desc">
                      Multi-angle executive coverage with live stage projection (IMAG) and real-time graphics.
                    </p>
                  </div>
                </div>

                <div className="story-item">
                  <span className="story-number">02</span>
                  <div className="story-body">
                    <h3 className="story-title">Concerts &amp; stage performances</h3>
                    <p className="story-desc">
                      Dynamic jib, handheld, and wide-stage camera setups capturing intense crowd energy and musical detail.
                    </p>
                  </div>
                </div>

                <div className="story-item">
                  <span className="story-number">03</span>
                  <div className="story-body">
                    <h3 className="story-title">Live sports &amp; competitions</h3>
                    <p className="story-desc">
                      High-frame-rate tracking, instant replay capabilities, and scoreboard integrations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FROM IDEA TO FINAL FILM (Warm Light / Beige) */}
      <section className="service-process-section">
        <div className="service-container">
          <span className="service-section-tag red-tag animate-on-scroll" data-animation="animate__fadeIn">
            03 / FROM IDEA TO FINAL FILM
          </span>

          <h2 className="service-section-heading-dark service-process-main-heading animate-on-scroll" data-animation="animate__fadeInUp">
            A clear path from setup to live show.
          </h2>

          <div className="service-process-grid animate-on-scroll" data-animation="animate__fadeInUp">
            {/* Step 01 */}
            <div className="process-col">
              <span className="process-number">01</span>
              <h3 className="process-title">Discover</h3>
              <p className="process-desc">
                Venue walkthrough, sightline checks, power assessment, and camera position planning.
              </p>
            </div>

            {/* Step 02 */}
            <div className="process-col">
              <span className="process-number">02</span>
              <h3 className="process-title">Plan</h3>
              <p className="process-desc">
                Technical run of show, comms channels, switcher configurations, and lower-third graphics prep.
              </p>
            </div>

            {/* Step 03 */}
            <div className="process-col">
              <span className="process-number">03</span>
              <h3 className="process-title">Produce</h3>
              <p className="process-desc">
                Live directing with synchronized multi-camera switching, audio mixing, and recording.
              </p>
            </div>

            {/* Step 04 */}
            <div className="process-col">
              <span className="process-number">04</span>
              <h3 className="process-title">Deliver</h3>
              <p className="process-desc">
                Same-day switched master delivery alongside individual 4K ISO files for post production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MADE FOR WHERE YOUR BRAND LIVES (Dark) */}
      <section className="service-placement-section">
        <div className="service-container">
          <span className="service-section-tag animate-on-scroll" data-animation="animate__fadeIn">
            04 / MADE TO BE USED
          </span>

          <div className="service-placement-grid">
            <div className="service-placement-left-col animate-on-scroll" data-animation="animate__fadeInUp">
              <h2 className="service-section-heading-light">
                Made for where<br />
                your brand lives.
              </h2>
              <p className="service-placement-desc">
                We'll plan placements, aspect ratios and versions together before production.
              </p>
            </div>

            <div className="service-placement-right-col animate-on-scroll" data-animation="animate__fadeInUp">
              <div className="placement-list">
                <div className="placement-item">
                  <h3 className="placement-title">In-Venue Stage Displays</h3>
                  <p className="placement-desc">
                    Crystal-clear IMAG video feeds ensuring every attendee has a front-row view.
                  </p>
                </div>

                <div className="placement-item">
                  <h3 className="placement-title">Broadcast &amp; Live Streams</h3>
                  <p className="placement-desc">
                    Broadcast-ready SDI program out feeds sent directly to satellite or streaming encoders.
                  </p>
                </div>

                <div className="placement-item">
                  <h3 className="placement-title">Post-Event Highlights</h3>
                  <p className="placement-desc">
                    Paced recap films, session archives, and promotional marketing collateral.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. A FEW THINGS YOU MIGHT ASK (Warm Light / Beige) */}
      <section className="service-faq-section">
        <div className="service-container">
          <span className="service-section-tag red-tag animate-on-scroll" data-animation="animate__fadeIn">
            05 / BEFORE WE BEGIN
          </span>

          <div className="service-faq-grid">
            <div className="service-faq-left-col animate-on-scroll" data-animation="animate__fadeInUp">
              <h2 className="service-section-heading-dark">
                A few things<br />
                you might ask.
              </h2>
            </div>

            <div className="service-faq-right-col animate-on-scroll" data-animation="animate__fadeInUp">
              <div className="faq-list">
                <div className="faq-item">
                  <h3 className="faq-question">How many cameras can your switcher handle?</h3>
                  <p className="faq-answer">
                    Our production trailers and fly-packs support 4 to 12+ simultaneous broadcast inputs including roving cameras and PTZ units.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">Can you connect into venue projectors or LED walls?</h3>
                  <p className="faq-answer">
                    Yes. We provide low-latency SDI, HDMI, and optical outputs engineered for delay-free live projection.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">Do we get the separate camera recordings?</h3>
                  <p className="faq-answer">
                    Yes! Every single camera is recorded independently (ISO tracks) in addition to the live switched master cut.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">What should I send with an inquiry?</h3>
                  <p className="faq-answer">
                    Event date, venue location, schedule of sessions, expected attendance, and desired camera coverage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. KEEP THE STORY GOING (Deep Red / Crimson) */}
      <section className="service-explore-section">
        <div className="service-container">
          <div className="service-explore-grid">
            <div className="service-explore-left-col animate-on-scroll" data-animation="animate__fadeInUp">
              <span className="explore-tag">KEEP EXPLORING</span>
              <h2 className="explore-heading">Keep the story going.</h2>
              
            </div>

            <div className="service-explore-right-col animate-on-scroll" data-animation="animate__fadeInUp">
              <Link to="/live-streaming" className="explore-service-item">
                <span className="explore-service-name">Live Streaming</span>
                <FiArrowUpRight className="explore-service-arrow" aria-hidden="true" />
              </Link>
              <Link to="/corporate-event" className="explore-service-item">
                <span className="explore-service-name">Corporate Event Production</span>
                <FiArrowUpRight className="explore-service-arrow" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <CTA />

      {/* 9. FOOTER */}
      <Footer />
    </main>
  );
};

export default MultiCamera;
