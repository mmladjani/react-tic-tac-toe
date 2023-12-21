import { useState } from 'react';

function Player ({name, symbol}) {

  const [isEditing, setIsEditing] = useState(false);

  const clickHandler = (value) => {
    console.log(value)
    setIsEditing(true);
  }

  return (
      <li>
          <span className="player">
            {isEditing ? <input className='player-name' placeholder='Please input your name' /> : <span className="player-name">{name}</span>}
            <span className="player-symbol">{symbol}</span>
            <button onClick={(event) => clickHandler(event.target.innerText)}>{isEditing ? 'Save' : 'Edit'}</button>
          </span>
        </li>
    )
}

export default Player;