import React from 'react'
import { solved} from './components/code';
import { useState } from 'react';
import printSol from './components/printSol';
import { Solve } from './components/Solve';
import Keypad from './components/Keypad'

export const Sudoku = () => {
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

  const [playingGrid,setPlayingGrid] = useState([...grid.map(row => [...row])]);
  const inputGrid = [...grid.map(row => [...row])]; // Deep copy to preserve the original grid
  const solGrid = solved(grid);

  // const changeKeypad = (id) => {
  //   return id;
  // }
  const changeData = (id,value) => {
    const newPlayingGrid=[...playingGrid];
    const row=Math.floor(id/9);
    const col=id%9;
    newPlayingGrid[row][col]=value;
    setPlayingGrid(newPlayingGrid);
    // setGri(mapToGrid(data));
}
  
  return (
    
    
      <div className=''>
      {/* <Keypad /> */}
      {!click &&
      <div>Solve:
      <Solve grid ={playingGrid} changeData={changeData} />
      </div>
        }
      
      {click &&
        <div>Solved Sudoku Grid:
        {printSol(solGrid)}
        </div>
      }

      {/* <pre>{printGrid(inputGrid)}</pre> */}
      {!click && <button onClick={() =>setClick(true)}>Show the answer</button>}
      {click && <button onClick={() =>setClick(false)}>Hide the answer</button>}
  </div>
  );
}
