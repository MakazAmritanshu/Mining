import React from 'react'
import InfoCard from '../../components/InfoCard'
import { FaGoogleWallet } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdCash } from "react-icons/io";
import { useState,useEffect } from 'react';
import axios from 'axios';
function Dashboard() {
  const [data, setdata] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/admin/dashboard-stats`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        console.log("response",response)
        const { data } = response;
        console.log("data dashboard",data)
        setdata(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return ( 
    <div className='flex flex-wrap justify-center  w-full h-[calc(100vh-5rem)] overflow-auto shadow-xl/30'>
        <InfoCard img={FaUser} data={data.totalUsers} label="All Members" />
        <InfoCard img={FaGoogleWallet} data={data.totalWalletBalance} label="Wallet Balance"/>
        <InfoCard img={IoMdCash} data={data.totalDeposit} label="Total Deposit"/>
        <InfoCard img={IoMdCash} data={data.totalWithdraw} label="Total Withdrawal"/>
        {/* <InfoCard img={IoMdCash} data="20,351" label="Total Withdrawal Gateway balance"/> */}
        {/* <InfoCard img={IoMdCash} data="-20" label="Avilable Gateway balance"/> */}
    </div>
  )
}

export default Dashboard