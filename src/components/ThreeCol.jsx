import React, { useState, useEffect, useRef, useCallback } from 'react';

const COLUMN_1_VIDEOS = [
  { id: "1031704729", title: "John Speaking about Gilber", thumb: "https://i.vimeocdn.com/video/1952494551-393fef1df4cc325f004fb87ec7ae6317143be18ec706604f33879051c37289d6-d_640" },
  { id: "1163760843", title: "Justin Gill", thumb: "https://i.vimeocdn.com/video/2120114334-267bfa11cbd5719f9d76520a1df8e0fabde8d44d1a03df1c8704f6fe386a4a78-d_640" },
  { id: "1163760752", title: "Christina Kim", thumb: "https://i.vimeocdn.com/video/2120114083-ac19f0599337b803ec6220bad772db48d376c54ded6b46e6c37a47fed7e391df-d_640" },
  { id: "1163760719", title: "Cass Meyer", thumb: "https://i.vimeocdn.com/video/2120100033-81309ebf37e3aa430a46b139e456bd6fe64f00fde890817fe2be5dadc93826eb-d_640" }
];

const COLUMN_2_VIDEOS = [
  { id: "742355601", title: "Miss Florida Citrus", thumb: "https://i.vimeocdn.com/video/1493652546-127d851072fb1d4076b989670f8e0711b5e64f03d132f153be0d98cc6191385b-d_640" },
  { id: "1163760610", title: "Brandel Chamblee", thumb: "https://i.vimeocdn.com/video/2120099908-f1a225064a562ed446488832ee3961218d4f0aa6698d26ec61cbf039689e2081-d_640" },
  { id: "1163760653", title: "Ryan Nash", thumb: "https://i.vimeocdn.com/video/2120114544-094cccbcfd6573ec51448d892dca236a2cc98a42d5bdf8b6c16f93603d1aa65e-d_640" },
  { id: "1163760539", title: "Bailey Chamblee", thumb: "https://i.vimeocdn.com/video/2120114671-b45c99cd19e9fc91ed459d2f7e34dc5c9a78b0b5494e7c36a1bfde0005ce60d0-d_640" }
];

const COLUMN_3_VIDEOS = [
  { id: "928393679", title: "Jeep Spot", thumb: "https://i.vimeocdn.com/video/1823765479-a4e104c5b7958dfe311a067d8377ba1e0e0db42e2d59ebc086c4c397ead4cc97-d_640" },
  { id: "1163760816", title: "Jimmy Hart", thumb: "https://i.vimeocdn.com/video/2120114237-6a20ba4e8ec8fffb27d30120a532427cad4c5f9b04d3c83eb5d19905cf151fd2-d_640" },
  { id: "908831622", title: "Surrency with graphics", thumb: "https://i.vimeocdn.com/video/1792021532-0f0f8a842af40139cd2a06566c9e9ac3e6fab78ad39937d15ba3dca37d9b62e8-d_640" },
  { id: "908830409", title: "Lisa Citrus Q & A", thumb: "https://i.vimeocdn.com/video/1792020080-69b4aae5780835bc027df5db9891d7d273a2b7bd56c3ccb134a40b115d70e7dc-d_640" }
];

const ScrollingColumn = ({ videos, direction, colIndex, hoveredId, setHoveredId }) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const singleSetHeightRef = useRef(0);
  const isHoveredColRef = useRef(false);
  const isDraggingRef = useRef(false);
  const hasMovedRef = useRef(false);

  // Triple set for completely seamless looping
  const items = [...videos, ...videos, ...videos];

  const updateHeight = useCallback(() => {
    if (trackRef.current) {
      const height = trackRef.current.scrollHeight / 3;
      if (height > 0) {
        singleSetHeightRef.current = height;
        if (direction === 'down' && offsetRef.current === 0) {
          offsetRef.current = -height;
        }
      }
    }
  }, [direction]);

  useEffect(() => {
    updateHeight();
    const t1 = setTimeout(updateHeight, 200);
    const t2 = setTimeout(updateHeight, 600);
    window.addEventListener('resize', updateHeight);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', updateHeight);
    };
  }, [updateHeight]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Desktop mouse wheel scrolling
    const onWheel = (e) => {
      e.preventDefault();
      velocityRef.current += e.deltaY * 0.45;
    };

    // Mobile touch scrolling
    let startY = 0;
    let startX = 0;
    let lastY = 0;
    let lastTime = 0;
    let isVerticalGesture = null;

    const onTouchStart = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      isDraggingRef.current = true;
      hasMovedRef.current = false;
      isVerticalGesture = null;
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
      lastY = startY;
      lastTime = Date.now();
      velocityRef.current = 0;
    };

    const onTouchMove = (e) => {
      if (!isDraggingRef.current || !e.touches || e.touches.length === 0) return;
      const currentY = e.touches[0].clientY;
      const currentX = e.touches[0].clientX;
      const deltaY = currentY - lastY;
      const diffY = Math.abs(currentY - startY);
      const diffX = Math.abs(currentX - startX);

      if (diffY > 5 || diffX > 5) {
        hasMovedRef.current = true;
      }

      if (isVerticalGesture === null) {
        if (diffY > 5 || diffX > 5) {
          isVerticalGesture = diffY >= diffX;
        }
      }

      // If user is scrolling vertically on the column, scroll column and prevent scrolling whole section/page
      if (isVerticalGesture) {
        if (e.cancelable) {
          e.preventDefault();
        }
        offsetRef.current += deltaY;

        const now = Date.now();
        const dt = now - lastTime;
        if (dt > 0) {
          const instantV = (deltaY / dt) * 16;
          velocityRef.current = velocityRef.current * 0.3 + instantV * 0.7;
        }
        lastY = currentY;
        lastTime = now;
      }
    };

    const onTouchEnd = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      // Cap release velocity for smooth, natural momentum
      velocityRef.current = Math.max(-25, Math.min(25, velocityRef.current));
      setTimeout(() => {
        hasMovedRef.current = false;
      }, 150);
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: false });
    container.addEventListener('touchend', onTouchEnd, { passive: true });
    container.addEventListener('touchcancel', onTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
      container.removeEventListener('touchcancel', onTouchEnd);
    };
  }, []);

  useEffect(() => {
    let animId;

    const tick = () => {
      let offset = offsetRef.current;
      let velocity = velocityRef.current;

      const isColActive = isHoveredColRef.current || (hoveredId && hoveredId.startsWith(`${colIndex}-`));

      if (!isDraggingRef.current) {
        const baseSpeed = isColActive ? 0 : (direction === 'up' ? -0.8 : 0.8);
        offset += baseSpeed + velocity;
        velocity *= 0.92;
        if (Math.abs(velocity) < 0.01) velocity = 0;
        velocityRef.current = velocity;
      }

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
  }, [direction, colIndex, hoveredId]);

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
              onClick={() => {
                if (!hasMovedRef.current) {
                  setHoveredId(prev => prev === cardKey ? null : cardKey);
                }
              }}
            >
              {isHovered ? (
                <iframe
                  className="threecol-card-iframe"
                  src={`https://player.vimeo.com/video/${video.id}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&controls=0&autopause=0&transparent=0&playsinline=1&dnt=1`}
                  title={video.title}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                />
              ) : (
                <img
                  src={video.thumb}
                  alt={video.title}
                  className="threecol-card-thumb"
                  loading="lazy"
                  onLoad={updateHeight}
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
