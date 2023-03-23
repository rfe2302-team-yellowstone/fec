import React from 'react'
import { useState, useEffect } from 'react'
import ExpandButton from './ExpandButton.jsx'

export default function ImageViewerItem ({photos, i, fullScreenMode, setFullScreenMode, currentIndex, setCurrentIndex, changeImage}) {

  // Simple state variable to show or hide expand button when you hover over image
  //    'none' = hide
  //    'block' = show

  const [expandStyle, setExpandStyle] = useState({display: 'none'})

  let prefix;
  if (fullScreenMode) {
    prefix = 'fs'
  } else {
    prefix = ''
  }

  // console.log('prefix', prefix)

  const handleImageClick = (event) => {
    event.preventDefault()

    if (event.target.id === 'next-button') {
      changeImage(currentIndex + 1)
    } else {
      changeImage(currentIndex - 1)
    }
  }


  return (
    <div
      id={`${prefix}slide-img-${i}`}
      className="carousel-item relative w-full h-fit grid justify-items-center items-center"
      onMouseEnter={() => setExpandStyle({display:'block'})}
      onMouseLeave={() => setExpandStyle({display:'none'})}
    >
      <img src={photos[i].url} id={`${prefix}slide-img-img${i}`} className="w-4/6 self-center" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
        {
          // Prev button
          (i === 0) && <a href={`#`} id='prev-button-hidden' className="btn btn-circle bg-transparent border-transparent" >❮</a> ||
          (i !== 0) && <a href={`#`} id='prev-button' className="btn btn-circle" onClick={handleImageClick}>❮</a>
        }
        {
          // Next button
          (i !== (photos.length -1)) && <a href={`#`} id='next-button' className="btn btn-circle" onClick={handleImageClick}>❯</a>
        }

      </div>
      <ExpandButton expandStyle={expandStyle} fullScreenMode={fullScreenMode} setFullScreenMode={setFullScreenMode}/>
    </div>
  )
}