import React from 'react'
import Description from './Description.jsx'
import Features from './Features.jsx'

export default function ProductInfo ({product}) {

  return (
    <div className='flex basis-1/2 border-t-2 border-t-slate-600 border-b-2 border-b-slate-600 pt-4 pb-4 mt-4 mb-4'>
      <Description product={product}/>
      <Features features={product.features}/>
    </div>
  )
}