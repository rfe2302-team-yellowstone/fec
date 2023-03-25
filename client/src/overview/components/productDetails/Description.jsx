import React from 'react'
export default function Description ({product}) {

  return (
    <div className='flex-1 mr-8 ml-4 text-center'>
      <p className="text-2xl font-bold">{product.slogan}</p>
      <p>{product.description}</p>
    </div>
  )
}