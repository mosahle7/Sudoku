import React from 'react'

const printSol = (grid) => {
  return (
    <div>
        {grid.map((row,rowInd) => (
          <div key={rowInd} className="grid-row">
            {row.map((cell,cellInd) => (
              <span key={cellInd} className={ cell === ''? 'green-cell': 'normal-cell'}>
                {cell}
                {console.log(cellInd)}
              </span>
            ))}

          </div>
        ))}
      </div>
  )
}

export default printSol