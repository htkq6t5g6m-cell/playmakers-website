import React from 'react';
import { features } from '../data/data';

const WhyChooseUsSection = () => {
  return (
    <section className="what-we-do" id="what-we-do">
      <div className="container">
        <h2 className="section-heading text-center">What We Do</h2>

        <div className="what-we-do-grid">
          <div className="what-we-do-item">
            <h3 className="service-title">121 Coaching</h3>
          </div>

          <div className="what-we-do-item">
            <h3 className="service-title">Group Sessions</h3>
          </div>

          <div className="what-we-do-item">
            <h3 className="service-title">Coached Matches</h3>
          </div>

          <div className="what-we-do-item">
            <h3 className="service-title">Mindset and Confidence</h3>
          </div>

          <div className="what-we-do-item">
            <h3 className="service-title">Team Training</h3>
          </div>

          <div className="what-we-do-item">
            <h3 className="service-title">Scouting Reports</h3>
          </div>

          <div className="what-we-do-item">
            <h3 className="service-title">Fixtures vs Academies</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
