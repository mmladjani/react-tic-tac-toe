import Player from './components/Player'; 
import GameBoard from './components/GameBoard';
import Log from './components/Log';

import { useState } from 'react';

function deriveActivePlayer(gameTurn){
  let currentPlayer = 'X';
      if(gameTurn.length > 0 && gameTurn[0].player === 'X'){
        currentPlayer = 'O';
      }
    return currentPlayer;
}

function App() {

  const [gameTurns, setGameTurns] = useState([]);
  //const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);

  const changePlayer = (rowIndex, colIndex) => {
  
    //setActivePlayer((previousPlayer) => previousPlayer === 'X' ? 'O' : 'X');

    setGameTurns((previousTurn) => {

      let currentPlayer = deriveActivePlayer(previousTurn)

      const updatedTurns = [
          { selectedSquare: { rowIndex: rowIndex, colIndex: colIndex}, player: currentPlayer },
          ...previousTurn
        ]
        return updatedTurns;
      })
  }
  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player isActive={activePlayer === 'X'} name="Player 1" symbol="X"/>
          <Player isActive={activePlayer === 'O'} name="Player 2" symbol="O"/>
        </ol>
        <GameBoard turns={gameTurns} onSelectPlayer={changePlayer}/>
      </div>
      <Log gameTurns={gameTurns}/>
    </main>
  )
}

export default App
