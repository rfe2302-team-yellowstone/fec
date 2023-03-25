import React from 'react'
import FacebookLogo from '../../../assets/facebook.svg'
import TwitterLogo from '../../../assets/twitter.svg'
import PinterestLogo from '../../../assets/pinterest.svg'
import ShareLogo from '../../../assets/share.svg'

export default function SocialLinks () {

  return (
    <div className='flex flex-row items-center space-x-2 mr-4 ml-4'>

      <div id='facebook-inline-button' className="btn btn-circle">
        <a href="https://www.facebook.com/sharer/sharer.php?u=sup/" title='Share on Facebook'>
          <img src={FacebookLogo} ></img>
        </a>
      </div>

      <div id='twitter-inline-button' className="btn btn-circle p-2">
        <a href="https://twitter.com/intent/tweet?text=sup/" title='Share on Twitter'>
          <img src={TwitterLogo} ></img>
        </a>
      </div>

      <div id='pinterest-inline-button' className="btn btn-circle p-2">
        <a href="https://pinterest.com/" title='Share on Pinterest'>
          <img src={PinterestLogo} ></img>
        </a>
      </div>

      <div id='share-inline-button' className="btn btn-circle p-2">
        <a title='Copy Link'>
          <img src={ShareLogo} ></img>
        </a>
      </div>
    </div>

  )
}