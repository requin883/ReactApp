import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import './App.css';
import { calculateWinner } from "./functions/calculateWinner";
import { useRef } from "react";
function Square(props) {
  return (
    <button className="square"
      onClick={() => props.onClick('X')}>
      {props.value}
    </button>
  );
}

function Board(props) {
  function renderSquare(i) {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  }
  return (
    <div>
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
  const olEl = useRef(null);
  const [state,setState] = useState({
    history:[{
      squares:Array(9).fill(null)
    }],
    stepNumber:0,
    xIsNext:true
  })
  function handleClick(i,state) {
    const newHistory = state.history.slice(0,state.stepNumber+1);
    const current =newHistory[newHistory.length-1]; 
    const squares = [...current.squares];
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = state.xIsNext ? "X" : "O";
    setState({
      history:state.history.concat([
        {squares}
      ]),
      stepNumber:state.history.length,
      xIsNext:!state.xIsNext
    });
  }

  function jumpTo(step,state,setState) {
    setState({
      history:[...state.history],
      stepNumber:step,
      xIsNext:(step%2)===0
    });
  }
  const newHistory = state.history;
  const squares = newHistory[state.stepNumber].squares;
  const winner = calculateWinner(squares);
  const moves = state.history.map((step, move) => {
    const desc = move ? 
    `Go to move #: ${move}`:
      'Go to game start';
      return(
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>)
  })
  console.log(moves);
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
          <ol ref={olEl}>{moves}</ol>
        </div>
      </div>
    </StrictMode>
  );
}


// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);