import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import v1 from './img/v3.jpg'
import { Link } from "react-router-dom"

import './HomePage.css'

function HomePage() {
   return (
      <div>
         <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
         <Navbar />
         <div className="header-section">
            <div className="left-section">
               <h1 className="section-heading">Welcome to WE-CARE</h1>
               <p className="section-desc">
                Small inititative to help our Society
                </p>
               <div className="btn-section">
                  <Link to='/donationPage'><button>Donate</button></Link>
                 
                  <Link to='/campaigns'><button>Campaigns</button></Link>
               </div>
            </div>
            <div className="right-section">
               <img src={v1} className='brand-img' alt='VolunteerImg' />
            </div>

            
         </div>
         <div>
         <p><b className="heading">Welcome to WE-CARE - Empowering Change, Transforming Lives!</b><br></br>

At WE-CARE, we're dedicated to making a difference. Our homepage is your gateway to a world of positive impact and meaningful change. As you step into our virtual space, you'll be greeted by vibrant visuals and powerful stories that illustrate our mission: to create a better tomorrow for all.

<br></br><br></br> <b className=" heading">What We Stand For:</b><br></br>
At the heart of our campaign is a commitment to EDUCATION , WOMEN-EMPOWERMENT , ANIMAL-CARE. We believe in the power of collective action to transform challenges into opportunities. With unwavering determination, we tackle issues such as HUNGER , LABOUR CHILD , UN-HYGINE, striving for solutions that bring lasting change.
<br></br>

<br></br> <b className=" heading">Get Involved, Be the Change:</b><br></br>
Ready to join us on this transformative journey? Our homepage offers clear calls to action. Whether you're passionate about donating to support our initiatives, volunteering your time and skills, or simply learning more about our projects, you'll find easy-to-spot buttons guiding you to your desired destination.
<br></br>
<br></br> <b className=" heading">Stories of Impact:</b><br></br>
Explore real-life stories from individuals and communities whose lives have been touched by our campaign. From uplifting testimonials to inspiring achievements, these narratives highlight the tangible difference our efforts make. Prepare to be moved and motivated as you read about the positive transformations brought about by WE-CARE.
<br></br>
<br></br> <b className=" heading ">Stay Updated, Stay Inspired:</b><br></br>
Our homepage is also your source for the latest campaign news, upcoming events, and insightful articles. Be sure to check our regularly updated sections to stay informed about our progress and discover new ways to get involved. Follow us on social media platforms to join our growing community of change-makers.
<br></br>
<br></br> <b className="heading " >  Join Us Today:</b><br></br>
Every click, every donation, and every act of kindness fuels our campaign's momentum. Together, we can turn aspirations into actions and dreams into realities. Join us today, and together, let's create a world where we can change the Society.

Thank you for visiting WE-CARE - where passion meets purpose, and where your support paves the way for a brighter future.

</p>
      
         </div>

         <Footer />
      </div>


   )
}

export default HomePage