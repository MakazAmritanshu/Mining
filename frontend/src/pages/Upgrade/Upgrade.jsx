import React from 'react'
import MiningCard from '../../components/MiningCard'
import InvidiaCard from '../../components/InvidiaCard'
const Upgrade = () => {
  return (
    <div className="flex justify-center  min-h-screen ">
      <div className='bg-white rounded-4xl mt-28 p-6 relative'>
        <div className='pt-10'>
          <h3 className='text-center text-2xl font-semibold'>Upgrade</h3>
          <p className='mt-1 text-center text-[16px] text-gray-500 mx-6'>Upgrade mining Rig, Time, and Speed to generate more coins</p>
        </div>
        <div className='flex justify-center space-x-4 mt-6'>
          <div className='flex items-center rounded-[50px] bg-[#EAEBED] p-3'>
            <img src="../src/assets/icon/usdtt.png" alt="usdt" className='w-7 h-7' />
            <h3 className='ml-2'>0.75</h3>
          </div>
          <div className='flex items-center rounded-4xl bg-[#EAEBED] p-3'>
            <img src="../src/assets/icon/usdtt.png" alt="usdt" className='w-7 h-7' />
            <h3 className='ml-2'>0.75</h3>
          </div>
        </div>
        {/* mining cards here */}
        <div className='mt-4 '>
          <MiningCard
          title="Mining Rig"
          icon=""
          currentValue="0.0025/min"
          increment="0.001/min"
          costUSDT={3}
          costPoints={3000}
          disabled={true} 
          />
          <MiningCard
          title="Mining Speed"
          icon=""
          currentValue="30 Gh/s"
          increment="+ 30 Gh/s"
          costUSDT={3}
          costPoints={3000}
          disabled={true} 
          />
          <MiningCard
          title="Mining Time"
          icon=""
          currentValue="02.00.00"
          increment="+ 02.00.00"
          costUSDT={3}
          costPoints={3000}
          disabled={true} 
          />
          
        </div>
        <div>
          <InvidiaCard/>
        </div>
        <div className='absolute top-[0%] left-[34%] transform -translate-y-1/2'>
        <img src="..\src\assets\icon\update.png" alt="" />
      </div>
      </div>
      
    </div>
  )
}

export default Upgrade