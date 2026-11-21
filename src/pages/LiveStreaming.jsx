import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import useScrollAnimation from '../hooks/useScrollAnimation';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import heroThumb from '../assets/live-thumbnail.png';
import useVideoThumbnail from '../hooks/useVideoThumbnail';
import '../style/services.css';

const STORIES_VIDEO_URL = "https://player.vimeo.com/video/874175859?autoplay=1&title=0&byline=0&portrait=0";
const STORIES_VIDEO_THUMB = "https://i.vimeocdn.com/video/1738030112-32376c8aa3615dc63c809b3e6a26ee4d64600fd2933b51bbb24eec708768d7a4-d_960";

const LiveStreaming = () => {
  useScrollAnimation();
  const [isHeroPlaying, setIsHeroPlaying] = useState(false);
  const [isStoriesPlaying, setIsStoriesPlaying] = useState(false);
  const storiesThumbnail = useVideoThumbnail(STORIES_VIDEO_URL, STORIES_VIDEO_THUMB);

  return (
    <main className="service-page-main page-live-streaming">
      {/* 1. HERO SECTION (Dark) */}
      <section className="service-hero-section">
        <div className="service-container">
          {/* Breadcrumb */}
          <nav className="service-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">HOME</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-muted">SERVICES</span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-active">LIVE STREAMING</span>
          </nav>

          {/* Heading & Intro Row */}
          <div className="service-hero-header-row">
            <div className="service-hero-heading-col">
              <h1 className="service-hero-title">
                Live Streaming
                <span className="service-hero-subtitle">Low latency. Global reach.</span>
              </h1>
              <Link to="/inquiry" className="service-hero-cta-btn">
                Plan your live stream
              </Link>
            </div>

            <div className="service-hero-intro-col">
              <p className="service-hero-intro-text">
                Ultra-reliable, low-latency broadcast streaming pipelines with redundant cellular bonded uplinks and customized interactive graphics.
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
                aria-label="Play Live Streaming reel"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsHeroPlaying(true);
                  }
                }}
              >
                <img
                  src={heroThumb}
                  alt="Live Streaming Reel"
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
                src="https://player.vimeo.com/video/788766007?autoplay=1&title=0&byline=0&portrait=0"
                title="Live Streaming Reel"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                allowFullScreen
              />
            )}
          </div>

          {/* Video Sub-bar Metadata */}
          <div className="service-video-metadata-row">
            <span className="service-meta-tag">REDUNDANT UPLINK / BONDED CELLULAR</span>
            <span className="service-meta-tag">PROFESSIONAL PRODUCTION. SINCE 1980.</span>
          </div>
        </div>
      </section>

      {/* 2. WHY A BRANDING VIDEO (Warm Light / Beige) */}
      <section className="service-why-section">
        <div className="service-container">
          <span className="service-section-tag red-tag animate-on-scroll" data-animation="animate__fadeIn">
            01 / WHY LIVE STREAMING
          </span>

          <div className="service-why-main-grid">
            <div className="service-why-heading-col animate-on-scroll" data-animation="animate__fadeInUp">
              <h2 className="service-section-heading-dark">
                More than a feed.<br />
                A worldwide connection.
              </h2>
            </div>
            <div className="service-why-body-col animate-on-scroll" data-animation="animate__fadeInUp">
              <p className="service-lead-text">
                Bring your conference, product launch, or concert directly to thousands of viewers globally without buffering, drops, or technical glitches.
              </p>
              <p className="service-sub-text">
                We combine bonded multi-network cellular encoders, dedicated hardware backup paths, custom branded graphics, and multi-destination CDN broadcasting.
              </p>
            </div>
          </div>

          {/* 3 Pillars / Feature Columns */}
          <div className="service-why-features-row animate-on-scroll" data-animation="animate__fadeInUp">
            <div className="service-feature-item">
              <h3 className="service-feature-title">Redundant failover.</h3>
              <p className="service-feature-desc">
                Bonded Starlink + cellular multi-sim uplinks ensuring zero dropout stream continuity.
              </p>
            </div>
            <div className="service-feature-item">
              <h3 className="service-feature-title">Simulcast delivery.</h3>
              <p className="service-feature-desc">
                Stream simultaneously to YouTube, LinkedIn, Facebook, and custom private portals.
              </p>
            </div>
            <div className="service-feature-item">
              <h3 className="service-feature-title">Interactive Q&amp;A.</h3>
              <p className="service-feature-desc">
                Live lower-thirds, audience polling graphics, and remote speaker integrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STORIES WE CAN HELP YOU TELL (Dark) */}
      <section className="service-stories-section">
        <div className="service-container">
          <span className="service-section-tag animate-on-scroll" data-animation="animate__fadeIn">
            02 / STREAM SCENARIOS
          </span>

          <div className="service-stories-grid">
            {/* Left Column: Heading, Video Box, and Caption */}
            <div className="service-stories-left-col animate-on-scroll" data-animation="animate__fadeInUp">
              <h2 className="service-section-heading-light">
                One broadcast.<br />
                Infinite reach.
              </h2>

              <div className="stories-video-box">
                {!isStoriesPlaying ? (
                  <div
                    className="stories-video-poster"
                    onClick={() => setIsStoriesPlaying(true)}
                    role="button"
                    tabIndex={0}
                    aria-label="Play live streaming sample video"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsStoriesPlaying(true);
                      }
                    }}
                  >
                    <img
                      src={storiesThumbnail}
                      alt="Live Streaming Sample"
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
                    src="https://player.vimeo.com/video/874175859?autoplay=1&title=0&byline=0&portrait=0"
                    title="Live Streaming Sample"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                    allowFullScreen
                  />
                )}
              </div>

              <span className="stories-video-caption">LOW LATENCY. REDUNDANT INTERNET.</span>
            </div>

            {/* Right Column: Numbered Service Story Types */}
            <div className="service-stories-right-col animate-on-scroll" data-animation="animate__fadeInUp">
              <div className="stories-list">
                <div className="story-item">
                  <span className="story-number">01</span>
                  <div className="story-body">
                    <h3 className="story-title">Corporate town halls</h3>
                    <p className="story-desc">
                      Secure, SSO-protected internal broadcasts connecting global workforces with leadership.
                    </p>
                  </div>
                </div>

                <div className="story-item">
                  <span className="story-number">02</span>
                  <div className="story-body">
                    <h3 className="story-title">Hybrid conferences</h3>
                    <p className="story-desc">
                      Integrate in-person podium presentations with two-way remote panelist interactions.
                    </p>
                  </div>
                </div>

                <div className="story-item">
                  <span className="story-number">03</span>
                  <div className="story-body">
                    <h3 className="story-title">Live concerts &amp; festivals</h3>
                    <p className="story-desc">
                      High-fidelity stereo audio mastering paired with dynamic multi-camera stage coverage.
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
            A clear path from setup to going live.
          </h2>

          <div className="service-process-grid animate-on-scroll" data-animation="animate__fadeInUp">
            {/* Step 01 */}
            <div className="process-col">
              <span className="process-number">01</span>
              <h3 className="process-title">Discover</h3>
              <p className="process-desc">
                Confirm target platforms, security protocols, attendee capacity, and bandwidth availability.
              </p>
            </div>

            {/* Step 02 */}
            <div className="process-col">
              <span className="process-number">02</span>
              <h3 className="process-title">Plan</h3>
              <p className="process-desc">
                Setup RTMP destinations, design on-screen overlays, test failover bonds, and run tech rehearsals.
              </p>
            </div>

            {/* Step 03 */}
            <div className="process-col">
              <span className="process-number">03</span>
              <h3 className="process-title">Produce</h3>
              <p className="process-desc">
                Broadcast live with continuous bitrate monitoring, audio balancing, and dynamic camera switching.
              </p>
            </div>

            {/* Step 04 */}
            <div className="process-col">
              <span className="process-number">04</span>
              <h3 className="process-title">Deliver</h3>
              <p className="process-desc">
                Instant VOD playback availability, cloud master recordings, and analytics reporting.
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
                  <h3 className="placement-title">Custom Branded Portals</h3>
                  <p className="placement-desc">
                    Private landing pages complete with password protection and registration gates.
                  </p>
                </div>

                <div className="placement-item">
                  <h3 className="placement-title">Public Social Channels</h3>
                  <p className="placement-desc">
                    Simultaneous feeds to YouTube, Facebook, LinkedIn, and Twitch.
                  </p>
                </div>

                <div className="placement-item">
                  <h3 className="placement-title">Enterprise Virtual Platforms</h3>
                  <p className="placement-desc">
                    Seamless integration with Zoom Events, Webex, Microsoft Teams, and Hopin.
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
                  <h3 className="faq-question">What if the venue has slow or no internet?</h3>
                  <p className="faq-answer">
                    We bring our own bonded cellular and satellite internet rigs combining multiple networks into one rock-solid pipe.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">Can we stream privately to just our company?</h3>
                  <p className="faq-answer">
                    Yes. We can broadcast to password-gated landing pages, unlisted feeds, or internal SSO-authenticated platforms.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">Do you record the stream for replay?</h3>
                  <p className="faq-answer">
                    Yes. We provide full 1080p/4K master recordings immediately upon conclusion of the broadcast.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">What should I send with an inquiry?</h3>
                  <p className="faq-answer">
                    Event date, venue address, platforms you want to stream to, and estimated presentation length.
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
              <Link to="/multi-camera" className="explore-service-item">
                <span className="explore-service-name">Multi-Camera Production</span>
                <FiArrowUpRight className="explore-service-arrow" aria-hidden="true" />
              </Link>
              <Link to="/staging-lighting-audio" className="explore-service-item">
                <span className="explore-service-name">Staging, Lighting, Audio</span>
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

export default LiveStreaming;
