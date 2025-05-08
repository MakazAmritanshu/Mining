import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

import Profile from "./pages/Profile/Profile";
import Upgrade from "./pages/Upgrade/Upgrade";
import Deposit from "./pages/Deposit/Deposit";
import Withdraw from "./pages/Withdraw/Withdraw";
import BankDetails from "./components/Account/BankDetails";
import UsdDetails from "./components/Account/UsdDetails";
import DepositHistory from "./pages/Deposit/DepositHistory";
import WithdrawHistory from "./pages/Withdraw/WithdrawHistory";
import Support from "./pages/CustomerSupport/Support";
import Promotion from "./pages/Promotion/Promotion";
import Footer from "./components/Footer";
import Footer1 from "./components/Footer1";
import TeamList from "./pages/TeamList/TeamList"

import UserRegister from "./pages/UserAuth/userRegister";
import UserLogin from "./pages/UserAuth/userLogin";
import UserProtectedWrapper from "./pages/UserAuth/userProtected";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div className="flex justify-center  min-h-screen bg-gray-400">
      {/* Mobile-width wrapper */}
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
      {/* bg-[#EAEBED] */}
      <div className="w-full max-w-[370px]  flex flex-col min-h-screen  shadow-lg bg-[#EAEBED]">
        <main className="flex-grow overflow-y-auto hide-scrollbar">
          <Routes>
          <Route path="/" element={<UserLogin />} />
            <Route path="/register" element={<UserRegister />} />
            <Route path="/login" element={<UserLogin />} />
            <Route
              path="/home"
              element={
                <UserProtectedWrapper>
                  <Home />
                </UserProtectedWrapper>
              }
            />
            <Route
              path="/profile"
              element={
                <UserProtectedWrapper>
                  <Profile />
                </UserProtectedWrapper>
              }
            />

            <Route
              path="/upgrade"
              element={
                <UserProtectedWrapper>
                  <Upgrade />
                </UserProtectedWrapper>
              }
            />
            <Route
              path="/profile/deposit"
              element={
                <UserProtectedWrapper>
                  <Deposit />
                </UserProtectedWrapper>
              }
            />
            <Route
              path="/profile/withdraw"
              element={
                <UserProtectedWrapper>
                  <Withdraw />
                </UserProtectedWrapper>
              }
            />
            <Route
              path="/profile/bankdetails"
              element={
                <UserProtectedWrapper>
                  <BankDetails />{" "}
                </UserProtectedWrapper>
              }
            />
            <Route
              path="/profile/usddetails"
              element={
                <UserProtectedWrapper>
                  <UsdDetails />
                </UserProtectedWrapper>
              }
            />
            <Route
              path="/profile/deposithistory"
              element={
                <UserProtectedWrapper>
                  <DepositHistory />
                </UserProtectedWrapper>
              }
            />
            <Route
              path="/profile/withdrawhistory"
              element={
                <UserProtectedWrapper>
                  <WithdrawHistory />
                </UserProtectedWrapper>
              }
            />
            <Route
              path="/profile/support"
              element={
                <UserProtectedWrapper>
                  <Support />
                </UserProtectedWrapper>
              }
            />
            <Route
              path="/profile/myteam"
              element={
                <UserProtectedWrapper>
                  <TeamList />
                </UserProtectedWrapper>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
