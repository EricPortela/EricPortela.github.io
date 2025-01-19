import React from "react";
import { useState, useEffect } from 'react'
import './Footer.scss'
import WebsiteLogo from '../../assets/website-logo-white.svg'

function Footer() {
    const [currentYear, setCurrentYear] = useState("");

    useEffect(() => {
        const year = new Date().getFullYear(); // Get current year
        setCurrentYear(year); // Update state with the current year
    }, []);

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
                <p>©{currentYear}</p>
            </div>
        </div>
    );
}



export default Footer;