import React from 'react'
import Btn from '../../components/Btn'
function FundTransfer() {
  return (
    <div className='w-full h-[calc(100vh-5rem)] overflow-auto'>
      <div className=' bg-[#009494] mt-4 mx-4 flex flex-col w-xl p-4 rounded-xl'>
       <div>
        <h1 className='text-3xl font-semibold  mt-4 mx-4'>Fund Transfer</h1>
       </div>
       <div className='bg-[#79bfbf]  m-4 flex flex-col w-md p-4 rounded-xl '>
      <div className='flex flex-col gap-4 mt-4'>
        <span className='text-xl font-medium'> Mobile Number</span>
        <input type="number" className='bg-white w-full h-10 rounded-2xl'/>
      </div>
      <div className='flex flex-col gap-4 mt-4'>
        <span className='text-xl font-medium'>Join Date</span>
        <input type="number" className='bg-white w-full h-10 rounded-2xl'/>
      </div>
      <div className='flex flex-col gap-4 mt-4'>
        <span className='text-xl font-medium'>Transfer Amount</span>
        <input type="number" className='bg-white w-full h-10 rounded-2xl'/>
      </div>
      <div className='flex flex-col gap-4 mt-4'>
        <span className='text-xl font-medium'>Confirm Amount</span>
        <input type="number" className='bg-white w-full h-10 rounded-2xl'/>
      </div>
      <div className='flex flex-col gap-4 mt-4'>
        <span className='text-xl font-medium'>Remark</span>
        <input type="text" className='bg-white w-full h-10 rounded-2xl'/>
      </div>
      <button className=' w-full h-10 rounded-xl text-2xl font-medium bg-[#009494] mt-4 text-white' >Fund Transfer</button>
      </div>
    </div>
    </div>
  )
}

export default FundTransfer