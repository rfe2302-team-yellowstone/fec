import React from 'react'
export default function Logo ({quickLinks}) {

  return (
    <>
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} >
          <span className="btn m-1 font-sans font-bold text-4xl">GYSR</span>
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          {
            quickLinks.map((link, i) => {
              return (
                <li key={i}><a>{link}</a></li>
              )
            })
          }
        </ul>

      </div>
      <span className='italic flex-1 self-end pb-1 text-xl'> .now </span>
    </>
  )
}