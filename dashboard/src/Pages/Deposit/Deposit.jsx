import React from 'react'
import Btn from '../../components/Btn'
function Deposit() {
    const data=[
        {
          "Sr": 1,
          "Mobile": "9876543210",
          "Deposit Amount": 5000,
          "Request Date": "2025-05-08",
          "Status": "Approved"
        },
        {
          "Sr": 2,
          "Mobile": "9123456780",
          "Deposit Amount": 3000,
          "Request Date": "2025-05-07",
          "Status": "Pending"
        },
        {
          "Sr": 3,
          "Mobile": "9012345678",
          "Deposit Amount": 7000,
          "Request Date": "2025-05-06",
          "Status": "Rejected"
        },
        {
          "Sr": 4,
          "Mobile": "9988776655",
          "Deposit Amount": 4500,
          "Request Date": "2025-05-05",
          "Status": "Approved"
        },
        {
          "Sr": 5,
          "Mobile": "9090909090",
          "Deposit Amount": 6000,
          "Request Date": "2025-05-04",
          "Status": "Pending"
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
                <th className='p-4 '>Sr</th>
                <th className='p-4 '>Mobile</th>
                <th className='p-4 '>Deposit Amount</th>
                <th className='p-4 '>Request Date</th>
                <th className='p-4 '>Status</th>
                <th className='p-4 flex justify-center items-center '>Action</th>
              </tr>
            </thead>
            <tbody className='block overflow-y-auto max-h-[calc(100vh-20rem)]'>
              {data.map((itm, idx) => (
                <tr className='table w-full  table-fixed  text-center bg-white even:bg-[#f1fafa]' key={idx}>
                  <td className='p-4'>{itm.Sr}</td>
                  <td className='p-4'>{itm.Mobile}</td>
                  <td className='p-4'>{itm['Deposit Amount']}</td>
                  <td className='p-4'>{itm['Request Date']}</td>
                  <td className='p-4'>{itm.Status}</td>
                  <td className='p-4 flex justify-center items-center'>{<Btn type='Get'/>}</td>
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

export default Deposit