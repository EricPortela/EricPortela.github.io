import './App.scss';

import {
  motion,
  useScroll
} from "framer-motion";

import { Link, Route, Routes } from 'react-router-dom';

import { useLottie } from 'lottie-react';
import animationData from './assets/loading-page-animation.json';
import AlertImage from './assets/me-coding-1.jpg';
import AboutMe from './pages/AboutMePage/AboutMePage.jsx';
import Other from './pages/OtherPage/OtherPage.jsx';
import Work from './pages/WorkPage/WorkPage.jsx';

function App() {

  const isChrome = () => {
    const userAgent = window.navigator.userAgent;
    return userAgent.includes('Chrome') && !userAgent.includes('Edg'); // Exclude Edge as it uses the Chromium engine
  };

  const { scrollYProgress } = useScroll();

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice"
  //   }
  // };

  const options = {
    animationData: animationData,
    loop: true
  };

  const { View } = useLottie(options);

  return (
    <div className="App">
      {/* <div className='alert'>
        <h1>
          Under construction ! 🚧🛠️
          <br></br>
          I'm currently developing the site for mobile view. Please check out the desktop version in the meantime :D
        </h1>
        <br></br>
        <img src={AlertImage} width='30%' height='auto'></img>
      </div> */}
      <div className='content'>
        { !isChrome (<motion.div  className="progress-bar" style={{ scaleX: scrollYProgress }} />) }
        <Routes>
          <Route path="/work" element={<Work />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/other" element={<Other />} />

          <Route
            path="*"
            element={
              <div className="incorrect-page-div">
                <p className='text-alert'>Oops! You have managed to land on the wrong page.</p>
                <div className='animationView'>
                  { View }
                </div>
                <Link to="/work" className='back-to-home-button'>
                  <p>Back to home!</p>
                </Link>
              </div>
            }
          />
        </Routes>
      </div>  
    </div>
  );
}

export default App;
