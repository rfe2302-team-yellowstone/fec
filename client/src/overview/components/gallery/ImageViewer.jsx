import React from 'react'
import ImageViewerItem from './ImageViewerItem.jsx'

export default function ImageViewer ({currentStyle}) {


  return (

    (Object.keys(currentStyle).length > 0) &&

    <div className="carousel w-full" >
      {
        currentStyle.photos.map((photo, i) => {
          return (
            <ImageViewerItem key={i} i={i} photos={currentStyle.photos}/>
          )
        })
      }
    </div>

  )
}