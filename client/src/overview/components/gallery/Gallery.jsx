import React from 'react'
import { useState, useEffect } from 'react'
import ImageViewer from './ImageViewer.jsx'
import IconCarousel from './IconCarousel.jsx'

export default function Gallery ({currentStyle, fullScreenMode, setFullScreenMode, currentIndex, setCurrentIndex, changeImage, handleNavigationOnClick}) {

  const prefix='n-'

  return (
    <div className='w-full xl:w-2/3 grid justify-items-center items-center'>

      <ImageViewer
        currentStyle={currentStyle}
        fullScreenMode={fullScreenMode}
        setFullScreenMode={setFullScreenMode}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        changeImage={changeImage}
        idPrefix={'n-'}
        handleNavigationOnClick={handleNavigationOnClick}

      />

      <IconCarousel
        currentStyle={currentStyle}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        changeImage={changeImage}
        idPrefix={'n-'}
      />
    </div>
  )
}