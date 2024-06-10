
const Faulty = (grid,i,j,size,x) => {
        for(let k=0;k<=size-1;k++){
            if (k!==j && grid[i][k] === x) {
                console.log(i,k,grid[i][k])
                return false;
            }  
        }

        for(let k=0;k<=size-1;k++){
            if (k!==i && grid[k][j]===x) {
                console.log(k,j,grid[k][j])
                return false;
            }  
        }
        let root = Math.sqrt(size);
        let ri=i-i%root;
        let ci=j-j%root;

        for(let l =0;l<=(root-1);l++){
            for(let m =0;m<=(root-1);m++){
                if ((l+ri)!==i && (m+ci)!==j && grid[l+ri][m+ci]===x) {
                    console.log(grid[l+ri][m+ci]);
                    return false;
                }
            }
        }
        return true;
        }

export default Faulty