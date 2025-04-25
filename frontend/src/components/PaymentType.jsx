import React from 'react'
import Balance from"../assets/icon/balance.png"
const PaymentType = ({ selected, setSelected }) => {
  const data=["Wallet","Usdt"]
  return (
    <div className='mt-4 mx-4 flex gap-2'>
        {data.map((itm ,idx)=>
        (
            <div key={idx}
            onClick={() => setSelected(itm)}
            className="flex flex-col justify-center  bg-white p-10 rounded-lg  w-30 h-30 shadow-lg">
            <img src={Balance} alt="" />
            <span className='font-semibold'>{itm}</span>
            </div>
        ))}
    </div>
  )
}

export default PaymentType