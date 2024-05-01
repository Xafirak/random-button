import React, { useState } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';



function App() {
  const allIcons = { ...far, ...fab, ...fas };
  const iconList = Object.values(allIcons);
  library.add(iconList);
  const [currentIcon, setCurrentIcon] = useState({});

  const getRandomIcon = () => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * iconList.length)
      const randomIcon = iconList[randomNumber];
      setCurrentIcon(randomIcon);
    }, 3000);
  }
  return (
    <div className="App">
      <FontAwesomeIcon className='icon' size='3x' icon={currentIcon} />
      <button onClick={getRandomIcon}>
        Click for random icon
      </button>

    </div>
  );
}

export default App;
