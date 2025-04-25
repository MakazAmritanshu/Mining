import React from 'react'
import { IoWallet } from "react-icons/io5";
import Logout from '../Logout';
const UsdDetails = () => {
  return (
    <div>
        <div className='flex bg-white flex-col  p-4 rounded-3xl  mt-4 shadow-lg mx-4 '>
            {/**Name section */}
            <div className='mt-4'>
                <div className='flex  gap-2'>
                    <IoWallet className=' text-[#13B8A7] text-2xl' />
                    <label htmlFor="" className='text-sm font-semibold mb-2 flex items-center'>
                    Add USDT Address
                    </label>
                </div>
                <div className='font-semibold mb-3'>
                Binance Address(TRC20)
                </div>
                <input type="text" 
                placeholder="TRC 20 Address"
                className='w-full rounded-lg bg-[#13B8A7] p-3'/>
            </div>
            <Logout title="Add Address"/>

        </div>
    </div>
  )
}

export default UsdDetails