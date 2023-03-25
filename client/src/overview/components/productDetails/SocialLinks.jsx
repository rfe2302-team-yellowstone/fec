import React from 'react'
import FacebookLogo from '../../../assets/facebook.svg'
import TwitterLogo from '../../../assets/twitter.svg'
import PinterestLogo from '../../../assets/pinterest.svg'
import ShareLogo from '../../../assets/share.svg'

export default function SocialLinks () {

  return (
    <div className='flex flex-row items-center space-x-2 mr-4 ml-4'>

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

  )
}