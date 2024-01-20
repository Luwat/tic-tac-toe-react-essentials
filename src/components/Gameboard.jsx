/* eslint-disable react/prop-types */
// import { useState } from "react";


export default function GameBoard({ onSelectSquare, board }) {
    
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedGameboard = [...prevGameBoard.map(innerArray => [...innerArray])];

    //         updatedGameboard[rowIndex][colIndex] = isActivePlayer;

    //         return updatedGameboard;
    //     })

    //     onSelectSquare();
    // }
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}