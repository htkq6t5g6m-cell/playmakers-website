import React from 'react';
import { clubs } from '../data/data';

const ClubBar = () => {
  return (
    <section className="club-bar">
      <div className="container">
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
