import React, { useState, useEffect } from 'react'
import { BsFan } from "react-icons/bs";
import { motion } from "framer-motion";

const Fan = ({rotate,setRotate,duration,setDuration,handleClick}) => {

  // const handleClick = () => {
  //   setRotate(360)
  //   localStorage.setItem('fan-rotate', 360)
  //   localStorage.setItem('fan-start-time', Date.now())
  // }

  return (
    <div className='flex items-center justify-center'>
      <motion.div 
        animate={{ rotate}}
        transition={{ repeat: Infinity, duration, ease: "linear" }}
        onClick={handleClick}
      >
        {/* text-teal-500 */}
        <BsFan className='text-5xl  text-[#009494] w-62 h-62' />
      </motion.div>
    </div>
  )
}

export default Fan
