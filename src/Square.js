import React from "react";
import "./Square.css";
import Board from "./Board";
import Xicon from "./assets/icon-x.svg";
import XiconOutline from "./assets/icon-o-outline.svg";
import Oicon from "./assets/icon-o.svg";
import OiconOutline from "./assets/icon-o-outline.svg";
// function handleClick(key, position) {
//   console.log(`Clicked ${key}`);
// }

function Square({ value, updateSquare, selected }) {
  return (
    // Add logic here for each square. Selected is the what to compare against to render a X or O
    <div
      className="Square"
      onClick={() => {
        console.log(value.x, value.y);
        updateSquare(value.x, value.y);
        console.log(selected);
      }}
    >
      <div className="icon">
        <img
          src={selected === "X" ? Xicon : selected === "O" ? Oicon : ""}
        ></img>
      </div>
    </div>
  );
}

export default Square;
