import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import v1 from './img/v3.jpg'
import './VolunteerPage.css'

function Volunteer() {
   return (
      <div>
         <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
         <Navbar />

         <div className="header-section">
            <div className="left-section">
               <h1 className="section-heading">We are Volunteers</h1>
               <p className="section-desc">
               The smallest act of kindness is worth more than the grandest intention. Alone we can do so little, together we can do so much.
               </p>
               <div className="btn-section">
                  <button>Donate</button>
                  <button>Join us</button>
               </div>
            </div>
            <div className="right-section">
               <img src={v1} className='brand-img' alt='VolunteerImg'/>
            </div>
         </div>

         <Footer />
      </div>


   )
}

export default Volunteer