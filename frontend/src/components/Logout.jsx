import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Correct import
import { FaPowerOff } from 'react-icons/fa';
import axios from 'axios';

const Logout = ({ title }) => {
  const navigate = useNavigate();

  const isSubmit = ['submit', 'withdrawl'].includes(title.toLowerCase());

  const logoutHandler = async () => {

    //get a token from localStorage
    const token = localStorage.getItem('token')
  

    axios.get(`${import.meta.env.VITE_API_URL}/users/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
     
  
        if (response.status === 200) {
            localStorage.removeItem('token')
            navigate('/login')
        }
    })

    
  };

  return (
    <div className='mt-4 mb-4'>
      <button
        onClick={logoutHandler} 
        className={`w-full max-w-sm mx-auto flex items-center justify-center space-x-2 
                   border border-teal-500 font-semibold py-2 px-6 rounded-full 
                   transition duration-200
                   ${isSubmit ? 'bg-teal-500 text-black' : 'text-teal-500 hover:bg-teal-500 hover:text-black'}`}
      >
        {!isSubmit && <FaPowerOff />}
        <span>{title}</span>
      </button>
    </div>
  );
};

export default Logout;
