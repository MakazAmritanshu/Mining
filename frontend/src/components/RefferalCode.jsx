import { Pointer } from 'lucide-react';
import React from 'react'
import { FaCopy } from "react-icons/fa6";

import {toast}  from 'react-toastify'
function RefferalCode({code}) {
    console.log(code)
    const handleCopy = async () => {
        try {
          await navigator.clipboard.writeText(code);
          toast.success("Copied to clipboard!")
        //   alert("Copied to clipboard!");
        } catch (err) {
          console.error("Failed to copy: ", err);
        }
      };
  return (
    <div className='flex  mt-4 rounded-3xl  p-4 bg-white justify-center items-center gap-4'>
        <h1 className='text-[15px] text-gray-700 font-semibold'>Invitation Code <span className='text-gray-400 mx-1'>{code}</span></h1>
        <FaCopy className='text-teal-500 text-xl cursor-pointer' onClick={handleCopy} />
    </div>
  )
}

export default RefferalCode