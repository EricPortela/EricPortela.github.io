import React from 'react';
import './ExperienceSection.scss';
import '../../text-styling/text-styling.scss'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceData from '../../../data/experience.json'
import memoji from '/Users/ericportela/Documents/GitHub/EricPortelaWebsite/client/src/assets/memoji_hello.svg';

function ExperienceSection() {
    return ( 
        <div className='ExperienceSection'>
            <p className='heading-2'>
                Experience
            </p>
            <VerticalTimeline className='vertical-timeline-component'>
                {ExperienceData.map((item, index) => (

                    <VerticalTimelineElement 
                        className="vertical-timeline-element"
                        date={item?.period}
                        icon={<img src={require("../../../assets/" + item?.logoName)} alt={item?.logoName} />} 
                    >
                        <div>

                        </div>

                        <h3 className="vertical-timeline-element-title">{item?.company} </h3>
                        <h4 className="vertical-timeline-element-subtitle">{item?.team}</h4>
                        <p>{item?.location} • {item?.title}</p>

                        {item?.description.split('\n\n').map((desc, idx) => (
                            <p>{desc}</p>
                        ))}

                    </VerticalTimelineElement>
                    ))
                }
            </VerticalTimeline>
        </div> 
    );
}

export default ExperienceSection;