import { useState } from "react"

import Player from "./components/Player"
import Gameboard from "./components/Gameboard"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";

function declareActivePlayer(gameTurns) {
  let currentPlayer = 'X'

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}
export default function App() {
  const [gameturns, setGameTurns] = useState([]);
  
  const activePlayer = declareActivePlayer(gameturns)
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

  return (
    <main>
      <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
        <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
      </ol>
          
        <Gameboard onSelectSquare={handleSelectSquare} turns={gameturns}/>
      </div>
      <Log turns={gameturns}/>
    </main>
  )
}