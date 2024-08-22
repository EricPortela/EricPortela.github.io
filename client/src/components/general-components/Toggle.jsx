import React, { useState } from 'react';
import './Toggle.scss'

function Toggle() {
    const [activeButton, setActiveButton] = useState('left');

    const handleClick = (button) => {
        setActiveButton(button);
    };

    return (
        <div className='Toggle'>
            <button className={`left ${activeButton === 'left' ? 'active' : 'inactive'}`} onClick={() => handleClick('left')}>
                Projects
            </button>

            <button className={`right ${activeButton === 'right' ? 'active' : 'inactive'}`} onClick={() => handleClick('right')}>
                Experience
            </button>
        </div>
    );
}

export default Toggle;