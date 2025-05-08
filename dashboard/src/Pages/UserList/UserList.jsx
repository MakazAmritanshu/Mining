import React from 'react'
import Btn from '../../components/Btn'
function UserList() {
  return (
    <div className='w-full bg-[#EAEBED] flex'>
        <div className='flex flex-col w-full border-4 border-[#55c0c0] bg-[#d4f5f5] px-4 mt-20 m-4 '>
            <div className='flex gap-4 mt-4'>
                <input type="text" placeholder='Search by username/mobile/email' className='bg-[#EAEBED] rounded-xl p-4' />
                <Btn type='Submit'/>
                <Btn type='Clear'/>
            </div>
            <div className='mt-4 overflow-x-scroll overflow-auto'>
                <table className='w-full'>
                    <thead className='bg-[#009494] text-white'>
                        <tr className=' '>
                            <th className=' p-4'>Sr</th>
                            <th className=' p-4'>Join Date</th>
                            <th className=' p-4'>Wallet</th>
                            <th className=' p-4'>Mobile</th>
                            <th className=' p-4'>UserKey</th>
                            <th className=' p-4'>Password</th>
                            <th className=' p-4'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className='text-center '>
                            <td className=' p-4'>1</td>
                            <td className=' p-4'>2023-10-01</td>
                            <td className=' p-4'>0x1234567890abcdef</td>
                            <td className=' p-4'>+91 9876543210</td>
                            <td className=' p-4'>TH1744352402069</td>
                            <td className=' p-4'>password123</td>
                            <td className=' p-4'><Btn type='View More'/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default UserList