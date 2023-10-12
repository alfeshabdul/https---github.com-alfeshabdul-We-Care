import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {RouterProvider , createBrowserRouter} from 'react-router-dom'
import HomePage from './views/HomePage/HomePage';
import Team from './views/TeamPage/TeamPage';
import Donation from './views/DonationPage/DonationPage';
import Volunteer from './views/VolunteerPage/VolunteerPage';
import Campaigns from './views/CampaignsPage/CampaignsPage';
import ExploreCampaigns from './views/ExploreCampaign/ExploreCampaign';

const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
  {path: '/',
   element:<HomePage/>
  },
  {path:'/campaigns',
   element:<Campaigns/>
  },
  {path:'/teammembers',
  element:<Team/>
 },
 {path:'/volunteer',
  element:<Volunteer/>
 },
 {path:'/donationPage',
  element:<Donation/>
 },{path:'/explorecampaign',
 element:<ExploreCampaign/>
}

]);

root.render(
  <>
   <RouterProvider router = {router} />
  </>
  
)

