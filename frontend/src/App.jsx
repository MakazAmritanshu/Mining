import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Account from './pages/Account/Account'
import Upgrade from './pages/Upgrade/Upgrade'
import Deposit from './pages/Deposit/Deposit'
import Withdraw from './pages/Withdraw/Withdraw'
import BankDetails from './components/Account/BankDetails'
import UsdDetails from './components/Account/UsdDetails'
import DepositHistory from './pages/Deposit/DepositHistory'
import WithdrawHistory from './pages/Withdraw/WithdrawHistory'
import Support from './pages/CustomerSupport/Support'
import Promotion from './pages/Promotion/Promotion'
import Footer from './components/Footer'
import Footer1 from './components/Footer1'

import UserRegister from './pages/UserAuth/userRegister'
import UserLogin from './pages/UserAuth/userLogin'
import UserProtectedWrapper from './pages/UserAuth/userProtected'
import UserContext from './Context/UserContext'
const App = () => {
  return (
    <div className="flex justify-center  min-h-screen bg-gray-400">
      {/* Mobile-width wrapper */}
      <div className="w-full max-w-[370px]  flex flex-col min-h-screen  shadow-lg bg-[#EAEBED]">
        <main className="flex-grow overflow-y-auto hide-scrollbar">
        <UserContext>
          <Routes>
            <Route path="/" element={<UserRegister />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/register" element={<UserRegister />} />
            <Route path="/home" element={<UserProtectedWrapper><Home /></UserProtectedWrapper>} />
            <Route path="/Account" element={<UserProtectedWrapper><Account /></UserProtectedWrapper>} />
            <Route path="/upgrade" element={<UserProtectedWrapper><Upgrade /></UserProtectedWrapper>} />
            <Route path="/deposit" element={<UserProtectedWrapper><Deposit /></UserProtectedWrapper>} />
            <Route path="/withdraw" element={<UserProtectedWrapper><Withdraw /></UserProtectedWrapper>} />
            <Route path="/bankdetails" element={<UserProtectedWrapper><BankDetails /></UserProtectedWrapper>} />
            <Route path="/usddetails" element={<UserProtectedWrapper>< UsdDetails /></UserProtectedWrapper>} />
            <Route path="/deposithistory" element={<UserProtectedWrapper>< DepositHistory /></UserProtectedWrapper>} />
            <Route path="/withdrawhistory" element={<UserProtectedWrapper>< WithdrawHistory /></UserProtectedWrapper>} />
            <Route path="/support" element={<UserProtectedWrapper>< Support /></UserProtectedWrapper>} />
          </Routes>
          </UserContext>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
