import './App.scss';

import {
  motion,
  useScroll
} from "framer-motion";

import { Routes, BrowserRouter, Route, HashRouter } from 'react-router-dom';

import AboutMe from './pages/AboutMePage/AboutMePage.jsx';
import Work from './pages/WorkPage/WorkPage.jsx';
import Other from './pages/OtherPage/OtherPage.jsx';

function App() {
  const { scrollYProgress } = useScroll();

  console.log(scrollYProgress);

  return (
    <div className="App">
      <h1 className='alert'>
        I'm currently developing the site for mobile view. Please check out the dekstop version in the meantime :D
      </h1>
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
