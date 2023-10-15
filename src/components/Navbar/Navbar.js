import { Link } from "react-router-dom" 
import './Navbar.css'; 

export default function Navbar (){
    return(
        <div>
        <nav className="navbar">
        <div className="nav-brand">WE CARE</div>
    
      <Link className="nav-item" to='/'>Home</Link>
      <Link className="nav-item" to='/volunteer'>Volunteer</Link>
      <Link className="nav-item" to='/campaigns'>Campaigns</Link>
      <Link className="nav-item" to='/teammembers'>Team</Link>
      <Link className="nav-item" to='/donationPage'>Donation</Link>
      <Link className="nav-item" to='/exploreCampaign'>Explore</Link>
   
   
        </nav>
        </div>
    )
}