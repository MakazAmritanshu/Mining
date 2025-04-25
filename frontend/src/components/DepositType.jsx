import React from 'react'
import Balance from"../assets/icon/balance.png"
import upiQr from "../assets/icon/upiqr.webp"
import usdticon from "../assets/icon/usdticon.webp"
const DepositType = ({ select, setSelect }) => {
   const data=[
    {
      "name": "UPI",
      "icon": upiQr
    },
    {
      "name": "Usdt",
      "icon": usdticon
    }
  ]
    return (
      <div className='mt-4 mx-4 flex gap-2'>
          {data.map((itm ,idx)=>
          (
              <div key={idx}
              onClick={() => setSelect(itm.name)}
              className="flex flex-col justify-center items-center bg-white p-10 rounded-lg  w-30 h-30 shadow-lg cursor-pointer">
              <img src={itm.icon} alt="" />
              <span className='font-semibold'>{itm.name}</span>
              </div>
          ))}
      </div>
    )
}

export default DepositType