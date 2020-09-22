import React from 'react';
import './App.css';

import PlayerSwap from './components/player-swap/player-swap.component';
import Board from './components/game-board/game-board.component';

function App() {
  return (
    <div className="app">
      <PlayerSwap />
      <Board />
    </div>
  );
}

export default App;
