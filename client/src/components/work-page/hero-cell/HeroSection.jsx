import * as React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.scss';
import memoji from '/Users/ericportela/Documents/GitHub/EricPortelaWebsite/client/src/assets/eric-portela-id-photo.jpeg';
import ThesisCover from '../../../assets/AI-driven-predictive-event-orchestration-using-scalable-data-pipelines-cover.png';
import Thesis from '../../../assets/AI-driven Predictive Event Orchestration using Scalable Data Pipelines.pdf';
import '../../text-styling/text-styling.scss';
import Resume from '../../../assets/cv-eric-portela-2024-nov.pdf';

function HeroCell() {
    const [isLargeScreen, setIsLargeScreen] = React.useState(window.innerWidth > 1000);

    const isChrome = () => {
        const userAgent = window.navigator.userAgent;
        return userAgent.includes('Chrome') && !userAgent.includes('Edg'); // Exclude Edge as it uses the Chromium engine
      };

    // Update the screen size when the window resizes
    React.useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth > 1000);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // };

    const technologies = [
        'java-logo.svg',
        'python-logo.svg',
        'js-logo.svg',
        'swift-logo.svg',
        'mysql-logo.svg',
        'sketch-logo.svg'
    ];

    return (
        <div className='HeroCell'>
            <div className='upper-section'>
                {isLargeScreen && !isChrome ? (
                    <motion.div
                        className='left-div'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <motion.img
                            className='image-me'
                            src={memoji}
                            alt="Memoji"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 120, damping: 10 }}
                            viewport={{ once: true, amount: 0.5 }}
                        />
                        </motion.div>
                ) : (
                    <div className='left-div'>
                        <img className='image-me' src={memoji} alt="Memoji" />
                    </div>
                )}

                <div className='right-div'>
                    <p className='greeting'>Hi my name is Eric,</p>
                    <p className='title'>
                        <span className='completed-goal-faded'>[B.Sc. Computer Science & Engineering @ LTH] [✔️]</span>
                        <br />
                        [M.Sc. Computer Science & Engineering @ LTH] [⏳]
                    </p>
                    <p className='about'>
                    I'm currently a M.Sc. student majoring in Computer Science and Engineering. I'm passionate about programming meaningful applications in combination with minimalistic, plain, and user-friendly interfaces. Simply put, I love programming and collaborating! <br></br> <br></br> I believe <span className='key-word'>resilience</span>, <span className='key-word'>hard work</span> and <span className='key-word'>passion</span> for what you do will take you far. I always seek to improve and challenge myself, but also make sure to have fun along the way.
                    </p>
                </div>
            </div>


            <div className='middle-section'>
                {isLargeScreen && !isChrome ? (
                    <motion.div 
                        className='contact-me'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className='contact-cell'>
                            <a href={Resume} target='_blank'>Resume/CV 🖇️</a>
                        </div>
                        <div className='contact-cell'>
                            <a href='https://github.com/EricPortela' target='_blank'>GitHub 🔗</a>
                        </div>
                        <div className='contact-cell'>
                            <a href='https://www.linkedin.com/in/ericportela/' target='_blank'>LinkedIn 🔗</a>
                        </div>
                    </motion.div>
                ) : (
                    <div className='contact-me'>
                        <div className='contact-cell'>
                            <a href={Resume} target='_blank'>Resume/CV 🖇️</a>
                        </div>
                        <div className='contact-cell'>
                            <a href='https://github.com/EricPortela' target='_blank'>GitHub 🔗</a>
                        </div>
                        <div className='contact-cell'>
                            <a href='https://www.linkedin.com/in/ericportela/' target='_blank'>LinkedIn 🔗</a>
                        </div>
                    </div>
                )}


            {isLargeScreen && !isChrome ? (
                <motion.div 
                    className='big-cell-1'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.3  // Delay to allow the container to animate first
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className='left'>
                        <a href={Thesis} target='_blank'>
                            <p className='title'>Bachelor's thesis conducted <br></br >@ IKEA in Malmö 🔗</p>
                            <br></br>
                            <img className='thesis-cover' src={ThesisCover} alt='Thesis-Cover' width={350} height={'auto'}></img>
                        </a>
                    </div>

                    <div className='right'>
                        <p className='title'>What's currently on my agenda?</p>
                        <br></br>
                        <ul>
                            <li>
                                <a href='https://www.cloudskillsboost.google/paths/11' target='_blank'>
                                    Started Google Cloud Engineering path 🔗
                                    <br></br>
                                    [Sept. 20th 2024 - present]
                                </a>
                            </li>
                            
                            <li>
                                <a href='https://www.control.lth.se/education/engineering-program/frtn65-modeling-and-learning-from-data/' target='_blank'>
                                    Machine Learning course in my Master studies 🔗 
                                    <br></br>
                                    [FRTN65, Modelling & learning from data] 
                                    <br></br>
                                    [Sept. 2nd 2024 - Jan. 19th 2025]
                                </a>
                            </li>

                            <li>
                                <a >
                                    Building a screening tool for mutual funds
                                    <br></br>
                                    [Sept. 1st 2024 - present]
                                </a>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            ) : (
                <div className='big-cell-1'>
                    <div className='left'>
                        <a href={Thesis} target='_blank'>
                            <p className='title'>Bachelor's thesis conducted <br></br >@ IKEA in Malmö 🔗</p>
                            <br></br>
                            <img className='thesis-cover' src={ThesisCover} alt='Thesis-Cover' width={350} height={'auto'}></img>
                        </a>
                    </div>

                    <div className='right'>
                        <p className='title'>What's currently on my agenda?</p>
                        <br></br>
                        <ul>
                            {/* <li>
                                <a href='https://www.cloudskillsboost.google/paths/11' target='_blank'>
                                    Started Google Cloud Engineering path 🔗
                                    <br></br>
                                    [Sept. 20th 2024 - present]
                                </a>
                            </li> */}
                            
                            {/* <li>
                                <a href='https://www.control.lth.se/education/engineering-program/frtn65-modeling-and-learning-from-data/' target='_blank'>
                                    Machine Learning course in my Master studies 🔗 
                                    <br></br>
                                    [FRTN65, Modelling & learning from data] 
                                    <br></br>
                                    [Sept. 2nd 2024 - Jan. 19th 2025]
                                </a>
                            </li> */}

                            <li>
                                <a >
                                    Building a screening tool for mutual funds
                                    <br></br>
                                    [Sept. 1st 2024 - present]
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            ) }


            {isLargeScreen && !isChrome ? (
                <motion.div 
                    className='big-cell-2'
                    initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.3  // Delay to allow the container to animate first
                        }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <p className='title'>[These are the languages and technologies I enjoy working with]</p>
                    <br></br>
                    <p className='subtitle'>My projects usually start at the creative side of the development, namely UI Design in Sketch. Thereafter only my imagination sets the limit...</p>
                </motion.div>
            ) : (
                <div className='big-cell-2'>
                    <p className='title'>[These are the languages and technologies I enjoy working with]</p>
                    <br></br>
                    <p className='subtitle'>My projects usually start at the creative side of the development, namely UI Design in Sketch. Thereafter only my imagination sets the limit...</p>
                </div>
            ) }

            {isLargeScreen && !isChrome ? (
                <motion.div 
                    className='technologies'
                    initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.3  // Delay to allow the container to animate first
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                >
                    {technologies.map((item, index) => (
                        <div className="image-div" key={index}>
                            <img src={require("../../../assets/" + item)} alt={item} width={100} height={'auto'}
                            />
                        </div>
                    ))}
                </motion.div>
            ) : (
                <div className='technologies'>
                    {technologies.map((item, index) => (
                        <div className="image-div" key={index}>
                            <img src={require("../../../assets/" + item)} alt={item} width={100} height={'auto'}/>
                        </div>
                    ))}
                </div>
            ) }                

            </div>
        </div>
    );
}

export default HeroCell;
