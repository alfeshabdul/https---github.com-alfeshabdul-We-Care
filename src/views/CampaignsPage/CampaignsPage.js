import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

import CampaignCard from "../../components/CampaignCard/CampaignCard"


const campaignsData = [
   {
     id: 1,
     title: 'Clean Water Initiative',
     description: 'Provide clean and safe drinking water to communities in need.',
     goal: ':- 10,000',
     raised: ':- 7,500'
   },
   {
     id: 2,
     title: 'Education for All',
     description: 'Support education programs to ensure every child has access to quality education.',
     goal: 'RUPEES :- 15,000',
     raised: 'RUPEES :- 12,200'
   },

 ];
 
 function Campaigns() {
   return (
     <div className="campaigns-page">
       <Navbar />
       <div className="campaigns-container">
         <h1>Explore Campaigns</h1>
         <div className="campaigns-list">
           {campaignsData.map(campaign => (
             <CampaignCard key={campaign.id} campaign={campaign} />
           ))}
         </div>
       </div>
       <Footer />
     </div>
   );
 }
 
 export default Campaigns