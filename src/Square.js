import React from "react";
import "./Square.css";
import Board from "./Board";

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
      {" "}
      {selected === "X" ? "X" : ""}
    </div>
  );
}

export default Square;
