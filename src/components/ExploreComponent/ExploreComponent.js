import React from 'react';
import './ExploreComponent.css';

const  ExploreComponent  = ({ title, image, description, goal, duration, category, progress }) => {
  return (
    <div className="campaign-card">
      <h2 className="campaign-title">{title}</h2>
      <img src={image} alt="Campaign" className="campaign-image" />
      <p className="campaign-description">{description}</p>
      <div className="campaign-details">
        <p><strong>Goal:</strong> ${goal}</p>
        <p><strong>Duration:</strong> {duration}</p>
        <p><strong>Category:</strong> {category}</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}>{progress}%</div>
        </div>
      </div>
      <div className="action-buttons">
        <button className="donate-button">Donate</button>
        <button className="learn-more-button">Learn More</button>
      </div>
    </div>
  );
};

export default ExploreComponent;
