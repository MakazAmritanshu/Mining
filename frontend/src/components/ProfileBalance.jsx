import React from 'react'
import depositIcon from '../assets/icon/depositt.png'
import { useNavigate } from 'react-router-dom'
const ProfileBalance = () => {
    const navigate= useNavigate()
  return (
    <div className='p-4 rounded-lg shadow-md mx-4 bg-[#ffffff]'>
        <div className="flex justify-between items-center ">
            <div className="flex items-center space-x-4">
                <div>
                    <h1><img src="..\src\assets\icon\usdtt.png" alt="" /></h1>
                </div>
                <div>
                    <p className="text-gray-500 text-sm ">CURRENT BALANCE</p>
                    <h3 className="text-lg font-semibold">0.45 USDT</h3>
                    <p className="text-black text-xs ">0.0025/min</p>
                </div>
            </div>
            <div>
                <img className="w-3 h-3" src="..\src\assets\icon\info.png" alt="info icon" />
            </div>
        </div>
        <div className='flex justify-around items-center mt-4 cursor-pointer '>
            <div className='flex flex-col p-2 rounded-4xl bg-[#EAEBED] w-35 h-30 justify-center items-center'
            onClick={()=>navigate('/deposit')}>
                <img src={depositIcon} alt="" className='w-15 h-15' />
                <span className='mx-1'>Deposit</span>
            </div>
            <div className='flex flex-col p-2 rounded-4xl bg-[#EAEBED] w-35 h-30 justify-center items-center cursor-pointer'
            onClick={()=>navigate('/withdraw')}>
                <img src="..\src\assets\icon\Withdraw.png" alt="" className='w-15 h-15' />
                <span className='mx-0'>Withdraw</span>
            </div>
        </div>
    </div>
  )
}

export default ProfileBalance