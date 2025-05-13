import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function ViewUserDetail() {
    const location = useLocation();
    const { user } = location.state || {};
    console.log("userinfo",user)
    const userid= user.UserKey
    const [status, setStatus] = useState(user.isActive);
    const handleStatusChange = (e) => {
    // setStatus(e.target.value === 'true');
    // console.log("status",status)
    const newStatus = e.target.value === 'true';
    setStatus(newStatus);
    };
   console.log(status)
    const handlesubmit= async(e)=>{
        try{
            const response = await axios.patch(`${import.meta.env.VITE_BASE_URL}/admin/users/${userid}/active`,{
                "isActive":status
            },{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            const msg=response.data.message
        toast.success(msg);
        console.log(response)
        }catch(err){
            console.log("error in deactivating user",err)
        }
    }
  return (
    <div className='bg-[#79bfbf]   m-4 flex flex-col w-sm p-4 rounded-xl shadow-xl/30'>
        <div className='flex  gap-5'>
            <div className='flex flex-col'>
                <span className='text-xl'>Join Date</span>
                <input
                value={user.JoinDate}
                className='bg-white p-2 rounded-sm w-full mt-2'
                 type="text" />
            </div>
            <div className='flex flex-col'>
                <span className='text-xl'>Mobile</span>
                <input 
                value={user.Mobile}
                 className='bg-white p-2 rounded-sm w-full mt-2'
                 type="text" />
            </div>

        </div>
        <div className='flex  gap-5 mt-4'>
            <div className='flex flex-col'>
                <span className='text-xl'>Wallet</span>
                <input
                value={user.Wallet}
                className='bg-white p-2 rounded-sm w-full mt-2'
                 type="text" />
            </div>
            <div className='flex flex-col'>
                <span className='text-xl'>Password</span>
                <input 
                readOnly
                 className='bg-white p-2 rounded-sm w-full mt-2'
                 type="text" />
            </div>
        </div>
        <div className='flex  gap-35 mt-4'>
            <div className='flex flex-col'>
                <span className='text-xl'>Active</span>
                <input
                 type="radio"
                 name="userStatus"
                 value="true"
                 checked={status === true}
                 onChange={handleStatusChange}
                 />
            </div>
            <div className='flex flex-col'>
                <span className='text-xl'>Deactive</span>
                <input 
                className='bg-white mt-2'
                type="radio"
                name="userStatus"
                value="false"
                checked={status === false}
                onChange={handleStatusChange}
                />
            </div>
        </div>
        <button 
        onClick={handlesubmit}
        className='w-full bg-[#009494] p-2 rounded-2xl mt-4 font-semibold text-white text-2xl cursor-pointer'>Submit</button>
        <ToastContainer />
    </div>
  )
}

export default ViewUserDetail