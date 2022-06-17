import React, { useState } from "react";
import GameSelect from "./GameSelect";
import Board from "./Board";

function Game() {
  const [newGame, setNewGame] = useState(false);
  const [newCPUgame, setnewCPUgame] = useState(false);
  const [playerOneSymbol, setPlayerOneSymbol] = useState("X");
  function startGame() {
    setNewGame(true);
  }
  function quitGame() {
    setNewGame(false);
    setnewCPUgame(false);
  }
  function newCPUGame() {
    setnewCPUgame(true);
    setNewGame(true);
    console.log("CPU game selected");
  }

  function setPlayerOne(symbol) {
    setPlayerOneSymbol(symbol);
  }

  return (
    <div>
      {newGame === false ? (
        <GameSelect
          newGame={startGame}
          newCPUGame={newCPUGame}
          setPlayerOneSymbol={setPlayerOne}
          p1Symbol={playerOneSymbol}
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
