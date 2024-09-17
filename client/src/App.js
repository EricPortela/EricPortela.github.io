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
      <motion.div  className="progress-bar" style={{ scaleX: scrollYProgress }} />
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </div>
  );
}

export default App;
