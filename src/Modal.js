import React from "react";
import "./Modal.css";
import Xicon from "./assets/icon-x.svg";

import Oicon from "./assets/icon-o.svg";

function Modal({ winner, quit, nextRound }) {
  return (
    <div className="ModalContainer">
      <div className="Modal">
        <h1 className="Announce">
          {winner.symbol === "X"
            ? `${winner.name}`
            : winner.symbol === "O"
            ? `${winner.name}`
            : winner === "Draw"
            ? ""
            : null}
        </h1>
        <div className="WinnerTitle">
          {winner.symbol === "X" ? (
            <img src={Xicon}></img>
          ) : winner.symbol === "O" ? (
            <img src={Oicon}></img>
          ) : winner === "Draw" ? null : null}
          <h1 className={winner.symbol === "X" ? "p1Win" : "p2Win"}>
            {winner.symbol !== undefined ? "TAKES THE ROUND" : "ROUND TIED"}
          </h1>
        </div>
        <div className="Modal-Buttons">
          <button className="Quit-Btn" onClick={() => quit()}>
            Quit
          </button>
          <button
            className="Next-Round"
            onClick={() => nextRound(winner.symbol)}
          >
            Next Round
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
