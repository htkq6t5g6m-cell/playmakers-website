import React from 'react';

const CoachCard = ({ coach }) => {
  return (
    <div className="coach-card">
      <div className="coach-image">
        <img src={coach.image} alt={coach.alt} />
      </div>
      <div className="coach-info">
        <h3 className="coach-name">{coach.name}</h3>
        <p className="coach-role">{coach.role}</p>
        <p className="coach-bio">{coach.bio}</p>
      </div>
    </div>
  );
};

export default CoachCard;
