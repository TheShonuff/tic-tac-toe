import React, { useState } from "react";
import "./Square.css";
import Board from "./Board";
import Xicon from "./assets/icon-x.svg";
import XiconOutline from "./assets/icon-x-outline.svg";
import Oicon from "./assets/icon-o.svg";
import OiconOutline from "./assets/icon-o-outline.svg";
// function handleClick(key, position) {
//   console.log(`Clicked ${key}`);
// }

function Square({
  value,
  updateSquare,
  selected,
  currentPlayer,
  isMobile,
  cpuPlay,
  rowwon,
  winner,
  colwon,
  diagwon,
  board,
}) {
  const [icon, setIcon] = useState("");
  // function mouseHover(event) {
  //   if (selected === "") {
  //     event.target.src = XiconOutline;
  //     console.log(value.x, value.y);
  //     return <img src={XiconOutline}></img>;
  //   }
  // }
  function mouseEnter() {
    console.log(`value x: ${value.x} value y: ${value.y}`);
    if (currentPlayer.symbol === "X") {
      setIcon(XiconOutline);
    } else {
      setIcon(OiconOutline);
    }
  }
  function mouseLeave() {
    setIcon("");
  }

  function mobileUser() {
    if (isMobile) {
      if (selected === "X") {
        return <img src={Xicon}></img>;
      }
    }
  }
  function winnerClass() {
    if (rowwon.p1) {
      if (rowwon.index === value.x) {
        return winner.symbol === "X" ? "Xwon" : "Owon";
      }
    }
    if (diagwon.p1) {
      if (diagwon.type === 1) {
        if (board[0][0] !== "" && board[1][1] !== "" && board[2][2] !== "") {
          for (let i = 0; i < 3; i++) {
            if (value.x === i && value.y === i) {
              return winner.symbol === "X" ? "Xwon" : "Owon";
            }
          }
        } else {
          return "Square";
        }
      }
      if (diagwon.type === 2) {
        if (board[2][0] !== "" && board[1][1] !== "" && board[0][2] !== "") {
          let y = 0;
          for (let x = 2; x >= 0; x--) {
            if (value.x === x && value.y === y) {
              return winner.symbol === "X" ? "Xwon" : "Owon";
            }
            y++;
          }
        }
      }
    }
    if (diagwon.p2) {
      if (diagwon.type === 1) {
        if (board[0][0] !== "" && board[1][1] !== "" && board[2][2] !== "") {
          for (let i = 0; i < 3; i++) {
            if (value.x === i && value.y === i) {
              return winner.symbol === "X" ? "Xwon" : "Owon";
            }
          }
        } else {
          return "Square";
        }
      }
      if (diagwon.type === 2) {
        if (board[2][0] !== "" && board[1][1] !== "" && board[0][2] !== "") {
          let y = 0;
          for (let x = 2; x >= 0; x--) {
            if (value.x === x && value.y === y) {
              return winner.symbol === "X" ? "Xwon" : "Owon";
            }
            y++;
          }
        }
      }
    }

    if (colwon.p1) {
      console.log(`The winner symbol is ${winner.symbol}`);
      for (let i = 0; i < 3; i++) {
        if (board[i][colwon.col] !== "" && value.y === colwon.col) {
          return winner.symbol === "X" ? "Xwon" : "Owon";
        } else {
          return "Square";
        }
      }
    }
    if (rowwon.p2) {
      if (rowwon.index === value.x) {
        return winner.symbol === "X" ? "Xwon" : "Owon";
      }
    }
    if (colwon.p2) {
      for (let i = 0; i < 3; i++) {
        if (board[i][colwon.col] !== "" && value.y === colwon.col) {
          return winner.symbol === "O" ? "Owon" : "Xwon";
        } else {
          return "Square";
        }
      }
    }

    return "Square";
  }
  return (
    // Add logic here for each square. Selected is the what to compare against to render a X or O
    <div
      className={winnerClass()}
      onClick={() => {
        updateSquare(value.x, value.y);
      }}
      // onMouseOver={mouseHover}
      onPointerEnter={mouseEnter}
      onPointerLeave={mouseLeave}
    >
      <div className="icon">
        {isMobile && selected === "X" ? (
          <img src={Xicon}></img>
        ) : isMobile && selected === "O" ? (
          <img src={Oicon}></img>
        ) : !isMobile && icon !== "" && selected === "" ? (
          <img src={icon}></img>
        ) : !isMobile && selected === "X" ? (
          <img src={Xicon}></img>
        ) : !isMobile && selected === "O" ? (
          <img src={Oicon}></img>
        ) : rowwon.p1 && selected === "X" ? (
          <img src={XiconOutline}></img>
        ) : null}
      </div>
    </div>
  );
}

export default Square;
