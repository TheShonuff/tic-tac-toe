import React, { useState } from "react";
import GameSelect from "./GameSelect";
import Board from "./Board";

function Game() {
  const [newGame, setNewGame] = useState(false);
  const [newCPUgame, setnewCPUgame] = useState(false);
  const [playerOneSymbol, setPlayerOneSymbol] = useState(null);
  function startGame() {
    setNewGame(true);
  }
  function quitGame() {
    setNewGame(false);
    setnewCPUgame(false);
  }
  function newCPUGame() {
    setnewCPUgame(true);
    console.log("CPU game selected");
  }

  function setPlayerOne(symbol) {
    setPlayerOneSymbol(symbol);
  }
  const [winner, isWinnner] = useState(null);
  return (
    <div>
      {newGame === false || newCPUgame === false ? (
        <GameSelect
          newGame={startGame}
          newCPUGame={newCPUGame}
          playerOneSymbol={setPlayerOne}
        />
      ) : (
        <Board
          quitGame={quitGame}
          playerOneSymbol={playerOneSymbol}
          newCPUgame={newCPUgame}
        />
      )}
    </div>
  );
}

export default Game;
