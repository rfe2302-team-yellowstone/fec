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
    <div className='flex flex-col mb-4'>
      <p className="text-l lg:text-2xl" > {product.category} </p>
      <p className="text-5xl xl:text-8xl font-semibold" > {product.name} </p>
      { (!!currentPrice) && // don't render any prices until we calculate a price (don't want to show undefined to user)
        <p >
        {
          (!!currentStyle.sale_price) &&
          <span className="text-l lg:text-2xl italic text-red-800 line-through">
          {`$${currentStyle.original_price}`}
          </span>
        }
        <span className="text-l lg:text-2xl">
         {`  $${currentPrice}`}
        </span>
        </p>
      }

    </div>

  )
}