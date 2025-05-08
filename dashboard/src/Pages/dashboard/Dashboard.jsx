import React from 'react'
import InfoCard from '../../components/InfoCard'
import { FaGoogleWallet } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdCash } from "react-icons/io";
function Dashboard() {
  return ( 
    <div className='flex flex-wrap justify-center items-center w-full h-[calc(100vh-5rem)] overflow-y-scroll'>
        <InfoCard img={FaUser} data="1" label="All Members" />
        <InfoCard img={FaGoogleWallet} data="1" label="Wallet Balance"/>
        <InfoCard img={IoMdCash} data="0" label="Today's Gateway Recharge"/>
        <InfoCard img={IoMdCash} data="0" label="Total Gateway Recharge"/>
        <InfoCard img={IoMdCash} data="20,351" label="Total Withdrawal Gateway balance"/>
        <InfoCard img={IoMdCash} data="-20" label="Avilable Gateway balance"/>
    </div>
  )
}

export default Dashboard