import Square from "../components/Square";

function renderSquare(i,props) {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)}/>
  }

  export default renderSquare;