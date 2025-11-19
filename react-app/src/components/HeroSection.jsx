import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="hero"
      id="home"
    >
      <video
        className="hero-video"
        autoPlay
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
