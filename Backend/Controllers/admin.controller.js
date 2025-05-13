const User = require("../Models/user.model");
const Transaction = require("../Models/transaction.model");
const Admin = require("../Models/admin.model");
const bcrypt = require("bcryptjs");

exports.createAdmin = async (req, res) => {
  try {
    const { mobileNumber, password } = req.body;
    if (!mobileNumber || !password) {
      return res
        .status(400)
        .json({ message: "Mobile number and password required" });
    }
    // Check if admin already exists
    const existing = await Admin.findOne({ mobileNumber });
    if (existing) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const admin = new Admin({
      mobileNumber,
      password,
    });
    await admin.save();
    res
      .status(201)
      .json({
        message: "Admin created",
        admin: { mobileNumber, name: admin.name },
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create admin", error: error.message });
  }
};

exports.adminLogin = async (req, res) => {
  try {
    const { mobileNumber, password } = req.body;
    if (!mobileNumber || !password) {
      return res
        .status(400)
        .json({ message: "Please provide mobile Number and passsword" });
    }
    const admin = await Admin.findOne({ mobileNumber }).select("+password");

    if (!admin) {
      return res.status(404).json({ message: "Admin Not Found" });
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const accessToken = await admin.generateAccessToken();
    const refreshToken = await admin.generateRefreshToken();

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false, // Use true in production (requires HTTPS)
      sameSite: "lax",
    });

    res.status(200).json({
      message: "Login Successfully",
      accessToken: accessToken,
    });
  } catch (error) {
    console.log("The error in admin login", error?.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.updatePassword = async (req, res) => {
  const adminId = req.user.id;
  console.log("The admin Id is", adminId);
  const { oldPassword, newPassword } = req.body;

  const admin = await Admin.findById(adminId).select("+password");
  if (!admin) return res.status(404).json({ message: "Admin not found" });

  const isMatch = await admin.comparePassword(oldPassword);
  if (!isMatch)
    return res.status(400).json({ message: "Current password is incorrect" });

  admin.password = newPassword;
  await admin.save();

  res.json({ message: "Password changed successfully" });
};

// Get all users with count and details (excluding password)
module.exports.getUserList = async (req, res) => {
  try {
    const users = await User.find({}, "-password");
    const count = await User.countDocuments();
    res.status(200).json({ count, users });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch UserList", error: error.message });
  }
};

// Get single user details (excluding password)
module.exports.getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId, "-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch user details", error: error.message });
  }
};

// Update user info (name, mobile, wallet, etc.) and/or password and/or active status
module.exports.updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const updateData = { ...req.body };

    // If password is being updated, hash it
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    const user = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
      select: "-password",
    });
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update user", error: error.message });
  }
};

//setUserActive Status

