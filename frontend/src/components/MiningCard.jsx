import React from 'react'

const MiningCard = ({
  title,
  icon,
  currentValue,
  increment,
  costUSDT,
  costPoints,
  disabled,
}) => {
  return (
    <div className='bg-[#EAEBED] rounded-2xl p-2 mt-10 relative'>
            <h2 className=' font-semibold text-lg  '>{title}</h2>
            <div className='bg-white rounded-2xl my-2 flex justify-center items-center flex-col p-4'>
              <div className='text-gray-500 text-center'>Upgrade {title} by</div>
              <div className='text-center text-xl font-semibold mt-2'>{currentValue} <span className='text-green-500'>{increment}</span></div>

            </div>
            <div className='flex justify-between'>
              <div className='flex gap-4'>
                <span className='flex items-center text-red-500 font-semibold text-xl'>
                <img src="..\src\assets\icon\usdt.png" alt="" className='w-5 h-5'/>&nbsp;{costUSDT}
                </span>
                <span className='flex items-center text-red-500 font-semibold text-xl'>
                <img src="..\src\assets\icon\usdt.png" alt="" className='w-5 h-5'/>&nbsp;{costPoints}
                </span>
              </div>
              <button className='bg-[#13B8A7] rounded-xl h-12 w-25 text-gray-500 font-semibold'>Upgrade</button>
            </div>
            <div className='absolute top-[-3%] left-[45%] transform -translate-y-1/2'>
              <img src="..\src\assets\icon\usdt.png" alt="" />
            </div>
          </div>
          
  )
}

export default MiningCard