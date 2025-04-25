import React from 'react'
import {FaChevronRight } from 'react-icons/fa';
import callicon from '../../assets/icon/support/call-icon.png'
import whatsappicon from '../../assets/icon/support/whatsapp_icon.png'
import teleicon from '../../assets/icon/support/telegram_icon1.png'
import supporticon from '../../assets/icon/support/supportbanner.png'
const support=[
    {
        type:'Customer Support',
        img:callicon
    },
    {
        type:'Whatsapp Support',
        img: whatsappicon
    },
    {
        type:'Telegram Chat',
        img:teleicon
    },
    {
        type:'Telegram Channel',
        img:teleicon
    },
    
]
const Support = () => {
  return (
    <div>
        <div className='bg-white flex flex-col items-center justify-center shadow-lg pt-2 pl-5 pr-5 rounded-b-2xl'>
            <img src={supporticon} alt="" className='' />
        </div>
        <div>
        {support.map((itm,idx)=>(
            <div className='flex items-center justify-between bg-white p-4 rounded-3xl  mt-4 shadow-lg mx-4 '>
            <div className='flex gap-4 justify-center items-center'>
                <img src={itm.img} alt="" className='w-10 h-10' />
                <span>{itm.type}</span>
            </div>
            <FaChevronRight/>
       </div>
        ))}
   </div>
    </div>
  )
}

export default Support