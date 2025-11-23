import React from 'react';

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-heading">About Playmakers</h2>
            <p>
              Football is at the heart of what we do. Young footballers are who we understand.
            </p>

            <p>
              Based in Cheshire, we deliver elite level football coaching exclusively by former or current football players.
            </p>

            <p>
              Our mission is to pass on what we’ve learned as players and coaches to the younger generation.
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
