import React, {useState,useEffect} from 'react'

export const Solve= ({grid,changeData}) => {
    const [data, setData] = useState({});

    useEffect(() => {
        setData(gridToMap(grid));
    }, [grid]);

    const gridToMap = (grid) => {
        const keyValueMap = {}
        grid.forEach((row,rowInd) => {
            row.forEach((cell,cellInd) => {
                const key = rowInd*grid.length+cellInd;
                keyValueMap[key]=cell;
            })
        })
        return keyValueMap;
    }

    const printGrid = (keyValueMap) => {
        const rows = [];
    
        for(let rowInd=0 ;rowInd<9; rowInd++){
            const row=[];
            for (let cellInd=0;cellInd<9;cellInd++){
                const key = rowInd * 9 + cellInd;
                const cell = keyValueMap[key];
                row.push(
                    <span 
                    key={key} 
                    className={cell === '' ? 'green-cell' : 'normal-cell'} 
                    onClick={cell === '' ? ()=>{changeData(key)} : undefined}
                    >
                    {cell}
                  </span>
                )
            }
            rows.push(
                <div key={rowInd} className="grid-row">
                  {row}
                </div>
              );
        }
        return  <div>{rows}</div>;
    
      }

    // useEffect(() => {

    //     printGrid(data);
    // },[data]);

    

    return(
        <>
        <div>{printGrid(data)}</div>
        {/* <button onClick={()=>{changeData(1)}}>Change Data</button> */}
        </>
    )

}

