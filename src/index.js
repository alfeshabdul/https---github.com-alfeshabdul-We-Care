import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {RouterProvider , createBrowserRouter} from 'react-router-dom'
import HomePage from './views/HomePage/HomePage';
import Team from './views/TeamPage/TeamPage';
import Donation from './views/DonationPage/DonationPage';
import Volunteer from './views/VolunteerPage/VolunteerPage';
import Campaigns from './views/CampaignsPage/CampaignsPage';
import ExploreCampaign from './views/ExploreCampaign/ExploreCampaign'

const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter( [
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
 },
<<<<<<< HEAD
 
=======
 {
  path:'/exploreCampaign',
  element:<ExploreCampaign />
 }
>>>>>>> c1885ad4bc71b18ce7b1dc51ba217b5c4624d4f4
]);

root.render(
  <>
   <RouterProvider router = {router} />
  </>
  
)

