import React from 'react'
export default function Logo ({quickLinks}) {

  return (
    <div className="dropdown dropdown-hover flex-1">
      <label tabIndex={0} className="btn m-1 font-sans font-bold text-4xl">
        GYSR
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
  )
}