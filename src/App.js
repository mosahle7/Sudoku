import logo from './logo.svg';
import { Sudoku } from './sudoku';
import Timer from './components/Timer';
import Keypad from './components/Keypad';
import './App.css';

function App() {
  return(
  <div className="App">
  <header className="App-header ">
  <div className=''>
    {/* <Timer /> */}
  <Sudoku />
  {/* <Keypad /> */}
  </div>
  </header>

     
  </div>
  )
}

export default App;
