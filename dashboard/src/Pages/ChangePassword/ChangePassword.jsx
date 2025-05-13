import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function ChangePassword() {
    const [oldPassword, setoldPassword] = useState("")
    const [newPassword, setnewPassword] = useState("")

    const submithandler= async(e)=>{
      e.preventDefault()
        try{
          const response= await axios.post(`${import.meta.env.VITE_BASE_URL}/admin/update-password`,{
            oldPassword,
            newPassword
          }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      toast.success("Password changed successfully!");
       setoldPassword("");
       setnewPassword("");
       console.log("change Password response",response.data)
        }catch(error){
          console.log("error while changing password",error)
        }
    }
  return (
    <div className='bg-[#79bfbf]   m-4 flex flex-col w-sm p-4 rounded-xl shadow-xl/30'>
        <div className='flex flex-col'>
            <span className='text-xl font-medium'>Enter Old Password</span>
            <input
            onChange={(e)=>{
                setoldPassword(e.target.value)
            }}
            value={oldPassword}
             className='bg-white p-2 rounded-sm w-full mt-2 outline-0' type="text" />
        </div>
        <div className='mt-2'>
            <span className='text-xl font-medium'>Enter New Password</span>
            <input 
            onChange={(e)=>{setnewPassword(e.target.value)}}
            value={newPassword}
            className='bg-white p-2 rounded-sm w-full mt-2 outline-0' type="text" />
        </div>
        <button 
        onClick={submithandler}
        className='w-full bg-[#009494] p-2 rounded-2xl mt-4 font-semibold text-white text-2xl cursor-pointer'>Submit</button>
        <ToastContainer />
    </div>
    
  )
}

export default ChangePassword