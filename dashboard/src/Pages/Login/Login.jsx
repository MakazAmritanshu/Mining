import React from 'react'

function Login() {
    // text-[#009494]
  return (
    <div className='flex justify-center items-center  bg-[#142929]  w-full h-screen'>
        <div className='w-sm  bg-[#009494] rounded-2xl p-4'>
            <h1 className='text-3xl font-semibold text-center'>Login</h1>
            <div className='flex flex-col gap-4 mt-4'>
                <span className='text-xl font-medium'>Username</span>
                <input type="text" className='bg-white w-full h-10 rounded-2xl'/>
            </div>
            <div className='flex flex-col gap-4 mt-4'>
                <span className='text-xl font-medium'>Password</span>
                <input type="password" className='bg-white w-full h-10 rounded-2xl'/>
            </div>
            <button className='w-full h-10 rounded-xl text-2xl font-medium bg-[#142929] mt-4 mb-4 text-white'>Login</button>
        </div>
    </div>
  )
}

export default Login