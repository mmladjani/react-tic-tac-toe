const GameBoard = ({ onSelectPlayer, board }) => {

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => 
                <li key={rowIndex}>
                    <ol>
                        {row.map((colSquare, colIndex) => 
                            <li key={colIndex}>
                                <button disabled={'disabled' ? board[rowIndex][colIndex] : ''} onClick={() => onSelectPlayer(rowIndex, colIndex)}>{colSquare}</button>
                            </li>
                        )}
                    </ol>
                </li>)}
        </ol>
    )
}

export default GameBoard;