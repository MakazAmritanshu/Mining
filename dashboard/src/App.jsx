import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './Pages/Login/Login';
import MainLayout from './MainLayout';

import Dashboard from './Pages/dashboard/Dashboard';
import FundTransfer from './Pages/FundTransfer/FundTransfer';
import UserList from './Pages/UserList/UserList';
import WithdrawList from './Pages/WithdrawList/WithdrawList';
import DepositList from './Pages/DepositList/DepositList';
import Deposit from './Pages/Deposit/Deposit';
import Withdraw from './Pages/Withdraw/Withdraw';

function App() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/login" element={<Login />} />

      {/* Protected Routes under MainLayout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="admin/dashboard" element={<Dashboard />} />
        <Route path="admin/fundtransfer" element={<FundTransfer />} />
        <Route path="admin/userlist" element={<UserList />} />
        <Route path="admin/withdrawlist" element={<WithdrawList />} />
        <Route path="admin/depositlist" element={<DepositList />} />
        <Route path="admin/deposit" element={<Deposit />} />
        <Route path="admin/withdraw" element={<Withdraw />} />
      </Route>
    </Routes>
  );
}

export default App;
