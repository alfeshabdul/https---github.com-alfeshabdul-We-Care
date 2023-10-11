import React,{useState} from "react";
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import Donarcard from "../../components/Donarcard/Donarcard"
import './Donation.css'
import showToast from 'crunchy-toast'

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
      const obj ={
         name: name,
         mobile: mobile,
         email: email,
         amount: amount
      }

      setDonars([...donars,obj]);
      showToast("Donar added Successfully", "Success", 3000);

      setName('');
      setMobile('');
      setEmail('');
      setAmount('');

   };

    return(
       <div>
          <Navbar/>
          <div className="container">
         <h1 className="title">Fund Donation</h1>

         <div className="page-body">

            <div className="show-donar">

               <h2 className="heading">Show Donar</h2>
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

               <h2 className="heading">Add Donar</h2>

               <form>
                  <label className="input-label">Enter Name :</label>
                  <input type="text" 
                  placeholder="Name" 
                  className="user-input" 
                  onChange={(e)=>{
                        setName(e.target.value)
                  }}
                  value={name}
                  />

                  <label className="input-label">Enter Mobile No :</label>
                  <input type="text" 
                  placeholder="Mobile" 
                  className="user-input"
                  onChange={(e)=>{
                     setMobile(e.target.value)
               }}
               value={mobile}
               />

                 <label className="input-label">Enter Email :</label>
                  <input type="email" 
                  placeholder="Email" 
                  className="user-input"
                  onChange={(e)=>{
                     setEmail(e.target.value)
               }}
               value={email}
               />

                  <label className="input-label">Enter Amount :</label>
                  <input type="text" 
                  placeholder="Amount" 
                  className="user-input"
                  onChange={(e)=>{
                     setAmount(e.target.value)
               }}
               value={amount}
               />

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