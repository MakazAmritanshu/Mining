import React, { useState } from "react";
import { createContext } from "react";

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    mobile: "",
    referral: "",
    balance: 0,
    miningRate: 0,
    withdrawableAmount: 0,
    superCoin:0,
    activeAccounts:"",

  });
  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
};
export default UserContext;
