import './App.scss';
import WorkPage from './pages/WorkPage';

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";


function App() {
  const { scrollYProgress } = useScroll();

  console.log(scrollYProgress);

  return (
    <div className="App">
      <motion.div  className="progress-bar" style={{ scaleX: scrollYProgress }} />  
      <WorkPage></WorkPage>
    </div>
  );
}

export default App;
