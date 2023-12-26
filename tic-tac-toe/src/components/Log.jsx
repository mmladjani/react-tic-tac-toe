export default function Log ({ gameTurns }) {
    return (
        <ol id="log">
            {gameTurns.map((turn) => 
                <li key={`${turn.selectedSquare.rowIndex}, ${turn.selectedSquare.colIndex}`}>
                    {turn.player} selected {turn.selectedSquare.rowIndex},{turn.selectedSquare.colIndex}
                </li>
            )}
        </ol>
    )
}
