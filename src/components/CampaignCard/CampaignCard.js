import React from 'react';
import './CampaignCard.css'; 
import { Link } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
  return (
    <div className="campaign-card">
      <h2>{campaign.title}</h2>
      <p>{campaign.description}</p>
      <div className="campaign-details">
        <br></br>
        <p><strong>Goal:</strong> {campaign.goal}</p>
        <p><strong>Raised:</strong> {campaign.raised}</p>
      </div>
      <br></br><br></br>
      <Link to='/exploreCampaign' className=''><button>Explore</button></Link>
      <br></br>
    </div>
  );
};

export default CampaignCard;
