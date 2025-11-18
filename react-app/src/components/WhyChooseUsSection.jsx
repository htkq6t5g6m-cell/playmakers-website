import React from 'react';
import { features } from '../data/data';

const WhyChooseUsSection = () => {
  return (
    <section className="why-choose" id="reviews">
      <div className="container">
        <h2 className="section-heading text-center">Why Choose Us</h2>
        <p className="section-subtitle text-center">
          Professional coaching grounded in real playing experience.
        </p>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-box">
              <div className="feature-image">
                <img src={feature.image} alt={feature.title} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
