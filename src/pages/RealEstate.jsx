import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import useScrollAnimation from '../hooks/useScrollAnimation';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import heroThumb from '../assets/real-thumbnail.png';
import useBookingModal from '../context/useBookingModal';
import useVideoThumbnail from '../hooks/useVideoThumbnail';
import '../style/services.css';

const STORIES_VIDEO_URL = "https://player.vimeo.com/video/745394507?autoplay=1&title=0&byline=0&portrait=0";
const STORIES_VIDEO_THUMB = "https://i.vimeocdn.com/video/1499243706-c25b9219ada4f68d77fa84c2b4f90b21e5a644bef4667f59867ee1c171f367c1-d_960";

const RealEstate = () => {
  useScrollAnimation();
  const { openBookingModal } = useBookingModal();
  const [isHeroPlaying, setIsHeroPlaying] = useState(false);
  const [isStoriesPlaying, setIsStoriesPlaying] = useState(false);
  const storiesThumbnail = useVideoThumbnail(STORIES_VIDEO_URL, STORIES_VIDEO_THUMB);

  return (
    <main className="service-page-main page-real-estate">
      {/* 1. HERO SECTION (Dark) */}
      <section className="service-hero-section">
        <div className="service-container">
          {/* Breadcrumb */}
          <nav className="service-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">HOME</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-muted">SERVICES</span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-active">REAL ESTATE PHOTOGRAPHY</span>
          </nav>

          {/* Heading & Intro Row */}
          <div className="service-hero-header-row">
            <div className="service-hero-heading-col">
              <h1 className="service-hero-title">
                Real Estate Photography
                <span className="service-hero-subtitle">HDR clarity. Luxury perspective.</span>
              </h1>
              <button
                type="button"
                className="service-hero-cta-btn"
                onClick={() => openBookingModal('Real Estate Photography')}
                data-service="Real Estate Photography"
              >
                Plan your property shoot
              </button>
            </div>

            <div className="service-hero-intro-col">
              <p className="service-hero-intro-text">
                Magazine-grade architectural interior photography, twilight captures, and immersive virtual walkthroughs that elevate residential and commercial listings.
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
                aria-label="Play Real Estate Photography reel"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsHeroPlaying(true);
                  }
                }}
              >
                <img
                  src={heroThumb}
                  alt="Real Estate Photography Reel"
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
                src="https://player.vimeo.com/video/799975147?autoplay=1&title=0&byline=0&portrait=0"
                title="Real Estate Photography Reel"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                allowFullScreen
              />
            )}
          </div>

          {/* Video Sub-bar Metadata */}
          <div className="service-video-metadata-row">
            <span className="service-meta-tag">ARCHITECTURAL HDR / TWILIGHT &amp; VIRTUAL TOURS</span>
            <span className="service-meta-tag">PROFESSIONAL PRODUCTION. SINCE 1980.</span>
          </div>
        </div>
      </section>

      {/* 2. WHY A BRANDING VIDEO (Warm Light / Beige) */}
      <section className="service-why-section">
        <div className="service-container">
          <span className="service-section-tag red-tag animate-on-scroll" data-animation="animate__fadeIn">
            01 / WHY ARCHITECTURAL REAL ESTATE MEDIA
          </span>

          <div className="service-why-main-grid">
            <div className="service-why-heading-col animate-on-scroll" data-animation="animate__fadeInUp">
              <h2 className="service-section-heading-dark">
                More than pictures.<br />
                The emotion of arriving home.
              </h2>
            </div>
            <div className="service-why-body-col animate-on-scroll" data-animation="animate__fadeInUp">
              <p className="service-lead-text">
                Luxury buyers make split-second emotional decisions when browsing properties online. Our flambient lighting techniques combine natural window light with precision strobe balance.
              </p>
              <p className="service-sub-text">
                Every line is perfectly vertical, every window view is properly balanced, and every space feels expansive, welcoming, and high-end.
              </p>
            </div>
          </div>

          {/* 3 Pillars / Feature Columns */}
          <div className="service-why-features-row animate-on-scroll" data-animation="animate__fadeInUp">
            <div className="service-feature-item">
              <h3 className="service-feature-title">Flambient balance.</h3>
              <p className="service-feature-desc">
                Perfect window pull exposures combined with warm, accurate ambient room colors.
              </p>
            </div>
            <div className="service-feature-item">
              <h3 className="service-feature-title">Twilight photography.</h3>
              <p className="service-feature-desc">
                Dramatic sunset and blue hour exposures that make outdoor spaces glow.
              </p>
            </div>
            <div className="service-feature-item">
              <h3 className="service-feature-title">Fast 24-hr turnaround.</h3>
              <p className="service-feature-desc">
                MLS-ready high-resolution and web-sized downloads ready within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STORIES WE CAN HELP YOU TELL (Dark) */}
      <section className="service-stories-section">
        <div className="service-container">
          <span className="service-section-tag animate-on-scroll" data-animation="animate__fadeIn">
            02 / MEDIA PACKAGES
          </span>

          <div className="service-stories-grid">
            {/* Left Column: Heading, Video Box, and Caption */}
            <div className="service-stories-left-col animate-on-scroll" data-animation="animate__fadeInUp">
              <h2 className="service-section-heading-light">
                One property.<br />
                Irresistible appeal.
              </h2>

              <div className="stories-video-box">
                {!isStoriesPlaying ? (
                  <div
                    className="stories-video-poster"
                    onClick={() => setIsStoriesPlaying(true)}
                    role="button"
                    tabIndex={0}
                    aria-label="Play real estate sample video"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsStoriesPlaying(true);
                      }
                    }}
                  >
                    <img
                      src={storiesThumbnail}
                      alt="Real Estate Photography Sample"
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
                    src="https://player.vimeo.com/video/745394507?autoplay=1&title=0&byline=0&portrait=0"
                    title="Real Estate Photography Sample"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                    allowFullScreen
                  />
                )}
              </div>

              <span className="stories-video-caption">ARCHITECTURAL LINES. PERFECT ILLUMINATION.</span>
            </div>

            {/* Right Column: Numbered Service Story Types */}
            <div className="service-stories-right-col animate-on-scroll" data-animation="animate__fadeInUp">
              <div className="stories-list">
                <div className="story-item">
                  <span className="story-number">01</span>
                  <div className="story-body">
                    <h3 className="story-title">Interior &amp; exterior HDR</h3>
                    <p className="story-desc">
                      Multi-exposure architectural bracket blending ensuring crisp foregrounds and stunning outdoor views.
                    </p>
                  </div>
                </div>

                <div className="story-item">
                  <span className="story-number">02</span>
                  <div className="story-body">
                    <h3 className="story-title">Cinematic walkthrough video</h3>
                    <p className="story-desc">
                      Fluid motorized gimbal tours set to calming music that make remote buyers feel present.
                    </p>
                  </div>
                </div>

                <div className="story-item">
                  <span className="story-number">03</span>
                  <div className="story-body">
                    <h3 className="story-title">Aerial lot &amp; neighborhood drone</h3>
                    <p className="story-desc">
                      Sweeping aerial views illustrating property boundaries, neighborhood context, and nearby amenities.
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
            A clear path from shoot to MLS listing.
          </h2>

          <div className="service-process-grid animate-on-scroll" data-animation="animate__fadeInUp">
            {/* Step 01 */}
            <div className="process-col">
              <span className="process-number">01</span>
              <h3 className="process-title">Discover</h3>
              <p className="process-desc">
                Review property address, key features to emphasize, lockbox access, and weather forecast.
              </p>
            </div>

            {/* Step 02 */}
            <div className="process-col">
              <span className="process-number">02</span>
              <h3 className="process-title">Plan</h3>
              <p className="process-desc">
                Provide pre-shoot staging checklist, optimize shoot time for sun orientation, and schedule twilight.
              </p>
            </div>

            {/* Step 03 */}
            <div className="process-col">
              <span className="process-number">03</span>
              <h3 className="process-title">Produce</h3>
              <p className="process-desc">
                Flambient flash and ambient interior photography, wide architectural passes, and aerial mapping.
              </p>
            </div>

            {/* Step 04 */}
            <div className="process-col">
              <span className="process-number">04</span>
              <h3 className="process-title">Deliver</h3>
              <p className="process-desc">
                Window masking, sky replacement, vertical line correction, and rapid 24-hour cloud delivery.
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
                  <h3 className="placement-title">MLS &amp; Zillow Portals</h3>
                  <p className="placement-desc">
                    Formatted and sized specifically for MLS compliance and maximum search ranking.
                  </p>
                </div>

                <div className="placement-item">
                  <h3 className="placement-title">Luxury Property Brochures</h3>
                  <p className="placement-desc">
                    High-DPI print-ready files tailored for glossy property books and open house flyers.
                  </p>
                </div>

                <div className="placement-item">
                  <h3 className="placement-title">Social Media Reels &amp; Ads</h3>
                  <p className="placement-desc">
                    Eye-catching vertical clips showing off pools, master suites, and kitchen highlights.
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
                  <h3 className="faq-question">How quickly do you deliver the finished photos?</h3>
                  <p className="faq-answer">
                    Standard delivery is next-day within 24 hours so you can get your listing live on the MLS immediately.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">Do you offer virtual twilight or blue sky replacements?</h3>
                  <p className="faq-answer">
                    Yes! Overcast days are automatically enhanced with vibrant blue skies and lush green grass at no extra charge.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">Do homeowners or agents need to be present?</h3>
                  <p className="faq-answer">
                    Not necessarily. As long as we have lockbox or Supra access and the property is staged, we can shoot independently.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">What should I send with an inquiry?</h3>
                  <p className="faq-answer">
                    Property address, square footage, whether twilight or drone is requested, and your preferred shoot date.
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
              <Link to="/drone" className="explore-service-item">
                <span className="explore-service-name">Drone &amp; Aerial</span>
                <FiArrowUpRight className="explore-service-arrow" aria-hidden="true" />
              </Link>
              <Link to="/product-photography" className="explore-service-item">
                <span className="explore-service-name">Product Photography</span>
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

export default RealEstate;
