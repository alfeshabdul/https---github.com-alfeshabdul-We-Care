import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import './VolunteerPage.css'

function Volunteer() {
   return (
      <div>
         <Navbar />
         <div className='card'>
            <form>
               <input type='text' placeholder='Enter Name' className="user-input"/>
               <input type='text' placeholder='Enter mail' className="user-input"/>
               <input type='text' placeholder='Enter mobile no' className="user-input"/>
            </form>
         </div>
         <Footer />
      </div>


   )
}

export default Volunteer