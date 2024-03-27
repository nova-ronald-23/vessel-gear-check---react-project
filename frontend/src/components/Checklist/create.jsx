import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar'; 
import Checklistmain from './Checklist_Main';
import Header from '../header';
import"./checklist.css";

function Createnew() {
    const [count, setCount] = useState(0);

  const handleClick = () => {
    alert("hello");
  };

  return (
    <div className="dashboard">
      <Sidebar /> 
      <div className="cmain-content">
        <Header/>
        <div className="box">
<div className='boxhead'>
                    <text style={{fontSize: 16, fontWeight: 700, color: '#524E4E',
                paddingLeft: 60,}}>Hospitality / <span style={{color: '#6C63FF',fontWeight:500,}}>Passenger</span></text>
                </div>
                <div className='boxicon'>
                <img onClick={handleClick} src={require("../images/Add.png")} style={{width: 35, height: 35,marginLeft: 15, marginTop: 7, }} alt="add" /><br></br>
                <img onClick={handleClick} src={require("../images/Remove.png")} style={{width: 35, height: 35,marginTop: 2, marginLeft: 15,}} alt="delete" />
                </div>
                <div className='selection'>
                    <input type='text' placeholder='Fill the Question' style={{width:600, height: 43,
                     marginTop: 22, marginLeft: 25,outline: 'none', paddingLeft: 35, fontSize: 13 }}></input>
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
    
  );
};

export default Createnew;
