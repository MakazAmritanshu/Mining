import React from 'react'
import Btn from '../../components/Btn'
function DepositList() {
    const data=[
        {
          "Sr": 1,
          "Mobile": "9876543210",
          "Amount": 5000,
          "Avl Balance": 12000,
          "Action date": "2025-05-08",
          "Ref Number": "TXN123456",
          "Remark": "Funds Transfer By Admin"
        },
        {
          "Sr": 2,
          "Mobile": "9123456780",
          "Amount": 2500,
          "Avl Balance": 8000,
          "Action date": "2025-05-07",
          "Ref Number": "TXN234567",
          "Remark": "Funds Transfer By Admin"
        },
        {
          "Sr": 3,
          "Mobile": "9012345678",
          "Amount": 10000,
          "Avl Balance": 5000,
          "Action date": "2025-05-06",
          "Ref Number": "TXN345678",
          "Remark": "Funds Transfer By Admin"
        },
        {
          "Sr": 4,
          "Mobile": "9988776655",
          "Amount": 1500,
          "Avl Balance": 9700,
          "Action date": "2025-05-05",
          "Ref Number": "TXN456789",
          "Remark": "Funds Transfer By Admin"
        },
        {
          "Sr": 5,
          "Mobile": "9090909090",
          "Amount": 7500,
          "Avl Balance": 20000,
          "Action date": "2025-05-04",
          "Ref Number": "TXN567890",
          "Remark": "Funds Transfer By Admin"
        }
      ]
      
  return (
    <div>
        <div className='w-full h-[calc(100vh-5rem)] overflow-hidden'>
        <div className='border-4 border-[#55c0c0] bg-[#d4f5f5] px-4 mx-4 mt-15'>
        <div className='flex gap-4 mt-4'>
                <input type="text" placeholder='Search by username/mobile/email' className='bg-[#EAEBED] rounded-xl p-4' />
                <Btn type='Submit'/>
                <Btn type='Clear'/>
            </div>
        <div className="overflow-auto max-h-[calc(100vh-15rem)] mt-4">
          <table className='w-full border-collapse'>
            <thead className='bg-[#009494] text-white block'>
              <tr className='table w-full table-fixed'>
                <th className='p-4 w-16'>Sr</th>
                <th className='p-4 w-32'>Mobile</th>
                <th className='p-4 w-24'>Amount</th>
                <th className='p-4 w-40'>Avl Balance</th>
                <th className='p-4 w-40'>Action date</th>
                <th className='p-4 w-40'>Ref Number</th>
                <th className='p-4 w-40'>Remark</th>
              </tr>
            </thead>
            <tbody className='block overflow-y-auto max-h-[calc(100vh-20rem)]'>
              {data.map((itm, idx) => (
                <tr className='table w-full  table-fixed text-center bg-white even:bg-[#f1fafa]' key={idx}>
                  <td className='p-4 w-16'>{itm.Sr}</td>
                  <td className='p-4 w-32'>{itm.Mobile}</td>
                  <td className='p-4 w-24'>{itm.Amount}</td>
                  <td className='p-4 w-40'>{itm['Avl Balance']}</td>
                  <td className='p-4 w-40'>{itm['Action date']}</td>
                  <td className='p-4 w-40'>{itm['Ref Number']}</td>
                  <td className='p-4 w-40'>{itm.Remark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
    </div>
    </div>
  )
}

export default DepositList