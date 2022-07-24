import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import './App.css';
import Board from "./components/Board";
import { calculateWinner } from "./functions/calculateWinner";
function Game() {
  const [state, setState] = useState({
    history: [{
      squares: Array(9).fill(null)
    }],
    stepNumber: 0,
    xIsNext: true
  })
  function handleClick(i) {
    const newHistory = state.history.slice(0, state.stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = [...current.squares];
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = state.xIsNext ? "X" : "O";
    setState({
      history: state.history.concat([
        { squares }
      ]),
      stepNumber: state.history.length,
      xIsNext: !state.xIsNext
    });
  }

  function jumpTo(step) {
    setState({
      history: [...state.history],
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }
  const newHistory = state.history;
  const squares = newHistory[state.stepNumber].squares;
  const winner = calculateWinner(squares);
  const moves = state.history.map((step, move) => {
    const desc = move ?
      `Go to move #: ${move}` :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>)
  })
  let status;
  if (winner) {
    status = `The winner is ${winner}`;
  } else {
    status = `Next player is : ${state.xIsNext ? "X" : "O"}`
  }
  return (
    <StrictMode>
      <div className="game">
        <div className="game-board">
          <Board
            squares={squares}
            onClick={i => handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    </StrictMode>
  );
}
// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);