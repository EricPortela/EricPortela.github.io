import React from "react";
import './Footer.scss'
import WebsiteLogo from '../../assets/website-logo-white.svg'

function Footer() {
    return (
        <div className="Footer">
            <p className="footer-description">
                Loosely designed in Sketch and coded in Visual Studio Code by Eric Portela in 🇸🇪.
                <br></br>
                Built with React, Javascript and SASS, deployed through GitHub Pages.
                <br></br>
                <br></br>
                🫰
            </p>

            <div className="logo-div">
                <img className='logo' src={WebsiteLogo}/>
                <p>©2024</p>
            </div>
        </div>
    );
}



export default Footer;