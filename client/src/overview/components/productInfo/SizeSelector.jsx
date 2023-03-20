import React from 'react'

export default function SizeSelector ({sizes, currentSize, handleSizeChange}) {

  // console.log('Sizes: ', sizes)
  console.log('current size: ', currentSize)



  return (

    <div className="dropdown dropdown-bottom flex-none">
      <p> </p>
      <label tabIndex={0} className="btn m-1 w-40">
        {currentSize}

        <ul name="size" tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        {
          Object.keys(sizes).map((size, i) => {
            return (<li key={i} onClick={handleSizeChange} className="text-slate-800"><a>{size}</a></li>)
          })
        }
      </ul>
      </label>

    </div>

  )
}