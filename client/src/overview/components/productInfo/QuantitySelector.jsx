import React from 'react'

export default function QuantitySelector ({sizes, currentSize, handleQuantityChange, currentQuantity, quantityMax}) {

  console.log('current max: ', quantityMax)

  return (

    <div className="dropdown dropdown-bottom flex-none">
      <p></p>
      <label tabIndex={0} className="btn m-1">
        {currentQuantity}

        <ul name="size" tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        {
          // Create a quick range from 0 to the max
          [...Array(quantityMax).keys()].map((i) => {
            return (<li key={i} onClick={handleQuantityChange} className="text-slate-800"><a>{i + 1}</a></li>)
          })
        }
      </ul>
      </label>

    </div>

  )
}