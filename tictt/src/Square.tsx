import React from "react";

interface SquareProps {
  value: string;
  onSquareClick: () => void;
}

const Square = ({ value, onSquareClick }: SquareProps) => {
  const backgroundColor = value === "X" ? "pink" : value === "O" ? "lightblue" : "black";
  return (
    <button
      className="square btn btn-lg btn-outline-light"
      onClick={onSquareClick}
      style={{ background: backgroundColor }}
    >
      {value}
      {/* <p>THIS IS A SQUARE</p> */}
    </button>
  );
};

export default Square;
