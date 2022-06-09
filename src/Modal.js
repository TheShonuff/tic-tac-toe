import React from "react";
import "./Modal.css";
import Xicon from "./assets/icon-x.svg";

import Oicon from "./assets/icon-o.svg";

function Modal({ winner, quit }) {
  console.log(`The modal winner is ${winner.symbol}`);
  return (
    <div className="Modal">
      <h1>Wins</h1>
      <div className="WinnerTitle">
        <img
          src={
            winner.symbol === "X" ? Xicon : winner.symbol === "O" ? Oicon : ""
          }
        ></img>
        <h1>TAKES THE ROUND</h1>
      </div>
      <button className="Quit-Btn" onClick={() => quit()}>
        Quit
      </button>
      <button className="Next-Round">Next Round</button>
    </div>
  );
}

export default Modal;
