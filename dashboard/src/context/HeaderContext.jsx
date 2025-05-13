import React, { useState } from 'react'
import { createContext } from 'react'

export const HeadContext = createContext()

function HeaderContext({children}) {
    const [header, setHeader]= useState('Minors Mining')

    

  return (
    <HeadContext.Provider value={{header, setHeader}}>
        {children}
    </HeadContext.Provider>
  )
}

export default HeaderContext