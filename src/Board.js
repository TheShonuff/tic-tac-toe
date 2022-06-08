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
      boardCopy[y][x] = currentPlayer;
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
      if (row.every((cell) => cell === playerOne)) {
        setWinner(playerOne);
      } else if (row.every((cell) => cell === playerTwo)) {
        setWinner(playerTwo);
        return;
      }
    }
    //check column
    for (let i = 0; i < 3; i++) {
      const column = board.map((row) => row[i]);
      // console.log(`column in gamewon looks like ${column}`);
      if (column.every((cell) => cell === playerOne)) {
        setWinner(playerOne);
      } else if (column.every((cell) => cell === playerTwo)) {
        setWinner(playerTwo);
        return;
      }
    }
    //check diagonal
    const diagonalOne = [board[0][0], board[1][1], board[2][2]];
    const diagonalTwo = [board[2][0], board[1][1], board[0][2]];
    console.log(`Diagonal One is ${diagonalOne}`);
    console.log(`Diagonal two is ${diagonalTwo}`);
    if (diagonalOne.every((cell) => cell === playerOne)) {
      setWinner(playerOne);
    } else if (diagonalOne.every((cell) => cell === playerTwo)) {
      setWinner(playerTwo);
    }
    if (diagonalTwo.every((cell) => cell === playerOne)) {
      setWinner(playerOne);
    } else if (diagonalTwo.every((cell) => cell === playerTwo)) {
      setWinner(playerTwo);
    }
  }
  return (
    <div>
      <h1>Board</h1>
      <button onClick={resetGame}>Reset</button>
      {winner !== null ? `The winner is ${winner}` : null}
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
