import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../../Context/UserContext";
import { Eye, EyeOff } from "lucide-react";
import {toast}  from 'react-toastify'

const UserLogin = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const[showPassword,setShowPassword]=useState(false)
 
  const [agreed, setAgreed] = useState(false);

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  useEffect(() => {
    const savedMobileNumber = sessionStorage.getItem("mobileNumber");
    const savedPassword = sessionStorage.getItem("password");
    if (savedMobileNumber) setMobileNumber(savedMobileNumber);
    if (savedPassword) setPassword(savedPassword);
  }, []);

  const handleMobileNumberChange = (e) => {
    const { value } = e.target;
    setMobileNumber(value);
    sessionStorage.setItem("mobileNumber", value);
  };
  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    sessionStorage.setItem("password", value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    //Data that is send through axios from frontend to backend
    const userLogin = {
      mobileNumber: mobileNumber,
      password: password,
    };
    console.log("UserLogin", userLogin);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        userLogin
      );
      const data = response.data;
      console.log("Response", data);
      localStorage.setItem("token", data.token);
      setUser(data.user);
      if(response.status==200){
        toast.success("Login Successfully")
        navigate("/home");

      }
 
    } catch (error) {
      console.log(`The error is `, error);
    }

  
  };

  return (
    <div className="min-h-screen bg-grey-700 px-6 py-8 flex flex-col justify-center">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
        Welcome Back
      </h1>
      <p className="text-center text-gray-500 mb-6 text-sm">
        Please log in to continue!
      </p>

      <form onSubmit={submitHandler} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-800 -ml-35.5">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            placeholder="Enter your mobile number"
            required
            value={mobileNumber}
            onChange={handleMobileNumberChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-800 -ml-45.5">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              placeholder="Enter your password"
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
         
        </div>

        <div className="flex items-start space-x-3">
          <input
            id="terms"
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className="w-5 h-5 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500"
          />
          <label htmlFor="terms" className="text-sm text-gray-700">
            Agreed to{" "}
            <a href="#" className="underline text-gray-900">
              terms of use and privacy statements
            </a>
          </label>
        </div>

        <button
          type="submit"
          disabled={!agreed}
          className={`w-full mt-45 py-3 rounded-lg text-white text-sm font-medium ${
            agreed
              ? "bg-green-300 hover:bg-green-400"
              : "bg-green-200 opacity-60 cursor-not-allowed"
          }`}
        >
          Log In
        </button>
      </form>

      <p className="text-center text-gray-500 mt-4 text-sm">
        Don't have an account?{" "}
        <Link to="/register" className="text-teal-500 underline">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default UserLogin;
