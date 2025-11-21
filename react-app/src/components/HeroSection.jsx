import React from 'react';

const HeroSection = () => {
  return (
    <>
      <div className="site-top-logo container">
        <img src="/images/logo/logo.jpg" alt="PLAYMAKERS logo" />
      </div>

      <section className="hero" id="home">
        <div className="hero-content container">
          <h1 className="hero-title">
            <span>Our Coaches </span>
            <em style={{ fontStyle: 'italic', textTransform: 'uppercase' }}>PLAY FOOTBALL.</em>
          </h1>

          <div className="hero-copy">
            <p>Football is at the heart of what we do. Young aspiring players are who we understand.</p>
            <p>Based in Cheshire, all of our coaches have either played professionally or at academy level.</p>
            <p>Our Mission is to pass on what we’ve learned, using a holistic approach to football coaching.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
