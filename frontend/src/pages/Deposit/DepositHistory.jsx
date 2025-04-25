import React from 'react'
const depositdata=[
    {
      "status": "success",
      "balance": 2500.75,
      "type": "Mahapay - UPI x QR",
      "time": "2025-04-21T10:15:00Z",
      "ordernumber": "ORD100001"
    },
    {
      "status": "pending",
      "balance": 1800.50,
      "type": "Mahapay - UPI x QR",
      "time": "2025-04-21T11:45:00Z",
      "ordernumber": "ORD100002"
    },
    {
      "status": "failed",
      "balance": 3200.00,
      "type": "Mahapay - UPI x QR",
      "time": "2025-04-21T12:30:00Z",
      "ordernumber": "ORD100003"
    },
    {
      "status": "success",
      "balance": 500.00,
      "type": "Mahapay - UPI x QR",
      "time": "2025-04-21T13:00:00Z",
      "ordernumber": "ORD100004"
    },
    {
      "status": "success",
      "balance": 7500.25,
      "type": "Mahapay - UPI x QR",
      "time": "2025-04-21T13:45:00Z",
      "ordernumber": "ORD100005"
    },
    {
      "status": "pending",
      "balance": 920.90,
      "type": "Mahapay - UPI x QR",
      "time": "2025-04-21T14:30:00Z",
      "ordernumber": "ORD100006"
    }
  ]
  
const DepositHistory = () => {

  return (
    <div>
       {depositdata.map((itm,idx)=>(
         <div key={idx} className='flex bg-white flex-col  p-4 rounded-3xl  mt-4 shadow-lg mx-4 '>
         <div className='flex justify-between bg-[#13B8A7] rounded-2xl p-4'>
             <div>Deposit</div>
             <span className='text-white'>Success</span>
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

export default DepositHistory