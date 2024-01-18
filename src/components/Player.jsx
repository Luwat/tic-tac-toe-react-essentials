/* eslint-disable react/prop-types */
import { useState } from "react"


export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState();

    let editPlayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editPlayerName = <input type="text" className="player-name" value={playerName} onChange={handleChange}/>
    }

    const handleClick = () => {
        setIsEditing((isediting) => !isediting)
    }

    function handleChange (event) {
        setPlayerName(() => event.target.value)
    }

    return (
        <li>
            <span className="player">
                {editPlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}