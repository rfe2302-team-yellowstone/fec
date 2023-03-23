import React from 'react'
import { useState } from 'react'
import ExpandButton from './ExpandButton.jsx'

export default function ImageViewerItem ({photos, i}) {

  // Simple state variable to show or hide expand button when you hover over image
  //    'none' = hide
  //    'block' = show

  const [expandStyle, setExpandStyle] = useState({display: 'none'})

  return (
    <div id={`slide${i}`}
      className="carousel-item relative w-full grid justify-items-center items-center"
      onMouseEnter={() => setExpandStyle({display:'block'})}
      onMouseLeave={() => setExpandStyle({display:'none'})}
    >
      <img src={photos[i].url} className="w-4/6" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
        {
          // Prev button
          (i === 0) && <a href={`#slide${i}`} className="btn btn-circle bg-white border-white">❮</a> ||
          (i !== 0) && <a href={`#slide${i-1}`} className="btn btn-circle">❮</a>
        }
        {
          // Next button
          (i !== (photos.length -1)) && <a href={`#slide${i+1}`} className="btn btn-circle">❯</a>
        }

      </div>
      <ExpandButton expandStyle={expandStyle}/>
    </div>
  )
}