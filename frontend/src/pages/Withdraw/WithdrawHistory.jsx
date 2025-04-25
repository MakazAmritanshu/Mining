import React from 'react'
const withdrawdata=[
    {
      "status": "success",
      "balance": 2500.75,
      "type": "Mahapay - UPI x QR",
      "tax": 50.75,
      "time": "2025-04-21T10:15:00Z",
      "ordernumber": "ORD200001"
    },
    {
      "status": "pending",
      "balance": 1800.50,
      "type": "Mahapay - UPI x QR",
      "tax": 35.00,
      "time": "2025-04-21T11:20:00Z",
      "ordernumber": "ORD200002"
    },
    {
      "status": "failed",
      "balance": 3200.00,
      "type": "Mahapay - UPI x QR",
      "tax": 0.00,
      "time": "2025-04-21T12:10:00Z",
      "ordernumber": "ORD200003"
    },
    {
      "status": "success",
      "balance": 500.00,
      "type": "Mahapay - UPI x QR",
      "tax": 10.00,
      "time": "2025-04-21T12:55:00Z",
      "ordernumber": "ORD200004"
    },
    {
      "status": "success",
      "balance": 7500.25,
      "type": "Mahapay - UPI x QR",
      "tax": 120.25,
      "time": "2025-04-21T13:40:00Z",
      "ordernumber": "ORD200005"
    },
    {
      "status": "pending",
      "balance": 920.90,
      "type": "Mahapay - UPI x QR",
      "tax": 18.90,
      "time": "2025-04-21T14:30:00Z",
      "ordernumber": "ORD200006"
    }
  ]
  
const WithdrawHistory = () => {
  return (
    <div>
       {withdrawdata.map((itm,idx)=>(
         <div key={idx} className='flex bg-white flex-col  p-4 rounded-3xl  mt-4 shadow-lg mx-4 '>
         <div className='flex justify-between bg-[#13B8A7] rounded-2xl p-4'>
             <div>Withdraw</div>
             <span className='text-white'>{itm.status}</span>
         </div>
         <hr className='mt-4 text-[#13B8A7]'/>
         <div className='flex justify-between p-2'>
             <div>Balance</div>
             <span>{itm.balance}</span>
         </div>
         <div className='flex justify-between p-2 '>
             <div>Type</div>
             <span>{itm.type}</span>
         </div>
         <div className='flex justify-between p-2 '>
             <div>Tax</div>
             <span>{itm.tax}</span>
         </div>
         <div className='flex justify-between p-2'>
             <div>Time</div>
             <span>{itm.time}</span>
         </div>
         <div className='flex justify-between p-2'>
             <div>Order number</div>
             <span>{itm.ordernumber}</span>
         </div>
         
         
     </div>
       ))}
    </div>
  )
}

export default WithdrawHistory