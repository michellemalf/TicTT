import { useState } from 'react'
import './App.css'
import Board from './Board'


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center mt-4 mb-3">Tic Tac Toe</h1>
          <Board squares={[]} xIsNext={false} onReset={()=>(console.log('reset clicked'))}
        />
        </div>
      </div>
    </div>
  );
}

export default App
