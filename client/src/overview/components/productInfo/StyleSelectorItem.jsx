import React from 'react'

export default function StyleSelectorItem ({i, style, currentStyle, setCurrentStyle, handleStyleChange}) {

  // console.log('styleselectitem', style)
  // console.log('styleselectitemid', style.style_id)
  return (
    <button
      aria-pressed={(currentStyle.name === style.name)}
      onClick={handleStyleChange}
      aria-label={style.name}
      className={`avatar cursor-pointer basis-1/5 hover:scale-110 hover:drop-shadow-[0_12px_12px_rgba(0,0,0,0.25)] ${(currentStyle.name === style.name) && 'scale-110 drop-shadow-[0_8px_4px_rgba(0,0,0,0.25)]'}`}
    >

      <div className={`w-24 lg:w-28 3xl:w-32 rounded-full`}>
        <img src={style.photos[0]['thumbnail_url']} title={style.name} data-index={i} />
      </div>
    </button>

  )
}