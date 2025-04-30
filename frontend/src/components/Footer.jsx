import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdAccountCircle } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { IoIosSpeedometer } from "react-icons/io";
const Footer = () => {
  const navigate = useNavigate()
  const [color,setColor]=useState("black")
  return (
    <div className='sticky z-50 bottom-0 bg-[#EAEBED]'>
      <div className='bg-[#EAEBED] h-1'></div> 
      <div>
        <div className="bg-[#ffffff] h-13 w-full rounded-t-2xl shadow-md flex justify-around items-center">
          {/* <img src="..\src\assets\icon\promo.png" alt="promotion" className='w-10 h-10 mt-2'
          onClick={() => navigate('/upgrade')} /> */}
          <IoIosSpeedometer className='w-10 h-10 text-[#13B8A7]' onClick={() => navigate('/upgrade')} />
          {/* <img src="..\src\assets\icon\home.png" alt="Home" className='w-10 h-10 mt-2'
          onClick={() => navigate('/')} /> */}
          <TiHome className='w-10 h-10 text-[#13B8A7]' onClick={() => navigate('/home')}/>
          {/* <img src="..\src\assets\icon\Account.png" alt="Account" className='w-10 h-10 mt-2'
          onClick={() => navigate('/account')} /> */}
          <MdAccountCircle className={`w-10 h-10 text-[#13B8A7]`} onClick={() =>navigate('/profile')}/>
        </div>
      </div>
    </div>
  )
}

export default Footer
