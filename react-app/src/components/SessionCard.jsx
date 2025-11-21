import React, { useRef, useEffect } from 'react';

const SessionCard = ({ session }) => {
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  const getCardClass = (id) => {
    const classes = {
      1: 'service-card session-121',
      2: 'service-card session-coached',
      3: 'service-card session-group',
      4: 'service-card session-team',
      5: 'service-card session-scout'
    };
    return classes[id] || 'service-card';
  };

  useEffect(() => {
    const cardEl = cardRef.current;
    const titleEl = titleRef.current;
    const textEl = textRef.current;
    if (!cardEl || !titleEl || !textEl) return;

    // Restore any inline font-size before measuring
    const resetSizes = () => {
      titleEl.style.fontSize = '';
      textEl.style.fontSize = '';
    };

    const fitTextToCard = () => {
      resetSizes();

      // Safety limits
      const minTitle = 14; // px
      const minText = 11; // px

      // Start from computed sizes
      let titleSize = parseFloat(window.getComputedStyle(titleEl).fontSize) || 18;
      let textSize = parseFloat(window.getComputedStyle(textEl).fontSize) || 14;

      // Try reducing text first, then title, until content fits inside card
      let iterations = 0;
      const maxIterations = 120;

      while (cardEl.scrollHeight > cardEl.clientHeight && iterations < maxIterations) {
        const curTextSize = parseFloat(window.getComputedStyle(textEl).fontSize) || textSize;
        const curTitleSize = parseFloat(window.getComputedStyle(titleEl).fontSize) || titleSize;

        if (curTextSize > minText) {
          textEl.style.fontSize = (curTextSize - 1) + 'px';
        } else if (curTitleSize > minTitle) {
          titleEl.style.fontSize = (curTitleSize - 1) + 'px';
        } else {
          // Can't reduce further
          break;
        }

        iterations += 1;
      }
    };

    // Use ResizeObserver to respond to card size/content changes
    const ro = new ResizeObserver(() => {
      // debounce-ish: schedule in next frame
      requestAnimationFrame(fitTextToCard);
    });
    ro.observe(cardEl);

    // Also listen for window resizes
    const onWin = () => requestAnimationFrame(fitTextToCard);
    window.addEventListener('resize', onWin);

    // Initial fit
    fitTextToCard();

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', onWin);
    };
  }, [session.title, session.description]);

  return (
    <div ref={cardRef} className={getCardClass(session.id)}>
      <h3 ref={titleRef} className="service-title">{session.title}</h3>
      <p ref={textRef} className="service-text">{session.description}</p>
      
      {session.schedule && (
        <div className="service-schedule">
          <h4 className="schedule-heading">{session.schedule.heading}</h4>
          {session.schedule.times.map((time, index) => (
            <div key={index} className="schedule-item">
              {time.day && <span className="schedule-day">{time.day}</span>}
              <span className="schedule-details">{time.details}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SessionCard;