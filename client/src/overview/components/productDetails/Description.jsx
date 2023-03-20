import React from 'react'
export default function Description ({product}) {

  return (
    <div className='flex-1'>
      <p className="text-2xl font-bold">{product.slogan}</p>
      <p>{product.description}</p>
    </div>
  )
}