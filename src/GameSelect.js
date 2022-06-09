import React, { useState } from "react";
import "./GameSelect.css";
import Xicon from "./assets/icon-x.svg";
import Oicon from "./assets/icon-o.svg";
import logo from "./assets/logo.svg";

function GameSelect({ newGame }) {
  return (
    <div>
      <div className="GameSelection">
        <div className="Icons">
          <img src={logo} alt="XO Icon"></img>
        </div>
        <div className="playerOne-Select">
          <h1>PICK PLAYER 1'S MARK</h1>
          <div className="Picker">
            <div className="xPick">
              <img src={Xicon}></img>
            </div>
            <div className="oPick">
              <img src={Oicon}></img>
            </div>
          </div>
          <h2>REMEMBER : X GOES FIRST</h2>
        </div>
        <button className="vCPU">New Game (Vs CPU)</button>
        <button className="vPlayer" onClick={newGame}>
          New Game (Vs Player)
        </button>
      </div>
    </div>
  );
}

export default GameSelect;
