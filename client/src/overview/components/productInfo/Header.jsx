import React from 'react'
import { useState, useEffect } from 'react'
export default function Header ({product, currentStyle}) {

  const [currentPrice, setCurrentPrice] = useState(0)


  // Calculate the current price based on the selected style
  useEffect(() => {
    let price = currentStyle.sale_price ? currentStyle.sale_price : currentStyle.original_price

    setCurrentPrice(price)
  }, [currentStyle])


  return (
    <div className='flex-1'>
      <p className="text-m" > {product.category} </p>
      <p className="text-3xl font-semibold" > {product.name} </p>
      { (!!currentPrice) && // don't render any prices until we calculate a price (don't want to show undefined to user)
        <p >
        {
          (!!currentStyle.sale_price) &&
          <span className="text-s  italic text-red-800 line-through">
          {`$${currentStyle.original_price}`}
          </span>
        }
        <span>
         {`  $${currentPrice}`}
        </span>
      </p>
}
    </div>

  )
}