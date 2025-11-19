import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/data';

/* TestimonialsSection
   Premium carousel showcasing parent testimonials.
   - Data sourced from testimonials array in data.js
   - One testimonial visible at a time
   - Looping prev/next controls
   - Fade transition between items
   - Dots indicators for current position (desktop & tablet)
   Swap avatar placeholder by adding image path to testimonial.avatar.
*/
const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const total = testimonials.length;

  const go = (dir) => {
    setFade(true);
    setTimeout(() => {
      setIndex((prev) => {
        if (dir === 'next') {
          return (prev + 1) % total;
        }
        return (prev - 1 + total) % total;
      });
      setFade(false);
    }, 160); // short fade duration aligned with CSS transition
  };

  // Optional auto advance (commented out)
  // useEffect(() => {
  //   const timer = setInterval(() => go('next'), 8000);
  //   return () => clearInterval(timer);
  // }, []);

  const t = testimonials[index];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-heading">What Parents Say</h2>
          <p className="section-subtitle testimonials-subtitle">Real feedback from families whose players train with us.</p>
        </div>
        <div className={"testimonial-carousel " + (fade ? 'is-fading' : '')}>
          <div className="testimonial-slide">
            <div className="testimonial-media">
              {t.avatar ? (
                <img src={t.avatar} alt={t.name + ' avatar'} className="testimonial-avatar" />
              ) : (
                <div className="testimonial-avatar placeholder" aria-hidden="true">
                  <span>{t.name.charAt(0)}</span>
                </div>
              )}
            </div>
            <div className="testimonial-content">
              <blockquote className="testimonial-text">{t.text}</blockquote>
              <div className="testimonial-meta">
                <span className="testimonial-name">{t.name}</span>
                {t.label && <span className="testimonial-label">{t.label}</span>}
              </div>
            </div>
          </div>
          <div className="testimonial-controls">
            <button type="button" className="btn btn-header testimonial-prev" onClick={() => go('prev')} aria-label="Previous testimonial">‹</button>
            <button type="button" className="btn btn-header testimonial-next" onClick={() => go('next')} aria-label="Next testimonial">›</button>
          </div>
          <div className="testimonial-dots" role="tablist">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={"dot " + (i === index ? 'active' : '')}
                aria-label={"Go to testimonial " + (i + 1)}
                aria-selected={i === index}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
