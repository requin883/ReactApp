import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import './App.css';
import Board from "./components/Board";

function Game() {
  return (
    <StrictMode>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    </StrictMode>
  );
}


// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);