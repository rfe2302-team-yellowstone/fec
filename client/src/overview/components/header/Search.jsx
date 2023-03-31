import React from 'react'
import OldFaithfulLastEruption from '../announcements/OldFaithfulLastEruption.jsx'
export default function Search ({handleSearch}) {

  return (
    <div className="flex gap-2">
      <OldFaithfulLastEruption />
      <div className="flex-1 justify-self-end form-control">
        <input type="text" placeholder="Search" className="input input-bordered" onKeyDown={handleSearch}/>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="/images/favicon/favicon.ico" />
          </div>
        </label>
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
      </div>
    </div>
  )
}