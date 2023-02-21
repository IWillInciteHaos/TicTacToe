import './styles.scss'
import Board from './components/Board'


function App() {

//const [counter, setCount] = useState(1);

  /*const onBtnClick = ( ) => {
    console.log('Hello'); 

    setCount((currentCounter => {
      return currentCounter + 1
    }));

      <button onClick={onBtnClick}>
        Click me lovely
      </button>
      <div>{counter}</div>
  };*/

  return (
    <div className="app">
      <Board className="board"/>
    </div>
  )
}

export default App
