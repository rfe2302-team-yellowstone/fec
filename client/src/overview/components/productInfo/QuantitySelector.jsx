import React from 'react'

export default function QuantitySelector ({sizes, currentSize, handleQuantityChange, currentQuantity, quantityMax}) {


  return (

    <div id='overview-quantity-selector' className={`dropdown dropdown-bottom flex flex-nowrap flex-col items-center `}>
      <p>Quantity</p>
      <button tabIndex={0} disabled={(currentSize === 'Select Size')} className='btn m-1 w-36' onClick={e => e.preventDefault()}>
        {currentQuantity}

        <ul name="size" tabIndex={0} style={{display:'inline'}} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box overflow-y-auto overflow-x-hidden max-h-[250px]">
        {
          // Create a quick range from 0 to the max
          [...Array(quantityMax).keys()].map((i) => {
            return (<li key={i} onClick={handleQuantityChange} className="text-slate-800 flex-none "><a>{i + 1}</a></li>)
          })
        }
      </ul>
      </button>

    </div>

  )
}