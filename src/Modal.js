import React from "react";
import "./Modal.css";
import Xicon from "./assets/icon-x.svg";

import Oicon from "./assets/icon-o.svg";

function Modal({ winner, quit, nextRound }) {
  console.log(
    `The modal winner is ${winner.symbol} while draw shows ${winner}`
  );
  return (
    <div className="Modal">
      <h1>{winner !== undefined ? "Wins" : ""}</h1>
      <div className="WinnerTitle">
        <img
          src={
            winner.symbol === "X"
              ? Xicon
              : winner.symbol === "O"
              ? Oicon
              : winner === "Draw"
              ? null
              : null
          }
        ></img>
        <h1>
          {winner.symbol !== undefined ? "TAKES THE ROUND" : "ROUND TIED"}
        </h1>
      </div>
      <button className="Quit-Btn" onClick={() => quit()}>
        Quit
      </button>
      <button className="Next-Round" onClick={() => nextRound(winner.symbol)}>
        Next Round
      </button>
    </div>
  );
}

export default Modal;
