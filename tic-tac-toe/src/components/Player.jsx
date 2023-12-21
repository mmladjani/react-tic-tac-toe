import { useState } from 'react';

function Player ({name, symbol}) {

  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const clickHandler = (buttonText) => {

    if(buttonText === 'Edit'){
      setIsEditing(true);
    }else if(buttonText === 'Save'){
      setIsEditing(false);
    }
  }

  const onChangeName = (inputValue) => {
    setPlayerName(inputValue)
  }

  console.log(playerName);

  return (
      <li>
          <span className="player">
            {isEditing ? <input type="text" className='player-name' placeholder={playerName} onChange={(event) => onChangeName(event.target.value)}/> : <span className="player-name">{playerName}</span>}
            <span className="player-symbol">{symbol}</span>
            <button onClick={(event) => clickHandler(event.target.innerText)}>{isEditing ? 'Save' : 'Edit'}</button>
          </span>
        </li>
    )
}

export default Player;