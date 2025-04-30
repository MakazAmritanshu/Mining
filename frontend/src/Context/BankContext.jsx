import React, { createContext, useState } from 'react'

export const BankDataContext = createContext();

const BankContext = ({ children }) => {

    const [bank, setBank] = useState({
        bankName: '',
        accountNumber: ''
    });

    return (
        <BankDataContext.Provider value={{ bank, setBank }}>
            {children}
        </BankDataContext.Provider>
    );
}

export default BankContext;
