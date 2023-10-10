import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {RouterProvider , createBrowserRouter} from 'react-router-dom'
import HomePage from './views/HomePage/HomePage';
import Team from './views/TeamPage/TeamPage';
import Donation from './views/DonationPage/DonationPage';
import Volunteer from './views/VolunteerPage/VolunteerPage';
import Campaigns from './views/CampaignsPage/CampaignsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
  {path: '/',
   element:<HomePage/>
  },
  {path:'/Campaigns',
   element:<Campaigns/>
  },
  {path:'/TeamMembers',
  element:<Team/>
 },
 {path:'/Volunteer',
  element:<Volunteer/>
 },
 {path:'/DonationPage',
  element:<Donation/>
 }

]);

root.render(
  <>
   <RouterProvider router = {router} />
  </>
  
)

