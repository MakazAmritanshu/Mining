import React from 'react'
import Btn from '../../components/Btn'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function FundTransfer() {
  const [userId, setUserId] = useState("")
  const [joinDate,setJoinDate] =useState("")
  const [amount, setAmount]= useState("")
  const [confirmAmount, setConfirmAmount]= useState("")
  const [type, setType]=useState("credit")
  const [note, setnote]= useState("")
  
  const submitHandler= async(e)=>{
    e.preventDefault()
    try{
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/admin/users/${userId}/transfer-funds`, {
        joinDate,
        amount:Number(amount),
        confirmAmount:Number(confirmAmount),
        note,
        type
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      toast.success("fund transferred successfully!");
      setUserId("")
      setJoinDate("")
      setAmount("")
      setConfirmAmount("")
      setnote("")
      console.log("response",response)
    }catch(error){
      console.error("Error in transforing fund:", error);
    }
  }
  return (
    <div className='w-full h-[calc(100vh-5rem)] overflow-auto'>
      <div className='bg-[#79bfbf]   m-4 flex flex-col w-sm p-4 rounded-xl shadow-xl/30 '>
      <div className='flex flex-col gap-2 mt-1'>
        <span className='text-md font-medium'> User Id</span>
        <input 
        onChange={(e)=> setUserId(e.target.value)}
        value={userId}
         type="text" className='bg-white w-full p-2 rounded-md outline-0'/>
      </div>
      <div className='flex flex-col gap-2 mt-2'>
        <span className='text-md font-medium'>Join Date</span>
        <input
        onChange={(e)=>{ setJoinDate(e.target.value)}}
        value={joinDate}
         type="date" className='bg-white w-full p-2 rounded-md outline-0'/>
      </div>
      <div className='flex flex-col gap-2 mt-2'>
        <span className='text-md font-medium'>Transfer Amount</span>
        <input 
        onChange={(e)=>{setAmount(e.target.value)}}
        value={amount}
        type="number" className='bg-white w-full p-2 rounded-md outline-0'/>
      </div>
      <div className='flex flex-col gap-2 mt-2'>
        <span className='text-md font-medium'>Confirm Amount</span>
        <input 
        onChange={(e)=>{setConfirmAmount(e.target.value)}}
        value={confirmAmount}
        type="number" className='bg-white w-full p-2 rounded-md outline-0'/>
      </div>
      <div className='flex flex-col gap-2 mt-2'>
        <span className='text-md font-medium'>Remark</span>
        <input
        onChange={(e)=>{setnote(e.target.value)}}
        value={note}
         type="text" className='bg-white w-full p-2 rounded-md outline-0'/>
      </div>
      <button
      onClick={submitHandler}
       className=' w-full h-10 rounded-xl text-2xl font-medium bg-[#009494] mt-4 text-white cursor-pointer' >Fund Transfer</button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default FundTransfer