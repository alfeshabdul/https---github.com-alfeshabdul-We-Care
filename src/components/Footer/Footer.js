import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer(){
    return(
     <div>
        <footer class="footer-distributed">
        
                    <div class="footer-left">
        
                        <h3>WE CARE<span>_AR_GROUPS</span></h3>
        
                        <p class="footer-links">
                            <Link to="/" class="link-1">Home</Link>
                            
                            <Link to="/campaigns">Campaigns</Link>
                        
                            <Link to="/voulnteer">Volunteer</Link>
                        
                            <Link to="/donation">Donation</Link>
                            
                            <Link to="/team">Team</Link>
                        </p>
        
                        <p class="footer-company-name">WE CARE © 2023</p>
                    </div>
        
                    <div class="footer-center">
        
                        <div>
                            <i class="fa fa-map-marker"></i>
                            <p><span>RODE TO CODE</span> PUNE</p>
                        </div>
        
                        <div>
                            <i class="fa fa-phone"></i>
                            <p>+91 0123456789</p>
                        </div>
        
                        <div>
                            <i class="fa fa-envelope"></i>
                            <p><Link to="mailto:support@company.com">support@wecare.com</Link></p>
                        </div>
        
                    </div>
        
                    <div class="footer-right">
        
                        <p class="footer-company-about">
                            <span>About We Care</span>
                            Its a platform to support our society in various aspects for help
                        </p>
        
                        <div class="footer-icons">
        
                            <Link to="#"><i class="fa fa-facebook"></i></Link>
                            <Link to="#"><i class="fa fa-twitter"></i></Link>
                            <Link to="#"><i class="fa fa-linkedin"></i></Link>
                            <Link to="#"><i class="fa fa-github"></i></Link>
        
                        </div>
        
                    </div>
        
                </footer>
     </div>
    )
}





