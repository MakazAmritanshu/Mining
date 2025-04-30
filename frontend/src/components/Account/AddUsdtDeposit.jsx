import React,{useState} from 'react'
import {FaRupeeSign,FaPenFancy,FaDollarSign } from "react-icons/fa"
import usdticon from "../../assets/icon/usdticon.webp"
import Btn from '../Btn'
const AddUsdtDeposit = ({onSubmit}) => {
  const [usdtAmount , setUsdtAmount]=useState("")

  const presentAmount= [
    "10","50","100",
    "500","1k","50k",
  ]

  const handlePresentClick =(value)=>{
    setUsdtAmount(value)
  }
  const handleSubmit = () => {
    if (onSubmit) onSubmit(usdtAmount)
  }

  return (
    <div className='bg-white items-center justify-center p-4 rounded-3xl  mt-4 mx-4 shadow-lg'>
      <div className='flex items-center gap-2 text-xl font-semibold'>
        <FaPenFancy className=''/>
        <span>Deposit  amount</span>
      </div>

      <div className='grid grid-cols-3 gap-2 mb-4 mt-4'>
       { presentAmount.map((amt,idx)=>(
          <button
          key={idx} 
          className='bg-[#13B8A7] p-3 rounded-md font-semibold text-white'
          onClick={()=>handlePresentClick(amt)}>
          <div className='flex  gap-2'>
          <img src={usdticon} alt="" className='w-5 h-5'/> {amt}
          </div>
          </button>
        ))}
        
      </div>
      {/* <hr className=' border-[#13B8A7]' /> */}
      {/**manual input */}
      <div className=' py-2 flex items-center gap-2 bg-[#EAEBED] rounded-3xl p-4'>
        <FaDollarSign className='text-[#13B8A7] h-5 w-5'/>
        <input type="number" 
        className='flex bg-transparent outline-none placeholder:text-gray-400 w-xl'
        placeholder='Please enter the amount'
        value={usdtAmount}
        onChange={(e)=>setAmount(e.target.value)}
        />
       </div>
       {/* <hr className=' border-[#13B8A7]' /> */}
      {/**amount in rupee */}
      <div className=' py-2 flex items-center gap-2 bg-[#EAEBED] rounded-3xl p-4 mt-4 '>
        <FaRupeeSign className='text-[#13B8A7] h-5 w-5'/>
        <input disabled type="number" 
        className='flex bg-transparent outline-none placeholder:text-gray-400 w-xl'
        placeholder='Please enter the amount'
        value={usdtAmount *93.00}
        onChange={(e)=>setUsdtAmount(e.target.value)}
        />
       </div>
       <div onClick={handleSubmit}>
        <Btn title="Submit" />
      </div>
    </div>
  )
}

export default AddUsdtDeposit