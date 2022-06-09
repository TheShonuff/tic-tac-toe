import React, { useState } from "react";
import GameSelect from "./GameSelect";
import Board from "./Board";
import Xicon from "./assets/icon-x.svg";
import Oicon from "./assets/icon-o.svg";

function Game() {
  const [newGame, setNewGame] = useState(false);
  function startGame() {
    setNewGame(true);
  }
  function quitGame() {
    setNewGame(false);
  }
  const [winner, isWinnner] = useState(null);
  return (
    <div>
      {newGame === false ? (
        <GameSelect newGame={startGame} />
      ) : (
        <Board quitGame={quitGame} />
      )}
    </div>
  );
}

export default Game;
