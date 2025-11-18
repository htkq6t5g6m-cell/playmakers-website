import React from 'react';

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-heading">About Playmakers</h2>
            <p>
              Playmakers delivers elite football coaching led exclusively by current and 
              former professional players. Our mission is to help young players develop 
              technique, confidence and understanding through modern methods used in pro 
              academies.
            </p>
            <p>
              Based in Cheshire, we support players aged 5–18 across all abilities, with 
              personalised, high-energy sessions shaped by real football experience.
            </p>
          </div>
          <div className="about-image">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              style={{ pointerEvents: 'none' }}
            >
              <source src="/videos/about.mov" type="video/mp4" />
              Your browser doesn't support video playback.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
