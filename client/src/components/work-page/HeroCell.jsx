import * as React from 'react';
import { motion } from 'framer-motion';
import './HeroCell.scss';
import memoji from '/Users/ericportela/Documents/GitHub/EricPortelaWebsite/client/src/assets/memoji_hello.svg';
import Lottie from 'react-lottie';
import animationData from '/Users/ericportela/Documents/GitHub/EricPortelaWebsite/client/src/assets/scroll-down.json';
import animationData2 from '/Users/ericportela/Documents/GitHub/EricPortelaWebsite/client/src/assets/test-2.json';



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
                        [B.Sc. Computer Science & Engineering @ LTH].
                    </motion.p>
                    <motion.p
                        className='about'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.9 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        I’m passionate about programming meaningful and significant applications in combination with minimalistic, plain, and user-friendly interfaces. I especially enjoy….
                    </motion.p>
                </div>
            </div>

            <div className='middle-section'>
                    {technologies.map((item, index) => (
                        <div className="image-div">
                            <img src={require("../../assets/" + item)} alt={item} width={100} height={'auto'}
                            />
                        </div>
                    ))}
            </div>

            <div className={'lottie-animation'}>
                <Lottie 
                    options={defaultOptions}
                    height={230}
                    width={'auto'}
                />
            </div>
        </motion.div>
    );
}

export default HeroCell;
