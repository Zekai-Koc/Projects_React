import React, { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
   const [playerName, setPlayerName] = useState(initialName);
   const [isEditing, setIsEditing] = useState(false);

   const handleEditClick = () => {
      setIsEditing((editing) => !editing);
      if (isEditing) onChangeName(symbol, playerName);
   };

   const handleChange = (e) => {
      setPlayerName(e.target.value);
   };

   let editablePlayerName = <span className="player-name">{playerName} </span>;
   let btnCaption = "Edit";

   if (isEditing) {
      editablePlayerName = (
         <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
         ></input>
      );
      btnCaption = "Save";
   }

   return (
      <li className={isActive ? "active" : undefined}>
         <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
         </span>
         <button onClick={handleEditClick}>{btnCaption}</button>
      </li>
   );
};

export default Player;
