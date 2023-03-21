import React from 'react'

export default function StyleSelectorItem ({style, setCurrentStyle}) {

  console.log('styleselectitem', style)
  console.log('styleselectitemid', style.style_id)
  return (
    <div className="avatar cursor-pointer" onClick={() => setCurrentStyle(style)} name={style.id}>
      <div className="w-32 rounded">
        <img src={style.photos[0]['thumbnail_url']} />
        {/* <img src={"https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"} /> */}
      </div>
    </div>

  )
}