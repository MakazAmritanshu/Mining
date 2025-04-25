import React from 'react'
import { FaPowerOff } from 'react-icons/fa';
const Logout = ({title}) => {
  const isSubmit = title.toLowerCase() === 'submit'||'withdrawl';
  return (
    <div className='mt-4 mb-4 '>
        <button className={`w-full max-w-sm mx-auto flex items-center justify-center space-x-2 
                       border border-teal-500 font-semibold py-2 px-6 rounded-full 
                       transition duration-200
                       ${isSubmit ? 'bg-teal-500 text-black' : 'text-teal-500 hover:bg-teal-500 hover:text-black'}`}>
      {!isSubmit && <FaPowerOff />}
      <span>{title}</span>
    </button>
    </div>
  )
}

export default Logout