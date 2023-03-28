import { current } from '@reduxjs/toolkit'
import React from 'react'
import { useState, useEffect } from 'react'
import NavigationButtons from './NavigationButtons.jsx'
import PanAndZoomImage from './PanAndZoomImage.jsx'

export default function ImageViewerItem ({photos, i, fullScreenMode, setFullScreenMode, currentIndex, setCurrentIndex, changeImage, idPrefix, handleNavigationOnClick}) {




  const handleImageClick = (event) => {
    event.preventDefault()

    // Set Full Screen Mode
    setFullScreenMode(true)

    // Scroll  to the correct place in the carousel
    // This is janky, but changeImage needs to wait a split second in order for the fullscreen modal to render
    // Otherwise throws an error because it's not rendered on DOM yet
    setTimeout(()=>{
      changeImage(currentIndex, 'fs-')

    })
  }

  return (
    <div
      id={`${idPrefix}slide-img-${i}`}
      className={`carousel-item relative w-full h-fit grid justify-items-center items-center ${fullScreenMode ? '' : 'cursor-zoom-in'}`}

    >
      {/* Actual image */}
      { /* Regular image */
        (!fullScreenMode) &&
        <img
          id={`${idPrefix}slide-img-img${i}`}
          src={photos[i].url}
          className={`w-4/6 self-center rounded-box ${fullScreenMode ? '' : ''}`}
          onClick={handleImageClick}
        />
      }
      { /* Full screen image w/ pan and zoom */
        (fullScreenMode) &&
        <PanAndZoomImage
          src={photos[i].url}
          i={i}

        />
      }

      <NavigationButtons
        i={i}
        idPrefix={idPrefix}
        handleNavigationOnClick={handleNavigationOnClick}
        photosLength={photos.length}
      />

    </div>
  )
}