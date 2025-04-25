import React,{useState} from 'react'
import QRCode from 'react-qr-code';
const Qrgenerator = ({amountt}) => {
    const [upiId, setUpiId] = useState('8881409663@ptsbi');
    const [name, setName] = useState('');
    // const [amount, setAmount] = useState('');
    const [note, setNote] = useState('');
  
    const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amountt}&cu=INR&tn=${encodeURIComponent(note)}`;
  return (
    <div className="p-4 flex flex-col gap-4 items-center max-w-md mx-auto">
      
      {upiId && amountt ? (
        <>
          <QRCode value={upiUrl} size={256} className='w-20 h-20'/>
          <p className="text-sm text-gray-600 break-all text-center">{upiUrl}</p>
        </>
      ) : (
        <p className="text-red-500">Missing UPI ID or amount</p>
      )}
    </div>
  )
}

export default Qrgenerator