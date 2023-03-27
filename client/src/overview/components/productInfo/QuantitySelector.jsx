import { current } from '@reduxjs/toolkit'
import React from 'react'

export default function QuantitySelector ({sizes, currentSize, handleQuantityChange, currentQuantity, quantityMax}) {

  // console.log('current max: ', quantityMax)
  console.log('current size:', currentSize)

  // if currentSize === 'Select size'

  return (

    <div id='overview-quantity-selector' className={`dropdown dropdown-bottom flex flex-col items-center `}>
      <p>Quantity</p>
      <button tabIndex={0} disabled={(currentSize === 'Select Size')} className='btn m-1 w-36' onClick={e => e.preventDefault()}>
        {currentQuantity}

        <ul name="size" tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box overflow-y-hidden h-48">
        {
          // Create a quick range from 0 to the max
          [...Array(quantityMax).keys()].map((i) => {
            return (<li key={i} onClick={handleQuantityChange} className="text-slate-800 flex-none"><a>{i + 1}</a></li>)
          })
        }
      </ul>
      </button>

    </div>

  )
}