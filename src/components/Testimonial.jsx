import React, { useState, useEffect, useRef } from 'react';

const RAW_TESTIMONIALS = [
  {
    id: 0,
    quote: "One of the reasons Ocala Breeders' Sales is a worldwide leader...this video company produced the first horses in training videos ..plus they do so much more!!",
    author: "Tammy Gantt"
  },
  {
    id: 1,
    quote: "Jeff, Adam ,and TJ are true professionals, the level of quality work never disappointing. I would recommend this fine company to anyone who wants to enhance their look of their business . From drone photography and top quality video production these guys do it all.",
    author: "Robert Knowles"
  },
  {
    id: 2,
    quote: "Gina was very personable, knowledgeable and professional. The video turned out amazing and captured the essence of what our brand needed.",
    author: "Sherri Vaughn"
  }
];

// 5 continuous virtual slots [-2, -1, 0, 1, 2] centered around active card
const SLOTS = [-2, -1, 0, 1, 2];

const Testimonial = () => {
  const [activeId, setActiveId] = useState(1); // Default Robert Knowles in center
  const [direction, setDirection] = useState(0); // -1 = sliding prev, 0 = idle, 1 = sliding next
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [wrapperWidth, setWrapperWidth] = useState(0);

  const wrapperRef = useRef(null);
  const isSlidingRef = useRef(false);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  // Measure wrapper width
  useEffect(() => {
    const updateWidth = () => {
      if (wrapperRef.current) {
        setWrapperWidth(wrapperRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Smooth slide function
  const slideTo = (dir) => {
    if (isSlidingRef.current) return;
    isSlidingRef.current = true;
    setDirection(dir);
    setIsTransitioning(true);

    setTimeout(() => {
      setActiveId((prev) => (prev + dir + 3) % 3);
      setDirection(0);
      setIsTransitioning(false);
      isSlidingRef.current = false;
    }, 620);
  };

  const slideNext = () => slideTo(1);
  const slidePrev = () => slideTo(-1);

  // Auto-sliding interval (never stops or disappears)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      slideNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, activeId]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (Math.abs(touchDeltaX.current) > 35) {
      if (touchDeltaX.current < 0) {
        slideNext();
      } else {
        slidePrev();
      }
    }
  };

  // Card dimensions
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 576;
  const isTablet = typeof window !== 'undefined' && window.innerWidth > 576 && window.innerWidth <= 991;
  const isMini = typeof window !== 'undefined' && window.innerWidth > 991 && window.innerWidth <= 1199;

  const cardWidth = isMobile
    ? Math.min(wrapperWidth ? wrapperWidth - 32 : 360, 390)
    : (isTablet ? 400 : (isMini ? 520 : 640));
  const cardGap = isMobile ? 16 : 32;

  // Track translation calculation
  // Slot 0 is the 3rd item in SLOTS (index 2)
  const baseTranslateX = wrapperWidth
    ? (wrapperWidth / 2) - (2 * (cardWidth + cardGap) + cardWidth / 2)
    : 0;

  const animTranslateX = direction * -1 * (cardWidth + cardGap);
  const totalTranslateX = baseTranslateX + animTranslateX;

  // Determine which slot is enlarged as center
  const isSlotCenter = (slot) => {
    if (direction === 0) return slot === 0;
    if (direction === 1) return slot === 1;
    if (direction === -1) return slot === -1;
    return false;
  };

  // Handle clicking on side cards
  const handleSlotClick = (slot) => {
    if (slot === 0) return;
    if (slot === 1) slideNext();
    if (slot === -1) slidePrev();
  };

  // Handle pagination dots
  const handleDotClick = (dotIdx) => {
    if (dotIdx === activeId || isSlidingRef.current) return;
    let diff = dotIdx - activeId;
    if (diff === 1 || diff === -2) {
      slideNext();
    } else {
      slidePrev();
    }
  };

  return (
    <section className="testimonial-section" id="testimonials">
      <div className="testimonial-container">
        {/* Header */}
        <div className="testimonial-header">
          <span className="testimonial-tagline animate-on-scroll" data-animation="animate__fadeInUp">DON'T JUST TAKE IT FROM US</span>
          <h2 className="testimonial-title animate-on-scroll" data-animation="animate__fadeInUp">
            Creative wins, <em>told by</em><br />
            <span className="testimonial-title-red">our customers</span>
          </h2>
        </div>

        {/* Seamless Infinite Carousel with Left & Right Dark Shade Gradients */}
        <div
          ref={wrapperRef}
          className="testimonial-cards-wrapper animate-on-scroll"
          data-animation="animate__zoomIn"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="testimonial-cards-track"
            style={{
              transform: `translate3d(${totalTranslateX}px, 0, 0)`,
              transition: isTransitioning
                ? 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'
                : 'none',
              gap: `${cardGap}px`
            }}
          >
            {SLOTS.map((slot) => {
              const testimonialIdx = (activeId + slot + 300) % 3;
              const item = RAW_TESTIMONIALS[testimonialIdx];
              const isCenter = isSlotCenter(slot);

              return (
                <div
                  key={`slot-${slot}`}
                  className={`testimonial-card ${isCenter ? 'card-center' : 'card-side'}`}
                  style={{ width: `${cardWidth}px` }}
                  onClick={() => handleSlotClick(slot)}
                >
                  <p className="testimonial-quote">"{item.quote}"</p>
                  <span className="testimonial-author">{item.author}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="testimonial-dots animate-on-scroll" data-animation="animate__fadeInUp">
          {RAW_TESTIMONIALS.map((_, dotIdx) => (
            <button
              key={dotIdx}
              className={`testimonial-dot ${dotIdx === activeId ? 'active' : ''}`}
              onClick={() => handleDotClick(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
