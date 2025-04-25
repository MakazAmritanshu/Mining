import React from 'react'
import { MdInfoOutline } from "react-icons/md";
import { PiBankFill } from "react-icons/pi";
import { IoPersonSharp } from "react-icons/io5";
import { MdAccountBalanceWallet } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaKey } from "react-icons/fa6";
import Logout from '../Logout';
const BankDetails = () => {
  return (
    <div className='mt-4'>
        {/* Header Warning */}
        <div className="flex justify-between items-center p-2 rounded-2xl shadow-md mx-4 bg-[#ffffff] gap-1.5">
        <MdInfoOutline  className='text-red-400 text-3xl'/>
        <span className='text-sm text-center text-[#13B8A7] font-semibold '>To ensure the safety of your funds, please bind your bank account</span>
        </div>
        
        <div className='flex bg-white flex-col  p-4 rounded-3xl  mt-4 shadow-lg mx-4 '>
            {/* Bank Selection */}
            <div>
            <div className='flex  gap-2'>
                <PiBankFill className=' text-[#13B8A7] text-2xl' />
                <label htmlFor="" className='text-sm font-semibold mb-2 flex items-center'>
                Choose a bank
                </label>
            </div>
            <select className='w-full rounded-lg bg-[#13B8A7] p-3' name="" id="">
                <option>Please select a bank</option>
                <option>Bank A</option>
                <option>Bank B</option>
                <option>Bank C</option>
            </select>
            </div>
            {/**Name section */}
            <div className='mt-4'>
                <div className='flex  gap-2'>
                    <IoPersonSharp  className=' text-[#13B8A7] text-2xl' />
                    <label htmlFor="" className='text-sm font-semibold mb-2 flex items-center'>
                    Full recipient's name
                    </label>
                </div>
                <input type="text" 
                placeholder="Please enter the recipient's name"
                className='w-full rounded-lg bg-[#13B8A7] p-3'/>
            </div>

            {/**Account number */}
            <div className='mt-4'>
                <div className='flex  gap-2'>
                    <MdAccountBalanceWallet className=' text-[#13B8A7] text-2xl' />
                    <label htmlFor="" className='text-sm font-semibold mb-2 flex items-center'>
                    Bank account number
                    </label>
                </div>
                <input type="number" 
                placeholder="Please enter the recipient's name"
                className='w-full rounded-lg bg-[#13B8A7] p-3'/>
            </div>

            {/**mail */}
            <div className='mt-4'>
                <div className='flex  gap-2'>
                    <IoIosMail className=' text-[#13B8A7] text-2xl' />
                    <label htmlFor="" className='text-sm font-semibold mb-2 flex items-center'>
                    Mail
                    </label>
                </div>
                <input type="email" 
                placeholder="Please enter your email"
                className='w-full rounded-lg bg-[#13B8A7] p-3'/>
            </div>

            {/**IFSC */}
            <div className='mt-4'>
                <div className='flex  gap-2'>
                    <FaKey className=' text-[#13B8A7] text-2xl' />
                    <label htmlFor="" className='text-sm font-semibold mb-2 flex items-center'>
                    IFSC Code
                    </label>
                </div>
                <input type="text" 
                placeholder="Please enter IFSC code"
                className='w-full rounded-lg bg-[#13B8A7] p-3'/>
            </div>
            <Logout title="Save"/>

        </div>
    </div>
  )
}

export default BankDetails