import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
   const [activePlayer, setActivePlayer] = useState("X");

   console.log("activePlayer ", activePlayer);

   const handleSelectSquare = () => {
      // setActivePlayer((curActivePlayer) => {
      //    curActivePlayer === "X" ? "O" : "X";
      //    console.log("curActivePlayer ", curActivePlayer);
      // });
      // setActivePlayer((currentPlayerSymbol) => {
      //    console.log("currentPlayerSymbol ", currentPlayerSymbol);
      // });
   };

   return (
      <main>
         <div id="game-container">
            <ol id="players" className="highlight-player">
               <Player
                  initialName="Player 1"
                  symbol="X"
                  isActive={activePlayer === "X"}
               />
               <Player
                  initialName="Player 2"
                  symbol="O"
                  isActive={activePlayer === "O"}
               />
            </ol>

            <GameBoard
               onSelectSquare={handleSelectSquare}
               activePlayerSymbol={activePlayer}
               // activePlayerSymbol="l"
            />
         </div>
         <h1>LOG</h1>
      </main>
   );
}

export default App;
