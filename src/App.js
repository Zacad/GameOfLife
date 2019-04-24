import React, { useEffect, useState } from "react";
import "./App.css";
import initBoard from "./utils/initBoard";
import Board from "./components/Board";
import Navbar from "./components/Navbar";
import nextGeneration from "./utils/nextGeneration";

const App = () => {
  const [gameState, setGameState] = useState(false);
  const [board, setBoard] = useState(initBoard(40, 40));
  const [gameInterval, setGameInterval] = useState(false);

  const newBoard = board => {
    setBoard(board => nextGeneration(board));
  };

  useEffect(
    () => {
      if (gameState === true) {
        setGameInterval(setInterval(newBoard, 50, board));
      } else {
        clearInterval(gameInterval);
      }
    },
    [gameState]
  );

  return (
    <main className="flex flex-column">
      <Navbar
        gameState={gameState}
        setGameState={setGameState}
        setBoard={setBoard}
        board={board}
      />
      <Board data={board} gameState={gameState} setBoard={setBoard} />
    </main>
  );
};

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
*/

export default App;
