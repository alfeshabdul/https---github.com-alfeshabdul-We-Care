import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import v1 from './img/v1.jpg'
import './VolunteerPage.css'

function Volunteer() {
   return (
      <div>
         <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
         <Navbar />

         <div className="header-section">
            <div className="left-section">
               hi
            </div>
            <div className="right-section">
               <img src={v1} className='brand-img'/>
            </div>
         </div>

         <Footer />
      </div>


   )
}

export default Volunteer