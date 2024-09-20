import * as React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.scss';
import memoji from '/Users/ericportela/Documents/GitHub/EricPortelaWebsite/client/src/assets/eric-portela.png'; //memoji_hello.svg';
import Lottie from 'react-lottie';
import animationData from '/Users/ericportela/Documents/GitHub/EricPortelaWebsite/client/src/assets/scroll-down.json';
import animationData2 from '/Users/ericportela/Documents/GitHub/EricPortelaWebsite/client/src/assets/test-2.json';
import ThesisCover from '../../../assets/AI-driven-predictive-event-orchestration-using-scalable-data-pipelines-cover.png';
import Thesis from '../../../assets/AI-driven Predictive Event Orchestration using Scalable Data Pipelines.pdf';
import '../../text-styling/text-styling.scss'


function HeroCell() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: animationData2,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    const technologies = [
        'java-logo.svg',
        'python-logo.svg',
        'js-logo.svg',
        'swift-logo.svg',
        'mysql-logo.svg',
        'sketch-logo.svg'
    ]

    return (
        <motion.div
            className='HeroCell'
            // initial={{ opacity: 0, y: 50 }}  // Start hidden and below the natural position
            whileInView={{ opacity: 1, y: 0 }}  // Animate to full opacity and move to the natural position
            // transition={{ duration }}
            transition={{ duration: 0.6, ease: "easeOut" }}  // Smooth easing for the entire cell
            viewport={{ once: false, amount: 0.5 }}  // Re-trigger animation every time the component comes into view
        >
            <div className='upper-section'>
                <motion.div
                    className='left-div'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.3  // Delay to allow the container to animate first
                    }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <motion.img
                        className='image-me'
                        src={memoji}
                        alt="Memoji"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 120, damping: 10 }}
                        viewport={{ once: false, amount: 0.5 }}
                    />

                    {/* <div>
                        <Lottie 
                            options={defaultOptions2}
                            height={230}
                            width={'auto'}
                        />
                    </div> */}
                </motion.div>

                <div className='right-div'>
                    <motion.p
                        className='greeting'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        Hi my name is Eric,
                    </motion.p>
                    <motion.p
                        className='title'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <span className='completed-goal-faded'>[B.Sc. Computer Science & Engineering @ LTH] [✔️]</span>
                        <br></br>
                        [M.Sc. Computer Science & Engineering @ LTH] [⏳]
                    </motion.p>
                    <motion.p
                        className='about'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.9 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        I'm currently a M.Sc. student majoring in Computer Science and Engineering. I'm passionate about programming meaningful applications in combination with minimalistic, plain, and user-friendly interfaces. Simply put, I love programming and collaborating! <br></br> <br></br> I believe <span className='key-word'>resilience</span>, <span className='key-word'>hard work</span> and <span className='key-word'>passion</span> for what you do will take you far. I always seek to improve and challenge myself, but also make sure to have fun along the way.
                    </motion.p>
                </div>
            </div>

            <div className='middle-section'>
                <div className='contact-me'>
                    <div className='contact-cell'>Resume/CV</div>
                    <div className='contact-cell'>GitHub</div>
                    <div className='contact-cell'>LinkedIn</div>
                </div>
                

                <div className='big-cell-1'>
                    <div className='left'>
                        <a href={Thesis} target='_blank'>
                            <p className='title'>Bachelor's thesis conducted <br></br >@ IKEA in Malmö 🔗</p>
                            <br></br>
                            {/* <p className='subtitle'>AI-driven Predictive Event Orchestration using Scalable Data Pipelines</p> */}
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
                                    [Sept. 20th 2024 - ?]
                                </a>
                            </li>
                            
                            <li>
                                <a href='https://www.control.lth.se/education/engineering-program/frtn65-modeling-and-learning-from-data/' target='_blank'>
                                    Machine Learning course in my Master studies 🔗 
                                    <br></br>
                                    [FRTN65, Modelling & learning from Data] 
                                    <br></br>
                                    [Sept. 2nd 2024 - Jan. 19th 2025]
                                </a>
                            </li>

                            <li>
                                <a >
                                    Building a screening tool for mutual funds
                                    <br></br>
                                    [Sept. 1st 2024 - ?]
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>

                <div className='big-cell-2'>
                    <p className='title'>[These are the languages and technologies I enjoy working with]</p>
                    <br></br>
                    <p className='subtitle'>My projects usually start at the creative side of the development, namely UI Design in Sketch. Thereafter only my imagination sets the limit...</p>
                </div>

                <div className='technologies'>
                    {technologies.map((item, index) => (
                        <div className="image-div">
                            <img src={require("../../../assets/" + item)} alt={item} width={100} height={'auto'}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* <div className={'lottie-animation'}>
                <Lottie 
                    options={defaultOptions}
                    height={230}
                    width={'auto'}
                />
            </div> */}
        </motion.div>
    );
}

export default HeroCell;
