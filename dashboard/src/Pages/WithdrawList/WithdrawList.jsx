import React from 'react'
import Btn from '../../components/Btn'

function WithdrawList() {
  const data = [
    {
      "Sr": 1,
      "Mobile": "9876543210",
      "TYPE": "Savings",
      "Ref Number": "REF123456",
      "Account": "123456789012",
      "IFS Code": "SBIN0001234",
      "Holder": "Rajesh Kumar",
      "Status": "Active",
      "Date": "2025-05-08"
    },
    {
      "Sr": 2,
      "Mobile": "9123456780",
      "TYPE": "Current",
      "Ref Number": "REF234567",
      "Account": "987654321098",
      "IFS Code": "HDFC0005678",
      "Holder": "Anita Sharma",
      "Status": "Inactive",
      "Date": "2025-05-07"
    },
    {
      "Sr": 3,
      "Mobile": "9012345678",
      "TYPE": "Savings",
      "Ref Number": "REF345678",
      "Account": "102938475610",
      "IFS Code": "ICIC0003456",
      "Holder": "Mohit Verma",
      "Status": "Active",
      "Date": "2025-05-06"
    },
    {
      "Sr": 4,
      "Mobile": "9988776655",
      "TYPE": "Salary",
      "Ref Number": "REF456789",
      "Account": "564738291012",
      "IFS Code": "PNB0002345",
      "Holder": "Sneha Reddy",
      "Status": "Pending",
      "Date": "2025-05-05"
    },
    {
      "Sr": 5,
      "Mobile": "9090909090",
      "TYPE": "Current",
      "Ref Number": "REF567890",
      "Account": "192837465010",
      "IFS Code": "AXIS0007890",
      "Holder": "Amit Joshi",
      "Status": "Active",
      "Date": "2025-05-04"
    }
  ]

  return (
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
                <th className='p-4 w-24'>TYPE</th>
                <th className='p-4 w-40'>Ref Number</th>
                <th className='p-4 w-40'>Account</th>
                <th className='p-4 w-40'>IFSC Code</th>
                <th className='p-4 w-40'>Holder</th>
                <th className='p-4 w-28'>Status</th>
                <th className='p-4 w-28'>Date</th>
              </tr>
            </thead>
            <tbody className='block overflow-y-auto max-h-[calc(100vh-20rem)]'>
              {data.map((itm, idx) => (
                <tr className='table  table-fixed text-center bg-white even:bg-[#f1fafa]' key={idx}>
                  <td className='p-4 w-16'>{itm.Sr}</td>
                  <td className='p-4 w-32'>{itm.Mobile}</td>
                  <td className='p-4 w-24'>{itm.TYPE}</td>
                  <td className='p-4 w-40'>{itm['Ref Number']}</td>
                  <td className='p-4 w-40'>{itm.Account}</td>
                  <td className='p-4 w-40'>{itm['IFS Code']}</td>
                  <td className='p-4 w-40'>{itm.Holder}</td>
                  <td className='p-4 w-28'>{itm.Status}</td>
                  <td className='p-4 w-28'>{itm.Date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>

    </div>
  )
}

export default WithdrawList
