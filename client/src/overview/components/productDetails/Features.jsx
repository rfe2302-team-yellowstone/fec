import React from 'react'
export default function Features ({features}) {

  return (
    <div className='flex-1 mr-4 ml-4'>
      <ul>
        {
          features.map((feature, i) => {
            return (
              <li key={i}>
                <span className='font-bold text-m'> {`${feature.feature}: `}</span>
                <span className='italic text-m'> {feature.value}</span>

              </li>
            )
          })
        }
      </ul>
    </div>

  )
}