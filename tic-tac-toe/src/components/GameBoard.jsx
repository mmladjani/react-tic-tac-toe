const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const GameBoard = ({ onSelectPlayer, turns }) => {

    let gameBoard = initialGameBoard;
    
    for (const turn of turns){
        const {selectedSquare, player} = turn;
        const {rowIndex, colIndex} = selectedSquare;
        gameBoard[rowIndex][colIndex] = player;
    }

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // const clickHandler = (rowIndex, colIndex) => {
    //     setGameBoard((previousGameBoard) => {
    //         const updatedBoard = [...previousGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     })

    //     onSelectPlayer();
    // }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => 
                <li key={rowIndex}>
                    <ol>
                        {row.map((colSquare, colIndex) => 
                            <li key={colIndex}>
                                <button onClick={() => onSelectPlayer(rowIndex, colIndex)}>{colSquare}</button>
                            </li>
                        )}
                    </ol>
                </li>)}
        </ol>
    )
}

export default GameBoard;