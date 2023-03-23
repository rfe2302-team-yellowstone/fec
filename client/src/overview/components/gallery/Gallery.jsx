import React from 'react'
import ImageViewer from './ImageViewer.jsx'
import IconCarousel from './IconCarousel.jsx'
import FullScreenModal from './FullScreenModal.jsx'

export default function Gallery ({currentStyle}) {

  return (
    <div className='w-full grid justify-items-center items-center'>

      <FullScreenModal currentStyle={currentStyle}/>
      <ImageViewer currentStyle={currentStyle}/>
      <IconCarousel currentStyle={currentStyle}/>
    </div>
  )
}