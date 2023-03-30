import React from 'react'
import StyleSelectorItem from './StyleSelectorItem.jsx'

export default function StyleSelector ({styles, currentStyle, setCurrentStyle, handleStyleChange}) {

  // console.log('styleselect', styles)
  // console.log('styleselect', currentStyle)

  return (
    <div className='mt-4 mb-4'>
      <h3 className='text-2xl font-semibold'> Styles </h3>
      <p className='text-m italic mb-4'> {currentStyle.name}</p>
      <div id="styleSelector" className='flex flex-wrap gap-4'>
        {
          styles.map((style, i) => {
            return <StyleSelectorItem
              key={i}
              i={i}
              style={style}
              currentStyle={currentStyle}
              setCurrentStyle={setCurrentStyle}
              handleStyleChange={handleStyleChange}
            />

          })
        }

      </div>

    </div>
  )
}