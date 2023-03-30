import React from 'react'
import { useState } from 'react'
import Search from './Search.jsx'
import LogoDropdown from './LogoDropdown.jsx'

export default function Header ({quickLinks, handleSearch}) {


  return (
      <header className="navbar bg-tahiti-100 flex sticky top-0 z-50 drop-shadow-[0_5px_3px_rgba(0,0,0,0.25)]" >
        <LogoDropdown quickLinks={quickLinks}/>
        <Search handleSearch={handleSearch}/>
      </header>
  )
}