import React, { useState } from 'react'
import Qrgenerator from '../QrGenerator/Qrgenerator'
import {FaRupeeSign,FaPenFancy,FaDollarSign } from "react-icons/fa"
import Logout from '../Logout'
import Btn from '../Btn'
const UpiDeposit = ({amount}) => {
  const [utr,setUTR]=useState("")
  return (
    <div className='bg-white items-center justify-center p-4 rounded-3xl  mt-4 shadow-lg mx-4'>
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Make a Payment</h1>
      <Qrgenerator
        amountt={amount}
      />
    </div>
    <hr />
    <div>
      <div className=' py-2 flex items-center gap-2 bg-[#EAEBED] rounded-3xl p-4 mt-4'>
              <FaDollarSign className='text-[#13B8A7] h-5 w-5'/>
              <input disabled type="number" 
              className='flex bg-transparent outline-none placeholder:text-gray-400 w-xl'
              value={amount}
              />
             </div>
             {/* <hr className=' border-[#13B8A7]' /> */}
            {/**amount in rupee */}
            <div className=' py-2 flex items-center gap-2 bg-[#EAEBED] rounded-3xl p-4 mt-4 '>
              <FaPenFancy className='text-[#13B8A7] h-6 w-6'/>
              <input type="text" 
              className='flex bg-transparent outline-none placeholder:text-gray-400 w-xl'
              placeholder='Please enter the UTR'
              value={utr}
              onChange={(e)=>setUTR(e.target.value)}
              />
             </div>
             <Btn title="Send request"/>
             
    </div>
    </div>
  )
}

export default UpiDeposit