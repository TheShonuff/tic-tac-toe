import React, { useState } from "react";
import GameSelect from "./GameSelect";
import Board from "./Board";

function Game() {
  const [winner, isWinnner] = useState(null);
  return (
    <div>
      <h1>Game Component</h1>
      <GameSelect />
      <Board />
    </div>
  );
}

export default Game;
