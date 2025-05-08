import React from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { AiFillDashboard } from "react-icons/ai";
import { RiFundsFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { PiHandWithdrawFill } from "react-icons/pi";
import { PiHandDepositFill } from "react-icons/pi";
import { SiDepositphotos } from "react-icons/si";
import { BiMoneyWithdraw } from "react-icons/bi";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const navigate= useNavigate()
    const data= [
        {
          "label": "Dashboard",
          "image": <AiFillDashboard className='text-[#009494] text-3xl'/>,
          "navigateTo": "/admin/dashboard"
        },
        {
          "label": "Fund Transfer",
          "image": <RiFundsFill className='text-[#009494] text-3xl'/>,
          "navigateTo": "/admin/fundtransfer"
        },
        {
          "label": "User List",
          "image": <FaUser className='text-[#009494] text-3xl'/>,
          "navigateTo": "/admin/userlist"
        },
        {
          "label": "Withdraw List",
          "image": <PiHandWithdrawFill className='text-[#009494] text-3xl'/>,
          "navigateTo": "/admin/withdrawlist"
        },
        {
          "label": "Deposit List",
          "image": <PiHandDepositFill className='text-[#009494] text-3xl'/>,
          "navigateTo": "/admin/depositlist"
        },
        {
          "label": "Deposit",
          "image": <SiDepositphotos className='text-[#009494] text-3xl'/>,
          "navigateTo": "/admin/deposit"
        },
        {
          "label": "Withdraw",
          "image": <BiMoneyWithdraw className='text-[#009494] text-3xl'/>,
          "navigateTo": "/admin/withdraw"
        },
        {
          "label": "Change Password",
          "image": <RiLockPasswordFill  className='text-[#009494] text-3xl'/>,
          "navigateTo": "/admin/withdraw"
        },
        {
          "label": "Logout",
          "image": <RiLogoutCircleRFill className='text-[#009494] text-3xl'/>,
          "navigateTo": "/login"
        }
      ]
      
  return (
    <div>
        <div className='flex gap-5 items-center p-4 shadow-md border-b-2 border-white h-20'>
            <FiAlignJustify className='text-white text-3xl'/>
            <h2 className='text-white font-medium text-3xl'>Admin</h2>    
        </div>
        <div>
            <ul className='flex flex-col items-start justify-center mt-5'>
                {data.map((item, index) => (
                    <li
                    onClick={()=>navigate(item.navigateTo)}
                     key={index} className='flex items-center flex-wrap gap-4 w-full text-white text-xl p-4 hover:bg-teal-500 cursor-pointer transition duration-200'>
                        <span>{item.image}</span>
                        <span>{item.label}</span>
                    </li>
                ))}
            </ul>
        </div>

    </div>
  )
}

export default Navbar