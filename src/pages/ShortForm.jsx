import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import useScrollAnimation from '../hooks/useScrollAnimation';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import heroThumb from '../assets/brand-thumbnail.jpg';
import useBookingModal from '../context/useBookingModal';
import '../style/services.css';

const ShortForm = () => {
  useScrollAnimation();
  const { openBookingModal } = useBookingModal();
  const [isHeroPlaying, setIsHeroPlaying] = useState(false);
  const [isStoriesPlaying, setIsStoriesPlaying] = useState(false);

  return (
    <main className="service-page-main page-short-form">
      {/* 1. HERO SECTION (Dark) */}
      <section className="service-hero-section">
        <div className="service-container">
          {/* Breadcrumb */}
          <nav className="service-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">HOME</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-muted">SERVICES</span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-active">SHORT-FORM CONTENT</span>
          </nav>

          {/* Heading & Intro Row */}
          <div className="service-hero-header-row">
            <div className="service-hero-heading-col">
              <h1 className="service-hero-title">
                Short-Form Content
                <span className="service-hero-subtitle">High energy. Maximum reach.</span>
              </h1>
              <button
                type="button"
                className="service-hero-cta-btn"
                onClick={() => openBookingModal('Short-Form Content')}
                data-service="Short-Form Content"
              >
                Plan your short-form series
              </button>
            </div>

            <div className="service-hero-intro-col">
              <p className="service-hero-intro-text">
                Thumb-stopping vertical video designed for algorithmic acceleration across TikTok, Instagram Reels, and YouTube Shorts.
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
                aria-label="Play Short-Form Content reel"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsHeroPlaying(true);
                  }
                }}
              >
                <img
                  src={heroThumb}
                  alt="Short-Form Content Reel"
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
                src="https://player.vimeo.com/video/662073747?autoplay=1&title=0&byline=0&portrait=0"
                title="Short-Form Content Reel"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                allowFullScreen
              />
            )}
          </div>

          {/* Video Sub-bar Metadata */}
          <div className="service-video-metadata-row">
            <span className="service-meta-tag">TIKTOK &amp; REELS / VERTICAL VIDEO</span>
            <span className="service-meta-tag">PROFESSIONAL PRODUCTION. SINCE 1980.</span>
          </div>
        </div>
      </section>

      {/* 2. WHY A BRANDING VIDEO (Warm Light / Beige) */}
      <section className="service-why-section">
        <div className="service-container">
          <span className="service-section-tag animate-on-scroll" data-animation="animate__fadeIn">
            01 / WHY SHORT-FORM CONTENT
          </span>

          <div className="service-why-main-grid">
            <div className="service-why-heading-col animate-on-scroll" data-animation="animate__fadeInUp">
              <h2 className="service-section-heading-dark">
                More than trends.<br />
                Lasting audience attention.
              </h2>
            </div>
            <div className="service-why-body-col animate-on-scroll" data-animation="animate__fadeInUp">
              <p className="service-lead-text">
                Short-form video is the fastest vehicle for discovery and community engagement. We craft high-retention hooks and clean narratives that convert passive scrollers into passionate advocates.
              </p>
              <p className="service-sub-text">
                Engineered specifically for mobile-first feeds—striking visuals, crisp audio, dynamic pacing, and platform-native typography.
              </p>
            </div>
          </div>

          {/* 3 Pillars / Feature Columns */}
          <div className="service-why-features-row animate-on-scroll" data-animation="animate__fadeInUp">
            <div className="service-feature-item">
              <h3 className="service-feature-title">High-retention hooks.</h3>
              <p className="service-feature-desc">
                First 3 seconds structured to capture attention and stop the scroll instantly.
              </p>
            </div>
            <div className="service-feature-item">
              <h3 className="service-feature-title">Batch production.</h3>
              <p className="service-feature-desc">
                Efficient shoot days providing months of ready-to-post vertical content.
              </p>
            </div>
            <div className="service-feature-item">
              <h3 className="service-feature-title">Platform optimized.</h3>
              <p className="service-feature-desc">
                9:16 vertical framing, kinetic motion graphics, and trend-aligned sound design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STORIES WE CAN HELP YOU TELL (Dark) */}
      <section className="service-stories-section">
        <div className="service-container">
          <span className="service-section-tag animate-on-scroll" data-animation="animate__fadeIn">
            02 / FORMATS WE PRODUCE
          </span>

          <div className="service-stories-grid">
            {/* Left Column: Heading, Video Box, and Caption */}
            <div className="service-stories-left-col animate-on-scroll" data-animation="animate__fadeInUp">
              <h2 className="service-section-heading-light">
                One vision.<br />
                Snackable impact.
              </h2>

              <div className="stories-video-box">
                {!isStoriesPlaying ? (
                  <div
                    className="stories-video-poster"
                    onClick={() => setIsStoriesPlaying(true)}
                    role="button"
                    tabIndex={0}
                    aria-label="Play short-form video sample"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsStoriesPlaying(true);
                      }
                    }}
                  >
                    <img
                      src="https://i.vimeocdn.com/video/1952494551-393fef1df4cc325f004fb87ec7ae6317143be18ec706604f33879051c37289d6-d_640"
                      alt="Short-Form Sample"
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
                    src="https://player.vimeo.com/video/1031704729?autoplay=1&title=0&byline=0&portrait=0"
                    title="Short-Form Sample"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                    allowFullScreen
                  />
                )}
              </div>

              <span className="stories-video-caption">DYNAMIC MOTION. RETENTION-FOCUSED.</span>
            </div>

            {/* Right Column: Numbered Service Story Types */}
            <div className="service-stories-right-col animate-on-scroll" data-animation="animate__fadeInUp">
              <div className="stories-list">
                <div className="story-item">
                  <span className="story-number">01</span>
                  <div className="story-body">
                    <h3 className="story-title">Product spotlight shorts</h3>
                    <p className="story-desc">
                      Fast-paced close-ups, benefit breakdowns, and real-world usage demonstrations.
                    </p>
                  </div>
                </div>

                <div className="story-item">
                  <span className="story-number">02</span>
                  <div className="story-body">
                    <h3 className="story-title">Behind-the-scenes &amp; culture</h3>
                    <p className="story-desc">
                      Authentic, unscripted workplace moments that humanize your brand and build trust.
                    </p>
                  </div>
                </div>

                <div className="story-item">
                  <span className="story-number">03</span>
                  <div className="story-body">
                    <h3 className="story-title">Founder &amp; expert insights</h3>
                    <p className="story-desc">
                      Direct-to-camera thought leadership clips answering core customer questions.
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
          <span className="service-section-tag animate-on-scroll" data-animation="animate__fadeIn">
            03 / FROM IDEA TO FINAL FILM
          </span>

          <h2 className="service-section-heading-dark service-process-main-heading animate-on-scroll" data-animation="animate__fadeInUp">
            A clear path from idea to viral reach.
          </h2>

          <div className="service-process-grid animate-on-scroll" data-animation="animate__fadeInUp">
            {/* Step 01 */}
            <div className="process-col">
              <span className="process-number">01</span>
              <h3 className="process-title">Discover</h3>
              <p className="process-desc">
                Identify trending formats, content buckets, and messaging aligned with your brand voice.
              </p>
            </div>

            {/* Step 02 */}
            <div className="process-col">
              <span className="process-number">02</span>
              <h3 className="process-title">Plan</h3>
              <p className="process-desc">
                Script punchy hooks, visual transitions, audio cues, and rapid-fire shot lists.
              </p>
            </div>

            {/* Step 03 */}
            <div className="process-col">
              <span className="process-number">03</span>
              <h3 className="process-title">Produce</h3>
              <p className="process-desc">
                Capture high-volume vertical footage with dynamic lighting, gimbal moves, and clean mics.
              </p>
            </div>

            {/* Step 04 */}
            <div className="process-col">
              <span className="process-number">04</span>
              <h3 className="process-title">Deliver</h3>
              <p className="process-desc">
                Fast turnaround delivery with animated captions, sound effects, and cover thumbnails.
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
                  <h3 className="placement-title">TikTok &amp; Instagram Reels</h3>
                  <p className="placement-desc">
                    Engineered for organic discovery algorithms and viral sharing.
                  </p>
                </div>

                <div className="placement-item">
                  <h3 className="placement-title">YouTube Shorts</h3>
                  <p className="placement-desc">
                    Drive high-intent channel subscribers and long-term search impressions.
                  </p>
                </div>

                <div className="placement-item">
                  <h3 className="placement-title">Paid Social Ads</h3>
                  <p className="placement-desc">
                    High-converting vertical ad creatives built for Meta and TikTok Ads Manager.
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
          <span className="service-section-tag animate-on-scroll" data-animation="animate__fadeIn">
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
                  <h3 className="faq-question">How many videos can we produce in one day?</h3>
                  <p className="faq-answer">
                    With our batch workflow, a single production day typically generates 10 to 20 polished short-form videos.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">Do you handle editing, captions, and graphics?</h3>
                  <p className="faq-answer">
                    Yes. We provide complete end-to-end post-production including kinetic typography, color grading, sound design, and custom captions.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">Can you repurpose our existing long-form footage?</h3>
                  <p className="faq-answer">
                    Yes! We frequently cut down podcasts, webinars, keynote speeches, and brand films into punchy vertical reels.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">What should I send with an inquiry?</h3>
                  <p className="faq-answer">
                    Target platforms, posting frequency goals, sample reels you like, and your primary brand themes.
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
              <Link to="/branding" className="explore-service-item">
                <span className="explore-service-name">Branding Videos</span>
                <FiArrowUpRight className="explore-service-arrow" aria-hidden="true" />
              </Link>
              <Link to="/drone" className="explore-service-item">
                <span className="explore-service-name">Drone &amp; Aerial</span>
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

export default ShortForm;
