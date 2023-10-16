import React from 'react';
import './ExploreCampaign.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


import ExploreComponent from '../../components/ExploreComponent/ExploreComponent'; 
const campaigns = [
    {
      id: 1,
      title: 'Water Drive ',
      image: 'campaign1.jpg',
      description: 'Water cleaning campaigns are initiatives aimed at improving water quality and ensuring access to clean and safe drinking water for communities. These campaigns focus on raising awareness about water pollution, implementing water treatment solutions, and promoting sustainable water management practices. Participants in water cleaning campaigns may engage in activities such as organizing clean-up events, promoting water conservation, installing water filtration systems, and advocating for policies to protect water sources. These efforts are crucial to addressing waterborne diseases, ensuring public health, and safeguarding the environment for future generations. Water cleaning campaigns often involve collaboration between governments, non-governmental organizations, communities, and volunteers to create a significant impact on water quality and accessibility..',
      goal: 10000,
      duration: 'Jan 1, 2023 - Jan 31, 2023',
      category: 'Charity',
      progress: 7500 ,
    },
  
  ];

  
  const ExploreCampaign = () => {
    return (
      <div>
        <Navbar/>
        <h1 className='heading'>Explore Campaigns</h1>
        <div className="campaign-container">
          {campaigns.map(campaign => (
            <ExploreComponent
              key={campaign.id}
              title={campaign.title}
              image={campaign.image}
              description={campaign.description}
              goal={campaign.goal}
              duration={campaign.duration}
              category={campaign.category}
              progress={campaign.progress}
            />
          ))}
        </div>
        <Footer/>
      </div>
    );
  };
  
  export default ExploreCampaign;
  