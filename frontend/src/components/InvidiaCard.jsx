import React from 'react'
import { RiExchangeDollarFill } from "react-icons/ri";
const cardData=[
    {
      "name": "NVIDIA GeForce RTX 3080",
      "hashRate": "90-100 MH/s",
      "price": "$800 - $1,200"
    },
    {
      "name": "NVIDIA GeForce RTX 3070",
      "hashRate": "60-70 MH/s",
      "price": "$600 - $900"
    },
    {
      "name": "NVIDIA GeForce RTX 3060 Ti",
      "hashRate": "60 MH/s",
      "price": "$400 - $700"
    },
    {
      "name": "AMD Radeon RX 6800 XT",
      "hashRate": "60 MH/s",
      "price": "$800 - $1,200"
    },
    {
      "name": "AMD Radeon RX 6700 XT",
      "hashRate": "45-50 MH/s",
      "price": "$450 - $800"
    },
    {
      "name": "NVIDIA GeForce GTX 1660 Super",
      "hashRate": "26-30 MH/s",
      "price": "$300 - $500"
    }
  ]
  
function InvidiaCard() {
  return (
    <div>
        {cardData.map((data,idx)=>(
            <div className='bg-[#EAEBED] rounded-2xl p-2 mt-10 relative' key={idx}>
            <h2 className=' font-semibold text-lg  '>{data.name}</h2>
            <div className='bg-white rounded-2xl my-2 flex justify-center items-center flex-col p-4'>
              <div className='text-gray-500 text-center'>Upgrade Hash Rate by</div>
              <div className='text-center text-xl font-semibold mt-2'><span className='text-green-500'>{data.hashRate}</span></div>

            </div>
            <div className='flex justify-between'>
              <div className='flex gap-4'>
                <span className='flex items-center text-red-500 font-semibold text-xl'>
                    <RiExchangeDollarFill className='w-7 h-7 text-[#13B8A7]'/>&nbsp; {data.price}
                </span>
              </div>
              <button className='bg-[#13B8A7] rounded-xl h-12 w-25 text-gray-500 font-semibold'>Buy</button>
            </div>
            <div className='absolute top-[-3%] left-[45%] transform -translate-y-1/2'>
              <img src="..\src\assets\icon\usdt.png" alt="" />
            </div>
        </div>
        ))}
    </div>
  )
}

export default InvidiaCard