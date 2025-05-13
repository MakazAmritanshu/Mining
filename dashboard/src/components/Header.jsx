import React from 'react'
import { useContext } from 'react'
import { HeadContext } from '../context/HeaderContext'
function Header() {
  const {header, setHeader}= useContext(HeadContext)
  return (
    <div className='flex justify-center items-center'>
        <h1 className='text-3xl font-medium  text-white'>{header}</h1>
    </div>
  )
}

export default Header