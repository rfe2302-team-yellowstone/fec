import React from 'react'
import Description from './Description.jsx'
import Features from './Features.jsx'

export default function ProductInfo ({product}) {

  return (
    <div className='flex basis-1/2 border-t-2 border-t-slate-600'>
      <Description product={product}/>
      <Features features={product.features}/>
    </div>
  )
}