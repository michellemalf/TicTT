import React from 'react'
import Square from './Square'

interface BoardProps{
  squares: Array <string>;
  xIsNext: boolean;
  onReset: ()=> void;
}

const calculateWinner = (squares: Array<string>): string | null => {
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

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

const handleClick=(i: number)=>{
  console.log("clicked");
}

const onReset=()=> {
  console.log("reset clicked!");
}


const Board = ({squares, xIsNext, onReset}: BoardProps) => {
  return (
    <div className='board text-center'>
      {/* <div className="status mb-4">{status}</div> */}
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-secondary" onClick={onReset}>
          Reset Game
        </button>
      </div>
      
    </div>
  )
}

export default Board
