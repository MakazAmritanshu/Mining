import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
const MainLayout = () => {
  return (
    <div className='flex w-full h-screen'>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className='w-1/5 bg-black h-screen overflow-auto'>
        <Navbar />
      </div>
      <div className='w-4/5 bg-[#EAEBED] h-screen'>
        <div className='bg-[#009494] h-20 w-full flex justify-center items-center'>
          <Header />
        </div>
        <main className='h-[calc(100%-5rem)] overflow-auto'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
