import React,{useState} from 'react'
import QRCode from 'react-qr-code';
const UsdtQrGenerator = ({usdamountt}) => {
    const [walletAddress, setWalletAddress] = useState('TQErSYcZidj2qFQptWx668LEsq4Znca6JW');
    
      const paymentUri = `tron:${walletAddress}${usdamountt ? `?amount=${usdamountt}&token=USDT` : ''}`;
  return (
    <div>
      <div className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-lg space-y-2">
        {/* {payment if u want to set default amount in qr } */}
      {/* <QRCode value={paymentUri} size={180} className='w-20 h-20'/> */}
      {/**if want a user can set manual amount after scanning qr */}
      <QRCode value={walletAddress} size={180} className='w-20 h-20' />
      <p className="text-xs text-gray-500 text-center break-words max-w-xs">{paymentUri}</p>
      </div>
    </div>
  )
}

export default UsdtQrGenerator