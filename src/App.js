import { solved, printGrid} from './sudoku';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [click, setClick] = useState(false);

  const grid=[
    [4,9,6,'','',7,'','',2],
    ['',1,8,'','',6,7,'',5],
    ['','',3,2,'','',1,9,''],
    ['','',4,9,'','',5,'',''],
    [1,'','','','',3,'',2,''],
    ['',6,'',4,1,5,3,'',''],
    [5,'',1,6,'',2,9,'',''],
    [6,4,9,8,'','','','',7],
    [8,2,'','','',9,'','',''],
]
  const inputGrid = [...grid.map(row => [...row])]; // Deep copy to preserve the original grid
  const solution = solved(grid);
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
    
      <div className=''>
      {!click &&
      <div>Solve:
      {printGrid(inputGrid)}
      </div>
        }
      
      {click &&
        <div>Solved Sudoku Grid:
        {printGrid(solution)}
        {console.log(solution)}
        </div>
      }

      {/* <pre>{printGrid(inputGrid)}</pre> */}
      {!click && <button onClick={() =>setClick(true)}>Show the answer</button>}
      {click && <button onClick={() =>setClick(false)}>Hide the answer</button>}
        </div>
        </header>
     
    </div>
  );
}

export default App;