module.exports.setUserActiveStatus = async (req, res) => {
  try {
    const { userId } = req.params;
    const { isActive } = req.body;
    if (typeof isActive !== "boolean") {
      return res.status(400).json({ message: "isActive must be boolean" });
    }
    const user = await User.findByIdAndUpdate(
      userId,
      { isActive },
      { new: true, select: "-password" }
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({
      message: `User ${isActive ? "activated" : "deactivated"} successfully`,
      user,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update user status", error: error.message });
  }
};

module.exports.getWithdrawHistory = async (req, res) => {
  try {
    const withdraws = await Transaction.find({ type: "withdrawal" })
      .populate("user", "mobileNumber,name")
      .sort({ createdAt: -1 })
      .limit(10);
    res.status(200).json(withdraws);
  } catch (error) {
    res.status(500).josn({
      message: "Failed to fetch the withdraw History",
      error: error.message,
    });
  }
};

// Get latest deposit history (sorted by newest first)
module.exports.getDepositHistory = async (req, res) => {
  try {
    const deposits = await Transaction.find({ type: "deposit" })
      .populate("user", "mobileNumber name")
      .sort({ createdAt: -1 })
      .limit(10);
    res.status(200).json(deposits);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch deposit history",
      error: error.message,
    });
  }
};

// module.exports.adminTransferFunds = async (req, res) => {
//   try {
//     const { userId } = req.params;

//     const { amount, note } = req.body; // amount can be positive (add) or negative (deduct)

//     if (typeof amount !== "number" || isNaN(amount) || amount === 0) {
//       return res
//         .status(400)
//         .json({ message: "Amount must be a non-zero number" });
//     }

//     const user = await User.findById(userId);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // Check for negative balance if deducting
//     if (amount < 0 && user.balance + amount < 0) {
//       return res.status(400).json({ message: "Insufficient user balance" });
//     }

//     // Update balance
//     user.balance += amount;
//     await user.save();

//     const orderNumber = `ADMIN-${Date.now()}-${Math.floor(
//       Math.random() * 10000
//     )}`;
//     const transactionId = `ADMIN${Date.now()}${Math.floor(
//       Math.random() * 10000
//     )}`;

//     await Transaction.create({
//       user: user._id,
//       type: amount > 0 ? "deposit" : "withdrawal",
//       amount: Math.abs(amount),
//       status: "completed",
//       method: "other",
//       adminNote: note || "",
//       balanceBefore: user.balance - amount,
//       balanceAfter: user.balance,
//       orderNumber,
//       transactionId,
//     });

//     res.status(200).json({
//       message: `Funds ${
//         (amount > 0 ? "added to" : "deducted from", userId)
//       } user successfully`,
//       balance: user.balance,
//     });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to transfer funds", error: error.message });
//   }
// };
module.exports.adminTransferFunds = async (req, res) => {
  try {
    const { userId } = req.params;
    const { amount, note, joinDate, confirmAmount } = req.body;

    if(amount!=confirmAmount){
      return res.status(400).json({message:'Confirm amount does not match with the amount'})
    }



  if (typeof amount !== "number" || isNaN(amount) || amount === 0) {
    return res
      .status(400)
      .json({ message: "Amount must be a non-zero number" });
  }

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: "User not found" });

    // Check for negative balance if deducting
    if (amount < 0 && user.balance + amount < 0) {
      return res.status(400).json({ message: "Insufficient user balance" });
    }

    // Update balance
    user.balance += amount;
    await user.save();

    const orderNumber = `ADMIN-${Date.now()}-${Math.floor(
      Math.random() * 10000
    )}`;
    const transactionId = `ADMIN${Date.now()}${Math.floor(
      Math.random() * 10000
    )}`;

    // Prepare transaction data
    const transactionData = {
      user: user._id,
      type: amount > 0 ? "deposit" : "withdrawal",
      amount: Math.abs(amount),
      status: "completed",
      method: "other",
      adminNote: note || "",
      balanceBefore: user.balance - amount,
      balanceAfter: user.balance,
      orderNumber,
      transactionId,
    };
    // if (mobileNumber) transactionData.mobileNumber = mobileNumber;
    // if (createdAt) transactionData.createdAt = createdAt;

    await Transaction.create(transactionData);

    res.status(200).json({
      message: `Funds ${amount > 0 ? "added to" : "deducted from"} user ${userId} successfully`,
      balance: user.balance,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to transfer funds", error: error.message });
  }
};
module.exports.getAdminDashboardStats = async (req, res) => {
  try {
    // Total users
    const totalUsers = await User.countDocuments();

    // Total deposit amount
    const depositAgg = await Transaction.aggregate([
      { $match: { type: "deposit", status: "completed" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);
    const totalDeposit = depositAgg[0]?.total || 0;

    // Total withdrawal amount
    const withdrawAgg = await Transaction.aggregate([
      { $match: { type: "withdrawal", status: "completed" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);
    const totalWithdraw = withdrawAgg[0]?.total || 0;

    // Total wallet balance  sum of all user balance
    const walletAgg = await User.aggregate([
      { $group: { _id: null, total: { $sum: "$balance" } } },
    ]);
    const totalWalletBalance = walletAgg[0]?.total || 0;

    res.status(200).json({
      totalUsers,
      totalDeposit,
      totalWithdraw,
      totalWalletBalance,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch dashboard stats",
      error: error.message,
    });
  }
};
exports.adminLogout = async (req, res) => {
  try {
    // Clear the refresh token cookie
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true, // Use true in production (requires HTTPS)
      sameSite: "strict",
    });

    // Send a success response
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error during admin logout:", error.message);
    res.status(500).json({ message: "Failed to log out" });
  }
};
