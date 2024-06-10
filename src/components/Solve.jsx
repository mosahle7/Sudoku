import React, {useState,useEffect, useRef} from 'react'

export const Solve= ({size,inputGrid,grid,changeData}) => {
    const [data, setData] = useState(null);
    const [selectedCell, setSelectedCell] = useState(null);
    const [num,setNum] = useState(null);
    const root=Math.sqrt(size);

   useEffect(() => {
      if(!data){
        // initialGridMap.current = gridToMap(grid);
        // setData(initialGridMap.current);
        setData(gridToMap(inputGrid,grid))
      }
   
    }, [grid,data]);



    const gridToMap = (inputGrid,grid) => {
        const keyValueMap = {}
        grid.forEach((row,rowInd) => {
            row.forEach((cell,cellInd) => {
                const key = rowInd*grid.length+cellInd;
                keyValueMap[key]={value:cell, fixed: inputGrid[rowInd][cellInd]!== ''};
            })
        })
        return keyValueMap;
    }

    const printGrid = (keyValueMap) => {
        const rows = [];
    
        for(let rowInd=0 ;rowInd<size; rowInd++){
            const row=[];
            for (let cellInd=0;cellInd<size;cellInd++){
                const key = rowInd * size + cellInd;
                if (keyValueMap[key] !== undefined) {
                const {value, fixed} = keyValueMap[key];
                row.push(
                    <span 
                    key={key} 
                    className={fixed? 'fixed-cell' : 'green-cell'} 
                    onClick={!fixed? ()=>setSelectedCell(key) : undefined}
                    >
                    {value}
                  </span>
                )
            }
            }
            rows.push(
                <div key={rowInd} className="grid-row">
                  {row}
                </div>
              );

            
        }
        return  <div>{rows}</div>;
    
      }
        //keypad
        const arr=[]
        let k=1;
        for(let i =1;i<=root;i++){
            let row=[];
            for(let j=1;j<=root;j++){
                row.push(k);
                k++;
            }
            arr.push(row)
        }

    // useEffect(() => {

    //     printGrid(data);
    // },[data]);

    useEffect(() => {
        if (selectedCell !== null && num!=null){
                changeData(selectedCell,num)
                setData((prevData) => {
                    const newData = {...prevData};
                    newData[selectedCell]={...newData[selectedCell], value:num};
                    return newData;
                })
                // setSelectedCell(null)
                setNum(null)
        }
    },[num,selectedCell,changeData])

    return(
        <>
        <div className='solveheading'>Solve:</div>
        <div className='container'>
       

          {data && printGrid(data)}
         
        

        {/* <button onClick={()=>{changeData(1)}}>Change Data</button> */}
        
        <div>
      Choose
      {arr.map((row,rowInd) => (
        <div key={rowInd} className='grid-row'>
          {row.map((cell,cellInd) => (
            <span key={rowInd*root+cellInd+1} className='keypad-cell'
            onClick={() => {
                setNum(rowInd*root+cellInd+1)
                }}>
              {cell}
              {/* {console.log(`Elements: ${(rowInd)*3+cellInd+1}`)} */}
            </span>
          ))}

        </div>

      ))}
    </div>
    </div>
        </>
    )

}

