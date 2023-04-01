import React from 'react'

export default function SectionHeader ({caption, idName, headerHeight}) {

  return (
    <h4 className='relative font-bold text-xl justify-self-start pl-2 flex-none self-start text-gray-700 invisible '>
      <span id={idName} className='absolute' style={{top: headerHeight}}> </span>
      {caption}
    </h4>
  )
}