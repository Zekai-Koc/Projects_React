import React, { useState } from "react";

const initialGameBoard = [
   [null, null, null],
   [null, null, null],
   [null, null, null],
];

const GameBoard = ({ onSelectSquare, activePlayerSymbol }) => {
   const [gameBoard, setGameBoard] = useState(initialGameBoard);

   const handleSelectSquare = (rowIndex, colIndex) => {
      setGameBoard((prevGameBoard) => {
         const updatedBoard = [
            ...prevGameBoard.map((innerArray) => [...innerArray]),
         ];
         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
         console.log("updatedBoard ", updatedBoard);
         return updatedBoard;
      });
      onSelectSquare();
   };

   return (
      <ol id="game-board">
         {initialGameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
               <ol>
                  {row.map((playerSymbol, colIndex) => (
                     <li key={colIndex}>
                        <button
                           onClick={() =>
                              handleSelectSquare(rowIndex, colIndex)
                           }
                        >
                           O{playerSymbol}
                        </button>
                     </li>
                  ))}
               </ol>
            </li>
         ))}
      </ol>
   );
};

export default GameBoard;
