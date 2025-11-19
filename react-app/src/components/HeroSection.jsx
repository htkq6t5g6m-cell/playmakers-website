import React, { useEffect, useRef } from 'react';
  const videoRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    const heroEl = heroRef.current;
    if (!videoEl || !heroEl) return;

    // Lazy play when hero enters viewport
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          try {
            if (videoEl.paused) {
              videoEl.play().catch(() => {});
            }
          } catch (_) {}
        }
      });
    }, { threshold: 0.4 });
    io.observe(heroEl);

    // Orientation / size fit toggle without broadening breakpoint
    const applyFit = () => {
      const w = window.innerWidth;
      const portrait = window.matchMedia('(orientation: portrait)').matches;
      // Only adjust for very small screens (keep breakpoint logic)
      if (w <= 480) {
        if (portrait) {
          videoEl.classList.add('contain-fit');
          videoEl.classList.remove('cover-fit');
          heroEl.classList.add('contain-mode');
        } else {
          // Landscape small phone: prefer cover for immersion
          videoEl.classList.add('cover-fit');
          videoEl.classList.remove('contain-fit');
          heroEl.classList.remove('contain-mode');
        }
      } else {
        // Larger screens revert to cover
        videoEl.classList.add('cover-fit');
        videoEl.classList.remove('contain-fit');
        heroEl.classList.remove('contain-mode');
      }
    };
    applyFit();
    const resizeHandler = () => applyFit();
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', resizeHandler);

    return () => {
      io.disconnect();
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('orientationchange', resizeHandler);
    };
  }, []);

  return (
const HeroSection = () => {
  return (
    <section
      ref={heroRef}
      className="hero"
      id="home"
    >
        // Autoplay behavior will be triggered via IntersectionObserver
        className="hero-video"
        autoPlay
        preload="metadata"
        poster="/images/page-images/hero.jpg"
        muted
        playsInline
        aria-hidden="true"
        onEnded={(e) => {
          // Ensure the last frame is retained; pause explicitly.
          e.currentTarget.pause();
        }}
        preload="auto"
        onError={(e) => {
          // If video fails, hide the element so the section background fallback is visible.
        ref={videoRef}
          try { e.currentTarget.style.display = 'none'; } catch (err) { /* ignore */ }
          console.warn('Hero video failed to load', e);
        }}
      >
        {/* Try common formats for broader browser compatibility. */}
        <source src="/images/page-images/hero.mp4" type="video/mp4" />
        <source src="/images/page-images/hero.webm" type="video/webm" />
        {/* Fallback mov (may be used by Safari) */}
        <source src="/images/page-images/hero.mov" type="video/quicktime" />
        Your browser does not support the hero background video.
      </video>
      <div className="hero-content" style={{ marginTop: '70vh' }}>
        <p className="hero-text">
          coached by footballers, for footballers
        </p>
        <div className="hero-buttons">
          <a href="#book" className="btn btn-large hero-book-btn">
            Book a Session
          </a>
        </div>
        {/* Removed scroll indicator */}
      </div>
    </section>
  );
};

export default HeroSection;
