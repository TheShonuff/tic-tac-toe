import React, { useState } from "react";
import GameSelect from "./GameSelect";
import Board from "./Board";

function Game() {
  const [newGame, setNewGame] = useState(false);
  const [playerOneSymbol, setPlayerOneSymbol] = useState(null);
  function startGame() {
    setNewGame(true);
  }
  function quitGame() {
    setNewGame(false);
  }
  function setPlayerOne(symbol) {
    setPlayerOneSymbol(symbol);
  }
  const [winner, isWinnner] = useState(null);
  return (
    <div>
      {newGame === false ? (
        <GameSelect newGame={startGame} playerOneSymbol={setPlayerOne} />
      ) : (
        <Board quitGame={quitGame} playerOneSymbol={playerOneSymbol} />
      )}
    </div>
  );
}

export default Game;
