import { useState } from 'react';

function Player ({name, symbol, isActive, onNameChange}) {

  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  let playerButtonText = 'Edit';

  const clickHandler = () => {
    setIsEditing((editing) => !editing);

    if(isEditing){
      onNameChange(symbol, playerName);
    }
  }

  if(isEditing){
    playerButtonText = 'Save';
  }

  const onChangeName = (event) => {
    setPlayerName(event.target.value);
  }

  return (
      <li className={isActive ? 'active' : undefined}>
          <span>
            {isEditing ? <input type="text" className='player-name' value={playerName} onChange={onChangeName}/> : <span className="player-name">{playerName}</span>}
            <span className="player-symbol">{symbol}</span>
            <button onClick={clickHandler}>{playerButtonText}</button>
          </span>
        </li>
    )
}

export default Player;