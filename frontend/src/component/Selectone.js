import React from 'react'
import './Select.css'

function Selectone() {
 

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
                <div id='rol5'>
                    <h4>Checklist</h4>
                </div>
              <div className="box">
                <div className='selection'>
                    <input type='text' placeholder='Enter a New Section' style={{width:250, height: 48, border: 3,
                        marginTop: 69, marginLeft: 19,outline: 'none', paddingLeft: 49, fontSize: 13 }}></input>
                    <button style={{width: 250, height: 45, fontSize: 15,}}>Add</button>
                </div>
                <img src={require("../component/images/image.png")} alt='img' style={{width:390, height: 250,}}></img>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Selectone