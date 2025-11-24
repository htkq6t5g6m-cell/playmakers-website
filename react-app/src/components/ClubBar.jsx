import React from 'react';
import { clubs } from '../data/data';

const ClubBar = () => {
  const marqueeClubs = [...clubs, ...clubs];

  return (
    <section className="club-bar">
      <div className="container">
        <div className="hero-buttons club-cta">
          <a href="#book" className="btn btn-large hero-book-btn">Book a Session</a>
        </div>

        <div className="club-marquee" aria-label="Clubs we've worked with">
          <div className="club-marquee-track">
            {marqueeClubs.map((club, index) => (
              <div key={`${club}-${index}`} className="club-logo">
                {club}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubBar;
