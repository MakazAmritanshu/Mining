const User = require("../models/user.model");
const { validationResult } = require("express-validator");

//User Registeration
module.exports.registerUser = async (req, res, next) => {
  // Validate request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { mobileNumber, otp, password, referral } = req.body;

  try {
    // 1. Find the OTP placeholder user by mobile number
    const existingUser = await User.findOne({ mobileNumber });
    if (!existingUser) {
      return res
        .status(400)
        .json({ message: "User not found. Please request an OTP first." });
    }

    // Step 2: Block re-registration
if (existingUser.isOtpVerified && existingUser.password) {
  return res.status(409).json({ message: "User already registered. Please login." });
}

    // 3. Verify the provided OTP against the stored hash
    const { success, message } = existingUser.verifyOtp(otp);
    if (!success) {
      return res.status(400).json({ message });
    }

    // Clear OTP fields now that it's verified
    existingUser.isOtpVerified = true;
    existingUser.otpHash = undefined;
    // existingUser.otpExpiresAt = undefined;

    // 3. Optionally validate referral code
    if (referral) {
      const referringUser = await User.findOne({ referralCode: referral });
      if (!referringUser) {
        return res.status(400).json({ message: "Invalid referral code" });
      }
      existingUser.referredBy = referringUser.referralCode;
    }

    // 4. Hash and set the password
    existingUser.password = await User.hashPassword(password);

    // 5. Save the updated user record
    await existingUser.save();

    // 6. Generate JWT token
    const token = existingUser.generateAuthToken();

    // 8. Send response
    return res.status(201).json({
      message: "User registered successfully",
      token,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    next(error); // forward to global error handler
  }
};


// User Login

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { mobileNumber, password } = req.body;

  try {
    // Find the user
    const user = await User.findOne({ mobileNumber });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid mobile number or password" });
    }

    // Verify password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Invalid mobile number or password" });
    }

    // Generate JWT token
    const token = user.generateAuthToken();

    // Set HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    // Respond
    return res.status(200).json({ token });
  } catch (error) {
    console.error("Error logging in user:", error);
    next(error);
  }
};

// ====================
// Get User Profile
// ====================
module.exports.getUserProfile = async (req, res) => {
  try {
    // req.user is set by auth middleware
    return res.status(200).json(req.user);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// ====================
// Logout User
// ====================
module.exports.logoutUser = async (req, res, next) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error during logout:", error);
    next(error);
  }
};
