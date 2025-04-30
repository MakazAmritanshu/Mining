import React,{useState} from 'react'
import {FaChevronRight } from 'react-icons/fa';
import { FaKey } from "react-icons/fa6";
import {FaRupeeSign,FaPenFancy } from "react-icons/fa"
import { BsPlusSquareDotted } from "react-icons/bs";
import { IoLogoUsd } from "react-icons/io";
import Logout from '../Logout';
import Btn from '../Btn';
import { useNavigate } from 'react-router-dom'

const usdDetail=[
    {
      "usdAddress": "1234567890"
    },
    {
      "usdAddress": "9876543210"
    },
    {
      "usdAddress": "1122334455"
    },
    {
      "usdAddress": "5566778899"
    }
  ]

const AddUsdtAccount = () => {
     const [deposit , setDeposit]=useState("")
    const navigate=useNavigate()
  return (
    <div className='flex flex-col'>
        <div className='mt-4 flex justify-center'>
            <BsPlusSquareDotted className='w-15 h-15'
            onClick={()=>navigate('/usddetails')}/>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <span>Add Address</span>
            
        </div>
        <div className="bg-white flex flex-col  p-4 rounded-3xl shadow-lg  mt-4" >
            {usdDetail.map((item,idx)=>(
              <div key={idx}
                className="flex items-center justify-between rounded-2xl  px-4 py-4 border-b hover:bg-teal-500 hover:text-black transition duration-200 "
                style={{ borderColor: '#e1e1e131' }}
              >
                <div className="flex items-center space-x-4 ">
                  <span className="text-xl font-semibold"><IoLogoUsd /></span>
                  <span className="text-xl">{item.usdAddress}</span>
                </div>
                <FaChevronRight className="text-gray-400" />
              </div>
            ))}
            {/**Withdraw Amount section */}
            <div className='mt-4'>
              <hr className=' border-[#13B8A7]' />
                  {/**manual input */}
                  <div className='mt-4 py-2 flex items-center gap-2'>
                    <FaRupeeSign className='text-emerald-500 w-7 h-7'/>
                    <input type="number" 
                    className='flex bg-transparent outline-none placeholder:text-gray-400 w-xl'
                    placeholder='Please enter the amount'
                    value={deposit}
                    onChange={(e)=>setDeposit(e.target.value)}
                    />
                  </div>
                  <div className='mt-4'>
                    <div>Withdrawable balance <span className='text-emerald-500 font-semibold'>$ 2708085.5 </span></div>
                    <hr className=' border-[#13B8A7] mt-4' />
                  </div>
                  <div className=' mt-4 flex gap-4'>
                  <FaKey className='mt-1 h-10 w-10 text-emerald-500'/>
                  <input type="text" 
                  className='bg-transparent outline-none placeholder:text-gray-400 w-xl'
                  placeholder='Enter Password'/>
                  </div>
                  <Btn title="Withdraw"/>
            </div>
        </div>
        
    </div>
  )
}

export default AddUsdtAccount