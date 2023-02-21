import './styles.scss'
import {useState} from 'react'
import Board from './components/Board'
import { calculateWinner } from './winner';
import StatusMessage from './components/statusMessage';


function App() {
  
const [squares, setSquares] = useState(Array(9).fill(null));
const [isONext, setIsONext] = useState(false);

const winner = calculateWinner(squares);
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
      <StatusMessage winner={winner} isONext={isONext} squares={squares} />
      <Board className="board" squares = {squares} handleSquareClick = {handleSquareClick}/>
    </div>
  )
}

export default App
