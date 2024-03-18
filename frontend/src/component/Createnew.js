import React from 'react'
import './Createnew.css'

function Createnew() {
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
            <button className="sign-out-button">
            <img src={require("../component/images/sout.png")} alt="Sign Out" />
            <span>Sign Out</span>
            </button>

      </div>

          </div>
          <div className="green">
            <div className="green-inner">
              <div className="box">
              <div className='boxhead'>
                    <text style={{fontSize: 16, fontWeight: 700, color: '#524E4E',
                paddingLeft: 60,}}>Hospitality / <span style={{color: '#6C63FF',fontWeight:500,}}>Passenger</span></text>
                </div>
                <div className='boxicon'>
                    <img src={require("../component/images/Add.png")} style={{width: 35, height: 35,marginLeft: 15, marginTop: 7, }} alt="add" /><br></br>
                    <img src={require("../component/images/Remove.png")} style={{width: 35, height: 35,marginTop: 2, marginLeft: 15,}} alt="delete" />
                </div>
                <div className='selection'>
                    <input type='text' placeholder='Fill the Question' style={{width:600, height: 43,
                     marginTop: 20, marginLeft: 25,outline: 'none', paddingLeft: 35, fontSize: 13 }}></input>
                     <form>
                        <input type='radio' name="option" id ="rad1"/>
                        <label for="rad1">Done</label><br></br>
                        <input type='radio' name="option" id ="rad2"/>
                        <label for="rad2">Not Done</label><br></br>
                        <input type='radio' name="option" id ="rad3"/>
                        <label for="rad3">Not Applicable</label>
                    </form>
                </div>
                <button style={{width: 160, height: 40, fontSize: 15,}}>Done</button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Createnew