import React from 'react'
import { useState, useEffect } from 'react'
import ImageViewer from './ImageViewer.jsx'
import IconCarousel from './IconCarousel.jsx'
// import FullScreenModal from './FullScreenModal.jsx'
import FullScreenModalTwo from './FullScreenModalTwo.jsx'

export default function Gallery ({currentStyle, fullScreenMode, setFullScreenMode, currentIndex, setCurrentIndex, changeImage, handleNavigationOnClick}) {

  const prefix='n-'

  return (
    <div className='w-full xl:w-1/2 grid justify-items-center items-center'>

      {/* <FullScreenModalTwo
        currentStyle={currentStyle}
        fullScreenMode={fullScreenMode}
        setFullScreenMode={setFullScreenMode}
        currentFSIndex={currentFSIndex}
        setCurrentFSIndex={setCurrentFSIndex}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        changeImage={changeImage}
        idPrefix={'fs-'}
      /> */}


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