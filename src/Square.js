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

function Square({ value, updateSquare, selected, currentPlayer }) {
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
  return (
    // Add logic here for each square. Selected is the what to compare against to render a X or O
    <div
      className="Square"
      onClick={() => {
        console.log(value.x, value.y);
        updateSquare(value.x, value.y);
        console.log(selected);
      }}
      // onMouseOver={mouseHover}
      onPointerEnter={mouseEnter}
      onPointerLeave={mouseLeave}
    >
      <div className="icon">
        {/* <img src={icon !== "" ? icon : ""}></img>
        <img
          src={selected === "X" ? Xicon : selected === "O" ? Oicon : ""}
        ></img> */}

        {icon !== "" && selected === "" ? (
          <img src={icon}></img>
        ) : selected === "X" ? (
          <img src={Xicon}></img>
        ) : selected === "O" ? (
          <img src={Oicon}></img>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Square;
