import React from 'react';
import SessionCard from './SessionCard';
import { sessions } from '../data/data';

const SessionsSection = () => {
  return (
    <section className="services" id="sessions">
      <div className="container">
        <h2 className="section-heading text-center">Our Services</h2>
        <p className="section-subtitle text-center">
          Comprehensive coaching solutions for players at all levels.
        </p>
        <div className="services-grid">
          {sessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SessionsSection;
