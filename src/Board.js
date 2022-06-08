import React, { useState } from "react";
import Square from "./Square";
import Xicon from "./assets/icon-x.svg";
import XiconOutline from "./assets/icon-o-outline.svg";
import Oicon from "./assets/icon-o.svg";
import OiconOutline from "./assets/icon-o-outline.svg";

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
  });
  const [playerTwo, setPlayerTwo] = useState({
    name: "Player Two",
    symbol: "O",
    icon: Oicon,
  });
  const [winner, setWinner] = useState(null);
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
    if (diagonalTwo.every((cell) => cell === playerOne)) {
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

      <div className="Board">
        <div className="Board-Info">
          <div className="Icon-pack">
            <img src={Xicon} alt="X-icon"></img>
            <img src={Oicon} alt="O-icon"></img>
          </div>
          <div className="Current-Player">{currentPlayer.name}</div>
          <button onClick={resetGame}>Reset</button>
          {winner !== null ? `The winner is ${winner.name}` : null}
        </div>
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
