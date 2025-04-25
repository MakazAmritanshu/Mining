import React from 'react'
import { useNavigate } from 'react-router-dom'
const History = () => {
  const navigate=useNavigate()
  return (
    <div className="flex  justify-between mt-4">
        <div className="flex  bg-white justify-center items-center  rounded-lg mx-4 w-40 gap-1 p-2 cursor-pointer"
        onClick={()=>navigate('/deposithistory')}>
            <img src="..\src\assets\icon\deposit.png" alt="deposit" className='w-10 h-10' />
            <h3 className='text-[15px] text-gray-700 font-semibold'>Deposit History</h3>
        </div>
        <div className="flex  bg-white justify-center items-center  rounded-lg mx-4 w-40 gap-1 p-2 cursor-pointer"
        onClick={()=>navigate('/withdrawhistory')}>
        <img src="..\src\assets\icon\withdraw-history.png" alt="withdraw" className='w-10 h-10' />
        <h3 className='text-[15px] text-gray-700 font-semibold'>Withdraw History</h3>
        </div>
    </div>
  )
}

export default History