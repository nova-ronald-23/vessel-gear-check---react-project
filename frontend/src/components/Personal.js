import React from 'react'
import './Personal.css'

export const Personal = () => {
  return (
    <div className="container">
    <div className="main-content">
      <div className="white-box">
      <div className="captain-logo"></div>
              <input type="text" placeholder="Enter email ID" />
              
              <input type="text" placeholder="Enter Current Position" />
          <div className="button-container">
            <button className="button1" >Exit</button>
           
            <button className="button2" >Update</button>
          
          </div>
        
            
            
      </div>
    </div>
  </div>

  )
}
