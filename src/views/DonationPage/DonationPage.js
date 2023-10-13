import React,{useEffect, useState} from "react";
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import Donarcard from "../../components/Donarcard/Donarcard"
import './DonationPage.css'
import showToast from 'crunchy-toast'
import gpay from './img/gpay.png'
import phonepay from './img/phonepay.png'
import pytm from './img/pytm.jpg'


function Donation(){
   const [donars, setDonars] = useState([
      {
         name: 'Rushabh',
         mobile: '8907654321',
         email: 'Rushbh@gmail.com',
         amount: '5000',
      }
   ]);

   const [name, setName] = useState('');
   const [mobile, setMobile] = useState('');
   const [email, setEmail] = useState('');
   const [amount, setAmount] = useState('');

   const addDonar = () =>{

      if(!name){
         showToast("Name is required","alert",3000);
         return;
      }

      if(!mobile){
         showToast("Mobile is required","alert",3000);
         return;
      }

      if(!email){
         showToast("Email is required","alert",3000);
         return;
      }

      if(!amount){
         showToast("Amount is required","alert",3000);
         return;
      }

      const obj ={
         name: name,
         mobile: mobile,
         email: email,
         amount: amount
      }
      
      const newDonars = [...donars,obj];
      setDonars(newDonars);
      saveToLocalStorage(newDonars);

      showToast("Donar added Successfully", "Success", 3000);

      setName('');
      setMobile('');
      setEmail('');
      setAmount('');

   };

   const saveToLocalStorage =(donarsData) => {
      localStorage.setItem('donars',JSON.stringify(donars));
   }

   const loadFromLocalStorage = () =>{
      const donarsData = JSON.parse(localStorage.getItem('donars'));
      if(donarsData){
         setDonars(donarsData);
      }
   }

   useEffect(()=>{
      loadFromLocalStorage();
   }, [])
   
    return(
       <div>
          <Navbar/>
          <div className="donation-page-container">
         <h1 className="donation-page-title">Donation</h1>

         <div className="donation-page-body">

            <div className="show-donar">

               <h2 className="donation-heading">Our Donars</h2>
                     {
                        donars.map((donar, index)=>{
                           const {name, mobile, email,amount} = donar;
                              return <Donarcard key={index} 
                              name={donar.name} 
                              mobile={donar.mobile}
                              email={donar.email} 
                              amount={donar.amount}/>
                        })
                     }
            </div>

            <div className="add-donar">
                
            
               <h2 className="donation-heading">New Donar</h2>
               
               <form>
                  <label className="input-label"><h3>Enter Name :</h3></label>
                  <input type="text" 
                  placeholder="Name" 
                  className="user-input" 
                  onChange={(e)=>{
                        setName(e.target.value)
                  }}
                  value={name}
                  />

                  <label className="input-label"><h3>Enter Mobile No :</h3></label>
                  <input type="text" 
                  placeholder="Mobile" 
                  className="user-input"
                  onChange={(e)=>{
                     setMobile(e.target.value)
               }}
               value={mobile}
               />

                 <label className="input-label"><h3>Enter Email :</h3></label>
                  <input type="email" 
                  placeholder="Email" 
                  className="user-input"
                  onChange={(e)=>{
                     setEmail(e.target.value)
               }}
               value={email}
               />

                  <label className="input-label"><h3>Enter Amount :</h3></label>
                  <input type="text" 
                  placeholder="Amount" 
                  className="user-input"
                  onChange={(e)=>{
                     setAmount(e.target.value)
               }}
               value={amount}
               />

                  <label className="input-label"><h3>Payment Method:</h3></label>

                  <div className="donation-pay-method">
                  <input type="radio" name="pay"/>
                  
                      <img src={gpay} className="pay-method-imgs"/>
                  

                  <input type="radio" name="pay"/>
                  <img src={phonepay} className="pay-method-imgs"/>
                   

                  <input type="radio" name="pay"/>
                  <img src={pytm} className="pay-method-imgs"/>
                    
                  </div>      

                  <button type="button" 
                  className="add-donar-btn" 
                  onClick={addDonar}
                  > 
                  Add Donar 
                  </button>

               </form>
            </div>
         
         </div> 
         </div> 
          <Footer/>
       </div>
       
       
    )
   }
   
   export default Donation
