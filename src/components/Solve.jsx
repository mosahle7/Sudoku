import React, {useState,useEffect} from 'react'

export const Solve= ({grid,changeData}) => {
    const [data, setData] = useState({});
    const [selectedCell, setSelectedCell] = useState(null);
    const [num,setNum] = useState(null);

    useEffect(() => {
        setData(gridToMap(grid));
    }, []);



    const gridToMap = (grid) => {
        const keyValueMap = {}
        grid.forEach((row,rowInd) => {
            row.forEach((cell,cellInd) => {
                const key = rowInd*grid.length+cellInd;
                keyValueMap[key]={value:cell, fixed: cell!== ''};
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
                if (keyValueMap[key] !== undefined) {
                const {value, fixed} = keyValueMap[key];
                row.push(
                    <span 
                    key={key} 
                    className={fixed? 'fixed-cell' : (value === ''? 'green-cell':'normal-cell')} 
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
        for(let i =1;i<=3;i++){
            let row=[];
            for(let j=1;j<=3;j++){
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
                    newData[selectedCell].value=num;
                    return newData;
                })
                // setSelectedCell(null)
                setNum(null)
        }
    },[num,selectedCell,changeData])

    return(
        <>
        <div>{printGrid(data)}</div>

        {/* <button onClick={()=>{changeData(1)}}>Change Data</button> */}
        
        <div>
      Choose
      {arr.map((row,rowInd) => (
        <div key={rowInd} className='grid-row'>
          {row.map((cell,cellInd) => (
            <span key={rowInd*3+cellInd+1} className='keypad-cell'
            onClick={() => {
                setNum(rowInd*3+cellInd+1)
                }}>
              {cell}
              {/* {console.log(`Elements: ${(rowInd)*3+cellInd+1}`)} */}
            </span>
          ))}

        </div>

      ))}
    </div>
        </>
    )

}

