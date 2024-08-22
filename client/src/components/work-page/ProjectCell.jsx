import React from 'react';
import './ProjectCell.scss';
import {
    motion,
    spring
  } from "framer-motion";


function ProjectCell({project}) {
    return (
        <div className='ProjectCell'>
            <div className="text-div">
                <p className='title'>{project?.title}</p>
                <p className='year'>{project?.startYear} - {project?.endYear}</p>
                <p className='description'>{project?.description}</p>
            </div>

            <div className='known-technologies'>
                
            </div>

            <div className="image-div">
                <img src={require("../../assets/" + project?.imgSource)} alt={project?.imgSource} />
            </div>
        </div>
     );
}

export default ProjectCell;


