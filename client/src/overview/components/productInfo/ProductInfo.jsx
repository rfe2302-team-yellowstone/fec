import React from 'react'
import { useEffect, useState } from 'react'
import OverallRatingPlaceholder from './OverallRatingPlaceholder.jsx'
import Header from './Header.jsx'
import StyleSelector from './StyleSelector.jsx'
import SizeSelector from './SizeSelector.jsx'
import Actions from './Actions.jsx'

export default function ProductInfo ({product, styles, currentStyle}) {

  // Test style:
  // style ID: 221064
  // product ID: 37325

  console.log('Product Info: ', product)
  console.log('Product id: ', product.id)
  console.log('current style: ', currentStyle)




  return (
    <div className='flex-1'>
      <OverallRatingPlaceholder />
      <Header product={product} currentStyle={currentStyle}/>
      <StyleSelector styles={styles} currentStyle={currentStyle}/>
      <SizeSelector />
      <Actions />
    </div>
  )
}