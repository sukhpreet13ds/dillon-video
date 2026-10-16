import React, { useState, useEffect, useRef } from 'react';

const COLUMN_1_VIDEOS = [
  { id: "1031704729", title: "John Speaking about Gilber", thumb: "https://vumbnail.com/1031704729.jpg" },
  { id: "1163760843", title: "Justin Gill", thumb: "https://vumbnail.com/1163760843.jpg" },
  { id: "1163760752", title: "Christina Kim", thumb: "https://vumbnail.com/1163760752.jpg" },
  { id: "1163760719", title: "Cass Meyer", thumb: "https://vumbnail.com/1163760719.jpg" }
];

const COLUMN_2_VIDEOS = [
  { id: "742355601", title: "Miss Florida Citrus", thumb: "https://vumbnail.com/742355601.jpg" },
  { id: "1163760610", title: "Brandel Chamblee", thumb: "https://vumbnail.com/1163760610.jpg" },
  { id: "1163760653", title: "Ryan Nash", thumb: "https://vumbnail.com/1163760653.jpg" },
  { id: "1163760539", title: "Bailey Chamblee", thumb: "https://vumbnail.com/1163760539.jpg" }
];

const COLUMN_3_VIDEOS = [
  { id: "928393679", title: "Jeep Spot", thumb: "https://vumbnail.com/928393679.jpg" },
  { id: "1163760816", title: "Jimmy Hart", thumb: "https://vumbnail.com/1163760816.jpg" },
  { id: "908831622", title: "Surrency with graphics", thumb: "https://vumbnail.com/908831622.jpg" },
  { id: "908830409", title: "Lisa Citrus Q & A", thumb: "https://vumbnail.com/908830409.jpg" }
];

const ScrollingColumn = ({ videos, direction, colIndex, hoveredId, setHoveredId }) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const singleSetHeightRef = useRef(0);
  const isHoveredColRef = useRef(false);

  // Triple set for completely seamless looping
  const items = [...videos, ...videos, ...videos];

  useEffect(() => {
    const updateHeight = () => {
      if (trackRef.current) {
        const height = trackRef.current.scrollHeight / 3;
        singleSetHeightRef.current = height;
        if (direction === 'down' && offsetRef.current === 0) {
          offsetRef.current = -height;
        }
      }
    };

    updateHeight();
    const timer = setTimeout(updateHeight, 200);
    window.addEventListener('resize', updateHeight);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateHeight);
    };
  }, [direction]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e) => {
      if (window.innerWidth > 991) {
        e.preventDefault();
      }
      velocityRef.current += e.deltaY * 0.45;
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, []);

  useEffect(() => {
    let animId;

    const tick = () => {
      let offset = offsetRef.current;
      let velocity = velocityRef.current;

      const baseSpeed = isHoveredColRef.current ? 0 : (direction === 'up' ? -0.8 : 0.8);
      offset += baseSpeed + velocity;
      velocity *= 0.92;
      if (Math.abs(velocity) < 0.01) velocity = 0;
      velocityRef.current = velocity;

      const singleHeight = singleSetHeightRef.current;
      if (singleHeight > 0) {
        if (offset <= -singleHeight) {
          offset += singleHeight;
        } else if (offset >= 0) {
          offset -= singleHeight;
        }
      }

      offsetRef.current = offset;
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [direction]);

  return (
    <div
      className="threecol-column"
      ref={containerRef}
      onMouseEnter={() => { isHoveredColRef.current = true; }}
      onMouseLeave={() => { isHoveredColRef.current = false; }}
    >
      <div className="threecol-column-track" ref={trackRef}>
        {items.map((video, idx) => {
          const cardKey = `${colIndex}-${idx}-${video.id}`;
          const isHovered = hoveredId === cardKey;

          return (
            <div
              key={cardKey}
              className="threecol-card"
              onMouseEnter={() => setHoveredId(cardKey)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {isHovered ? (
                <iframe
                  className="threecol-card-iframe"
                  src={`https://player.vimeo.com/video/${video.id}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&controls=0&autopause=0&transparent=0&playsinline=1&dnt=1`}
                  title={video.title}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                />
              ) : (
                <img
                  src={video.thumb}
                  alt={video.title}
                  className="threecol-card-thumb"
                  loading="lazy"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ThreeCol = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="threecol-section" id="trusted">
      <div className="threecol-container">
        {/* Left Editorial Heading and CTA */}
        <div className="threecol-left">
          <div className="threecol-left-content">
            <h2 className="threecol-heading animate-on-scroll" data-animation="animate__fadeInUp">
              Award-Winning.<br />
              Brand-Trusted.<br />
              Market-Leading.
            </h2>
            <a href="#contact" className="threecol-cta animate-on-scroll" data-animation="animate__fadeInUp">
              <span className="threecol-cta-text">Get In Touch &rarr;</span>
            </a>
          </div>
        </div>

        {/* Right 3 Moving Columns */}
        <div className="threecol-right animate-on-scroll" data-animation="animate__fadeInUp">
          <ScrollingColumn
            videos={COLUMN_1_VIDEOS}
            direction="up"
            colIndex={0}
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
          />
          <ScrollingColumn
            videos={COLUMN_2_VIDEOS}
            direction="down"
            colIndex={1}
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
          />
          <ScrollingColumn
            videos={COLUMN_3_VIDEOS}
            direction="up"
            colIndex={2}
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
          />
        </div>
      </div>
    </section>
  );
};

export default ThreeCol;
