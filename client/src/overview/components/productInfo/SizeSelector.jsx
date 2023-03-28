import React from 'react'
import { useState, useEffect } from 'react'

export default function SizeSelector ({sizes, currentSize, handleSizeChange}) {

  // console.log('Sizes: ', sizes)
  // console.log('current size: ', currentSize)

  // Create a separate state variable to handle if sizes are in XS, S, M, L, XL
  // or in numeric sizes (7, 7.5, 8, 8.5, etc.)
  const [sizeSelections, setSizeSelections] = useState([])

  useEffect(() => {


    let val = Object.keys(sizes)[0]

    // Check if first value is a number.
    // If yes, we can assume all or none are numbers.
    //    - If XS, S, M, etc. - no change, just set selections to keys
    //    - If numbers, then need to sort and handle as numbers
    if (Number.isNaN(+val)) {
      setSizeSelections(Object.keys(sizes))
    } else{
      setSizeSelections(Object.keys(sizes).sort((a, b) => (a - b)))
    }


  }, [sizes])



  return (

    <div id='overview-size-selector' className="dropdown dropdown-bottom flex flex-col items-center">
      <p>Size</p>
      <label tabIndex={0} className="btn m-1 w-36">
        {currentSize}

        <ul name="size" tabIndex={0} style={{display:'inline'}} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box overflow-y-auto overflow-x-hidden max-h-[250px]">
        {
          sizeSelections.map((size, i) => {
            return (
                <li key={i} onClick={handleSizeChange} className="text-slate-800">
                  <a>
                      {size}
                  </a>
                </li>
              )
          })
        }
      </ul>
      </label>

    </div>

  )
}