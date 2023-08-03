import { useState } from "react";
import "./App.css";
import Game from "./Game";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center mt-4 mb-3">Tic Tac Toe</h1>
          <Game />
        </div>
      </div>
    </div>
  );
}

export default App;
