import React from 'react'
import './Dashboard.css'

function Dashboard() {
 
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
                <div className='selection'>
                    <text style={{fontSize: 13, fontWeight: 450, letterSpacing: 1, 
                   color: 'white',}}>Task Completion</text>
                   <img src={require("../component/images/pending.png")} alt="pending" />
                   <text style={{border: 'none', color:'white',marginTop: 75, fontWeight: 300,fontSize: 14,marginLeft: -6,letterSpacing: 0.5,}}> Pending </text>
                </div>
                <div className='selectiontwo'>
                <text style={{fontSize: 13, fontWeight: 450, letterSpacing: 1, 
                   color: 'white',}}>Alert</text>
                   <img src={require("../component/images/alert.png")} alt="alert" />
                   <text style={{border: 'none', color:'white',marginTop: 79, fontWeight: 300,fontSize: 14,marginLeft: -54,letterSpacing: 0.5,}}> Alert </text>
                </div>
                <img src={require("../component/images/dashimg.png")} alt='img' style={{width: 240, height: 300,}}></img>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Dashboard