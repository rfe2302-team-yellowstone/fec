import React from 'react'
import { useState } from 'react'
import ImageViewer from './ImageViewer.jsx'
import IconCarousel from './IconCarousel.jsx'
import FullScreenModal from './FullScreenModal.jsx'

export default function Gallery ({currentStyle}) {

  const [fullScreenMode, setFullScreenMode] = useState(false)

  return (
    <div className='w-full xl:w-1/2 grid justify-items-center items-center'>

      {/* <FullScreenModal currentStyle={currentStyle} fullScreenMode={fullScreenMode} setFullScreenMode={setFullScreenMode}/> */}
      <ImageViewer currentStyle={currentStyle} fullScreenMode={fullScreenMode} setFullScreenMode={setFullScreenMode}/>
      <IconCarousel currentStyle={currentStyle}/>
    </div>
  )
}