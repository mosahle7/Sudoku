import { solveSudoku, printGrid} from './sudoku';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [click, setClick] = useState(false);

  const grid=[
    [4,9,6,'__','__',7,'__','__',2],
    ['__',1,8,'__','__',6,7,'__',5],
    ['__','__',3,2,'__','__',1,9,'__'],
    ['_','_',4,9,'_','_',5,'_','_'],
    [1,'_','_','_','_',3,'_',2,'_'],
    ['_',6,'_',4,1,5,3,'_','_'],
    [5,'_',1,6,'_',2,9,'_','_'],
    [6,4,9,8,'_','_','_','_',7],
    [8,2,'_','_','_',9,'_','_','_'],
]
  const inputGrid = grid;


  // const solution = solveSudoku(grid);
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
    
      <div className=''>
      <pre>{printGrid(grid)}</pre>
      {!click && <button onClick={() =>setClick(true)}>Show the answer</button>}
      {click && <button onClick={() =>setClick(false)}>Hide the answer</button>}
      {click&&solveSudoku(grid) &&
        <pre>Solved Sudoku Grid:
        {'\n\n'+printGrid(grid)}
        </pre>}
        </div>
        </header>
     
    </div>
  );
}

export default App;
