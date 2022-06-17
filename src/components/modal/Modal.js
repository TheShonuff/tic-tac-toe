import React from "react";
import "./Modal.css";
import Xicon from "../../assets/icon-x.svg";

import Oicon from "../../assets/icon-o.svg";

export function Modal({ winner, quit, nextRound, cpuGame }) {
  return (
    <div className="ModalContainer">
      <div className="Modal">
        <h1 className="Announce">
          {cpuGame && winner.name === "PLAYER ONE"
            ? "You Won!"
            : cpuGame && winner.name === "CPU"
            ? "OH NO, YOU LOST..."
            : cpuGame && winner === "Draw"
            ? ""
            : winner.symbol === "X"
            ? `${winner.name} WINS!`
            : winner.symbol === "O"
            ? `${winner.name} WINS!`
            : winner === "Draw"
            ? ""
            : null}
        </h1>
        <div className="WinnerTitle">
          {winner.symbol === "X" ? (
            <img src={Xicon} alt="X icon"></img>
          ) : winner.symbol === "O" ? (
            <img src={Oicon} alt="O icon"></img>
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
