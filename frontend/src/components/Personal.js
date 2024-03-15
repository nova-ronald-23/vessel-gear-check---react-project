import React from 'react'
import './Personal.css'

export const Personal = () => {
  return (
    <div className="container">
        <div className="main-content">
            <div className="white-box">
                <div className="captain-logo"></div>
              <input type="text" placeholder="Enter email ID" />
              
              <input type="text" placeholder="Enter your Name" />
              <div className="dropdown">
                   <select>
                           <option value="">Select Your Position</option>
                           <option value="option1">Captain</option>
                           <option value="option2">Bridge</option>
                           <option value="option3">Engine</option>
                           <option value="option4">Logistics</option>
                           <option value="option5">Safety</option>
                           <option value="option6">Hospitality</option>                       
                   </select>
              </div>
              <div className="button-container">
                   <button className="button1" >Exit</button>
                  
                   <button className="button2" >Update</button>
              
              </div>   
                       
            </div>
        </div>
    </div>

  )
}
