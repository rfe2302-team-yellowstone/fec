import React from 'react'
import ImageViewer from './ImageViewer.jsx'
import IconCarousel from './IconCarousel.jsx'

export default function Gallery ({currentStyle}) {

  return (
    <div className='w-full grid justify-items-center items-center'>
      <ImageViewer currentStyle={currentStyle}/>
      <IconCarousel currentStyle={currentStyle}/>
    </div>
  )
}