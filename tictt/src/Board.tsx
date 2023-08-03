import React from "react";
import Square from "./Square";

interface BoardProps {
  squares: any;
  xIsNext: any;
  onPlay: any;
  onReset: () => void;
}

const Board = ({ squares, xIsNext, onReset, onPlay }: BoardProps) => {
  const handleClick = (i: number) => {
    console.log("clicked");
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    console.log(nextSquares);
    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
    onPlay(nextSquares);
  };

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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  const winner = calculateWinner(squares);
  let status = "";
  winner
    ? (status = `Winner: ${winner}`)
    : (status = `Next player: ${xIsNext ? "X" : "O"}`);

  return (
    <div className="board text-center">
      <div className="status mb-4">{status}</div>
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
        <button className="btn btn-outline-light" onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Board;
