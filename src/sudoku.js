
export function solveSudoku(grid) {
    function isSafe(i,j,x,grid) {
        for(let k=0;k<=8;k++){
            if (grid[i][k] === x || grid[k][j]===x) {
                return false;
            }  
        }

        let ri=i-i%3;
        let ci=j-j%3;

        for(let l =0;l<=2;l++){
            for(let m =0;m<=2;m++){
                if (grid[l+ri][m+ci]===x) return false;
            }
        }
        return true;
        }

        let i=-1;
        let j=-1;

        let isEmpty=false;

        for(let r=0;r<=8;r++){
            for(let c=0;c<=8;c++){
                if (grid[r][c] === '__'){
                    isEmpty=true;
                    i=r;
                    j=c;
                    break;
                }
            }
            if(isEmpty) break;
        }
        if(!isEmpty) return true;

        for(let x=1;x<=9;x++){
            if(isSafe(i,j,x,grid)){
                grid[i][j]=x;
                if(solveSudoku(grid)) return true;

                grid[i][j]='__';
            }
        }
        return false;
    }

// if(solveSudoku(grid)){
//     // console.log('Sudoku solved! :');
//     return printGrid(grid);
// }
// export function printGrid(grid){
//     return grid.map(row => row.join(' ')).join('\n');
//     }
export function printGrid(grid) {
    return (
      <div>
        {grid.map((row,rowInd) => (
          <div key={rowInd} className="grid-row">
            {row.map((cell,cellInd) => (
              <span key={cellInd} className={cell === '_' || cell === '__' ? 'green-cell': ''}>
                {cell}
              </span>
            ))}

          </div>
        ))}
      </div>
    );
  }
