import React from 'react'
import { useEffect, useState } from 'react'
import Rating from './Rating.jsx'
import Header from './Header.jsx'
import StyleSelector from './StyleSelector.jsx'
import QuantitySelector from './QuantitySelector.jsx'
import SizeSelector from './SizeSelector.jsx'
import Actions from './Actions.jsx'

export default function ProductInfo ({product, styles, currentStyle, sizes, setCurrentStyle, handleStyleChange, rating}) {

  // Test style:
  // style ID: 221064
  // product ID: 37325

  // console.log('Product Info: ', product)
  // console.log('Product id: ', product.id)
  // console.log('current style: ', currentStyle)


  const [currentSize, setCurrentSize] = useState('Select Size')
  const [currentQuantity, setCurrentQuantity] = useState('-')
  const [quantityMax, setQuantityMax] = useState('-')

  // Reset size and quantity when styles or sizes change
  useEffect(() => {
    setCurrentSize('Select Size')
    setCurrentQuantity('-')
  }, [currentStyle])

  let handleSizeChange = (event) => {
    event.preventDefault()
    setCurrentSize(event.target.innerHTML)
    document.activeElement.blur(); // collapses dropdown after clicking

    // Set new quantity max
    setQuantityMax(sizes[event.target.innerHTML])

    // Set current quantity to 1
    setCurrentQuantity(1)
  }

  const handleQuantityChange = (event) => {
    event.preventDefault()
    setCurrentQuantity(event.target.innerHTML)
    document.activeElement.blur(); // collapses dropdown after clicking

  }




  return (
    <div className='flex-col flex flex-wrap mt-auto' >
      <Rating rating={rating}/>
      <Header product={product} currentStyle={currentStyle}/>
      <StyleSelector
        styles={styles}
        currentStyle={currentStyle}
        setCurrentStyle={setCurrentStyle}
        handleStyleChange={handleStyleChange}
      />

      <form className='flex justify-around space-x-4 mt-4'>
        <SizeSelector
          sizes={sizes}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          handleSizeChange={handleSizeChange}
        />


        <QuantitySelector
          sizes={sizes}
          currentQuantity={currentQuantity}
          currentSize={currentSize}
          handleQuantityChange={handleQuantityChange}
          quantityMax={quantityMax}
        />

        <Actions />
      </form>

    </div>
  )
}