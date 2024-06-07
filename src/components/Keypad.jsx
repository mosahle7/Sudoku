import React from 'react'

const Keypad = (changeKeypad) => {
  const check=null;

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


    
  return (
    <div>
      Choose
      {arr.map((row,rowInd) => (
        <div key={rowInd} className='grid-row'>
          {row.map((cell,cellInd) => (
            <span key={rowInd*3+cellInd+1} className='keypad-cell'
            onClick={() => {check=rowInd*3+cellInd+1}}>
              {cell}
              {/* {console.log(`Elements: ${(rowInd)*3+cellInd+1}`)} */}
            </span>
          ))}

        </div>

      ))}
    </div>
  )
}

export default Keypad