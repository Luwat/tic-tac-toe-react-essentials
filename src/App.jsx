import { useState } from "react"
import Player from "./components/Player"
import Gameboard from "./components/Gameboard"

export default function App() {
  const [gameturns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer(curActivePlayer => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {

      let currentPlayer = 'X'

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

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
      log
    </main>
  )
}