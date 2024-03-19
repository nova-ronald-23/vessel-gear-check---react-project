import React from 'react'
import './Tasktracking.css'

function Tasktracking() {
  return (
    <div className="container">
    <div className="blue">
    <div className="sidebar">
      <div className="sheader">
      <div className="captain-logo"></div>
      <div className="captain-text">Captain</div>
      </div>

      <div className="sidebar-options">
          <button className="option" style={{ borderRadius:40}}>
            <img src={require("../component/images/opn1.png")} alt="Option 1" /> 
            <span>Roles</span>
          </button>
          <button className="option" style={{ borderRadius:40}}>
            <img src={require("../component/images/opn2.png")} alt="Option 2" /> 
            <span>Vessel Profile</span>
          </button>
          <button className="option" style={{ borderRadius:40}}>
            <img src={require("../component/images/opn3.png")} alt="Option 3" /> 
            <span>Checklist</span>
          </button>
          <button className="option" style={{ borderRadius:40}}>
            <img src={require("../component/images/opn4.png")} alt="Option 4" /> 
            <span>Visualization</span>
          </button>
          <button className="option" style={{ borderRadius:40}}>
            <img src={require("../component/images/opn5.png")} alt="Option 5" /> 
            <span>Settings</span>
          </button>
            {/* Add more options as needed */}

      </div>

      </div>

          </div>
          <div className="green">
            <div className="green-inner">
                <img src={require("../component/images/Search.png")} style={{width: 27, height: 27,
                marginLeft: 195, position: 'relative', zIndex: 1, marginTop: -25.5,}}/>
                <input type="text" placeholder="Start Search"></input>
                <div className='notify'>
                    <div style={{opacity:  0.9,}}>
                    <img src={require("../component/images/bell.png")} alt='bell' style={{width:57, height: 50,}}></img>
                    </div>
                </div>
                <button className="sign-out-button">
                <img src={require("../component/images/sout.png")} alt="Sign Out" />
                <span>Sign Out</span>
                </button>
              <div className="box">
                <button style={{fontSize: 13, fontWeight: 350, letterSpacing: 1,}}>Task Tracking</button>
                <img src={require("../component/images/track.png")} alt='img' style={{width: 185, height: 210,}}></img>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Tasktracking