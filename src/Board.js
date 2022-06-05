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
  function createBoard() {
    let board = [];
    let row = [];
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        let coord = `${y}-${x}`;
        row.push(<Square position={coord} />);
      }
    }
    return row;
  }

  function renderSquare(key) {
    return <Square key={key} />;
  }
  return (
    <div>
      <h1>Board</h1>
      {/* <div className="Board">{createBoard()}</div> */}
      <div className="Board">
        <Square key={23} />
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
      </div>
    </div>
  );
}

export default Board;
