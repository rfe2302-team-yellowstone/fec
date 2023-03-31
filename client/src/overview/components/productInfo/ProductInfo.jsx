import React from 'react'
import { useEffect, useState } from 'react'
import Rating from './Rating.jsx'
import Header from './Header.jsx'
import StyleSelector from './StyleSelector.jsx'
import QuantitySelector from './QuantitySelector.jsx'
import SizeSelector from './SizeSelector.jsx'
import Actions from './Actions.jsx'
import AlertError from './AlertError.jsx'
import AlertSuccessMessage from './AlertSuccessMessage.jsx'

export default function ProductInfo ({product, styles, currentStyle, sizes, setCurrentStyle, handleStyleChange, rating, cartLength, setCartLength}) {

  // Test style:
  // style ID: 221064
  // product ID: 37325

  // console.log('Product Info: ', product)
  // console.log('Product id: ', product.id)
  // console.log('current style: ', currentStyle)

  const [showError, setShowError] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [currentSize, setCurrentSize] = useState('Select Size')
  const [currentQuantity, setCurrentQuantity] = useState('-')
  const [quantityMax, setQuantityMax] = useState('-')

  // Reset size and quantity when styles or sizes change
  useEffect(() => {
    setCurrentSize('Select Size')
    setCurrentQuantity('-')
    setShowError(false)
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


  const handleAddToCartSubmit = (event) => {
    event.preventDefault()

    // If size or quantity haven't been selected yet...
    if ((currentSize === 'Select Size') || (currentQuantity === '-')) {
      setShowError(true)
      setShowSuccessMessage(false)
    } else {
      setShowSuccessMessage(true)
      setShowError(false)

      // Simple incrementer for cart
      setCartLength(cartLength + 1)

      // Set timer to hide added to cart after 5 seconds
      setTimeout(setShowSuccessMessage.bind(null, false), 5000)
    }

  }




  return (
    <div  >
      <AlertSuccessMessage show={showSuccessMessage}/>
      <div className='flex-col flex flex-wrap justify-start mt-0.5'>
      <Rating rating={rating}/>
      <Header product={product} currentStyle={currentStyle}/>
      <StyleSelector
        styles={styles}
        currentStyle={currentStyle}
        setCurrentStyle={setCurrentStyle}
        handleStyleChange={handleStyleChange}
      />

      <AlertError show={showError}/>

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


        <Actions handleAddToCartSubmit={handleAddToCartSubmit}/>
        </form>
        </div>




    </div>
  )
}