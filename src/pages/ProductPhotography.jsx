import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import useScrollAnimation from '../hooks/useScrollAnimation';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import heroThumb from '../assets/product-thumbnail.webp';
import useBookingModal from '../context/useBookingModal';
import useVideoThumbnail from '../hooks/useVideoThumbnail';
import '../style/services.css';

const STORIES_VIDEO_URL = "https://player.vimeo.com/video/1037981859?autoplay=1&title=0&byline=0&portrait=0";
const STORIES_VIDEO_THUMB = "https://i.vimeocdn.com/video/1960090788-d3dc6ba115ae74da5124effa25abd1e74dda00936ae1aac98c1e61aee6a4e241-d_960";

const ProductPhotography = () => {
  useScrollAnimation();
  const { openBookingModal } = useBookingModal();
  const [isHeroPlaying, setIsHeroPlaying] = useState(false);
  const [isStoriesPlaying, setIsStoriesPlaying] = useState(false);
  const storiesThumbnail = useVideoThumbnail(STORIES_VIDEO_URL, STORIES_VIDEO_THUMB);

  return (
    <main className="service-page-main page-product-photography">
      {/* 1. HERO SECTION (Dark) */}
      <section className="service-hero-section">
        <div className="service-container">
          {/* Breadcrumb */}
          <nav className="service-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">HOME</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-muted">SERVICES</span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-active">PRODUCT PHOTOGRAPHY</span>
          </nav>

          {/* Heading & Intro Row */}
          <div className="service-hero-header-row">
            <div className="service-hero-heading-col">
              <h1 className="service-hero-title">
                Product Photography
                <span className="service-hero-subtitle">Crisp detail. Studio precision.</span>
              </h1>
              <button
                type="button"
                className="service-hero-cta-btn"
                onClick={() => openBookingModal('Product Photography')}
                data-service="Product Photography"
              >
                Plan your product shoot
              </button>
            </div>

            <div className="service-hero-intro-col">
              <p className="service-hero-intro-text">
                Crisp commercial product photography with precision studio strobe lighting that reveals true textures, materials, and premium craft.
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
                aria-label="Play Product Photography reel"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsHeroPlaying(true);
                  }
                }}
              >
                <img
                  src={heroThumb}
                  alt="Product Photography Reel"
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
                src="https://player.vimeo.com/video/636259495?autoplay=1&title=0&byline=0&portrait=0"
                title="Product Photography Reel"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                allowFullScreen
              />
            )}
          </div>

          {/* Video Sub-bar Metadata */}
          <div className="service-video-metadata-row">
            <span className="service-meta-tag">COMMERCIAL STUDIO / MACRO DETAIL</span>
            <span className="service-meta-tag">PROFESSIONAL PRODUCTION. SINCE 1980.</span>
          </div>
        </div>
      </section>

      {/* 2. WHY A BRANDING VIDEO (Warm Light / Beige) */}
      <section className="service-why-section">
        <div className="service-container">
          <span className="service-section-tag red-tag animate-on-scroll" data-animation="animate__fadeIn">
            01 / WHY COMMERCIAL PRODUCT IMAGERY
          </span>

          <div className="service-why-main-grid">
            <div className="service-why-heading-col animate-on-scroll" data-animation="animate__fadeInUp">
              <h2 className="service-section-heading-dark">
                More than an image.<br />
                The confidence to purchase.
              </h2>
            </div>
            <div className="service-why-body-col animate-on-scroll" data-animation="animate__fadeInUp">
              <p className="service-lead-text">
                Online shoppers cannot touch your physical goods—your product visuals are the sole benchmark for perceived quality and value.
              </p>
              <p className="service-sub-text">
                From clean white-background e-commerce catalog shots with flawless color calibration, to styled lifestyle editorial arrangements that tell your product's daily story.
              </p>
            </div>
          </div>

          {/* 3 Pillars / Feature Columns */}
          <div className="service-why-features-row animate-on-scroll" data-animation="animate__fadeInUp">
            <div className="service-feature-item">
              <h3 className="service-feature-title">True-to-life color.</h3>
              <p className="service-feature-desc">
                Color-managed calibrated monitors and X-Rite color checker profiling for zero return rates.
              </p>
            </div>
            <div className="service-feature-item">
              <h3 className="service-feature-title">Macro sharpness.</h3>
              <p className="service-feature-desc">
                Focus-stacked composite captures revealing razor-sharp micro details and material grain.
              </p>
            </div>
            <div className="service-feature-item">
              <h3 className="service-feature-title">Editorial styling.</h3>
              <p className="service-feature-desc">
                Custom prop styling, ambient textural backdrops, and creative lighting schemes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STORIES WE CAN HELP YOU TELL (Dark) */}
      <section className="service-stories-section">
        <div className="service-container">
          <span className="service-section-tag animate-on-scroll" data-animation="animate__fadeIn">
            02 / PHOTOGRAPHY STYLES
          </span>

          <div className="service-stories-grid">
            {/* Left Column: Heading, Video Box, and Caption */}
            <div className="service-stories-left-col animate-on-scroll" data-animation="animate__fadeInUp">
              <h2 className="service-section-heading-light">
                One product.<br />
                Infinite angles.
              </h2>

              <div className="stories-video-box">
                {!isStoriesPlaying ? (
                  <div
                    className="stories-video-poster"
                    onClick={() => setIsStoriesPlaying(true)}
                    role="button"
                    tabIndex={0}
                    aria-label="Play product photography sample video"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsStoriesPlaying(true);
                      }
                    }}
                  >
                    <img
                      src={storiesThumbnail}
                      alt="Product Photography Sample"
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
                    src="https://player.vimeo.com/video/1037981859?autoplay=1&title=0&byline=0&portrait=0"
                    title="Product Photography Sample"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                    allowFullScreen
                  />
                )}
              </div>

              <span className="stories-video-caption">PRECISION LIGHTING. FLAWLESS RETOUCHING.</span>
            </div>

            {/* Right Column: Numbered Service Story Types */}
            <div className="service-stories-right-col animate-on-scroll" data-animation="animate__fadeInUp">
              <div className="stories-list">
                <div className="story-item">
                  <span className="story-number">01</span>
                  <div className="story-body">
                    <h3 className="story-title">Pure white catalog shots</h3>
                    <p className="story-desc">
                      Amazon &amp; Shopify compliant high-key clean cutouts with natural drop shadows.
                    </p>
                  </div>
                </div>

                <div className="story-item">
                  <span className="story-number">02</span>
                  <div className="story-body">
                    <h3 className="story-title">Lifestyle &amp; contextual staging</h3>
                    <p className="story-desc">
                      Products shown in aspirational, beautifully curated real-world environments.
                    </p>
                  </div>
                </div>

                <div className="story-item">
                  <span className="story-number">03</span>
                  <div className="story-body">
                    <h3 className="story-title">360-degree interactive spins</h3>
                    <p className="story-desc">
                      Rotational motorized turntable imaging allowing web visitors to inspect all sides.
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
            A clear path from box to shelf.
          </h2>

          <div className="service-process-grid animate-on-scroll" data-animation="animate__fadeInUp">
            {/* Step 01 */}
            <div className="process-col">
              <span className="process-number">01</span>
              <h3 className="process-title">Discover</h3>
              <p className="process-desc">
                Review mood boards, shot list targets, styling props, and brand guidelines.
              </p>
            </div>

            {/* Step 02 */}
            <div className="process-col">
              <span className="process-number">02</span>
              <h3 className="process-title">Plan</h3>
              <p className="process-desc">
                Receive shipments, inspect product samples, steam/prep surfaces, and set lighting rigs.
              </p>
            </div>

            {/* Step 03 */}
            <div className="process-col">
              <span className="process-number">03</span>
              <h3 className="process-title">Produce</h3>
              <p className="process-desc">
                Tethered high-res capture with live client review, precision focus stacking, and staging.
              </p>
            </div>

            {/* Step 04 */}
            <div className="process-col">
              <span className="process-number">04</span>
              <h3 className="process-title">Deliver</h3>
              <p className="process-desc">
                High-end dust removal, color matching, clipping paths, and web-ready compression exports.
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
                  <h3 className="placement-title">E-Commerce Storefronts</h3>
                  <p className="placement-desc">
                    Fast-loading zoomable imagery that drives conversions on Shopify, WooCommerce, and Amazon.
                  </p>
                </div>

                <div className="placement-item">
                  <h3 className="placement-title">Print Catalogs &amp; Packaging</h3>
                  <p className="placement-desc">
                    Ultra-high-resolution 300DPI TIFF masters suitable for large-format packaging and billboards.
                  </p>
                </div>

                <div className="placement-item">
                  <h3 className="placement-title">Digital Ad Campaigns</h3>
                  <p className="placement-desc">
                    Eye-catching product hero images formatted for Meta, Google Shopping, and Pinterest ads.
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
                  <h3 className="faq-question">Can we ship our products to your studio?</h3>
                  <p className="faq-answer">
                    Yes! Most clients ship products directly to us. We inspect, steam, photograph, and ship back.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">Can I attend the shoot remotely?</h3>
                  <p className="faq-answer">
                    Yes. We provide live tethered cloud review links so you can view shots and approve angles in real time.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">Do you deliver transparent background files?</h3>
                  <p className="faq-answer">
                    Yes. We provide transparent PNGs and clipping paths alongside clean white and styled backgrounds.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">What should I send with an inquiry?</h3>
                  <p className="faq-answer">
                    Product types, total SKU count, desired angles per item, and example visual styles you like.
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
              <Link to="/real-estate" className="explore-service-item">
                <span className="explore-service-name">Real Estate Photography</span>
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

export default ProductPhotography;
