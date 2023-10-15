import React from "react";
import './DonationCertificate.css'
import Navbar from "../Navbar/Navbar";
import Footer
 from "../Footer/Footer";
function DonationCertificate(){
    return(

        <div> 
            <Navbar/>

        <div className="certificate-container">
            <div className="certificate-header">

            </div>

            <div className="certificate-info">
            <h2 className="certificate-title">Certificate of Donation</h2>
                <h3 className="certificate-content">We hereby express our sincere appreciation to</h3>
            </div>

            <div className="certificate-donar-name-container">
                <h2 className="certificate-donar-name"> gygdku </h2>
            </div>

            <div className="certificate-info">
                <h3 className="certificate-content">In recognition of your donation to help us.</h3>
            </div>

            <div className="certificate-last-content">
                <div className="date"><h3>Date</h3></div>
                <div className="sign"><h3>Signature</h3></div>
            </div>

            <div className="certificate-footer">

            </div>

        </div>

        <Footer/>
       </div>
       
        
    )
}
export default DonationCertificate
