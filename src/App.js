import React from 'react';
import './App.css';

import PlayerSwap from './components/player-swap/player-swap.component';
import Board from './components/game-board/game-board.component';
import LeaderBoard from './components/leadeboard/leaderboard.component';

function App() {
  return (
    <div className="app">
      <div>
      <PlayerSwap />
      <Board />
      </div>
      <LeaderBoard />
    </div>
  );
}

export default App;
