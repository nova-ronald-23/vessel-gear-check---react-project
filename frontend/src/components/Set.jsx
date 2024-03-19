import React from 'react'

import { Link } from 'react-router-dom';  
import './Set.css'
import Sidebar from './Sidebar';
import Personal from './Personal';
import Header from './header';

export const Set = () => {
  return (
    <div className="scontainer">
      <Sidebar/>
    
    <div className="smain-side">
      <Header/>
        <div className="swhite-box">
          <div className="sinner-box1">
              <Link  to="/Personal" className='personalization'><button >Personalization</button></Link>
              
          </div>
          
        </div>
        
        
      
    </div>
  </div>
  )
}
export default Set;
