import React from 'react';

const SessionCard = ({ session }) => {
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

  return (
    <div className={getCardClass(session.id)}>
      <h3 className="service-title">{session.title}</h3>
      <p className="service-text">{session.description}</p>
      
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