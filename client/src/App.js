import './App.scss';

import {
  motion,
  useScroll
} from "framer-motion";

import { Routes, BrowserRouter, Route, HashRouter } from 'react-router-dom';

import AboutMe from './pages/AboutMePage/AboutMePage.jsx';
import Work from './pages/WorkPage/WorkPage.jsx';
import Other from './pages/OtherPage/OtherPage.jsx';
import AlertImage from './assets/me-coding-1.jpg';

function App() {
  const { scrollYProgress } = useScroll();

  console.log(scrollYProgress);

  return (
    <div className="App">
      <div className='alert'>
        <h1>
          Under construction ! 🚧🛠️
          <br></br>
          I'm currently developing the site for mobile view. Please check out the desktop version in the meantime :D
        </h1>
        <br></br>
        <img src={AlertImage} width='30%' height='auto'></img>
      </div>
      <div className='content'>
        <motion.div  className="progress-bar" style={{ scaleX: scrollYProgress }} />
        <Routes>
          <Route path="/work" element={<Work />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/other" element={<Other />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
