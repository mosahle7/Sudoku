import React from 'react'
import { Code} from './components/code';
import { useState } from 'react';
import printSol from './components/printSol';
import { Solve } from './components/Solve';
import Keypad from './components/Keypad'
import Timer from './components/Timer';

export const Sudoku = () => {
    const [click, setClick] = useState(false);
   
  const size = 4;
  const time=<Timer />
  
//   const grid=[
//     [4,9,6,'','',7,'','',2],
//     ['',1,8,'','',6,7,'',5],
//     ['','',3,2,'','',1,9,''],
//     ['','',4,9,'','',5,'',''],
//     [1,'','','','',3,'',2,''],
//     ['',6,'',4,1,5,3,'',''],
//     [5,'',1,6,'',2,9,'',''],
//     [6,4,9,8,'','','','',7],
//     [8,2,'','','',9,'','',''],
// ]
const grid = [
  ['', '', '', ''],
  [4, 3, '', ''],
  ['', '', 4, 2],
  ['', '', '', '']
];

  const [playingGrid,setPlayingGrid] = useState([...grid.map(row => [...row])]);
  const inputGrid = [...grid.map(row => [...row])]; // Deep copy to preserve the original grid
  const solGrid = Code(size,grid);
  

  // const changeKeypad = (id) => {
  //   return id;
  // }
  const changeData = (id,value) => {
    const newPlayingGrid=[...playingGrid];
    const row=Math.floor(id/size);
    const col=id%size;
    newPlayingGrid[row][col]=value;
    setPlayingGrid(newPlayingGrid);
    // setGri(mapToGrid(data));
}
  
const areGridsEqual = (grid1,grid2) => {
  for(let i=0; i<grid1.length; i++) {
    for(let j=0; j<grid1[i].length; j++) {
      if (grid1[i][j] !== grid2[i][j]) {
        return false;
      }
    }
  }
  return true;
}

  return (
    
    
      <div className=''>
        <Timer />
      {/* <Keypad /> */}
      {!click &&
      <div>
      <Solve size={size} inputGrid={inputGrid} grid ={playingGrid} changeData={changeData} />
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
      {areGridsEqual(playingGrid,solGrid) ? <div>You win {time}!</div> : undefined}
  </div>
  );
}
