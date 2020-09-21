import React, { useState } from 'react';
import './App.css';

import Fade from './components/fade/fade.component';

function App() {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="App">
      {
        isVisible ? <Fade /> : null
      }
      <button type="button" onClick={() => setIsVisible(!isVisible)}>
        Set Visiblity!
      </button>
    </div>
  );
}

export default App;
