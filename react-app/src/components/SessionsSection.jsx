import React, { useState, useEffect } from 'react';
import SessionCard from './SessionCard';
import { sessions } from '../data/data';

/* SessionsSection
   Converted to a carousel showing one service/session at a time.
   - Left/right navigation with wrap-around.
   - Fade transition between items (CSS handles animation class).
   - Keyboard arrow navigation and swipe support for mobile.
*/
const SessionsSection = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const total = sessions.length;

  const go = (dir) => {
    setFade(true);
    setTimeout(() => {
      setIndex(prev => dir === 'next' ? (prev + 1) % total : (prev - 1 + total) % total);
      setFade(false);
    }, 160);
  };

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') go('next');
      if (e.key === 'ArrowLeft') go('prev');
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [total]);

  // Basic touch swipe
  useEffect(() => {
    let startX = null;
    const onTouchStart = (e) => { startX = e.touches[0].clientX; };
    const onTouchEnd = (e) => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) {
        go(dx < 0 ? 'next' : 'prev');
      }
      startX = null;
    };
    const el = document.getElementById('sessions');
    if (!el) return;
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [index, total]);

  const current = sessions[index];

  return (
    <section className="services" id="sessions">
      <div className="container">
        <h2 className="section-heading text-center">Our Services</h2>
        <p className="section-subtitle text-center">
          Comprehensive coaching solutions for players at all levels.
        </p>
        <div className={"services-carousel " + (fade ? 'is-fading' : '')}>
          <div className="services-slide">
            <SessionCard key={current.id} session={current} />
          </div>
          <div className="services-controls">
            <button type="button" className="btn btn-header services-prev" onClick={() => go('prev')} aria-label="Previous service">‹</button>
            <button type="button" className="btn btn-header services-next" onClick={() => go('next')} aria-label="Next service">›</button>
          </div>
          <div className="services-dots" role="tablist">
            {sessions.map((_, i) => (
              <button
                key={i}
                className={"dot " + (i === index ? 'active' : '')}
                aria-label={"Go to service " + (i + 1)}
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

export default SessionsSection;
