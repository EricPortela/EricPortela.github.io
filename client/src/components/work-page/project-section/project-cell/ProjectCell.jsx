import React from 'react';
import './ProjectCell.scss';
import {
    motion,
    spring
  } from "framer-motion";

  function WebsiteButton({ website }) { 
    if (!website || website.length === 0) { 
        return null;
    } else {
        return (
            <a className='website-button' target = "_blank" href={website}>
                <p>Visit website</p>
            </a>
        );
    }
} 

function ProjectCell({project}) {
    var projectWebsite = project?.website;

    return (
        <div className='ProjectCell'>
            <div className="text-div">
                <p className='title'>{project?.title}</p>
                <p className='year'>{project?.startYear} - {project?.endYear}</p>
                <p className='description'>{project?.description}</p>

                <WebsiteButton website={projectWebsite}/>

            </div>

            <div className='known-technologies'>
                
            </div>

            <div className="image-div">
                <img src={require("../../../../assets/" + project?.imgName)} alt={project?.imgName} />
            </div>

        </div>
     );
}

export default ProjectCell;


