import React, { useState, useRef } from 'react';
import './WorkPage.scss';
import Menu from '../components/general-components/Menu'
import SpeedDial from '../components/general-components/SpeedDial'
import Toggle from '../components/general-components/Toggle'
import HeroCell from '../components/work-page/HeroCell';
import ProjectCell from '../components/work-page/ProjectCell';
import ProjectCells from '../components/work-page/ProjectSection';
import ExperienceSection from '../components/work-page/ExperienceSection';
import GradeSection from '../components/work-page/GradesSection';
import animationData from '/Users/ericportela/Documents/GitHub/EricPortelaWebsite/client/src/assets/background-blob.json';



function WorkPage() {
  // State to manage the visibility of the ExperienceSection component
  const [showExperience, setShowExperience] = useState(false);

  // Handler function to toggle the visibility
  const handleToggle = (isExperienceVisible) => {
    setShowExperience(isExperienceVisible);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="WorkPage">
      <Menu></Menu>
      <HeroCell></HeroCell>
      <Toggle onToggle={handleToggle}></Toggle>
      {showExperience ? <ExperienceSection /> : <ProjectCells />}
      {/* <ProjectCells></ProjectCells> */}
      {/* <ExperienceSection></ExperienceSection> */}
      <SpeedDial></SpeedDial>
      <GradeSection></GradeSection>

      {/* <div className='background-container'>
        <div className={'background-blob'}>
          <Lottie 
            options={defaultOptions}
            width={700}
          />
        </div>
      </div> */}
    </div>
  );
}

export default WorkPage;
