import { useState } from "react"

import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import GameOver from "./components/Gameover";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function declareActivePlayer(gameTurns) {
  let currentPlayer = 'X'

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}
export default function App() {
  const  [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2',
  })
  const [gameTurns, setGameTurns] = useState([]);
  
  const activePlayer = declareActivePlayer(gameTurns)

  let gameBoard = [...initialGameBoard.map(array => [...array])]

  for (const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;
      gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol && 
      secondSquareSymbol === thirdSquareSymbol) {
        winner = players[firstSquareSymbol];
    }
  }

  const isDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {

    setGameTurns(prevTurns => {

      const currentPlayer = declareActivePlayer(prevTurns)

      let updateTurns = [
        { 
          square: {row: rowIndex, col: colIndex}, 
          player: currentPlayer},
          ...prevTurns
      ];

      return updateTurns;
    })
  }

  function handleRematch() {
    setGameTurns(() => [])
  } 

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevplayers => {
      return {...prevplayers,
        [symbol]: [newName]
      }
    })
  }
  return (
    <main>
      <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player 
          initialName="Player 1" 
          symbol="X" 
          isActive={activePlayer === 'X'}
          onNameChange={handlePlayerNameChange}
        />
        <Player 
          initialName="Player 2" 
          symbol="O" 
          isActive={activePlayer === 'O'} 
          onNameChange={handlePlayerNameChange}
        />
      </ol>
         {(winner || isDraw) && <GameOver winner={winner} onSelect={handleRematch}/>}  
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}