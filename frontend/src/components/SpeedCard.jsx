import React from 'react'

const SpeedCard = () => {
  return (
    <div>
        <div className="flex flex-col items-start space-y-2 bg-[#000] p-4 rounded-lg mx-4 w-35">
            <div className="flex items-center w-full">
                <p className="text-white text-sm mr-2">SPEED</p>
                <img src="..\src\assets\icon\info.png" alt="" />
            </div>
            <h3 className="text-lg text-white font-semibold">30Gh/s</h3>
            <p className="text-black text-xs">.</p>
        </div>
    </div>
  )
}

export default SpeedCard