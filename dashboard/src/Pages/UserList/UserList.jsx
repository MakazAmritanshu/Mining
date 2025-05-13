import React from 'react'
import Btn from '../../components/Btn'
import {useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function UserList() {
  const navigate= useNavigate()
   const [data, setData] = useState([]);
   const [filteredData, setFilteredData] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');
    // const data=[
    //     {
    //       "Sr": 1,
    //       "JoinDate": "2025-05-01",
    //       "Wallet": 150.75,
    //       "Mobile": "9876543210",
    //       "UserKey": "user_001",
    //       "Password": "pass1234"
    //     },
    //     {
    //       "Sr": 2,
    //       "JoinDate": "2025-05-02",
    //       "Wallet": 250.00,
    //       "Mobile": "9123456789",
    //       "UserKey": "user_002",
    //       "Password": "welcome@25"
    //     },
    //     {
    //       "Sr": 3,
    //       "JoinDate": "2025-05-03",
    //       "Wallet": 98.00,
    //       "Mobile": "9012345678",
    //       "UserKey": "user_003",
    //       "Password": "mypass#001"
    //     },
    //     {
    //       "Sr": 4,
    //       "JoinDate": "2025-05-04",
    //       "Wallet": 300.20,
    //       "Mobile": "8899001122",
    //       "UserKey": "user_004",
    //       "Password": "secure456"
    //     },
    //     {
    //       "Sr": 5,
    //       "JoinDate": "2025-05-05",
    //       "Wallet": 75.50,
    //       "Mobile": "9988776655",
    //       "UserKey": "user_005",
    //       "Password": "abc123xyz"
    //     }
    //   ]
  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/admin/users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      const { users } = response.data;
      console.log("users",users)
      // Transform the data
      const transformedUsers = users.map((itm, idx) => ({
        Sr: idx + 1,
        JoinDate: new Date(itm.createdAt).toLocaleDateString(),
        Wallet: itm.balance,
        Mobile: itm.mobileNumber,
        UserKey: itm._id,
        isActive:itm.isActive
      }));

      setData(transformedUsers); 
      setFilteredData(transformedUsers);
      console.log("Transformed Users", transformedUsers);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };
  fetchData();
}, []);      

  const handleSearch = async(e) => {
    const term = searchTerm.toLowerCase();
    const filtered = await data.filter(item =>
      item.UserKey.toLowerCase().includes(term) ||
      item.Mobile.includes(term)
    );
    console.log("filtered",filtered)
    setFilteredData(filtered);
  };
  console.log("filtered data",filteredData)

  const handleClear = (e) => {
    setSearchTerm('');
    setFilteredData(data);
  };
  return (
    <div>
        <div className='w-full h-[calc(100vh-5rem)] overflow-hidden '>
        <div className='border-4 border-[#55c0c0] bg-[#d4f5f5] px-4 mx-4 mt-15 '>
        <div className='flex gap-4 mt-4'>
                <input
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                 type="text" placeholder='Search by userkey/mobile' className='bg-[#EAEBED] rounded-xl p-4' />
                <div onClick={handleSearch}>
                <Btn 
                type='Submit'/>
                </div>
                <div onClick={handleClear}>
                <Btn
                type='Clear'/>
                </div>
            </div>
        <div className="overflow-auto max-h-[calc(100vh-15rem)] mt-4">
          <table className='w-full border-collapse'>
            <thead className='bg-[#009494] text-white block'>
              <tr className='table w-full table-fixed'>
                <th className='p-4'>Sr</th>
                <th className='p-4'>Join Date</th>
                <th className='p-4'>Wallet</th>
                <th className='p-4'>Mobile</th>
                <th className='p-4'>UserKey</th>
                {/* <th className='p-4'>Password</th> */}
                <th className='p-4'>Action</th>
              </tr>
            </thead>
            <tbody className='block overflow-y-auto max-h-[calc(100vh-20rem)]'>
              {filteredData.map((itm, idx) => (
                <tr className='table w-full  table-fixed text-center bg-white even:bg-[#f1fafa]' key={idx}>
                  <td className='p-4'>{itm.Sr}</td>
                  <td className='p-4'>{itm.JoinDate}</td>
                  <td className='p-4'>{itm.Wallet}</td>
                  <td className='p-4'>{itm.Mobile}</td>
                  <td className='p-4 break-words max-w-[200px]'>{itm.UserKey}</td>
                  {/* <td className='p-4'>{itm.Password}</td> */}
                  <td 
                  onClick={()=>navigate('/admin/userlist/viewuserdetails',{ state: { user: itm } })}
                  className='p-4'>{<Btn type='view More'/>}</td>
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

export default UserList