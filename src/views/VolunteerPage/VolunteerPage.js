import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

function Volunteer() {
   return (
      <div>
         <Navbar />
         <div className='card'>
            <Form>
               <input type={text} placeholder='Enter Name' className=""/>
            </Form>
         </div>
         <Footer />
      </div>


   )
}

export default Volunteer