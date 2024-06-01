import React, {useState,useEffect} from 'react'

export const Solve= ({grid}) => {
    const [data, setData] = useState({});
    useEffect(() => {
        setData(Map(grid));
    }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount in class components

    const Map = (grid) => {
        // if (!Array.isArray(grid)) {
        //     console.error('Grid must be an array.');
        //     return {};
        // }
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
                    <span key={key} className={cell === '' ? 'green-cell' : 'normal-cell'}>
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

    useEffect(() => {
        printGrid(data);
    },[data]);

    const changeData = () => {
        const newData = {...data};
        newData[0]='X';
        setData(newData);
    }

    return(
        <>
        <div>{printGrid(data)}</div>
        <button onClick={changeData}>Change Data</button>
        </>
    )

}

