import React from 'react'
import StyleSelectorItem from './StyleSelectorItem.jsx'

export default function StyleSelector ({styles, currentStyle, setCurrentStyle}) {

  console.log('styleselect', styles)
  console.log('styleselect', currentStyle)

  return (
    <div>
      <h3> Styles </h3>
      <div id="styleSelector" className='grid grid-cols-4 gap-4'>
        {
          styles.map((style, i) => {
            return <StyleSelectorItem key={i} style={style} setCurrentStyle={setCurrentStyle}/>

          })
        }

      </div>

    </div>
  )
}