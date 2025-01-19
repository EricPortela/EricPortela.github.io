import React, { useState, useRef } from 'react';
import './WorkPage.scss';
import Menu from '../../components/general-components/Menu.jsx'
// import SpeedDial from '../../components/general-components/SpeedDial.jsx'
import Toggle from '../../components/general-components/Toggle.jsx'
import HeroCell from '../../components/work-page/hero-cell/HeroSection.jsx';
import ProjectCells from '../../components/work-page/project-section/ProjectSection.jsx';
import ExperienceSection from '../../components/work-page/experience-section/ExperienceSection.jsx';
import Footer from '../../components/general-components/Footer.jsx'


import GradeSection from '../../components/work-page/grades-section/GradesSection.jsx';

function WorkPage() {
  // State to manage the visibility of the ExperienceSection component
  const [showExperience, setShowExperience] = useState(false);

  // Handler function to toggle the visibility
  const handleToggle = (isExperienceVisible) => {
    setShowExperience(isExperienceVisible);
  };



  return (
    <div className="WorkPage">
      <Menu></Menu>
      <HeroCell></HeroCell>
      <Toggle onToggle={handleToggle}></Toggle>
      {showExperience ? <ExperienceSection /> : <ProjectCells />}
      {/* <ProjectCells></ProjectCells> */}
      {/* <ExperienceSection></ExperienceSection> */}
      {/* <SpeedDial></SpeedDial> */}
      <GradeSection></GradeSection>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default WorkPage;
