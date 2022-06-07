import React, { useState } from "react";
import Square from "./Square";

import "./Board.css";

function Board() {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(0);

  function updateSquare(y, x) {
    const boardCopy = [...board];
    boardCopy[y][x] = "X";
    setBoard(boardCopy);
  }

  return (
    <div>
      <h1>Board</h1>
      {/* Maping through doesn't work in it's current state */}
      <div className="Board">
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
