import React from 'react'
export default function Features ({features}) {

  return (
    <div className='flex-1 flex mr-4 ml-4 text-center items-center justify-center'>
      <ul className=''>
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