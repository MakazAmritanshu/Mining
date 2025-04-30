import React, { useState, useEffect, useContext } from "react";
import { PiBankFill } from "react-icons/pi";
import { IoPersonSharp } from "react-icons/io5";
import { MdAccountBalanceWallet } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaKey } from "react-icons/fa6";
import { toast } from "react-toastify";
import axios from "axios";


const BankDetails = () => {


  const [customBank, setCustomBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [email, setEmail] = useState("");
  const [ifscCode, setIfscCode] = useState("");

  useEffect(() => {
    const storedValues = {
      bank: sessionStorage.getItem("customBank"),
      recipientName: sessionStorage.getItem("recipientName"),
      accountNumber: sessionStorage.getItem("accountNumber"),
      email: sessionStorage.getItem("email"),
      ifscCode: sessionStorage.getItem("ifscCode"),
    };

    if (storedValues.bank) setCustomBank(storedValues.bank);
    if (storedValues.recipientName)
      setRecipientName(storedValues.recipientName);
    if (storedValues.accountNumber)
      setAccountNumber(storedValues.accountNumber);
    if (storedValues.email) setEmail(storedValues.email);
    if (storedValues.ifscCode) setIfscCode(storedValues.ifscCode);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("customBank", customBank);
    sessionStorage.setItem("recipientName", recipientName);
    sessionStorage.setItem("accountNumber", accountNumber);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("ifscCode", ifscCode);
  }, [customBank, recipientName, accountNumber, email, ifscCode]);

  // Fetch bank name from IFSC
  useEffect(() => {
    const fetchBankName = async () => {
      try {
        const { data } = await axios.get(
          `https://ifsc.razorpay.com/${ifscCode}`
        );
        if (data.BANK) {
          setCustomBank(data.BANK);
         ;
        } else {
          setCustomBank("");
          toast.error("Bank not found for this IFSC");
        }
      } catch (error) {
        toast.error("Invalid IFSC Code");
      }
    };

    if (ifscCode.length === 11) {
      fetchBankName();
    }
  }, [ifscCode]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!customBank) {
      toast.error("Please enter a bank name");
      return;
    }
    if (!recipientName || !accountNumber || !email || !ifscCode) {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      const payload = {
        bankName: customBank,
        recipientName,
        accountNumber,
        email,
        ifscCode,
      };

      await axios.post(`${import.meta.env.VITE_BASE_URL}/bank/add`, payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      console.log("Token:", localStorage.getItem("token"));

      toast.success("Bank details saved successfully");

     


      // Clear sessionStorage
      sessionStorage.clear();

      // Reset form
      setCustomBank("");
      setRecipientName("");
      setAccountNumber("");
      setEmail("");
      setIfscCode("");
    } catch (error) {
      console.error("Error saving bank details:", error.response.data);
      toast.error("Failed to save bank details");
    }
  };

  return (
    <div className="mt-4">
      <form
        className="flex flex-col bg-white p-4 rounded-3xl mt-4 shadow-lg mx-4"
        onSubmit={handleSubmit}
      >
        {/* IFSC Code Input */}
        <div className="mt-4">
          <div className="flex gap-2 mb-2">
            <FaKey className="text-[#13B8A7] text-2xl" />
            <label className="text-sm font-semibold flex items-center">
              IFSC Code
            </label>
          </div>
          <input
            type="text"
            placeholder="Enter IFSC code (e.g., HDFC0000053)"
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value.toUpperCase())}
            className="w-full rounded-lg bg-[#13B8A7] p-3"
          />
        </div>

        {/* Bank Name Auto-filled */}
        <div className="mt-4">
          <div className="flex gap-2 mb-2">
            <PiBankFill className="text-[#13B8A7] text-2xl" />
            <label className="text-sm font-semibold flex items-center">
              Bank Name
            </label>
          </div>
          <input
            type="text"
            placeholder="Bank name will be auto-filled"
            value={customBank}
            disabled
            className="w-full rounded-lg bg-gray-300 p-3 text-black"
          />
        </div>

        {/* Recipient Name */}
        <div className="mt-4">
          <div className="flex gap-2 mb-2">
            <IoPersonSharp className="text-[#13B8A7] text-2xl" />
            <label className="text-sm font-semibold flex items-center">
              Full recipient's name
            </label>
          </div>
          <input
            type="text"
            placeholder="Please enter the recipient's name"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            className="w-full rounded-lg bg-[#13B8A7] p-3"
          />
        </div>

        {/* Account Number */}
        <div className="mt-4">
          <div className="flex gap-2 mb-2">
            <MdAccountBalanceWallet className="text-[#13B8A7] text-2xl" />
            <label className="text-sm font-semibold flex items-center">
              Bank account number
            </label>
          </div>
          <input
            type="text"
            placeholder="Please enter your account number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="w-full rounded-lg bg-[#13B8A7] p-3"
          />
        </div>

        {/* Email */}
        <div className="mt-4">
          <div className="flex gap-2 mb-2">
            <IoIosMail className="text-[#13B8A7] text-2xl" />
            <label className="text-sm font-semibold flex items-center">
              Mail
            </label>
          </div>
          <input
            type="email"
            placeholder="Please enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg bg-[#13B8A7] p-3"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-[#13B8A7] text-white font-semibold py-2 px-4 rounded-lg"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default BankDetails;
