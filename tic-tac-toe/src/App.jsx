import { useState } from 'react'
let flipKey = true;
function Square(){
  const [value, setValue] = useState(null);
  function handleClick(){
    if(flipKey) setValue('X')
    else setValue('O')
    flipKey = !flipKey
    console.log(flipKey)
  }
  return <button 
          onClick={handleClick} 
          className="square">
            {value}
         </button>
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <>
      <div className="board-row">
        <Square value = {squares[0]} />
        <Square value = {squares[1]} />
        <Square value = {squares[2]} />
      </div>
      <div className="board-row">
        <Square value = {squares[3]} />
        <Square value = {squares[4]} />
        <Square value = {squares[5]} />
      </div>
      <div className="board-row">
        <Square value = {squares[6]} />
        <Square value = {squares[7]} />
        <Square value = {squares[8]} />
      </div>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  )
}

// export default App
