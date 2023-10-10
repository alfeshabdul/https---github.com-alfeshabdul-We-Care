import { Link } from "react-router-dom" 
import './Navbar.css'; 

export default function Navbar (){
    return(
        <div>
        <nav className="navbar">
        <div className="nav-brand">WE CARE</div>
    
      <Link className="nav-item" to='/'>Home</Link>
      <Link className="nav-item" to='/Volunteer'>Volunteer</Link>
      <Link className="nav-item" to='/Campaigns'>Campaigns</Link>
      <Link className="nav-item" to='/TeamMembers'>Team</Link>
      <Link className="nav-item" to='/DonationPage'>Donation</Link>
   
   
        </nav>
        <h1>This is Navbar</h1>
        </div>
    )
}