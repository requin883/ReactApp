import renderSquare from "../functions/renderSquare";

function Board(props) {
    return (
      <div>
        <div className="board-row">
          {renderSquare(0,props)}
          {renderSquare(1,props)}
          {renderSquare(2,props)}
        </div>
        <div className="board-row">
          {renderSquare(3,props)}
          {renderSquare(4,props)}
          {renderSquare(5,props)}
        </div>
        <div className="board-row">
          {renderSquare(6,props)}
          {renderSquare(7,props)}
          {renderSquare(8,props)}
        </div>
      </div>
    );
  }

  export default Board;