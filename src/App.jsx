import './styles.scss'
import {useState} from 'react'
import Board from './components/Board'
import { calculateWinner } from './winner';
import StatusMessage from './components/StatusMessage';
import GameHistory from './components/GameHistory';

const NEW_GAME =[ {squares: Array(9).fill(null), isONext : false}];

function App() {

  const [history, setHistory] = useState(NEW_GAME)
  const [currentMove, setCurrentMove] = useState(0)
    
  const gamingBoard = history[currentMove];

  const {winner, winningSquares} = calculateWinner(gamingBoard.squares);

  console.log(history, currentMove);

  const handleSquareClick = (clickedPosition) => {

    if(gamingBoard.squares[clickedPosition] || winner)
    {
        return;
    }

        setHistory((currentHistory) => {
          const isTraversing = currentMove + 1 !== currentHistory.length;
          
          const lastGamingState = isTraversing
          ? currentHistory[currentMove]
          : currentHistory[currentHistory.length - 1];

          const nextSquareState = lastGamingState.squares.map((squareValue, position) => {
              if(clickedPosition == position)
              {
                  return lastGamingState.isONext ? 'O' : 'X';
              }
              return squareValue;
          })
          const base = isTraversing 
            ? currentHistory.slice(0,currentHistory.indexOf(lastGamingState) + 1)
            : currentHistory;

          return base.concat({
            squares: nextSquareState, 
            isONext : !lastGamingState.isONext})
        })
        
        setCurrentMove(move => move+1)
    } 

    const moveTo = move => {
      setCurrentMove(move);
    }

    const onNewGameStart = () =>{
      setHistory(NEW_GAME);
      setCurrentMove(0);
    }
    
  //   

    return (
      <div className="app">
        <h1>Tic <span className='text-orange'>Tac</span> Toe</h1>
        <StatusMessage winner={winner} gamingBoard={gamingBoard} />
        <Board className="board" 
          squares = {gamingBoard.squares} 
          handleSquareClick = {handleSquareClick}
          winningSquares={winningSquares}
        />
        <button 
          type='button' 
          onClick={onNewGameStart}
          className={`btn-reset ${ winner ? 'active' : ''}`}>
          Start new game!
          </button>
        <h2 style={{
          fontWeight: 'normal',
        }}>Game history</h2>
        <GameHistory history = {history} moveTo={moveTo} currentMove={currentMove} />
        <div className='bg-balls'/>
      </div>
    )
}

export default App
