import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function Login() {
    const navigate= useNavigate()
    const [mobileNumber, setMobileNumber]= useState('')
    const [password, setPassword]= useState('')

    const handleLogin=async(e)=>{
        e.preventDefault()
        const userLogin={
            mobileNumber:mobileNumber,
            password:password,
        }
        console.log("userLogin",userLogin)
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/admin/login`,userLogin)
        console.log("response",response)
        const {accessToken}=response.data
        localStorage.setItem("token",accessToken)
        
        if(response.status==200){
            toast.success("Login Successfully")
            navigate("/admin/dashboard");
        }
        else{
            toast.error("Invalid Credentials")
        }
    }
    // text-[#009494]
  return (
    <div className='flex justify-center items-center  bg-[#142929]  w-full h-screen'>
        <div className='w-sm  bg-[#009494] rounded-2xl p-4 shadow-xl/30 '>
            <h1 className='text-3xl font-semibold text-center'>Login</h1>
            <div className='flex flex-col gap-4 mt-4'>
                <span className='text-xl font-medium'>Mobile Number</span>
                <input type="text"
                onChange={(e)=>setMobileNumber(e.target.value)}
                value={mobileNumber}
                className='bg-white w-full h-10 rounded-2xl p-2 outline-0'/>
            </div>
            <div className='flex flex-col gap-4 mt-4'>
                <span className='text-xl font-medium'>Password</span>
                <input type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                 className='bg-white w-full h-10 rounded-2xl p-2 outline-0'/>
            </div>
            <button 
            onClick={handleLogin}
            className='w-full h-10 rounded-xl text-2xl font-medium bg-[#142929] mt-4 mb-4 text-white'>Login</button>
        </div>
    </div>
  )
}

export default Login