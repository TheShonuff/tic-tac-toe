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
}) {
  const [icon, setIcon] = useState("");
  function mouseHover(event) {
    if (selected === "") {
      event.target.src = XiconOutline;
      console.log(value.x, value.y);
      return <img src={XiconOutline}></img>;
    }
  }
  function mouseEnter() {
    console.log("entered");
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
  return (
    // Add logic here for each square. Selected is the what to compare against to render a X or O
    <div
      className="Square"
      onClick={() => {
        console.log(value.x, value.y);
        updateSquare(value.x, value.y);
        console.log(selected);
        console.log(`is this mobile ${isMobile}`);
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
        ) : null}
      </div>
    </div>
  );
}

export default Square;
