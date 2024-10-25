import * as React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.scss';
import memoji from '/Users/ericportela/Documents/GitHub/EricPortelaWebsite/client/src/assets/eric-portela.png';
import Lottie from 'react-lottie';
import animationData from '/Users/ericportela/Documents/GitHub/EricPortelaWebsite/client/src/assets/scroll-down.json';
import animationData2 from '/Users/ericportela/Documents/GitHub/EricPortelaWebsite/client/src/assets/test-2.json';
import ThesisCover from '../../../assets/AI-driven-predictive-event-orchestration-using-scalable-data-pipelines-cover.png';
import Thesis from '../../../assets/AI-driven Predictive Event Orchestration using Scalable Data Pipelines.pdf';
import '../../text-styling/text-styling.scss';
import Resume from '../../../assets/cv-eric-portela-2024.pdf';

function HeroCell() {
    const [isLargeScreen, setIsLargeScreen] = React.useState(window.innerWidth > 1000);

    // Update the screen size when the window resizes
    React.useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth > 1000);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
    ];

    return (
        <div className='HeroCell'>
            <div className='upper-section'>
                {isLargeScreen ? (
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
                        I'm currently a M.Sc. student majoring in Computer Science and Engineering...
                    </p>
                </div>
            </div>

            {/* Rest of the component */}

            <div className='middle-section'>
                {isLargeScreen ? (
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

                {/* Add similar conditionals for other motion divs as needed */}
            </div>
        </div>
    );
}

export default HeroCell;
