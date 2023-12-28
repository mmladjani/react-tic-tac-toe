import Player from './components/Player'; 
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import GameOver from './components/GameOver';
import { WINNING_COMBINATIONS } from './winning-combinations';

import { useState } from 'react';

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

function deriveActivePlayer(gameTurn){
  let currentPlayer = 'X';
      if(gameTurn.length > 0 && gameTurn[0].player === 'X'){
        currentPlayer = 'O';
      }
    return currentPlayer;
}

const deriveGameBoard = (gameTurns) => {
  
  let gameBoard = [...INITIAL_GAME_BOARD.map(newArray => [...newArray])];

  for (const turn of gameTurns){
    const {selectedSquare, player} = turn;
    const {rowIndex, colIndex} = selectedSquare;
    gameBoard[rowIndex][colIndex] = player;

  }

  return gameBoard;
}

const derivedWinner = (gameBoard, players) => {
  
  let winner;

  for (const combination of WINNING_COMBINATIONS){
    const firstSelectedSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSelectedSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSelectedSquare = gameBoard[combination[2].row][combination[2].column];

    if(firstSelectedSquare && firstSelectedSquare === secondSelectedSquare && firstSelectedSquare === thirdSelectedSquare){
      winner = players[firstSelectedSquare];
    }
  }

  return winner;
}

function App() {

  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS)

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = derivedWinner(gameBoard, players);

  const isDraw = gameTurns.length === 9 && !winner;

  const changePlayer = (rowIndex, colIndex) => {

    setGameTurns((previousTurn) => {

      let currentPlayer = deriveActivePlayer(previousTurn)
      
      const updatedTurns = [
          { selectedSquare: { rowIndex: rowIndex, colIndex: colIndex}, player: currentPlayer },
          ...previousTurn
        ]
        return updatedTurns;
      })
  }

  const handleRematch = () => {
    setGameTurns([]);
  }

  const getPlayerName = (symbol, playerName) => {
    setPlayers(previousPlayers => {
      return {
        ...previousPlayers,
        [symbol]: playerName
      }
    })
  }
  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player isActive={activePlayer === 'X'} name={PLAYERS.X} symbol="X" onNameChange={getPlayerName}/>
          <Player isActive={activePlayer === 'O'} name={PLAYERS.O} symbol="O" onNameChange={getPlayerName}/>
        </ol>
        {(winner || isDraw) && <GameOver onRestart={handleRematch} winner={winner} />}
        <GameBoard board={gameBoard} onSelectPlayer={changePlayer}/>
      </div>
      <Log gameTurns={gameTurns}/>
    </main>
  )
}

export default App
