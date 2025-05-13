import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function DepositFund() {
    const handlesubmit= async(e)=>{
    }
    const handlecancle= async(e)=>{
    }
  return (
    <div>
        <div className='bg-[#79bfbf]   m-4 flex flex-col w-sm p-4 rounded-xl shadow-xl/30'>
        <div className='flex  gap-5'>
            <div className='flex flex-col'>
                <span className='text-xl'>Mobile Number</span>
                <input
                // value={user.JoinDate}
                className='bg-white p-2 rounded-sm w-full mt-2'
                 type="text" />
            </div>
            <div className='flex flex-col'>
                <span className='text-xl'>UTR Number</span>
                <input 
                // value={user.Mobile}
                 className='bg-white p-2 rounded-sm w-full mt-2'
                 type="text" />
            </div>

        </div>
        <div className='flex  gap-5 mt-4'>
            <div className='flex flex-col'>
                <span className='text-xl'>Transfer Amount</span>
                <input
                // value={user.Wallet}
                className='bg-white p-2 rounded-sm w-full mt-2'
                 type="text" />
            </div>
            <div className='flex flex-col'>
                <span className='text-xl'>Confirm Amount</span>
                <input 
                // readOnly
                 className='bg-white p-2 rounded-sm w-full mt-2'
                 type="text" />
            </div>
        </div>

        
        <button 
        // onClick={handlesubmit}
        className='w-full bg-[#009494] p-2 rounded-2xl mt-4 font-semibold text-white text-2xl cursor-pointer'>Transfer Funds</button>
        <button 
        // onClick={handlecancle}
        className='w-full bg-[#009494] p-2 rounded-2xl mt-4 font-semibold text-white text-2xl cursor-pointer'>Cancel</button>
        <ToastContainer />
    </div>
    </div>
  )
}

export default DepositFund