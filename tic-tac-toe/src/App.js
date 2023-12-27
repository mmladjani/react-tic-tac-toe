import Player from './components/Player'; 
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';

import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

let gameBoard = initialGameBoard;

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

  for (const turn of gameTurns){
    const {selectedSquare, player} = turn;
    const {rowIndex, colIndex} = selectedSquare;
    gameBoard[rowIndex][colIndex] = player;
  }

  const activePlayer = deriveActivePlayer(gameTurns);

  let winner;

  for (const combination of WINNING_COMBINATIONS){
    const firstSelectedSquare = gameBoard[combination[0].row][combination[0].column];
    console.log(gameBoard[combination[0].row][combination[0].column]);
    const secondSelectedSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSelectedSquare = gameBoard[combination[2].row][combination[2].column];

    if(firstSelectedSquare && firstSelectedSquare === secondSelectedSquare && firstSelectedSquare === thirdSelectedSquare){
      winner = firstSelectedSquare;
    }
  }

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
        {winner && `you won ${winner}`}
        <GameBoard board={gameBoard} onSelectPlayer={changePlayer}/>
      </div>
      <Log gameTurns={gameTurns}/>
    </main>
  )
}

export default App
