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
  const [xIsNext,setXIsNext] = useState(true);
  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status= `The winner is ${winner}`;
  }else{
    status = `Next player is : ${xIsNext?"X":"O"}`
  }
  function handleClick(i) {
    const newSquares = [...squares];
    if(calculateWinner(squares) ||newSquares[i]){
    return;
    }
    newSquares[i] = xIsNext?"X":"O";
    setXIsNext(!xIsNext);
    setSquare(newSquares);
  }
  function renderSquare(i) {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  }
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

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);