import React from 'react'
import RatingStar from './RatingStar.jsx'

export default function OverallRatingPlaceholder ({rating}) {

  let ratingRemaining

  const numbers = [1, 2, 3, 4, 5]

  return (
    <div className='grid grid-flow-row gap-4 mt-4 mb-4 '>
      <div name='rating' className='flex gap-4'>
        {
          numbers.map((num, i) => {
            if (i === 0) {
              ratingRemaining = rating + 1
            } else {
              ratingRemaining -= 1
            }

            return (
            <div  key={i}>
              <RatingStar i={i} ratingRemaining={ratingRemaining}/>
            </div>)

          })

        }
        <div className='w-3/4 self-center'>
          {rating}
        </div>
      </div>
    </div>
  )

}