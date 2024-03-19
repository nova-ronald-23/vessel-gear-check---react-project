    import React from 'react';
    import { Link } from 'react-router-dom';
    //import { useNavigate } from 'react-router-dom';
    import './styles.css'; // Import CSS file for styling


    const header = () => {
        return (
    <div className='green-inner'>
            <img src={require("../components/images/Search.png")} style={{width: 27, height: 27,
                marginLeft: 155, position: 'relative', zIndex: 1, marginTop: -25.5,}}/>
                <input type="text" placeholder="Start Search"></input>
                <div className='notify'>
                    <div style={{opacity:  0.9,}}>
                    <img src={require("../components/images/bell.png")} alt='bell' style={{width:57, height: 50,}}></img>
                    </div>
                </div>
                </div>
            );
        };
        export default header;