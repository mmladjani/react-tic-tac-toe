import { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const GameBoard = ({ activePlayerSymbol, onSelectPlayer }) => {

    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const clickHandler = (rowIndex, colIndex) => {
        setGameBoard((previousGameBoard) => {
            const updatedBoard = [...previousGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        })

        onSelectPlayer();
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => 
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => 
                            <li key={colIndex}>
                                <button onClick={() => clickHandler(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        )}
                    </ol>
                </li>)}
        </ol>
    )
}

export default GameBoard;