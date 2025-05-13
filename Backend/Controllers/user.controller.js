const User = require("../models/user.model");
const { validationResult } = require("express-validator");

//User Registeration
// module.exports.registerUser = async (req, res, next) => {
//   // Validate request body
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   const { mobileNumber, otp, password, referral } = req.body;

//   try {
//     // 1. Find the OTP placeholder user by mobile number
//     const existingUser = await User.findOne({ mobileNumber });
//     if (!existingUser) {
//       return res
//         .status(400)
//         .json({ message: "User not found. Please request an OTP first." });
//     }

//     // Step 2: Block re-registration
// if (existingUser.isOtpVerified && existingUser.password) {
//   return res.status(409).json({ message: "User already registered. Please login." });
// }

//     // 3. Verify the provided OTP against the stored hash
//     const { success, message } = existingUser.verifyOtp(otp);
//     if (!success) {
//       return res.status(400).json({ message });
//     }

//     // Clear OTP fields now that it's verified
//     existingUser.isOtpVerified = true;
//     existingUser.otpHash = undefined;
//     // existingUser.otpExpiresAt = undefined;

//     const referral=User.generateReferralCode();

//     // 3. Optionally validate referral code
//     if (!existingUser.referralCode) {
//       existingUser.generateReferralCode();
//     }
//     if (referral) {
//       const referringUser = await User.findOne({ referralCode: referral });
//       if (!referringUser) {
//         return res.status(400).json({ message: "Invalid referral code" });
//       }
//       existingUser.referredBy = referringUser.referralCode;
//     }

//     // 4. Hash and set the password
//     existingUser.password = await User.hashPassword(password);

//     // 5. Save the updated user record
//     await existingUser.save();

//     // 6. Generate JWT token
//     const token = existingUser.generateAuthToken();

//     // 8. Send response
//     return res.status(201).json({
//       message: "User registered successfully",
//       token,
//     });
//   } catch (error) {
//     console.error("Error registering user:", error);
//     next(error); // forward to global error handler
//   }
// };
module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { mobileNumber, otp, password, referral } = req.body;

  try {
    const existingUser = await User.findOne({ mobileNumber });
    if (!existingUser) {
      return res
        .status(400)
        .json({ message: "User not found. Please request an OTP first." });
    }

    if (existingUser.isOtpVerified && existingUser.password) {
      return res
        .status(409)
        .json({ message: "User already registered. Please login." });
    }

    const { success, message } = existingUser.verifyOtp(otp);
    if (!success) {
      return res.status(400).json({ message });
    }

    existingUser.isOtpVerified = true;
    existingUser.otpHash = undefined;

    //Always generates  a referral code for the new User
    if (!existingUser.referralCode) {
      existingUser.referralCode = User.generateReferralCode();
    }

    //Referral required for registration purpose
    if (!referral) {
      return res
        .status(400)
        .json({ messsage: "Referral code is required for resgistration " });
    }
    const referringUser = await User.findOne({ referralCode: referral });
    existingUser.referredBy = referringUser.referralCode;

    existingUser.password = await User.hashPassword(password);

    await existingUser.save();

    // Build referral tree for uplines
    await User.buildReferralTreeForNewUser(existingUser);

    const accessToken = existingUser.generateAccessToken();
    const refreshToken = existingUser.generateRefreshToken();

    // In registerUser, change this:
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false, // <--- CHANGE TO false FOR LOCALHOST
      sameSite: "Lax", // <--- MATCH loginUser
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      message: "User registered successfully",
      accessToken,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    next(error);
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
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    // Set HTTP-only cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false, // OK for localhost
      sameSite: "Lax", // or "None" with secure: true if on HTTPS
      maxAge: 7 * 24 * 60 * 60 * 1000, // optional: 7 days
    });

    // Respond
    return res.status(200).json({ accessToken: accessToken });
  } catch (error) {
    console.error("Error logging in user:", error);
    next(error);
  }
};

// Get User Profile

module.exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log("The user id is", userId);
    //select is used to selct only multiple fields from the user
    const user = await User.findById(userId).select(
      "balance superCoin miningRate withdrawableAmount activeAccounts"
    );
    console.log("The user details", user);

    return res.status(200).json(req.user);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//Add a activeAccounts

module.exports.addBankAccount = async (req, res) => {
  try {
    const { bankName, accountNumber, ifsc, upId } = req.body;
    const userId = req.user._id;
    const user = await User.findById(userId);

    const existingUser = await User.findOne({
      "active.accountNumber": accountNumber,
    });
    return res.status(401).json({ message: "BankAccount already exist" });

    if (user.bankName && user.accountNumber) {
      return res.status(400).json({ message: "User already present" });
    }
    user.activeAccounts = {
      bankName,
      accountNumber,
      ifsc,
      upId,
    };
    await user.save();
    res.status(200).json({ message: "User Bank account added Successfully" });
  } catch (error) {
    console.log("The bank is not added", error);
    return res.status(500).json({ message: "The bank is not added" });
  }
};

// Logout User

module.exports.logoutUser = async (req, res, next) => {
  res.clearCookie("refreshToken", { httpOnly: true, sameSite: "lax", secure: false, path: "/" });
  return res.status(200).json({ message: "Logged out" });
};