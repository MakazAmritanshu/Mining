import React from 'react'

const CoinsCard = () => {
return (
   <div>
    <div className="flex flex-col items-start space-y-2 bg-[#13B8A7] p-4 rounded-lg mx-4 w-40">
            <div className="flex items-center w-full">
                <p className="text-gray-500 text-sm mr-2">SUPER COIN</p>
                <img src="..\src\assets\icon\info.png" alt="" className='w-4 h-4'/>
            </div>
            <h3 className="text-lg font-semibold">462</h3>
            <p className="text-black text-xs">0.27 USDT</p>
        </div>
   </div>
)
}

export default CoinsCard