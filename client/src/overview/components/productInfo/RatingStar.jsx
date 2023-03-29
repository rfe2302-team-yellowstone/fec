import React from 'react'
import Star from '../../../assets/star.svg'

export default function OverallRatingPlaceholder ({i}) {

  return (
    <a title={`Star ${i}`}>
      <img src={Star} className='h-8'></img>
    </a>
  )
}