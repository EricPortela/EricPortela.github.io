import React, {useState} from 'react';
import './Menu.scss'
// import memoji from '/Users/ericportela/Documents/GitHub/EricPortelaWebsite/client/src/assets/memoji_hello.svg';
import WebsiteLogo from '../../assets/website-logo.svg'
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react'



function Menu() {
    const [isOpen, setOpen] = useState(false)

    return ( 
        <div className='Menu'>
            {/* <img className='image-me'
                        src={memoji}
                        alt="Memoji"/> */}
            <div className='left-div'>
                <img className='logo' src={WebsiteLogo}/>
                {/* <p>eric portela | эрик портела | 남에릭</p> */}
            
            </div>
            <div className='right-div'>

                <div className='default-menu-wrapper'>
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

                {/* Wrap Hamburger in a div with high z-index */}
                <div className="hamburger-wrapper">
                    <Hamburger 
                        toggled={isOpen} 
                        toggle={setOpen} 
                        size={20}
                    />
                </div>

                {isOpen && (
                    <div className='overlay-menu'>
                        <div className='menu-content'>
                            <Link to="/work" onClick={() => setOpen(false)}>Work</Link>
                            <Link to="/about-me" onClick={() => setOpen(false)}>Me</Link>
                            <Link to="/other" onClick={() => setOpen(false)}>Other</Link>
                        </div>
                    </div>
                )}
            </div>

        </div>
     );
}

export default Menu;