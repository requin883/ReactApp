import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import './App.css';
function Square(props) {
  return (
    <button className="square"
      onClick={() => props.onClick('X')}>
      {props.value}
    </button>
  );
}

function Board(){
  const [squares,setSquare] = useState(Array(9));
  function handleClick(i) {
    console.log(squares);
    const newSquares = squares.slice();
    newSquares[i] = "X";
    setSquare(newSquares);
  }
  function renderSquare(i) {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  }

    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    );
}

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