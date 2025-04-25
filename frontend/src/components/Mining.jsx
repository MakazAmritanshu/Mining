import React from 'react'
import { useState } from 'react';
import { FaRocket, FaHourglassHalf, FaGift } from "react-icons/fa";
import PopupCard from './PopupCard';
import IncMiningTime from './IncMiningTime';
const Mining = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [incMining,setincMining]=useState(false)
  return (
    <div>
    <div className=" bg-white flex flex-col items-center justify-center p-4 relative rounded-3xl  mt-4 shadow-lg">
      
      {/* Top Icons */}
      <div 
      onClick={()=>setincMining(true)}
      className="absolute top-4 left-4 bg-gray-100 rounded-full p-3 shadow">
        <FaHourglassHalf className="text-xl text-black" />
      </div>
      <div
      onClick={() => setShowPopup(true)}
       className="absolute top-4 right-4 bg-black rounded-full p-3 shadow">
        <FaRocket className="text-xl text-white" />
      </div>

      {/* Start Mining Button */}
      <div className="relative my-8 flex items-center justify-center">
          {/* Outer circle 2 */}
          <div className="absolute w-80 h-80 rounded-full border-4 bg-teal-100 border-none"></div>

          {/* Outer circle 1 */}
          <div className="absolute w-72 h-72 rounded-full border-4 bg-teal-200 border-none"></div>

          {/* Main inner circle */}
          <div className="w-64 h-64 rounded-full bg-teal-500 flex items-center justify-center text-white text-center shadow-lg z-10">
            <div>
              <p className="text-sm uppercase tracking-widest">Click Here To</p>
              <p className="text-2xl font-bold mt-1">Start Mining</p>
            </div>
          </div>
       </div>

      {/* Popup */}
      {showPopup && <PopupCard onClose={() => setShowPopup(false)} />}
      {incMining && <IncMiningTime onClose={() => setincMining(false)} />}
    </div>
    </div>
  )
}

export default Mining