import ProjectCell from './ProjectCell';
import ProjectData from '../../data/projects.json'
import './ProjectSection.scss'
import '../text-styling/text-styling.scss'
import {
    motion
  } from "framer-motion";

function ProjectCells() {

    return ( 
        <div className='ProjectSection'>
            <p className='heading-2'>My Projects</p>
            {ProjectData.map((item, index) => (
                // <ProjectCell project={item} />

                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}  // Start hidden and slightly below the natural position
                    whileInView={{ opacity: 1, y: 0 }}  // Animate to full opacity and natural position
                    transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger the animation
                    viewport={{ once: true }} // Keep animating it even when you scroll back
                >
                    <ProjectCell project={item} />
                </motion.div>

                // <ProjectCell project={item} key={index}>
                // </ProjectCell>
            ))}
        </div> 
    );
}

export default ProjectCells;