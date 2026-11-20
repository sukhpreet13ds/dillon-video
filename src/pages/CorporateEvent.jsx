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

const CorporateEvent = () => {
  useScrollAnimation();
  const { openBookingModal } = useBookingModal();
  const [isHeroPlaying, setIsHeroPlaying] = useState(false);
  const [isStoriesPlaying, setIsStoriesPlaying] = useState(false);

  return (
    <main className="service-page-main page-corporate-event">
      {/* 1. HERO SECTION (Dark) */}
      <section className="service-hero-section">
        <div className="service-container">
          {/* Breadcrumb */}
          <nav className="service-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">HOME</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-muted">SERVICES</span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-active">CORPORATE EVENT PRODUCTION</span>
          </nav>

          {/* Heading & Intro Row */}
          <div className="service-hero-header-row">
            <div className="service-hero-heading-col">
              <h1 className="service-hero-title">
                Corporate Event Production
                <span className="service-hero-subtitle">Seamless coverage. Executive impact.</span>
              </h1>
              <button
                type="button"
                className="service-hero-cta-btn"
                onClick={() => openBookingModal('Corporate Event Production')}
                data-service="Corporate Event Production"
              >
                Plan your corporate event
              </button>
            </div>

            <div className="service-hero-intro-col">
              <p className="service-hero-intro-text">
                Comprehensive media capture, executive keynote presentation recording, and dynamic recap films for conferences, trade shows, and annual summits.
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
                aria-label="Play Corporate Event Production reel"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsHeroPlaying(true);
                  }
                }}
              >
                <img
                  src={heroThumb}
                  alt="Corporate Event Production Reel"
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
                title="Corporate Event Production Reel"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                allowFullScreen
              />
            )}
          </div>

          {/* Video Sub-bar Metadata */}
          <div className="service-video-metadata-row">
            <span className="service-meta-tag">CONFERENCES &amp; SUMMITS / EXECUTIVE MEDIA</span>
            <span className="service-meta-tag">PROFESSIONAL PRODUCTION. SINCE 1980.</span>
          </div>
        </div>
      </section>

      {/* 2. WHY A BRANDING VIDEO (Warm Light / Beige) */}
      <section className="service-why-section">
        <div className="service-container">
          <span className="service-section-tag animate-on-scroll" data-animation="animate__fadeIn">
            01 / WHY CORPORATE EVENT MEDIA
          </span>

          <div className="service-why-main-grid">
            <div className="service-why-heading-col animate-on-scroll" data-animation="animate__fadeInUp">
              <h2 className="service-section-heading-dark">
                More than attendance.<br />
                Lasting institutional memory.
              </h2>
            </div>
            <div className="service-why-body-col animate-on-scroll" data-animation="animate__fadeInUp">
              <p className="service-lead-text">
                Corporate events represent massive investments in strategy, culture, and stakeholder relationships. We ensure every presentation, interview, and milestone lives on.
              </p>
              <p className="service-sub-text">
                From fast same-day social sizzle reels that build external buzz during the event, to complete archival keynote libraries for employee training and PR distribution.
              </p>
            </div>
          </div>

          {/* 3 Pillars / Feature Columns */}
          <div className="service-why-features-row animate-on-scroll" data-animation="animate__fadeInUp">
            <div className="service-feature-item">
              <h3 className="service-feature-title">Same-day edits.</h3>
              <p className="service-feature-desc">
                High-energy recap films produced on-site ready to premiere at closing galas.
              </p>
            </div>
            <div className="service-feature-item">
              <h3 className="service-feature-title">Executive interviews.</h3>
              <p className="service-feature-desc">
                Mobile pop-up studio booths capturing high-level attendee and leadership quotes.
              </p>
            </div>
            <div className="service-feature-item">
              <h3 className="service-feature-title">Multi-room teams.</h3>
              <p className="service-feature-desc">
                Coordinated videographers covering simultaneous breakout sessions and mainstage tracks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STORIES WE CAN HELP YOU TELL (Dark) */}
      <section className="service-stories-section">
        <div className="service-container">
          <span className="service-section-tag animate-on-scroll" data-animation="animate__fadeIn">
            02 / COVERAGE PACKAGES
          </span>

          <div className="service-stories-grid">
            {/* Left Column: Heading, Video Box, and Caption */}
            <div className="service-stories-left-col animate-on-scroll" data-animation="animate__fadeInUp">
              <h2 className="service-section-heading-light">
                One summit.<br />
                Comprehensive capture.
              </h2>

              <div className="stories-video-box">
                {!isStoriesPlaying ? (
                  <div
                    className="stories-video-poster"
                    onClick={() => setIsStoriesPlaying(true)}
                    role="button"
                    tabIndex={0}
                    aria-label="Play corporate event sample video"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsStoriesPlaying(true);
                      }
                    }}
                  >
                    <img
                      src="https://i.vimeocdn.com/video/1952494551-393fef1df4cc325f004fb87ec7ae6317143be18ec706604f33879051c37289d6-d_640"
                      alt="Corporate Event Production Sample"
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
                    title="Corporate Event Production Sample"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                    allowFullScreen
                  />
                )}
              </div>

              <span className="stories-video-caption">EXECUTIVE POLISH. DISCREET CAPTURE.</span>
            </div>

            {/* Right Column: Numbered Service Story Types */}
            <div className="service-stories-right-col animate-on-scroll" data-animation="animate__fadeInUp">
              <div className="stories-list">
                <div className="story-item">
                  <span className="story-number">01</span>
                  <div className="story-body">
                    <h3 className="story-title">High-impact recap films</h3>
                    <p className="story-desc">
                      Paced highlight reels set to driving music, designed to fuel future ticket sales and sponsorship interest.
                    </p>
                  </div>
                </div>

                <div className="story-item">
                  <span className="story-number">02</span>
                  <div className="story-body">
                    <h3 className="story-title">Keynotes &amp; panel recordings</h3>
                    <p className="story-desc">
                      Synchronized presentation slide feeds paired seamlessly with crystal-clear podium audio.
                    </p>
                  </div>
                </div>

                <div className="story-item">
                  <span className="story-number">03</span>
                  <div className="story-body">
                    <h3 className="story-title">Trade show &amp; booth showcases</h3>
                    <p className="story-desc">
                      Exhibition floor coverage demonstrating active vendor demonstrations, crowd foot traffic, and attendee buzz.
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
            A clear path from briefing to wrap.
          </h2>

          <div className="service-process-grid animate-on-scroll" data-animation="animate__fadeInUp">
            {/* Step 01 */}
            <div className="process-col">
              <span className="process-number">01</span>
              <h3 className="process-title">Discover</h3>
              <p className="process-desc">
                Review agenda, key VIPs, media deliverables, interview target list, and schedule.
              </p>
            </div>

            {/* Step 02 */}
            <div className="process-col">
              <span className="process-number">02</span>
              <h3 className="process-title">Plan</h3>
              <p className="process-desc">
                Assign camera ops, setup press backdrops, test audio feeds with AV team, and map routes.
              </p>
            </div>

            {/* Step 03 */}
            <div className="process-col">
              <span className="process-number">03</span>
              <h3 className="process-title">Produce</h3>
              <p className="process-desc">
                Discreet on-site filming capturing key moments, crowd candid shots, and scheduled interviews.
              </p>
            </div>

            {/* Step 04 */}
            <div className="process-col">
              <span className="process-number">04</span>
              <h3 className="process-title">Deliver</h3>
              <p className="process-desc">
                Fast post-event turnaround with social cuts, master recap films, and session archives.
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
                  <h3 className="placement-title">Sponsorship &amp; Next-Year Marketing</h3>
                  <p className="placement-desc">
                    Compelling highlight videos that secure early registrations and top-tier sponsors.
                  </p>
                </div>

                <div className="placement-item">
                  <h3 className="placement-title">LinkedIn &amp; Executive Socials</h3>
                  <p className="placement-desc">
                    Short-form quote clips and leadership moments that showcase industry authority.
                  </p>
                </div>

                <div className="placement-item">
                  <h3 className="placement-title">Internal Knowledge Hubs</h3>
                  <p className="placement-desc">
                    Organized keynote libraries for employee onboarding and company-wide learning.
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
                  <h3 className="faq-question">Can you provide same-day or next-morning edits?</h3>
                  <p className="faq-answer">
                    Yes! We can deploy an on-site video editor dedicated to turning around daily recap reels.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">Do you coordinate with the venue AV crew?</h3>
                  <p className="faq-answer">
                    Yes. We take direct board audio feeds and sync with in-house presentation switchers for clean slide capture.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">Can you capture attendee interviews on the fly?</h3>
                  <p className="faq-answer">
                    Absolutely. We can staff roving interviewer/producer pairs to collect authentic attendee reactions.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">What should I send with an inquiry?</h3>
                  <p className="faq-answer">
                    Conference schedule, venue location, days of coverage, and desired final video deliverables.
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
              <Link to="/branding" className="explore-service-item">
                <span className="explore-service-name">Branding Videos</span>
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

export default CorporateEvent;
