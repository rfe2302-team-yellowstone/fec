import React from 'react'
export default function Features ({features}) {

  return (
    <div className='flex-1'>
      <ul>
        {
          features.map((feature, i) => {
            return (
              <li key={i}>
                <span className='font-bold '> {feature.feature}</span>
                <span> {feature.value}</span>

              </li>
            )
          })
        }
      </ul>
    </div>

  )
}