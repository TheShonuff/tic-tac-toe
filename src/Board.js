import React, { useState } from "react";
import Square from "./Square";
import Xicon from "./assets/icon-x.svg";
import XiconOutline from "./assets/icon-o-outline.svg";
import Oicon from "./assets/icon-o.svg";
import OiconOutline from "./assets/icon-o-outline.svg";
import IconRestart from "./assets/icon-restart.svg";

import "./Board.css";

function Board() {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  // When the game loads your asked to chose X or O. X alawys goes first therefore X should be P1 and O be P2
  const [playerOne, setPlayerOne] = useState({
    name: "Player One",
    symbol: "X",
    icon: Xicon,
    wins: 0,
  });
  const [playerTwo, setPlayerTwo] = useState({
    name: "Player Two",
    symbol: "O",
    icon: Oicon,
    wins: 0,
  });
  const [winner, setWinner] = useState(null);
  const [draws, setDraws] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(playerOne);

  //updates Square based on coordinates of click that relates to a position in the multidimensonal array
  function updateSquare(y, x) {
    // copy board stat into a new array
    const boardCopy = [...board];

    // if board selection is empyt. update board state and currentplayer
    if (boardCopy[y][x] === "") {
      // toggle player state on every click
      currentPlayer === playerOne
        ? setCurrentPlayer(playerTwo)
        : setCurrentPlayer(playerOne);
      boardCopy[y][x] = currentPlayer.symbol;
    }

    console.log(`The winner is ${winner}`);
    setBoard(boardCopy);
    gameWon();
  }
  function resetGame() {
    setWinner(null);
    setCurrentPlayer(playerOne);
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  }
  //function to determin if game is over
  function gameWon() {
    //check row
    for (let index = 0; index < board.length; index++) {
      const row = board[index];
      // console.log(`row in gamewon looks like ${row}`);
      if (row.every((cell) => cell === playerOne.symbol)) {
        setWinner(playerOne);
        return;
      } else if (row.every((cell) => cell === playerTwo.symbol)) {
        setWinner(playerTwo);
        return;
      }
    }
    //check column
    for (let i = 0; i < 3; i++) {
      const column = board.map((row) => row[i]);
      // console.log(`column in gamewon looks like ${column}`);
      if (column.every((cell) => cell === playerOne.symbol)) {
        setWinner(playerOne);
        return;
      } else if (column.every((cell) => cell === playerTwo.symbol)) {
        setWinner(playerTwo);
        return;
      }
    }
    //check diagonal
    const diagonalOne = [board[0][0], board[1][1], board[2][2]];
    const diagonalTwo = [board[2][0], board[1][1], board[0][2]];
    console.log(`Diagonal One is ${diagonalOne}`);
    console.log(`Diagonal two is ${diagonalTwo}`);
    if (diagonalOne.every((cell) => cell === playerOne.symbol)) {
      setWinner(playerOne);
      return;
    } else if (diagonalOne.every((cell) => cell === playerTwo.symbol)) {
      setWinner(playerTwo);
      return;
    }
    if (diagonalTwo.every((cell) => cell === playerOne.symbol)) {
      setWinner(playerOne);
    } else if (diagonalTwo.every((cell) => cell === playerTwo.symbol)) {
      setWinner(playerTwo);
      return;
    }

    //check no winner Produce Draw
    if (board.flat().every((cell) => cell !== "")) {
      setWinner("Draw");
      return;
    }
  }
  return (
    <div>
      <h1>Board</h1>
      {winner !== null ? `The winner is ${winner.name}` : null}
      <div className="Board">
        <div className="Board-Info">
          <div className="Icon-pack">
            <img src={Xicon} alt="X-icon"></img>
            <img src={Oicon} alt="O-icon"></img>
          </div>
          <div className="Current-Player">
            <img src={currentPlayer.symbol === "X" ? Xicon : Oicon}></img>
            <p>TURN</p>
          </div>
          <button className="Reset" onClick={resetGame}>
            <img src={IconRestart}></img>
          </button>
        </div>
        <div className="Squares">
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
        <div className="Scores">
          <div className="Player-One-Score">
            <p>{playerOne.symbol}(YOU)</p>
            <h4>{playerOne.wins}</h4>
          </div>
          <div className="Ties">
            <p>TIES</p>
            <h4>{draws}</h4>
          </div>
          <div className="Player-Two-Score">
            <p>
              {playerTwo.symbol}({playerTwo.name})
            </p>
            <h4>{playerTwo.wins}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
