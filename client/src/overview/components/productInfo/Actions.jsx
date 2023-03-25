import React from 'react'
import AddToCartButton from './AddToCartButton.jsx'
// import FacebookLogo from '../../../assets/facebook.svg'

export default function Actions () {

  const socials = [
    {
      name: 'facebook',
      url: ''
    }
  ]

  return (
    <div className='self-center flex flex-col items-center'>
      <p> Actions </p>
      <AddToCartButton />

      {/* <div id='overview-facebook-link' className="btn">
        <img src={FacebookLogo} alt='Facebook Logo' />
      </div> */}

    </div>
  )
}