import { current } from '@reduxjs/toolkit'
import React from 'react'
import { useState, useEffect } from 'react'
import ExpandButton from './ExpandButton.jsx'

export default function ImageViewerItem ({photos, i, fullScreenMode, setFullScreenMode, currentIndex, setCurrentIndex, changeImage, idPrefix}) {

  // Simple state variable to show or hide expand button when you hover over image
  //    'none' = hide
  //    'block' = show

  const [expandStyle, setExpandStyle] = useState({display: 'none'})


  // console.log('prefix', prefix)

  const handleNavigationOnClick = (event) => {
    event.preventDefault()

    if (event.target.id.indexOf('next-button') >= 0) {
      console.log(idPrefix, ' + ', currentIndex)
      changeImage(currentIndex + 1, idPrefix)
    } else {
      console.log(idPrefix, ' - ', currentIndex)
      changeImage(currentIndex - 1, idPrefix)
    }
  }

  const handleImageClick = (event) => {
    event.preventDefault()

    // Set Full Screen Mode
    setFullScreenMode(true)

    // Scroll  to the correct place in the carousel
    // This is janky, but changeImage needs to wait a split second in order for the fullscreen modal to render
    // Otherwise throws an error
    setTimeout(()=>{
      console.log('run now!')
      changeImage(currentIndex, 'fs-')

    })
  }

  return (
    <div
      id={`${idPrefix}slide-img-${i}`}
      className={`carousel-item relative w-full h-fit grid justify-items-center items-center ${fullScreenMode ? '' : 'cursor-zoom-in'}`}
      // onMouseEnter={() => setExpandStyle({display:'block'})}
      // onMouseLeave={() => setExpandStyle({display:'none'})}
    >
      {/* Actual image */}
      <img
        id={`${idPrefix}slide-img-img${i}`}
        src={photos[i].url}
        className="w-4/6 self-center rounded-box"
        onClick={handleImageClick}
      />


      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
        {
          // Prev button
          (i === 0) && <a href={`#`} id={`${idPrefix}prev-button-hidden`}className="btn btn-circle bg-transparent border-transparent" >❮</a> ||
          (i !== 0) && <a href={`#`} id={`${idPrefix}prev-button`} className="btn btn-circle" onClick={handleNavigationOnClick}>❮</a>
        }
        {
          // Next button
          (i !== (photos.length -1)) && <a href={`#`} id={`${idPrefix}next-button`}className="btn btn-circle" onClick={handleNavigationOnClick}>❯</a>
        }

      </div>
      {/* <ExpandButton
        expandStyle={expandStyle}
        fullScreenMode={fullScreenMode}
        setFullScreenMode={setFullScreenMode}
        idPrefix={idPrefix}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      /> */}
    </div>
  )
}