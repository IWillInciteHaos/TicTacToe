import './styles.scss'
import {useState} from 'react'
import Board from './components/Board'
import { calculateWinner } from './winner';


function App() {
  
const [squares, setSquares] = useState(Array(9).fill(null));
const [isONext, setIsONext] = useState(false);

const currentPlayer = isONext ? 'O' : 'X';
const winner = calculateWinner(squares);
const statusMessage = winner ? `Winner is ${winner}` : `Current player is ${currentPlayer}`;

const handleSquareClick = (clickedPosition) => {

  if(squares[clickedPosition] || winner)
  {
      return;
  }

      setSquares((currentSquares) => {
          return currentSquares.map((squareValue, position) => {
              if(clickedPosition == position)
              {
                  return isONext ? 'O' : 'X';
              }
              return squareValue;
          })
      })
      setIsONext((currentIsONext) => !currentIsONext);
  } 

  


  return (
    <div className="app">
      <h1>{statusMessage}</h1>
      <Board className="board" squares = {squares} handleSquareClick = {handleSquareClick}/>
    </div>
  )
}

export default App
