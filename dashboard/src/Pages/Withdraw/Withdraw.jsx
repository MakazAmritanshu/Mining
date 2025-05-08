import React from 'react'
import Btn from '../../components/Btn'
function Withdraw() {
    const data = [
        {
          "Sr": 1,
          "Mobile": "9876543210",
          "Request Amount": 4500,
          "Bank": "State Bank of India",
          "Bank Holder": "Rajesh Kumar",
          "Bank Account": "123456789012",
          "Bank IFSC": "SBIN0001234",
          "Request Date": "2025-05-08",
          "Type": "Withdrawal",
          "Address": "123 MG Road, Delhi",
          "Status": "Pending",
          "Action": "Review"
        },
        {
          "Sr": 2,
          "Mobile": "9123456780",
          "Request Amount": 3200,
          "Bank": "HDFC Bank",
          "Bank Holder": "Anita Sharma",
          "Bank Account": "987654321098",
          "Bank IFSC": "HDFC0005678",
          "Request Date": "2025-05-07",
          "Type": "Withdrawal",
          "Address": "56 Park Street, Mumbai",
          "Status": "Approved",
          "Action": "Completed"
        },
        {
          "Sr": 3,
          "Mobile": "9012345678",
          "Request Amount": 1000,
          "Bank": "ICICI Bank",
          "Bank Holder": "Mohit Verma",
          "Bank Account": "102938475610",
          "Bank IFSC": "ICIC0003456",
          "Request Date": "2025-05-06",
          "Type": "Deposit",
          "Address": "22 Residency Rd, Bangalore",
          "Status": "Rejected",
          "Action": "Closed"
        },
        {
          "Sr": 4,
          "Mobile": "9988776655",
          "Request Amount": 6000,
          "Bank": "Punjab National Bank",
          "Bank Holder": "Sneha Reddy",
          "Bank Account": "564738291012",
          "Bank IFSC": "PNB0002345",
          "Request Date": "2025-05-05",
          "Type": "Withdrawal",
          "Address": "14 Lake View, Hyderabad",
          "Status": "Pending",
          "Action": "Review"
        },
        {
          "Sr": 5,
          "Mobile": "9090909090",
          "Request Amount": 7500,
          "Bank": "Axis Bank",
          "Bank Holder": "Amit Joshi",
          "Bank Account": "192837465010",
          "Bank IFSC": "AXIS0007890",
          "Request Date": "2025-05-04",
          "Type": "Withdrawal",
          "Address": "88 Sector 17, Chandigarh",
          "Status": "Approved",
          "Action": "Completed"
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
                <th className='p-4 w-24'>Request Amount</th>
                <th className='p-4 w-40'>Bank</th>
                <th className='p-4 w-40'>Bank Holder</th>
                <th className='p-4 w-40'>Bank Account</th>
                <th className='p-4 w-40'>Bank IFSC</th>
                <th className='p-4 w-40'>Request Date</th>
                <th className='p-4 w-40'>Type</th>
                <th className='p-4 w-40'>Address</th>
                <th className='p-4 w-40'>Status</th>
                <th className='p-4 w-40'>Action</th>
              </tr>
            </thead>
            <tbody className='block overflow-y-auto max-h-[calc(100vh-20rem)]'>
              {data.map((itm, idx) => (
                <tr className='table w-full  table-fixed text-center bg-white even:bg-[#f1fafa]' key={idx}>
                  <td className='p-4 w-16'>{itm.Sr}</td>
                  <td className='p-4 w-32'>{itm.Mobile}</td>
                  <td className='p-4 w-24'>{itm['Request Amount']}</td>
                  <td className='p-4 w-40'>{itm.Bank}</td>
                  <td className='p-4 w-40'>{itm['Bank Holder']}</td>
                  <td className='p-4 w-40'>{itm['Bank Account']}</td>
                  <td className='p-4 w-40'>{itm['Bank IFSC']}</td>
                  <td className='p-4 w-40'>{itm['Request Date']}</td>
                  <td className='p-4 w-40'>{itm.Type}</td>
                  <td className='p-4 w-40'>{itm.Address}</td>
                  <td className='p-4 w-40'>{itm.Status}</td>
                  <td className='p-4 w-40'>{itm.Action}</td>
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

export default Withdraw