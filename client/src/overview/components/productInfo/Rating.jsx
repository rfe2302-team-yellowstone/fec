import React from 'react'
import RatingStar from './RatingStar.jsx'

export default function OverallRatingPlaceholder ({rating}) {

  const numbers = [1, 2, 3, 4, 5]
  return (
    <div className='grid grid-flow-row gap-4 mt-4 mb-4 '>
      <div name='rating' className='flex gap-4'>
        {
          numbers.map((num, i) => {
            return (
            <div className='' key={i}>
              <RatingStar i={i}/>
            </div>)

          })

        }
        <div className='w-3/4'>
          {rating}
        </div>
      </div>
    </div>
  )

}