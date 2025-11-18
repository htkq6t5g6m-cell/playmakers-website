import React from 'react';
import { contactInfo } from '../data/data';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="hero-video">
        <source src="videos/hero-background.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <img src="/images/logo/logo.jpg" alt="PLAYMAKERS" style={{ maxWidth: '400px', width: '100%', height: 'auto', marginBottom: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
        <p className="hero-subtitle">CHESHIRE FOOTBALL COACHING</p>
        <p className="hero-text">
          coached by footballers, for footballers
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-secondary btn-large">
            Book a Session
          </a>
          <a 
            href={contactInfo.whatsapp} 
            className="btn btn-secondary btn-large"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us
          </a>
        </div>
        {/* Removed scroll indicator */}
      </div>
    </section>
  );
};

export default HeroSection;
