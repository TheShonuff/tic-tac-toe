import React, { useState } from "react";
import Square from "./Square";
import Xicon from "./assets/icon-x.svg";
import XiconOutline from "./assets/icon-o-outline.svg";
import Oicon from "./assets/icon-o.svg";
import OiconOutline from "./assets/icon-o-outline.svg";
import IconRestart from "./assets/icon-restart.svg";
import Modal from "./Modal";

import { isMobile } from "react-device-detect";

import "./Board.css";

function Board({ quitGame, playerOneSymbol, newCPUgame }) {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  // When the game loads your asked to chose X or O. X alawys goes first therefore X should be P1 and O be P2
  const [playerOne, setPlayerOne] = useState({
    name: "Player One",
    symbol: playerOneSymbol,
    icon: Xicon,
    wins: 0,
  });
  const [playerTwo, setPlayerTwo] = useState({
    name: newCPUgame === true ? "CPU" : "Player Two",
    symbol: playerOneSymbol === "X" ? "O" : "X",
    icon: Oicon,
    wins: 0,
  });
  const [p1Wins, setP1Wins] = useState(0);
  const [p2Wins, setP2Wins] = useState(0);
  const [winner, setWinner] = useState(null);
  const [draws, setDraws] = useState(0);
  const [rowWon, setRowWon] = useState({ p1: false, p2: false, index: null });
  const [colWon, setColWon] = useState({ p1: false, p2: false });
  const [diagWon, setDiagWon] = useState({ p1: false, p2: false });
  const [currentPlayer, setCurrentPlayer] = useState(
    playerOne.symbol === "X" ? playerOne : playerTwo
  );

  function updateSquare(y, x) {
    const boardCopy = [...board];
    if (boardCopy[y][x] === "") {
      currentPlayer === playerOne
        ? setCurrentPlayer(playerTwo)
        : setCurrentPlayer(playerOne);

      boardCopy[y][x] = currentPlayer.symbol;
    }
    setBoard(boardCopy);
    gameWon();
  }
  function resetGame() {
    setWinner(null);
    setCurrentPlayer(playerOne.symbol === "X" ? playerOne : playerTwo);
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
      if (row.every((cell) => cell === playerOne.symbol)) {
        setWinner(playerOne);
        setRowWon({ p1: true, index: index });
        return;
      } else if (row.every((cell) => cell === playerTwo.symbol)) {
        setWinner(playerTwo);
        setRowWon({ p2: true, index: index });
        return;
      }
    }
    //check column
    for (let i = 0; i < 3; i++) {
      const col = i;
      const column = board.map((row) => row[i]);
      if (column.every((cell) => cell === playerOne.symbol)) {
        setWinner(playerOne);
        setColWon({ p1: true, col: col });
        return;
      } else if (column.every((cell) => cell === playerTwo.symbol)) {
        setWinner(playerTwo);
        setColWon({ p2: true, col: col });
        return;
      }
    }
    //check diagonal
    const diagonalOne = [board[0][0], board[1][1], board[2][2]];
    const diagonalTwo = [board[2][0], board[1][1], board[0][2]];
    if (diagonalOne.every((cell) => cell === playerOne.symbol)) {
      setWinner(playerOne);
      setDiagWon({ p1: true, type: 1 });
      return;
    } else if (diagonalOne.every((cell) => cell === playerTwo.symbol)) {
      setWinner(playerTwo);
      setDiagWon({ p2: true, type: 1 });
      return;
    }
    if (diagonalTwo.every((cell) => cell === playerOne.symbol)) {
      setWinner(playerOne);
      setDiagWon({ p1: true, type: 2 });
    } else if (diagonalTwo.every((cell) => cell === playerTwo.symbol)) {
      setWinner(playerTwo);
      setDiagWon({ p2: true, type: 2 });
      return;
    }
    //check no winner Produce Draw
    if (board.flat().every((cell) => cell !== "")) {
      setWinner("Draw");
      return;
    }
  }
  //modal button should quit to main menu
  function quit() {
    rowWon({ p1: false, p2: false });
    setColWon({ p1: false, p2: false });
    setDiagWon({ p1: false, p2: false });
    setWinner(null);
    quitGame();
  }

  //setup CPU player function

  function getCPUTurn() {
    const emptyIndexs = [];
    board.forEach((row, arrayIndex) => {
      row.forEach((cell, index) => {
        if (cell === "") {
          emptyIndexs.push({ arrayIndex, index });
        }
      });
    });
    const randomIndex = Math.floor(Math.random() * emptyIndexs.length);
    return emptyIndexs[randomIndex];
  }

  function cpuPlay() {
    if (winner) return;
    if (currentPlayer.name === "CPU") {
      const CPUMove = getCPUTurn();
      const boardCopy = [...board];
      boardCopy[CPUMove.arrayIndex][CPUMove.index] = currentPlayer.symbol;
      console.log(CPUMove);
      setBoard(boardCopy);
      setCurrentPlayer(playerOne);
      gameWon();
    }
  }

  //modal button to start next round
  function nextRound(winner) {
    if (winner === playerOne.symbol) {
      setP1Wins(p1Wins + 1);
    } else if (winner === playerTwo.symbol) {
      setP2Wins(p2Wins + 1);
    } else if (winner === undefined) {
      setDraws(draws + 1);
    }

    setWinner(null);
    setRowWon({ p1: false, p2: false });
    setColWon({ p1: false, p2: false });
    setDiagWon({ p1: false, p2: false });
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setCurrentPlayer(playerOne.symbol === "X" ? playerOne : playerTwo);
  }

  return (
    <div>
      {winner !== null ? (
        <Modal
          winner={winner}
          nextRound={nextRound}
          quit={quit}
          playerOneSymbol={playerOneSymbol}
        />
      ) : null}

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
          {cpuPlay()}
          {board.map((row, x) =>
            row.map((col, y) => (
              <Square
                key={x + y}
                value={{ y, x }}
                selected={board[x][y]}
                updateSquare={updateSquare}
                currentPlayer={currentPlayer}
                board={board}
                isMobile={isMobile}
                rowwon={rowWon}
                colwon={colWon}
                diagwon={diagWon}
                winner={winner}
              />
            ))
          )}
        </div>
        <div className="Scores">
          <div className="Player-One-Score">
            <p>
              {isMobile
                ? `X ${playerOne.symbol === "X" ? "P1" : "P2"}`
                : `X ${
                    playerOne.symbol === "X" ? playerOne.name : playerTwo.name
                  }`}
            </p>
            <h4>{playerOne.symbol === "X" ? p1Wins : p2Wins}</h4>
          </div>
          <div className="Ties">
            <p>TIES</p>
            <h4>{draws}</h4>
          </div>
          <div className="Player-Two-Score">
            <p>
              {isMobile
                ? `O ${playerTwo.symbol === "O" ? "P2" : "P1"}`
                : ` O ${
                    playerTwo.symbol === "O" ? playerTwo.name : playerOne.name
                  }`}
            </p>
            <h4>{playerTwo.symbol === "O" ? p2Wins : p1Wins}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
