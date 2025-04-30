import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DepositHistory = () => {
  const [depositHistory, setDepositHistory] = useState({
    loading: true,
    transactions: [],
  });

  useEffect(() => {
    const fetchDepositHistory = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/transactions/alldeposit`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
        setDepositHistory({
          loading: false,
          transactions: response?.data?.transactions || [],
        });
      } catch (error) {
        console.error('Error fetching deposits:', error);
        setDepositHistory({
          loading: false,
          transactions: [],
        });
      }
    };

    fetchDepositHistory();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-600';
      case 'pending':
        return 'text-yellow-600';
      case 'failed':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="p-4">
      {depositHistory.loading ? (
        <div>Loading...</div>
      ) : depositHistory.transactions.length === 0 ? (
        <div>No deposit history found.</div>
      ) : (
        depositHistory.transactions.map((txn, idx) => (
          <div
            key={idx}
            className="flex bg-white flex-col p-4 rounded-3xl mt-4 shadow-lg"
          >
            <div className="flex justify-between bg-[#13B8A7] rounded-2xl p-4 text-white">
              <div>Deposit</div>
              <span className={getStatusColor(txn.status)}>
                {txn.status.charAt(0).toUpperCase() + txn.status.slice(1)}
              </span>
            </div>
            <hr className="mt-4 text-[#13B8A7]" />
            <div className="flex justify-between p-2">
              <div>Amount</div>
              <span>₹{txn.amount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between p-2">
              <div>Method</div>
              <span>{txn.method.toUpperCase()}</span>
            </div>
            <div className="flex justify-between p-2">
              <div>Time</div>
              <span>{new Date(txn.createdAt).toLocaleString()}</span>
            </div>
            <div className="flex justify-between p-2">
              <div>Order number</div>
              <span>{txn.orderNumber}</span>
            </div>
            <div className="flex justify-between p-2">
              <div>UPI ID</div>
              <span>{txn.accountDetails?.upiId || 'N/A'}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DepositHistory;
