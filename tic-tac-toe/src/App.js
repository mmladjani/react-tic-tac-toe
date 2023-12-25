import Player from './components/Player'; 
import GameBoard from './components/GameBoard';

import { useState } from 'react';

function App() {

  const [activePlayer, setActivePlayer] = useState('X');

  const changePlayer = () => {
    setActivePlayer((previousPlayer) => previousPlayer === 'X' ? 'O' : 'X');
  }
  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player isActive={activePlayer === 'X'} name="Player 1" symbol="X"/>
          <Player isActive={activePlayer === 'O'} name="Player 2" symbol="O"/>
        </ol>
        <GameBoard activePlayer={activePlayer} onSelectPlayer={changePlayer}/>
      </div>
    </main>
  )
}

export default App
