import React from 'react';
import './Menu.scss'

import { Link } from 'react-router-dom';


function Menu() {
    return ( 
        <div className='Menu'>
            <div className='left-div'><p>eric portela | Эрик Портела | 남에릭</p></div>
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