import React from 'react'
import { useState, useEffect } from 'react'
import Search from './Search.jsx'
import LogoDropdown from './LogoDropdown.jsx'

export default function Header ({quickLinks, handleSearch, calculateHeaderHeight, cartLength}) {

  useEffect(() => {calculateHeaderHeight()}, [])

  return (
      <header id='header' className="navbar bg-tahiti-100 flex sticky top-0 z-50 drop-shadow-[0_5px_3px_rgba(0,0,0,0.25)]" >
        <LogoDropdown quickLinks={quickLinks}/>
        <Search handleSearch={handleSearch} cartLength={cartLength}/>
      </header>
  )
}