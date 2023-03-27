import React from 'react'
import { useState, useEffect } from 'react'
import ImageViewer from './ImageViewer.jsx'


export default function FullScreenModalTwo ({currentStyle, fullScreenMode, setFullScreenMode, currentIndex, setCurrentIndex, changeImage, idPrefix}) {


  //const [showModal, setShowModal] = React.useState(false);
  // useEffect(() => {
  //   setTimeout(()=> changeImage(currentIndex, 'fs-'),10)
  // }, [fullScreenMode])

  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setFullScreenMode(true)}
      >
        Open large modal
      </button> */}

      {/* Actual window of modal */}
      {fullScreenMode ? (
        <div className='grid'>
          {/* Translucent Background */}
          <div id='fs-translucent-background' className="opacity-25 fixed inset-0 z-40 bg-black">
          </div>

          <div
            id='full-screen-modal'
            className="max-h-none overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none grid"
          >
            {/* White box*/}
            <div id='fs-white-window' className="relative max-w-none max-h-none w-[95%] justify-self-center">

              {/* Content */}
              <div id='fs-content' className="border-0 rounded-lg shadow-lg relative  bg-white outline-none focus:outline-none h-95%">

                {/*Close Button*/}
                <div id='fs-close-button' className="flex justify-end border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-slate-800 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setFullScreenMode(false)}
                  >
                    Close
                  </button>

                </div>
                {/*body*/}
                <div className=''>
                  <div id='fs-image-viewer' className="relative ">
                    <ImageViewer
                      currentStyle={currentStyle}
                      fullScreenMode={fullScreenMode}
                      setFullScreenMode={setFullScreenMode}
                      currentIndex={currentIndex}
                      setCurrentIndex={setCurrentIndex}
                      changeImage={changeImage}
                      idPrefix={idPrefix}
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      ) : null}
    </>
  );
}


