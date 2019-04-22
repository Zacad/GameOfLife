import React, { useState } from "react";
import initBoard from "../utils/initBoard";
import InitPopup from "./InitPopup";

const Navbar = ({ gameState, setGameState, setBoard }) => {
  const [initPopupVisibility, setInitPopupVisibility] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const closeInitPopup = () => {
    setInitialized(true);
  };

  const openInitPopup = () => {
    setInitPopupVisibility(true);
  };

  const toggleGameState = () => {
    gameState === true ? setGameState(false) : setGameState(true);
  };

  const resetBoard = (rows = 50, columns = 50) => {
    return !gameState ? setBoard(initBoard(rows, columns)) : "";
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
        onClick={openInitPopup}
      >
        Random Init
      </button>
      {!initialized ? (
        <InitPopup closeFn={closeInitPopup} actionFn={resetBoard} />
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
