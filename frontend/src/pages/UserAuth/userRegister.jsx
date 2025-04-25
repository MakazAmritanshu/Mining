import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserDataContext } from "../../Context/UserContext";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

const UserRegister = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [referral, setReferral] = useState("");

  const [formValid, setFormValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user, setUser } = useContext(UserDataContext); // Global user context
  const navigate = useNavigate();
  const location = useLocation();

  // // Automatically populate referral code from query string
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const referralCode = queryParams.get("referral");
    if (referralCode) {
      setReferral(referralCode); // Populate referral code if present in the URL
    }
  }, [location]);

  // Validate form fields
  useEffect(() => {
    const isValid =
      mobile.trim() !== "" &&
      otp.trim().length === 6 &&
      password.trim() !== "" &&
      password === confirmPassword;

    setFormValid(isValid); // Update the formValid state
  }, [mobile, otp, password, confirmPassword]);

  //Load saved values from Local Storage on Component mount very first time
  useEffect(() => {
    const savedMobile = sessionStorage.getItem("mobile");
    const savedOtp = sessionStorage.getItem("otp");
    const savedReferral = sessionStorage.getItem("referral");
    const savedPassword = sessionStorage.getItem("password");
    const savedConfirmPassword = sessionStorage.getItem("confirmPassword");

    if (savedMobile) setMobile(savedMobile);
    if (savedOtp) setOtp(savedOtp);
    if (savedReferral) setReferral(savedReferral);
    if (savedPassword) setPassword(savedPassword);
    if (savedConfirmPassword) setConfirmPassword(savedConfirmPassword);
  }, []);

  //Function to send OTP

  const handleOtpSend = async () => {
    if (loading) return;

    if (!/^\d{10}$/.test(mobile)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      setLoading(true);

      const payload = { mobileNumber: mobile };
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/Otp/send-otp`,
        payload
      );

      console.log("OTP sent successfully", response.data);
      toast.success("OTP sent successfully!");
    } catch (error) {
      console.error("Error", error.response?.data || error.message);
      toast.error("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  //Function to handle mobile number change
  const onHandleMobile = (e) => {
    const { value } = e.target;
    setMobile(value);
    sessionStorage.setItem("mobile", value);
  };

  //Function to Handle Otp Change

  const onHandleOtp = (e) => {
    const { value } = e.target;
    setOtp(value);
    sessionStorage.setItem("otp", value);
  };

  //Function to handle referral code Change

  const onHandleReferral = (e) => {
    const { value } = e.target;
    setReferral(value);
    sessionStorage.setItem("referral", value);
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    sessionStorage.setItem("password", value);
  };
  const handleConfirmPassword = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
    sessionStorage.setItem("confirmPassword", value);
  };

  const formHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      mobileNumber: mobile,
      otp: otp.toString(),
      password: password,
      confirmPassword: confirmPassword,
      referral: referral,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser
      );

      if (response.status === 201) {
        const data = response.data;
        localStorage.setItem("token", data.token); // Store the token in Local Stoarge

        // Update the global context with the registered user data
        setUser(data.user);

        // Navigate to the home page after successful registration
        navigate("/home");

        //  Clear sessionStorage and form fields only on success
        sessionStorage.removeItem("mobile");
        sessionStorage.removeItem("otp");
        sessionStorage.removeItem("password");
        sessionStorage.removeItem("referral");
        sessionStorage.removeItem("confirmPassword");
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="min-h-screen bg-grey-700 px-6 py-8 flex flex-col justify-center mt-10">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-2 ">
        User Registration
      </h1>
      <p className="text-center text-gray-500 mt-2 mb-6 text-sm ">
        Please fill up the form to register your account!
      </p>

      <form onSubmit={formHandler} className="space-y-5 max-w-md mx-auto">
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-800 ">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="relative w-full max-w-md">
            <input
              type="number"
              required
              value={mobile}
              placeholder="Mobile Number"
              onChange={onHandleMobile}
              className="w-full pr-28 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
            />
            <button
              type="button"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 px-3 py-1 bg-teal-500 text-white text-xs rounded-md hover:bg-teal-600"
              onClick={handleOtpSend}
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-800 ">
            OTP <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            required
            value={otp}
            placeholder="Enter OTP"
            onChange={onHandleOtp}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-800 ">
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

        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-800 ">
            Confirm Password <span className="text-red-500">*</span>
          </label>

          <div className="relative w-full">
  <input
    type={showConfirmPassword ? "text" : "password"}
    required
    value={confirmPassword}
    onChange={handleConfirmPassword}
    placeholder="Confirm your password"
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm pr-10"
  />
  <button
    type="button"
    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
  >
    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
  </button>
</div>
          
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-800 ">
            Referral Code <span className="text-gray-500">(Optional)</span>
          </label>
          <input
            type="text"
            value={referral}
            placeholder="Enter referral code"
            onChange={onHandleReferral}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
          />
        </div>

        <button
          type="submit"
          className={`w-full mt-10 py-3 rounded-lg text-white text-sm font-medium ${
            formValid
              ? "bg-green-300 hover:bg-green-400"
              : "bg-green-200 opacity-60 cursor-not-allowed"
          }`}
          disabled={!formValid}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default UserRegister;
