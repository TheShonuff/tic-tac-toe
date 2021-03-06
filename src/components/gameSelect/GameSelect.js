import React from "react";
import "./GameSelect.css";
import { Xicon, Oicon, logo } from "../../assets";

export function GameSelect({
  newGame,
  setPlayerOneSymbol,
  newCPUGame,
  p1Symbol,
}) {
  return (
    <div className="GameSelect-Wrapper">
      <div className="GameSelection">
        <div className="Icons">
          <img src={logo} alt="XO Icon"></img>
        </div>
        <div className="playerOne-Select">
          <h1>PICK PLAYER 1'S MARK</h1>
          <div className="Picker">
            <div
              className={p1Symbol === "X" ? "oPick" : "xPick"}
              onClick={() => {
                setPlayerOneSymbol("X");
              }}
            >
              <img src={Xicon} alt="X icon"></img>
            </div>
            <div
              className={p1Symbol === "O" ? "oPick" : "xPick"}
              onClick={() => {
                setPlayerOneSymbol("O");
              }}
            >
              <img src={Oicon} alt="O icon"></img>
            </div>
          </div>
          <h2>REMEMBER : X GOES FIRST</h2>
        </div>
        <button className="vCPU" onClick={newCPUGame}>
          New Game (Vs CPU)
        </button>
        <button className="vPlayer" onClick={newGame}>
          New Game (Vs Player)
        </button>
      </div>
    </div>
  );
}
