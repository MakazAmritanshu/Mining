import React from 'react'
import Qr from '../assets/icon/Qr.png'
const QrCard = () => {
  return (
    <div className=" mt-4 flex flex-col items-start space-y-2 bg-white p-4 rounded-lg mx-4 w-40 h-45 shadow-lg">
        <img src={Qr} alt="" className='w-30 h-30' />
        <span className='font-semibold'>UPI X QR manual</span>
    </div>
  )
}

export default QrCard