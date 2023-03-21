import React from 'react'
import { useEffect, useState } from 'react'
import OverallRatingPlaceholder from './OverallRatingPlaceholder.jsx'
import Header from './Header.jsx'
import StyleSelector from './StyleSelector.jsx'
import QuantitySelector from './QuantitySelector.jsx'
import SizeSelector from './SizeSelector.jsx'
import Actions from './Actions.jsx'

export default function ProductInfo ({product, styles, currentStyle, sizes, setCurrentStyle}) {

  // Test style:
  // style ID: 221064
  // product ID: 37325

  // console.log('Product Info: ', product)
  // console.log('Product id: ', product.id)
  // console.log('current style: ', currentStyle)


  const [currentSize, setCurrentSize] = useState('Select size')
  const [currentQuantity, setCurrentQuantity] = useState('-')
  const [quantityMax, setQuantityMax] = useState('-')


  let handleSizeChange = (event) => {
    event.preventDefault()
    setCurrentSize(event.target.innerHTML)
    document.activeElement.blur(); // collapses dropdown after clicking

    // Set new quantity max
    setQuantityMax(sizes[event.target.innerHTML])
  }

  const handleQuantityChange = (event) => {
    event.preventDefault()
    setCurrentQuantity(event.target.innerHTML)
    document.activeElement.blur(); // collapses dropdown after clicking

  }



  return (
    <div className='flex-1 flex-col flex' >
      <OverallRatingPlaceholder />
      <Header product={product} currentStyle={currentStyle}/>
      <StyleSelector styles={styles} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} />
      <div className='flex justify-around items-center'>
        <SizeSelector sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} handleSizeChange={handleSizeChange}/>
        <QuantitySelector sizes={sizes} currentQuantity={currentQuantity} handleQuantityChange={handleQuantityChange} quantityMax={quantityMax}/>
        <Actions />
      </div>
    </div>
  )
}