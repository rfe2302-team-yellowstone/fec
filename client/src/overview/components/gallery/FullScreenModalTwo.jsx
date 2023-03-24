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
        <>
          <div
            id='test0'
            className="justify-center items-center flex max-h-none overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            {/* White box*/}
            <div id='test1' className="relative max-w-none max-h-none w-[95%] h-[95%] self-center">

              {/* Content */}
              <div id='test2' className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                {/*Close Button*/}
                <div id='test3' className="flex items-center justify-end border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-slate-800 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setFullScreenMode(false)}
                  >
                    Close
                  </button>

                </div>
                {/*body*/}
                <div id='test4' className="relative ">
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
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}


