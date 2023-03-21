import React from 'react'
import ImageCarouselItem from './ImageCarouselItem.jsx'

export default function ImageCarousel ({currentStyle}) {


  return (

    (Object.keys(currentStyle).length > 0) &&

    <div className="carousel w-full" >
      {
        currentStyle.photos.map((photo, i) => {
          return (
            <ImageCarouselItem key={i} i={i} photos={currentStyle.photos}/>
          )

        })
      }
    </div>

  )
}