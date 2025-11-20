import React from 'react';
import { clubs } from '../data/data';

const ClubBar = () => {
  return (
    <section className="club-bar">
      <div className="container">
        <div className="hero-buttons club-cta">
          <a href="#book" className="btn btn-large hero-book-btn">Book a Session</a>
        </div>
        <p className="club-tagline">coached by footballers, for footballers</p>
        <div className="club-logos">
          {clubs.map((club, index) => (
            <div key={index} className="club-logo">
              {club}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubBar;
