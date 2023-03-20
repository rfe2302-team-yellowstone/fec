import React from 'react'

export default function SizeSelector ({sizes}) {

  console.log('Sizes: ', sizes)
  return (
    <div className="dropdown dropdown-bottom flex-none">
      <label tabIndex={0} className="btn m-1">Select size</label>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        {
          Object.keys(sizes).map((size) => {
            return (<li><a>{size}</a></li>)
          })
        }
      </ul>
    </div>
  )
}