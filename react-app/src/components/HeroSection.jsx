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

        </div>
      </section>
    </>
  );
};

export default HeroSection;
