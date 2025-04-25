import React,{useState} from 'react'
import {FaRupeeSign,FaPenFancy } from "react-icons/fa"
import Logout from './Logout'
const DepositAmount = ({onSubmit}) => {
  const [amount , setAmount]=useState("")

  const presentAmount= [
    "100","300","500",
    "1k","2.5k","5k",
    "10k","25k","50k"
  ]

  const handlePresentClick =(value)=>{
    setAmount(value)
  }
  const handleSubmit = () => {
    if (onSubmit) onSubmit(amount)
  }
  return (
    <div className='bg-white items-center justify-center p-4 rounded-3xl  mt-4 shadow-lg mx-4'>
      <div className='flex items-center gap-2 text-xl font-semibold'>
        <FaPenFancy className=''/>
        <span>Deposit manaul amount</span>
      </div>

      <div className='grid grid-cols-3 gap-2 mb-4'>
       { presentAmount.map((amt,idx)=>(
          <button
          key={idx} 
          className='bg-[#13B8A7] p-3 rounded-md font-semibold text-white'
          onClick={()=>handlePresentClick(amt)}>
          ₹ {amt}
          </button>
        ))}
        
      </div>
      <hr className=' border-[#13B8A7]' />
      {/**manual input */}
      <div className=' py-2 flex items-center gap-2'>
        <FaRupeeSign/>
        <input type="number" 
        className='flex bg-transparent outline-none placeholder:text-gray-400 w-xl'
        placeholder='Please enter the amount'
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
        />
      </div>
      <div onClick={handleSubmit}>
        <Logout title="Submit" />
      </div>
    </div>
  )
}

export default DepositAmount