function App() {
   return (
      <main>
         <div id="game-container">
            <ol id="players">
               <li>
                  <span className="player-name">
                     Player 1<span className="player-symbol">X</span>
                  </span>
               </li>
               <li>
                  <span className="player-name">
                     Player 2<span className="player-symbol">O</span>
                  </span>
               </li>
            </ol>
            game board
         </div>
         log
      </main>
   );
}

export default App;
