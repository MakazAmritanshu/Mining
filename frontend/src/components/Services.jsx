import React from 'react'
import { FaGift, FaLock, FaUserCircle, FaCube, FaCog, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const menuItems = [
  { icon: <FaGift className="text-teal-500" />, label: 'Gifts',navigateto:'/support' },
  { icon: <FaLock className="text-teal-500" />, label: 'Change Password',navigateto:'/support' },
  { icon: <FaUserCircle className="text-teal-500" />, label: 'Customer Support Online 24/7',navigateto:'/support' },
  { icon: <FaCube className="text-teal-500" />, label: 'About',navigateto:'/support' },
  { icon: <FaCog className="text-teal-500" />, label: 'Settings',navigateto:'/support' },
];

const Services = () => {
  const navigate=useNavigate()
  return (
    <div>
        <div className=" bg-white flex flex-col items-center justify-center p-4 rounded-3xl  mt-4 shadow-lg">
        <div className=" rounded-2xl p-2 w-full max-w-md mx-auto ">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between rounded-2xl  px-4 py-4 border-b  hover:bg-teal-500 hover:text-black transition duration-200"
          style={{ borderColor: '#e1e1e131' }}
          onClick={()=>navigate(item.navigateto)}
        >
          <div className="flex items-center space-x-4 ">
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm sm:text-base">{item.label}</span>
          </div>
          <FaChevronRight className="text-gray-400" />
        </div>
      ))}
    </div>
        </div>
    </div>
  )
}

export default Services