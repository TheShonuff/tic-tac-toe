import React from "react";
import "./Square.css";
import Board from "./Board";

function handleClick(key, position) {
  console.log(`Clicked ${key}`);
}

function Square({ key }) {
  return (
    <td
      className="Square"
      key={key}
      onClick={() => {
        console.log(key);
      }}
    ></td>
  );
}

export default Square;
