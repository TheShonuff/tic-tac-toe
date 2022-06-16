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
    console.log(`the row won index is ${board[rowwon.index]}`);

    if (rowwon.p1) {
      if (rowwon.index === value.x) {
        return "Xwon";
      }
    }
    // board is board[row][col]
    if (diagwon.p1 === true && selected === "X") return "Xwon";
    // if (colwon.p1 === true && colwon.index === value.y) return "Xwon";
    if (colwon.p1) {
      console.log(`column is holding ${colwon.col}`);

      for (let i = 0; i < 3; i++) {
        if (board[i][colwon.col] === "X" && value.y === colwon.col) {
          console.log(board[2][0]);
          console.log(`the record value is ${board[colwon.col][i]} @ ${i}`);
          return "Xwon";
        } else {
          return "Square";
        }
      }
    }
    if (rowwon.p2 === true && rowwon.index === value.x) return "Owon";
    if (diagwon.p2 === true && selected === "O") return "Owon";
    if (colwon.p2 === true && colwon.index === value.y) return "Owon";
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
