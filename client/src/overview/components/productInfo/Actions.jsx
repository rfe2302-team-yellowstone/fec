import React from 'react'
import AddToCartButton from '../../../assets/add-to-cart.svg'
import FacebookLogo from '../../../assets/facebook.svg'
import TwitterLogo from '../../../assets/twitter.svg'
import PinterestLogo from '../../../assets/pinterest.svg'
import ShareLogo from '../../../assets/share.svg'
import FavoriteLogo from '../../../assets/favorite.svg'

export default function Actions () {


  return (
    <div className='self-center flex flex-col items-center'>
      <p className='basis-full'> Actions </p>
      <div className='flex flex-row items-center space-x-2 '>


        <div id='add-to-cart-inline-button' className="btn">
          Add To Cart
          <img src={AddToCartButton} className='h-4 xs:h-2 sm:h-3 lg:h-5 ml-2'></img>
        </div>

        <div id='favorite-inline-button' className="btn btn-circle p-2">
          <img src={FavoriteLogo} ></img>
        </div>

        <div id='facebook-inline-button' className="btn btn-circle">
          <img src={FacebookLogo} ></img>
        </div>

        <div id='twitter-inline-button' className="btn btn-circle p-2">
          <img src={TwitterLogo} ></img>
        </div>

        <div id='pinterest-inline-button' className="btn btn-circle p-2">
          <img src={PinterestLogo} ></img>
        </div>

        <div id='share-inline-button' className="btn btn-circle p-2">
          <img src={ShareLogo} ></img>
        </div>


      </div>

    </div>
  )
}