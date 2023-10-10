import React from "react";
import "./Donarcard.css"
function Donarcard({name, mobile, email, amount}){
  return(
    <div className="donar-card"> 
           <p className="donar-name">🧑🏿 {name}</p>
           <p className="donar-mobile">📞 {mobile}</p>
           <p className="donar-email">📧 {email}</p>
           <p className="donar-amount">💸 {amount}</p>
     </div>
  )
}
export default Donarcard