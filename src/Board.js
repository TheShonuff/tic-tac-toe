import React, { useState } from "react";
import Square from "./Square";

import "./Board.css";

function Board() {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  // When the game loads your asked to chose X or O. X alawys goes first therefore X should be P1 and O be P2
  const [playerOne, setPlayerOne] = useState("X");
  const [playerTwo, setPlayerTwo] = useState("O");
  const [currentPlayer, setCurrentPlayer] = useState(playerOne);

  //updates Square based on coordinates of click that relates to a position in the multidimensonal array
  function updateSquare(y, x) {
    // copy board stat into a new array
    const boardCopy = [...board];
    // If click set to value. This will need to be updated to add a state that checks which player is active and to use the proper symbol to render
    boardCopy[y][x] = playerOne;
    // Update the State of the board
    setBoard(boardCopy);
  }
  function resetGame() {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  }

  return (
    <div>
      <h1>Board</h1>
      <button onClick={resetGame}>Reset</button>
      <div className="Board">
        {/* map over the array and create squares */}
        {board.map((row, x) =>
          row.map((col, y) => (
            <Square
              key={x + y}
              value={{ y, x }}
              selected={board[x][y]}
              updateSquare={updateSquare}
              board={{ board }}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Board;
