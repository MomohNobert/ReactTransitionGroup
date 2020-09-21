import React, { useState } from 'react';
import './App.css';

import { CSSTransition } from 'react-transition-group';

function App() {

  const [titleScreen, setTitleScreen] = useState(true);
  const [gameBoard, setGameBoard] = useState(false);

  const startGame = () => {
    setTitleScreen(!titleScreen);
    setGameBoard(!gameBoard);
  }  

  return (
    <div className="game">
      <CSSTransition
        in={titleScreen}
        timeout={1000}
        classNames={"title-screen-"}
        unmountOnExit={true}
      >
        <TitleScreen startGame={startGame} />
      </CSSTransition>

      {gameBoard && <GameBoard />}
    </div>
  );
}

function TitleScreen({ startGame }) {
  return (
    <div className="title-screen">
      <svg onClick={startGame} className="icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 51.6 51.6" style={{ enableBackground: 'new 0 0 51.6 51.6' }} xmlSpace="preserve">
        <line className="icon__line" x1="10.4" y1="10" x2="41.2" y2="41.6"/>
        <line className="icon__line" x1="41.6" y1="10.4" x2="10" y2="41.2"/>
      </svg>
      <svg onClick={startGame} className="icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" style={{ enableBackground: 'new 0 0 60 60' }} xmlSpace="preserve">
        <circle className="icon__line" cx="30" cy="30" r="20"/>
      </svg>
    </div>
  );
}

// ----------
// Game Board
// ----------

function GameBoard() {
  return (
    <div className="game-board">
      <button className="game-board__button"></button>
      <button className="game-board__button"></button>
      <button className="game-board__button"></button>
      <button className="game-board__button"></button>
      <button className="game-board__button"></button>
      <button className="game-board__button"></button>
      <button className="game-board__button"></button>
      <button className="game-board__button"></button>
      <button className="game-board__button"></button>
    </div>
  );
}

// ----------
// Render App
// ----------

export default App;
