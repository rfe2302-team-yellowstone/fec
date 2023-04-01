import React from 'react'
import { useState, useEffect } from 'react'
import ImageViewer from './ImageViewer.jsx'
import NavigationButtons from './NavigationButtons.jsx';
import PanAndZoomImage from './PanAndZoomImage.jsx'
//import './zzmagStyles.css'



export default function FullScreenModal ({currentStyle, fullScreenMode, setFullScreenMode, currentIndex, setCurrentIndex, changeImage, idPrefix, handleNavigationOnClick}) {


  //const [showModal, setShowModal] = React.useState(false);
  // useEffect(() => {
  //   setTimeout(()=> changeImage(currentIndex, 'fs-'),10)
  // }, [fullScreenMode])
  const [index, setIndex] = useState(currentIndex)

  const handleFSNavigationOnClick = (event) => {
    event.preventDefault()

    if (event.target.id.indexOf('next-button') >= 0) {
      console.log(idPrefix, ' + ', index)
      setIndex(index + 1)
    } else {
      console.log(idPrefix, ' - ', currentIndex)
      setIndex(index - 1)
    }
  }

  const onCloseClick = (event) => {
    event.preventDefault()

    setFullScreenMode(false)
    setIndex(currentIndex)
  }


  useEffect(() => {
    setIndex(currentIndex)
  }, [currentIndex] )

  return (
    <>

      {/* Full window of modal */}
      {fullScreenMode ? (
        <div className='grid transition-all duration-500'>
          {/* Translucent Background */}
          <div id='fs-translucent-background'
            className="opacity-25 fixed inset-0 z-40 bg-black"
            onClick={() => setFullScreenMode(false)}
          >

          </div>

          <div
            id='full-screen-modal'
            className="max-h-none overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none grid mt-4 mb-4"
          >
            {/* White box*/}
            <div id='fs-white-window' className="relative max-w-none max-h-none h-[95%] w-[95%] justify-self-center">

              {/* Content */}
              <div id='fs-image-viewer-carousel' className="flex flex-col justify-end border-0 rounded-lg shadow-lg relative  bg-white outline-none focus:outline-none h-95% p-[20px]">

                <div id='fs-close-button' className="flex justify-end rounded-b">
                  <button
                    className="text-slate-800 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={onCloseClick}
                  >
                    Close
                  </button>

                </div>
                <NavigationButtons
                  i={index}
                  idPrefix={idPrefix}
                  handleNavigationOnClick={handleFSNavigationOnClick}
                  photosLength={currentStyle.photos.length}
                />


                <div id='fs-image-container' className='cursor-move z-40'>
                  <PanAndZoomImage
                    src={currentStyle.photos[index].url}
                    i={index}

                  />

                </div>

              </div>
            </div>
          </div>

        </div>
      ) : null}
    </>
  );
}


