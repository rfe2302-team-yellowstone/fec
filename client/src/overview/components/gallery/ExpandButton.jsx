import React from 'react'

export default function ExpandButton ({expandStyle}) {

  return (
    // <label for="my-modal-4" class="btn modal-button">
    //   open modal
    // </label>
    <label for="full-screen-modal" className='absolute top-0 right-0 btn-circle modal-button cursor-pointer' style={expandStyle}>

      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 9L21 3M21 3H15M21 3V9M9 9L3 3M3 3L3 9M3 3L9 3M9 15L3 21M3 21H9M3 21L3 15M15 15L21 21M21 21V15M21 21H15" />
      </svg>
    </label>

    // <button className='absolute top-0 right-0 btn-circle ' style={expandStyle}>
    //   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 9L21 3M21 3H15M21 3V9M9 9L3 3M3 3L3 9M3 3L9 3M9 15L3 21M3 21H9M3 21L3 15M15 15L21 21M21 21V15M21 21H15" />
    //   </svg>
    // </button>
  )
}