/* eslint-disable react/prop-types */
export default function Log({ turns }) {
    return (
        <ol id="log">
            {turns.map(turn => (
                <li key={`${turn.square.row}${turn.square.col}`}>
                    Player with symbol {turn.player} selected row: {turn.square.row},col: {turn.square.col}
                </li>
            ))}
        </ol>
    )
}