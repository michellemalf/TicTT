import React from 'react'

interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <button className="square btn btn-lg btn-outline-dark" onClick={onSquareClick}>
      {value}
      <p>THIS IS A SQUARE</p>
    </button>
  );
};

export default Square