import React from 'react'
import './Personal.css'
import Sidebar from './Sidebar';

export const Personal = () => {
  return (
    <div className="pcontainer">
      <Sidebar/>
        <div className="pmain-content">
            <div className="pwhite-box">
                <div className="pcaptain-logo"></div>
              <input type="text" placeholder="Enter email ID" />
              
              <input type="text" placeholder="Enter your Name" />
              <div className="pdropdown">
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
              <div className="pbutton-container">
                   <button className="pbutton1" >Exit</button>
                  
                   <button className="pbutton2" >Update</button>
              
              </div>   
                       
            </div>
        </div>
    </div>

  )
}
export default Personal;