import React from 'react'
import './Edit.css'
import { useState } from 'react';

function Edit() {
    const [count, setCount] = useState(0);

  const handleClick = () => {
    alert("hello");
  };
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
                paddingLeft: 60,}}>Hospitality</text>
                </div>
            
                <div className='selection'>
                    <input type='text' placeholder='Appropriate cargo deck' style={{width:600, height: 43,
                     marginTop: 13, marginLeft: 7,outline: 'none', paddingLeft: 35, fontSize: 16, 
                     fontWeight: 500, letterSpacing: 0.3, backgroundColor:'white' }}></input>
                     <img onClick={handleClick} src={require("../component/images/Edit.png")} style={{width: 28, height: 28,marginLeft: 845, marginTop: 13, }} alt="add" /><br></br>
                    <img onClick={handleClick} src={require("../component/images/Remove.png")} style={{width: 30, height: 30,marginTop: 58, marginLeft: 846,}} alt="delete" />
                     <form>
                        <input type='radio' name="option" id ="rad1"/>
                        <label for="rad1" style={{marginTop: -3, marginLeft: 20,}}>Done</label><br></br>
                        <input type='radio' name="option" id ="rad2"/>
                        <label for="rad2" style={{marginTop: -3, marginLeft: 20,}}>Not<span style={{paddingLeft: 5,}}>Done</span></label><br></br>
                        <input type='radio' name="option" id ="rad3"/>
                        <label for="rad3" style={{marginTop: -3, marginLeft: 20,}}>Not<span style={{paddingLeft: 5,}}>Applicable</span></label>
                    </form>
                </div>
                <button style={{width: 160, height: 40, fontSize: 15,}}>Done</button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Edit