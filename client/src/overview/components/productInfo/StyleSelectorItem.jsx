import React from 'react'

export default function StyleSelectorItem ({style, currentStyle, setCurrentStyle}) {

  // console.log('styleselectitem', style)
  // console.log('styleselectitemid', style.style_id)
  return (
    <div className={`avatar cursor-pointer basis-1/5 hover:scale-110 hover:drop-shadow-[0_12px_12px_rgba(0,0,0,0.25)] ${(currentStyle.name === style.name) && 'scale-110 drop-shadow-[0_8px_4px_rgba(0,0,0,0.25)]'}`} onClick={() => setCurrentStyle(style)} name={style.id}>
      <div className={`w-24 lg:w-28 3xl:w-32 rounded-full`}>
        {/* {`h-24 s:h-16 rounded-s hover:drop-shadow-[0_12px_12px_rgba(0,0,0,0.25)] ${(currentIndex === i) && 'border-b-[6px] border-tahiti-100'}`} */}
        <img src={style.photos[0]['thumbnail_url']} title={style.name} />
        {/* <img src={"https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"} /> */}
      </div>
    </div>

  )
}