import React, { useState, useRef } from 'react';
import './AboutMePage.scss';
import Menu from '../../components/general-components/Menu.jsx'
import SpeedDial from '../../components/general-components/SpeedDial.jsx'
import Toggle from '../../components/general-components/Toggle.jsx'
import HeroCell from '../../components/work-page/hero-cell/HeroSection.jsx';
import ProjectCells from '../../components/work-page/project-section/ProjectSection.jsx';
import ExperienceSection from '../../components/work-page/experience-section/ExperienceSection.jsx';
import animationData from '/Users/ericportela/Documents/GitHub/EricPortelaWebsite/client/src/assets/background-blob.json';


function AboutMePage() {

  return (
    <div className="AboutMePage">
      <Menu></Menu>
      <div className='div-1'>
        <h1>HEJ</h1>
      </div>
      <div className='div-2'>
        
      </div>
      <SpeedDial></SpeedDial>
    </div>
  );
}

export default AboutMePage;
