import React, { useState, useRef } from 'react';
import './AboutMePage.scss';
import Menu from '../../components/general-components/Menu.jsx'
// import SpeedDial from '../../components/general-components/SpeedDial.jsx'

import '../../components/text-styling/text-styling.scss'

function AboutMePage() {

  return (
    <div className="AboutMePage">
      <Menu></Menu>
      <div className='div-1'>
        <h1>Hello!</h1>
        <p className='normal-text'>
        My name is Eric Portela. I am a 24-year-old focused and responsible Computer Science student 
        (M.Sc. Computer Science and engineering at Lund University or Lunds Tekniska Högskola) with
        a strong passion for software development, as you already might have guessed.

        <br></br>
        <br></br>

        During my studies, I have gained a solid understanding of programming concepts, including
        <br></br>
        <br></br>
        <ul>
          <span className='key-word'>
            <li>
              object-oriented programming
            </li>
            <li>
              data structures and algorithms
            </li>
            <li>
              relational databases
            </li>
            <li>
              RESTful API's
            </li>
            <li>
              and Machine Learning
            </li>
            </span>
        </ul>
        <br></br>

        Although, I would like to mention that the majority of my coding knowledge has been obtained 
        during my spare-time, particularly in languages such as <span className='key-word'>Java, </span>
        <span className='key-word'>Python</span> as well as <span className='key-word'>Swift</span>.
        I have also had the opportunity to put my skills into practice through various course projects 
        and positions within the field. I am a quick learner, a team player, and consider myself to have a 
        strong work ethic. I am also confident in my ability to communicate effectively with both technical
        and non-technical stakeholders.
        <br></br>
        <br></br>
        So then, what about me? Who am I apart from my identity around coding and education?
        <br></br>
        <br></br>
        I believe I would like to see myself as a pretty normal guy with a rather normal lifestyle.
        Outside my daily life I like to spend time either 
        <br></br>
        <br></br>
        <ul>
          <li>
            🏃🏻 <span className='key-word'>running</span> (yes, like 10K runs, I actually only enjoy the aftermath)
          </li>
          <li>
            🥋 <span className='key-word'>train taekwondo</span> (been training since I was 10!!)
          </li>
          <li>
            👨‍👩‍👦‍👦 spend time with <span className='key-word'>family and friends</span>
          </li>
          <li>
            ✈️ as well as dive deep into <span className='key-word'>my personal cultural background</span>
          </li>
        </ul>
        <br></br>
        Regarding the last point, I would like to mention that although I consider myself very much a
        Swede (on both a cultural and factual level) I'm a so-called first generation Swede to 
        immigrant parents. It's part of my identity and especially one part I'm very proud of. 
        <br></br>
        <br></br>
        I was born to a <span className='key-word'>Korean mother 🇰🇷</span> and <span className='key-word'>Cuban father 🇨🇺 </span> 
        who happen to have met during their university studies in <span className='key-word'>Mechanical Engineering </span> 
        in <span className='key-word'>Moscow</span>. Knowing everything that they went through, in 
        order to settle down in Sweden and flee oppression, learn a new culture and language while 
        simultaneously dealing with different hardships, is something I still look up to. Their story 
        is too long to be mentioned here, but it is something that has definitely shaped the way I 
        reflect and strive to live my own life. This is something that makes me want to 
        <span className='key-word'> work hard</span>, be <span className='key-word'>ambitious</span> and 
        <span className='key-word'> never settle for less</span>. 
        <br></br>
        <br></br>
        I especially believe that <span className='key-word'>resilience</span> is a good quality to have 
        and can only be taught if you seek for opportunities that offer you personal growth. I am always
        up for new challenges and only see setbacks and failures as learning opportunities. I adapt and 
        learn from my mistakes. 
        <br></br>
        <br></br>
        I know for a fact that <span className='key-word'> hard work always pays off</span>.
        <br></br>
        <br></br>
        (P.S. Thank you for reading this far).
        <br></br>
        <br></br>
        </p>

        <p className='signature'>
          Signing off,
          <br></br>
          Eric Portela
        </p>
        <br></br>
        <p className='key-word'>[18th of September 2024, Helsingborg]</p>
      </div>
      <div className='div-2'>
        
      </div>
      {/* <SpeedDial></SpeedDial> */}
    </div>
  );
}

export default AboutMePage;
