import React, { useContext, useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { BsPlusSquareDotted } from "react-icons/bs";
import Logout from "../Logout";
import { useNavigate } from "react-router-dom";
import { BankDataContext } from "../../Context/BankContext";
import axios from "axios";

const AddAccount = () => {
  const { bank, setBank } = useContext(BankDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/bank/getAllBank`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response?.data?.data?.length > 0) {
          setBank(response.data.data[0]);
        } else {
          console.log("No bank details found");
        }
      } catch (error) {
        console.log(
          "The error is",
          error?.response?.data?.message || error.message
        );
      }
    };

    fetchAccountDetails();
  }, []);

  return (
    <div className="flex flex-col">
      {/* Add Bank Button */}
      <div className="mt-4 flex justify-center">
        <BsPlusSquareDotted
          className="w-15 h-15"
          onClick={() => navigate("/profile/bankdetails")}
        />
      </div>

      {/* Add Bank Account Section */}
      <div className="flex flex-col justify-center items-center">
        <span>Add a Bank Account Number</span>
        <p className="text-sm text-red-500 font-mono p-2 text-center">
          Need to add beneficiary information to be able to withdraw money
        </p>
      </div>

      {/* Display Single Bank Details */}
      <div className="bg-white flex flex-col p-4 rounded-3xl shadow-lg">
        <div
          className="flex items-center justify-between rounded-2xl px-4 py-4 border-b hover:bg-teal-500 hover:text-black transition duration-200"
          style={{ borderColor: "#e1e1e131" }}
        >
          <div className="flex items-center space-x-4">
            <span className="text-xl font-semibold">
              {bank?.bankName || "No Bank Name"}
            </span>
            <span className="text-xl">
              {bank?.accountNumber || "No Account Number"}
            </span>
          </div>
          <FaChevronRight className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default AddAccount;
