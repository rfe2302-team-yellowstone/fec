import React from 'react'
import { useLayoutEffect, useState } from 'react'
import OldFaithfulLastEruption from '../announcements/OldFaithfulLastEruption.jsx'
export default function Search({ handleSearch, cartLength }) {



  return (
    <div className="flex gap-2">
      <OldFaithfulLastEruption />
      <div className="flex-1 justify-self-end form-control">
        <input type="text" placeholder="Search" className="input input-bordered" onKeyDown={handleSearch} />
      </div>
      {/* <div className="dropdown dropdown-end"> */}

        <div className="indicator">
          {(cartLength > 0) && <span className="indicator-item indicator-bottom badge badge-secondary right-[20%] bg-green-800 border-green-800">{cartLength}</span>}
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/favicon/favicon.ico" />

            </div>
          </label>

          {/* <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div> */}
        </div>

        {/* <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul> */}
      {/* </div> */}
    </div>
  )
}