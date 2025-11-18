import React from 'react';
import CoachCard from './CoachCard';
import { coaches } from '../data/data';

const CoachesSection = () => {
  return (
    <section className="coaches" id="coaches">
      <div className="container">
        <h2 className="section-heading text-center">Meet Our Coaches</h2>
        <p className="section-subtitle text-center">
          Current professional footballers with elite academy experience.
        </p>
        <div className="coaches-grid">
          {coaches.map((coach) => (
            <CoachCard key={coach.id} coach={coach} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
