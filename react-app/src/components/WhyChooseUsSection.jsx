import React from 'react';
import { features } from '../data/data';

const WhyChooseUsSection = () => {
  return (
    <section className="what-we-do" id="what-we-do">
      <div className="container">
        <h2 className="section-heading text-center">What We Do</h2>

        <div className="what-we-do-grid">
          <div className="what-we-do-item">
            <h3 className="service-title">1-to-1 and small group coaching</h3>
            <p className="service-text">Personalised sessions to identify strengths and weaknesses and improve them both.</p>
          </div>

          <div className="what-we-do-item">
            <h3 className="service-title">Group Sessions</h3>
            <p className="service-text">Coached matches, ball mastery and 1v1 groups tailored to age and ability.</p>
            <p className="service-text">Our Matches are 1 hour 6v6, facilitated by a coach to give in-game tips.</p>
            <p className="service-text">1v1 groups focus on ball mastery, and facilitate 1v1 battles to improve ball control.</p>
          </div>

          <div className="what-we-do-item">
            <h3 className="service-title">Team Training</h3>
            <p className="service-text">Details available on request.</p>
          </div>

          <div className="what-we-do-item">
            <h3 className="service-title">Scouting Reports</h3>
            <p className="service-text">Our coaches will come out and watch your son or daughter play. We will then deliver a tailored report on strengths and areas for improvement, and advice.</p>
          </div>

          <div className="what-we-do-item">
            <h3 className="service-title">Mindset and confidence training</h3>
            <p className="service-text">Yoga for football, and professional talks to help young footballers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
