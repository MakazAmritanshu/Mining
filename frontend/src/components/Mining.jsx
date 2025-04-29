import React from 'react'
import { useState,useEffect } from 'react';
import { FaRocket, FaHourglassHalf, FaGift } from "react-icons/fa";
import PopupCard from './PopupCard';
import IncMiningTime from './IncMiningTime';
import Fan from './Fan';
const Mining = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [incMining,setincMining]=useState(false)
  // const[miningStarted,setMiningStarted]=useState(false)

  const [rotate, setRotate] = useState(0)
    const [duration, setDuration] = useState(1)
    const miningstarted=localStorage.getItem('fan-started')
  
    useEffect(() => {
      const interval = setInterval(() => {
        const savedRotate = Number(localStorage.getItem('fan-rotate'));
        const startTime = Number(localStorage.getItem('fan-start-time'));
    
        if (savedRotate === 360 && startTime) {
          const now = Date.now();
          const timePassed = now - startTime;
    
          if (timePassed < 30 * 1000) {  //30 seconds , for 24 hour make it 24 * 60 * 60 * 1000
            setRotate(360);
          } else {
            // 30 seconds passed — time to stop fan
            localStorage.removeItem('fan-rotate');
            localStorage.removeItem('fan-start-time');
            localStorage.removeItem('fan-started');
            setRotate(0);
          }
        }
      }, 10); // check every second set to 1000
    
      return () => clearInterval(interval); // cleanup
    }, []);
    
  
    const handleClick = () => {
      setRotate(360)
      localStorage.setItem('fan-rotate', 360)
      localStorage.setItem('fan-start-time', Date.now())
      localStorage.setItem('fan-started',true)
    }
  

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
          <div onClick={handleClick}
           className="w-64 h-64 rounded-full  flex items-center justify-center text-white text-center shadow-lg z-10">
           {miningstarted?<Fan
            rotate={rotate}
            setRotate={setRotate}
            duration={duration}
            setDuration={setDuration}
            handleClick={handleClick}/>:
            <div className=' w-64 h-64 rounded-full bg-teal-500 flex justify-center items-center text-white text-center shadow-lg z-10'>
              <div>
              <p className="text-sm uppercase tracking-widest">Click Here To</p>
              <p className="text-2xl font-bold mt-1">Start Mining</p></div>
            </div>}
            {/* <div>
              <p className="text-sm uppercase tracking-widest">Click Here To</p>
              <p className="text-2xl font-bold mt-1">Start Mining</p>
            </div> */}
          
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