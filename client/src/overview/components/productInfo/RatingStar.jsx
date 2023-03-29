import React from 'react'
import Star from '../../../assets/star.svg'
import HalfStar from '../../../assets/half-star.svg'

export default function OverallRatingPlaceholder ({i, ratingRemaining}) {

  return (
    <a title={`Star ${i}`} >
      {(ratingRemaining >= 1) && <img src={Star} className='h-8' ></img>}
      {(ratingRemaining < 1) && (ratingRemaining >= 0.5) && <img src={HalfStar} className='h-8' ></img>}
    </a>
  )
}