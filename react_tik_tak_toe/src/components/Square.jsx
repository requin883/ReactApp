export default function Square(props) {
    return (
      <button className="square"
        onClick={() => props.onClick('X')}>
        {props.value}
      </button>
    );
  }
