import React from 'react';
import './CampaignCard.css'; 

const CampaignCard = ({ campaign }) => {
  return (
    <div className="campaign-card">
      <h2>{campaign.title}</h2>
      <p>{campaign.description}</p>
      <div className="campaign-details">
        <p><strong>Goal:</strong> {campaign.goal}</p>
        <p><strong>Raised:</strong> {campaign.raised}</p>
      </div>
      <br></br><br></br>
      <a  className='explore' href='../ExploreCampaign/explorecampaign.js' >Explore</a>
      <br></br>
    </div>
  );
};

export default CampaignCard;
