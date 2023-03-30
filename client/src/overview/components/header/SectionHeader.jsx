import React from 'react'
import { useState, useEffect } from 'react'
import Search from './Search.jsx'
import LogoDropdown from './LogoDropdown.jsx'

export default function SectionHeader ({caption, idName, headerHeight}) {

  return (
    <h4 className='relative font-bold text-xl justify-self-start pl-2 flex-none self-start text-gray-700  '>
      <span id={idName} className='absolute' style={{top: headerHeight}}> </span>
      {caption}
    </h4>
  )
}