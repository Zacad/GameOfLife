import React, { useState } from "react";
import initBoard from "../utils/initBoard";
import drawFields from "../utils/drawFields";
import InitPopup from "./InitPopup";
import DrawPopup from "./DrawPopup";

const Navbar = ({ gameState, setGameState, setBoard, board }) => {
  const [drawPopupVisibility, setDrawPopupVisibility] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const closeInitPopup = () => {
    setInitialized(true);
  };

  const openDrawPopup = () => {
    setDrawPopupVisibility(true);
  };

  const closeDrawPopup = () => {
    setDrawPopupVisibility(false);
  };

  const toggleGameState = () => {
    gameState === true ? setGameState(false) : setGameState(true);
  };

  const resetBoard = (rows = 50, columns = 50) => {
    return !gameState ? setBoard(initBoard(rows, columns)) : "";
  };

  const drawBoard = (numberOfFields = 20, board) => {
    return !gameState ? setBoard(drawFields(numberOfFields, board)) : "";
  };

  return (
    <nav className=" ba b--light-gray pa2 flex flex-row-l flex-column">
      <button
        className="ma2 pa2 br3 bn bg-blue white dim"
        onClick={toggleGameState}
      >
        Start/Stop game
      </button>
      <button
        className="ma2 pa2 br3 bn bg-blue white dim"
        onClick={() => resetBoard()}
      >
        Reset
      </button>
      <button
        className="ma2 pa2 br3 bn bg-blue white dim"
        onClick={openDrawPopup}
      >
        Draw board
      </button>
      <div>
        <p>Game state: {gameState ? "running" : "stopped"}</p>
      </div>
      {!initialized ? (
        <InitPopup closeFn={closeInitPopup} actionFn={resetBoard} />
      ) : (
        ""
      )}
      {drawPopupVisibility ? (
        <DrawPopup
          closeFn={closeDrawPopup}
          actionFn={drawBoard}
          board={board}
        />
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
