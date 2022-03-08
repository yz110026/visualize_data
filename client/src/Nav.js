import React from 'react'
import ReadCSVfile from './ReadCSVfile'
import FileUpload from './FileUpload'
const Nav = () => {

  return (
    <nav className='Nav'>
        <ReadCSVfile/>
        <FileUpload/>
    </nav>
  )
}

export default Nav
