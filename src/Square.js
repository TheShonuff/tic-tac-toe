import React, { useState } from "react";
import "./Square.css";
import Xicon from "./assets/icon-x.svg";
import XiconOutline from "./assets/icon-x-outline.svg";
import Oicon from "./assets/icon-o.svg";
import OiconOutline from "./assets/icon-o-outline.svg";

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

  function mouseEnter() {
    if (currentPlayer.symbol === "X") {
      setIcon(XiconOutline);
    } else {
      setIcon(OiconOutline);
    }
  }
  function mouseLeave() {
    setIcon("");
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
    <div
      className={winnerClass()}
      onClick={() => {
        updateSquare(value.x, value.y);
      }}
      onPointerEnter={mouseEnter}
      onPointerLeave={mouseLeave}
    >
      <div className="icon">
        {isMobile && selected === "X" ? (
          <img src={Xicon} alt="X icon"></img>
        ) : isMobile && selected === "O" ? (
          <img src={Oicon} alt="O icon"></img>
        ) : !isMobile && icon !== "" && selected === "" ? (
          <img src={icon} alt="outline selection icon"></img>
        ) : !isMobile && selected === "X" ? (
          <img src={Xicon} alt="X icon"></img>
        ) : !isMobile && selected === "O" ? (
          <img src={Oicon} alt="O icon"></img>
        ) : rowwon.p1 && selected === "X" ? (
          <img src={XiconOutline} alt="X outline selection icon"></img>
        ) : null}
      </div>
    </div>
  );
}

export default Square;
