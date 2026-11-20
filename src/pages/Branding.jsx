import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import useScrollAnimation from '../hooks/useScrollAnimation';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import heroThumb from '../assets/thump.webp';
import useBookingModal from '../context/useBookingModal';
import useVideoThumbnail from '../hooks/useVideoThumbnail';
import '../style/services.css';

const STORIES_VIDEO_URL = "https://player.vimeo.com/video/761200924?autoplay=1&title=0&byline=0&portrait=0";
const STORIES_VIDEO_THUMB = "https://i.vimeocdn.com/video/1528860294-443b7dd3d8bd33178e6f276737121ddf177c232b343e5df1e04b15d704cb44f4-d_960";

const Branding = () => {
  useScrollAnimation();
  const { openBookingModal } = useBookingModal();
  const [isHeroPlaying, setIsHeroPlaying] = useState(false);
  const [isStoriesPlaying, setIsStoriesPlaying] = useState(false);
  const storiesThumbnail = useVideoThumbnail(STORIES_VIDEO_URL, STORIES_VIDEO_THUMB);

  return (
    <main className="service-page-main">
      {/* 1. HERO SECTION (Dark) */}
      <section className="service-hero-section">
        <div className="service-container">
          {/* Breadcrumb */}
          <nav className="service-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">HOME</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-muted">SERVICES</span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-active">BRANDING VIDEOS</span>
          </nav>

          {/* Heading & Intro Row */}
          <div className="service-hero-header-row">
            <div className="service-hero-heading-col">
              <h1 className="service-hero-title">
                Branding Videos
                <span className="service-hero-subtitle">Your story. On film.</span>
              </h1>
              <button
                type="button"
                className="service-hero-cta-btn"
                onClick={() => openBookingModal('Branding Videos')}
                data-service="Branding Videos"
              >
                Plan your brand film
              </button>
            </div>

            <div className="service-hero-intro-col">
              <p className="service-hero-intro-text">
                Introduce your business, share your values and tell the story behind your brand.
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
                aria-label="Play Branding Videos reel"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsHeroPlaying(true);
                  }
                }}
              >
                <img
                  src={heroThumb}
                  alt="Branding Videos Reel"
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
                src="https://www.youtube.com/embed/4BMdLgS6e2Q?autoplay=1&title=0&byline=0&portrait=0"
                title="Branding Videos Reel"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                allowFullScreen
              />
            )}
          </div>

          {/* Video Sub-bar Metadata */}
          <div className="service-video-metadata-row">
            <span className="service-meta-tag">BRAND STORYTELLING / AUTOMOTIVE</span>
            <span className="service-meta-tag">PROFESSIONAL PRODUCTION. SINCE 1980.</span>
          </div>
        </div>
      </section>

      {/* 2. WHY A BRANDING VIDEO (Warm Light / Beige) */}
      <section className="service-why-section">
        <div className="service-container">
          <span className="service-section-tag red-tag animate-on-scroll" data-animation="animate__fadeIn">
            01 / WHY A BRANDING VIDEO
          </span>

          <div className="service-why-main-grid">
            <div className="service-why-heading-col animate-on-scroll" data-animation="animate__fadeInUp">
              <h2 className="service-section-heading-dark">
                More than a video.<br />
                A reason to remember.
              </h2>
            </div>
            <div className="service-why-body-col animate-on-scroll" data-animation="animate__fadeInUp">
              <p className="service-lead-text">
                Help people understand not just what you do, but who you are. A brand film brings your people, purpose and point of view into one clear story.
              </p>
              <p className="service-sub-text">
                For your website, a campaign or a first introduction—start with a story that feels like you.
              </p>
            </div>
          </div>

          {/* 3 Pillars / Feature Columns */}
          <div className="service-why-features-row animate-on-scroll" data-animation="animate__fadeInUp">
            <div className="service-feature-item">
              <h3 className="service-feature-title">Tell your story.</h3>
              <p className="service-feature-desc">
                Make your purpose, values and personality visible.
              </p>
            </div>
            <div className="service-feature-item">
              <h3 className="service-feature-title">Build connection.</h3>
              <p className="service-feature-desc">
                Give your audience a human reason to care.
              </p>
            </div>
            <div className="service-feature-item">
              <h3 className="service-feature-title">Create consistency.</h3>
              <p className="service-feature-desc">
                Bring your brand's voice and visuals together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STORIES WE CAN HELP YOU TELL (Dark) */}
      <section className="service-stories-section">
        <div className="service-container">
          <span className="service-section-tag animate-on-scroll" data-animation="animate__fadeIn">
            02 / STORIES WE CAN HELP YOU TELL
          </span>

          <div className="service-stories-grid">
            {/* Left Column: Heading, Video Box, and Caption */}
            <div className="service-stories-left-col animate-on-scroll" data-animation="animate__fadeInUp">
              <h2 className="service-section-heading-light">
                One brand.<br />
                Many ways to tell it.
              </h2>

              <div className="stories-video-box">
                {!isStoriesPlaying ? (
                  <div
                    className="stories-video-poster"
                    onClick={() => setIsStoriesPlaying(true)}
                    role="button"
                    tabIndex={0}
                    aria-label="Play John Speaking about Gilber video"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsStoriesPlaying(true);
                      }
                    }}
                  >
                    <img
                      src={storiesThumbnail}
                      alt="John Speaking about Gilber"
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
                    src={STORIES_VIDEO_URL}
                    title="John Speaking about Gilber"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                    allowFullScreen
                  />
                )}
              </div>

              <span className="stories-video-caption">REAL PEOPLE. A CLEAR POINT OF VIEW.</span>
            </div>

            {/* Right Column: Numbered Service Story Types */}
            <div className="service-stories-right-col animate-on-scroll" data-animation="animate__fadeInUp">
              <div className="stories-list">
                <div className="story-item">
                  <span className="story-number">01</span>
                  <div className="story-body">
                    <h3 className="story-title">Brand story films</h3>
                    <p className="story-desc">
                      Introduce the people, purpose and personality behind your business.
                    </p>
                  </div>
                </div>

                <div className="story-item">
                  <span className="story-number">02</span>
                  <div className="story-body">
                    <h3 className="story-title">Company &amp; culture</h3>
                    <p className="story-desc">
                      Show what makes your team, values and way of working distinctive.
                    </p>
                  </div>
                </div>

                <div className="story-item">
                  <span className="story-number">03</span>
                  <div className="story-body">
                    <h3 className="story-title">Campaign &amp; launch videos</h3>
                    <p className="story-desc">
                      Give a new product, initiative or message a focused visual introduction.
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
            A clear path from idea to film.
          </h2>

          <div className="service-process-grid animate-on-scroll" data-animation="animate__fadeInUp">
            {/* Step 01 */}
            <div className="process-col">
              <span className="process-number">01</span>
              <h3 className="process-title">Discover</h3>
              <p className="process-desc">
                Start with your goals, your audience and the story you want people to remember.
              </p>
            </div>

            {/* Step 02 */}
            <div className="process-col">
              <span className="process-number">02</span>
              <h3 className="process-title">Plan</h3>
              <p className="process-desc">
                Shape the direction, key messages, locations and details before the cameras roll.
              </p>
            </div>

            {/* Step 03 */}
            <div className="process-col">
              <span className="process-number">03</span>
              <h3 className="process-title">Produce</h3>
              <p className="process-desc">
                Capture the people, interviews and moments that bring your brand to life.
              </p>
            </div>

            {/* Step 04 */}
            <div className="process-col">
              <span className="process-number">04</span>
              <h3 className="process-title">Deliver</h3>
              <p className="process-desc">
                Bring the edit together and prepare the versions and formats agreed for your project.
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
                  <h3 className="placement-title">Website &amp; landing pages</h3>
                  <p className="placement-desc">
                    Make your introduction part of your online experience.
                  </p>
                </div>

                <div className="placement-item">
                  <h3 className="placement-title">Social &amp; digital campaigns</h3>
                  <p className="placement-desc">
                    Plan versions that fit the channels you use.
                  </p>
                </div>

                <div className="placement-item">
                  <h3 className="placement-title">Presentations &amp; events</h3>
                  <p className="placement-desc">
                    Give your brand story a place in the room.
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
                  <h3 className="faq-question">Do I need a finished idea or script?</h3>
                  <p className="faq-answer">
                    Not to start. Bring your goals, audience and any existing brand material so we can shape the direction together.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">How long should a branding video be?</h3>
                  <p className="faq-answer">
                    The story and placement should guide the length. We'll discuss what needs to be said and where the film will be used.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">How much does a branding video cost?</h3>
                  <p className="faq-answer">
                    Scope depends on the concept, locations, shoot requirements and final versions. Share your brief so the project can be scoped around your goals.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">What should I send with an inquiry?</h3>
                  <p className="faq-answer">
                    Your goals, target audience, preferred timing, intended channels and any brand guidelines or references are a useful starting point.
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
              <Link to="/short-form" className="explore-service-item">
                <span className="explore-service-name">Short-Form Content</span>
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

export default Branding;
