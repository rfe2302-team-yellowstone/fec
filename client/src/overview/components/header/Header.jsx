import React from 'react'
import { useState } from 'react'
import Search from './Search.jsx'
import Logo from './Logo.jsx'

export default function Header ({quickLinks}) {


  return (
      <header className="navbar bg-tahiti-100 flex sticky top-0 z-50" >
        <Logo quickLinks={quickLinks}/>
        <Search />
      </header>
  )
}