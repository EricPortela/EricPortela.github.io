import React from 'react';
import './Menu.scss'
// import memoji from '/Users/ericportela/Documents/GitHub/EricPortelaWebsite/client/src/assets/memoji_hello.svg';

import { Link } from 'react-router-dom';


function Menu() {
    return ( 
        <div className='Menu'>
            {/* <img className='image-me'
                        src={memoji}
                        alt="Memoji"/> */}
            <div className='left-div'><p>eric portela | эрик портела | 남에릭</p></div>
            <div className='right-div'>
                    <Link to="/work">
                        <p>Work</p>
                    </Link>
                    <Link to="/about-me">
                        <p>Me</p>
                    </Link>
                    <Link to="/other">
                        <p>Other</p>
                    </Link>
            </div>
        </div>
     );
}

export default Menu;