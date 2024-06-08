export function Code(size,grid){
  function solveSudoku(grid) {
    function isSafe(i,j,x,grid) {
        for(let k=0;k<=size-1;k++){
            if (grid[i][k] === x || grid[k][j]===x) {
                return false;
            }  
        }
        let root = Math.sqrt(size);
        let ri=i-i%root;
        let ci=j-j%root;

        for(let l =0;l<=(root-1);l++){
            for(let m =0;m<=(root-1);m++){
                if (grid[l+ri][m+ci]===x) return false;
            }
        }
        return true;
        }

        let i=-1;
        let j=-1;

        let isEmpty=false;

        for(let r=0;r<=size-1;r++){
            for(let c=0;c<=size-1;c++){
                if (grid[r][c] === ''){
                    isEmpty=true;
                    i=r;
                    j=c;
                    break;
                }
            }
            if(isEmpty) break;
        }
        if(!isEmpty) return true;

        for(let x=1;x<=size;x++){
            if(isSafe(i,j,x,grid)){
                grid[i][j]=x;
                if(solveSudoku(grid)) return true;

                grid[i][j]='';
            }
        }
        return false;
    }
    solveSudoku(grid);
    return grid;
  }

// if(solveSudoku(grid)){
//     // console.log('Sudoku solved! :');
//     return printGrid(grid);
// }
// export function printGrid(grid){
//     return grid.map(row => row.join(' ')).join('\n');
//     }
