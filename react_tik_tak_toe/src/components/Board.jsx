import { useState } from "react";
import Square from './Square';
import {calculateWinner} from "../functions/calculateWinner";

export default function Board(){
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
      return <Square value={squares[i]} onClick={() => handleClick(i,squares,xIsNext)} />;
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