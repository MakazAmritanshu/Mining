import React from 'react'
import { FaUser } from "react-icons/fa";
// {label ,img, data}
function InfoCard(props) {
    console.log(props)
  return (
    <div className='flex flex-col items-center justify-center shadow-lg bg-[#009494] w-50 h-50 rounded-2xl p-4 m-4'>
        <props.img className='text-white text-6xl'/>
        <span className='mt-2 text-2xl font-medium'>{props.data}</span>
        <h1 className='mt-2 text-xl font-medium text-center'>{props.label}</h1>
    </div>
  )
}

export default InfoCard