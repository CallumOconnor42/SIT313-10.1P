import React from 'react';

const TutorialCard = ({ tutorial }) => {
  return (
    <div className="card tutorial-card">
      <img src={tutorial.image} alt={tutorial.title} />
      <h2>{tutorial.title}</h2>
      <p>{tutorial.description}</p>
      <div className="card-footer">
        <span className="rating">⭐ {tutorial.rating}</span>
        <span className="username">{tutorial.username}</span>
      </div>
    </div>
  );
};

export default TutorialCard;