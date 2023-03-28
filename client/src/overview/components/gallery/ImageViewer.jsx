import React from 'react'
import ImageViewerItem from './ImageViewerItem.jsx'

export default function ImageViewer ({currentStyle, fullScreenMode, setFullScreenMode, currentIndex, setCurrentIndex, changeImage, idPrefix, handleNavigationOnClick}) {


  return (

    (Object.keys(currentStyle).length > 0) &&

    <div
      id={`${idPrefix}image-viewer-carousel`}
      className={`carousel items-center ${fullScreenMode ? 'h-[95%]' : 'w-full lg:w-[660px]'}`}
    >
      {
        currentStyle.photos.map((photo, i) => {
          return (
            <ImageViewerItem
              key={i}
              i={i}
              photos={currentStyle.photos}
              fullScreenMode={fullScreenMode}
              setFullScreenMode={setFullScreenMode}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              changeImage={changeImage}
              idPrefix={idPrefix}
              handleNavigationOnClick={handleNavigationOnClick}
            />
          )
        })
      }
    </div>

  )
}