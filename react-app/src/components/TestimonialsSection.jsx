import React, { useState, useEffect, useRef } from 'react';
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

  // Touch / swipe and drag visual feedback
  const touchStartX = useRef(null);
  const touchActive = useRef(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartTime = useRef(0);
  const lastMoveX = useRef(0);
  const lastMoveTime = useRef(0);

  const pointerStart = (x) => {
    touchStartX.current = x;
    touchActive.current = true;
    setIsDragging(true);
    setDragOffset(0);
    const now = performance.now();
    touchStartTime.current = now;
    lastMoveX.current = x;
    lastMoveTime.current = now;
  };

  const pointerMove = (x) => {
    if (!touchActive.current || touchStartX.current == null) return;
    const delta = x - touchStartX.current;
    setDragOffset(delta);
    lastMoveX.current = x;
    lastMoveTime.current = performance.now();
  };

  const pointerEnd = () => {
    if (!touchActive.current) return;
    const delta = dragOffset;
    const threshold = 50; // px required to trigger swipe
    // compute velocity (px / ms)
    const startT = touchStartTime.current || 0;
    const endT = lastMoveTime.current || startT;
    const dx = (lastMoveX.current || touchStartX.current) - (touchStartX.current || 0);
    const dt = Math.max(1, endT - startT);
    const velocity = dx / dt; // px per ms
    const absV = Math.abs(velocity);
    const velocityThreshold = 0.5; // ~500 px/s

    // flick detection: high velocity overrides distance threshold
    if (absV > velocityThreshold) {
      if (velocity < 0) go('next');
      else go('prev');
    } else if (Math.abs(delta) > threshold) {
      if (delta < 0) go('next');
      else go('prev');
    }
    // animate back to neutral
    setIsDragging(false);
    setDragOffset(0);
    touchActive.current = false;
    touchStartX.current = null;
    touchStartTime.current = 0;
    lastMoveX.current = 0;
    lastMoveTime.current = 0;
  };

  // touch handlers
  const onTouchStart = (e) => {
    const t = e.touches && e.touches[0];
    if (!t) return;
    pointerStart(t.clientX);
  };
  const onTouchMove = (e) => {
    const t = e.touches && e.touches[0];
    if (!t) return;
    pointerMove(t.clientX);
  };
  const onTouchEnd = () => pointerEnd();

  // pointer/mouse handlers for desktop dragging
  const onPointerDown = (e) => {
    // only left button
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    e.currentTarget.setPointerCapture && e.currentTarget.setPointerCapture(e.pointerId);
    pointerStart(e.clientX);
  };
  const onPointerMove = (e) => pointerMove(e.clientX);
  const onPointerUp = (e) => {
    e.currentTarget.releasePointerCapture && e.currentTarget.releasePointerCapture(e.pointerId);
    pointerEnd();
  };

  const t = testimonials[index];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-heading">What Parents Say</h2>
          <p className="section-subtitle testimonials-subtitle">Real feedback from families whose players train with us.</p>
        </div>
        <div
          className={"testimonial-carousel " + (fade ? 'is-fading' : '')}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >
          <div
            className="testimonial-slide"
            style={{
              transform: `translateX(${dragOffset}px) rotate(${Math.max(-6, Math.min(6, dragOffset / 20))}deg)`,
              transition: isDragging ? 'none' : 'transform .28s cubic-bezier(.2,.9,.2,1)',
              boxShadow: isDragging ? '0 24px 40px rgba(0,0,0,0.45)' : undefined
            }}
          >
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
          <div
            className="testimonial-controls"
            style={{
              opacity: isDragging || Math.abs(dragOffset) > 8 ? 1 : 0.85,
              transition: 'opacity .18s ease, transform .18s ease',
              transform: isDragging ? 'scale(1.02)' : 'scale(1)'
            }}
          >
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
